"use client";

import { Button, TextArea } from "@common/components/ui";
import { parseAsBoolean, parseAsStringEnum, useQueryState } from "nuqs";

import { ClipboardButton } from "@common/components";
import { HiddenKeywords } from "./components/hidden-keywords";
import { HistoryDialog } from "@common/components/history-dialog";
import { IconArrowsExchange } from "@tabler/icons-react";
import { Translator } from "@common/utils/translator";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useHistoryStore } from "@common/store/history";
import { useRef } from "react";

const translator = new Translator();

type TranslateOption = "cyrillic" | "latin";

type TextStore = {
  text: string;
  setText: (text: string | ((prev: string) => string)) => void;
};
const useTextStore = create(
  persist<TextStore>(
    (set, get) => ({
      text: "",
      setText: (payload) =>
        set({
          text: typeof payload === "function" ? payload(get().text) : payload,
        }),
    }),
    {
      name: "translation-text",
    }
  )
);

export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { text, setText } = useTextStore();

  const [translate, setTranslate] = useQueryState<TranslateOption>(
    "translate",
    parseAsStringEnum<TranslateOption>(["cyrillic", "latin"]).withDefault(
      "cyrillic"
    )
  );
  const [autoApostrophe, setAutoApostrophe] = useQueryState(
    "auto_apostrophe",
    parseAsBoolean.withDefault(false)
  );

  const { history, addHistory, removeHistory, clearHistory } =
    useHistoryStore();

  const translated =
    translate === "cyrillic"
      ? translator.toCyrillic(text, autoApostrophe)
      : translator.toLatin(text);

  const writeText = (text: string) => {
    if (!textareaRef.current) {
      return;
    }

    const start = textareaRef.current?.selectionStart;
    const end = textareaRef.current?.selectionEnd;

    if (start === undefined || end === undefined) {
      setText((prev) => prev + text);
      return;
    }

    setText((prev) => prev.slice(0, start) + text + prev.slice(end));

    const textarea = textareaRef.current;
    textarea.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      textarea.setSelectionRange(start + text.length, start + text.length);
    });
  };

  return (
    <main className="flex-1">
      <div className="h-24 flex items-center justify-center">
        <h6 className="h-24 flex items-center justify-end font-bold text-slate-700 dark:text-slate-300 uppercase text-sm">
          {translate === "cyrillic" ? "Lotincha" : "Kirillcha"}
        </h6>
        <div className="flex-shrink-0 px-10 h-24 flex items-center">
          <Button
            variant="primary"
            onMouseDown={(e) => e.preventDefault()}
            onClick={async () => {
              await setTranslate((prev) =>
                prev === "cyrillic" ? "latin" : "cyrillic"
              );
              setText(translated);
            }}
          >
            <IconArrowsExchange />
          </Button>
        </div>
        <h6 className="h-24 flex items-center font-bold text-slate-700 dark:text-slate-300 uppercase text-sm">
          {translate === "cyrillic" ? "Kirillcha" : "Lotincha"}
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-10">
        <div className="flex-1">
          <div className="relative">
            <TextArea
              autoFocus
              ref={textareaRef}
              spellCheck={false}
              autoCorrect="off"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="w-full"
            />
            <div className="absolute left-5 right-5 bottom-5 flex items-center justify-end gap-2.5">
              <div className="flex-1 flex justify-end items-center flex-wrap">
                {translate === "cyrillic" ? (
                  <>
                    {["Oʻ", "oʻ", "Gʻ", "gʻ"].map((letter) => (
                      <Button
                        key={letter}
                        onClick={() => writeText(letter)}
                        className="text-xs lg:text-sm"
                      >
                        {letter}
                      </Button>
                    ))}
                  </>
                ) : (
                  <>
                    {["Ў", "ў", "Ғ", "ғ", "Қ", "қ", "Ҳ", "ҳ"].map((letter) => (
                      <Button
                        key={letter}
                        onClick={() => writeText(letter)}
                        className="text-xs lg:text-sm"
                      >
                        {letter}
                      </Button>
                    ))}
                  </>
                )}
              </div>
              <ClipboardButton text={text} />
            </div>
          </div>
          {translate === "cyrillic" && (
            <div className="py-2.5 flex items-center gap-2.5">
              <input
                checked={autoApostrophe}
                onChange={(e) => setAutoApostrophe(e.target.checked)}
                name="auto_translate_apostrophe"
                id="auto_translate_apostrophe"
                type="checkbox"
                className="checkbox checkbox-sm"
              />
              <label
                htmlFor="auto_translate_apostrophe"
                className="label text-slate-700 dark:text-slate-300"
              >
                <mark className="text-3xl font-bold align-middle mx-2 leading-[0.5] bg-primary dark:text-white">
                  &apos;
                </mark>{" "}
                belgisini avtomatik tarzda{" "}
                <mark className="text-3xl font-bold align-middle mx-2 leading-[0.5] bg-primary dark:text-white">
                  ʻ
                </mark>{" "}
                ga almashtirish
              </label>
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="relative">
            <TextArea
              readOnly
              spellCheck={false}
              autoCorrect="off"
              value={translated}
              className="w-full"
            />
            <ClipboardButton
              text={translated}
              className="absolute right-5 bottom-5"
              onCopied={(text) => addHistory(text)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2.5">
        <HistoryDialog
          history={history}
          onClear={clearHistory}
          onRemove={removeHistory}
          onSelect={setText}
        />
      </div>
      <HiddenKeywords />
    </main>
  );
}
