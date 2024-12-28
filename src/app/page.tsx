"use client";

import { Button, TextArea } from "@common/components/ui";
import {
  parseAsBoolean,
  parseAsString,
  parseAsStringEnum,
  useQueryState,
} from "nuqs";

import { ClipboardButton } from "@common/components";
import { HiddenKeywords } from "./components/hidden-keywords";
import { HistoryDialog } from "@common/components/history-dialog";
import { IconArrowsExchange } from "@tabler/icons-react";
import { Translator } from "@common/utils/translator";
import { defaultText } from "./config";

const translator = new Translator();

type TranslateOption = "cyrillic" | "latin";

export default function Home() {
  const [text, setText] = useQueryState(
    "text",
    parseAsString.withDefault(defaultText)
  );
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

  const translated =
    translate === "cyrillic"
      ? translator.toCyrillic(text, autoApostrophe)
      : translator.toLatin(text);

  return (
    <main className="flex-1">
      <div className="h-24 flex items-center justify-center">
        <h6 className="h-24 flex items-center justify-end font-bold text-slate-700 dark:text-slate-300 uppercase text-sm">
          {translate === "cyrillic" ? "Lotincha" : "Kirillcha"}
        </h6>
        <div className="flex-shrink-0 px-10 h-24 flex items-center">
          <Button
            variant="primary"
            onClick={() => {
              void setTranslate((prev) =>
                prev === "cyrillic" ? "latin" : "cyrillic"
              );
              void setText(translated);
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
              rows={15}
              spellCheck={false}
              autoCorrect="off"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full"
            />
            <ClipboardButton
              text={text}
              className="absolute right-5 bottom-5"
            />
          </div>
          {translate === "cyrillic" && (
            <div className="py-2.5 flex items-center gap-2.5">
              <input
                checked={autoApostrophe}
                onChange={(e) => setAutoApostrophe(e.target.checked)}
                name="auto_translate_apostrophe"
                id="auto_translate_apostrophe"
                type="checkbox"
                className="checkbox"
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
                ga tarjima qilish
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
              rows={15}
              value={translated}
              className="w-full"
            />
            <ClipboardButton
              text={translated}
              className="absolute right-5 bottom-5"
            />
          </div>
        </div>
      </div>
      <div>
        <HistoryDialog />
      </div>
      <HiddenKeywords />
    </main>
  );
}
