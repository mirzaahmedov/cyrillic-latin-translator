"use client";

import { useEffect, useState } from "react";
import {
  translateCyrillicToLatin,
  translateLatinToCyrillic,
} from "@/utils/translate";
import { ArrowsLeftRight } from "@phosphor-icons/react";
import { Textarea } from "@/components";

const styles = {
  formControl: "form-control flex-1",
  label: "w-full max-w-48 first:text-end font-bold text-md",
  button: "btn btn-primary",
};

const translateOptions = ["Cyrillic", "Latin"] as const;
const translations = {
  Cyrillic: "Kirillcha",
  Latin: "Lotincha",
};

function Translator() {
  const [original, setOriginal] = useState("");
  const [translation, setTranslation] = useState("");
  const [activeLang, setActiveLang] =
    useState<(typeof translateOptions)[number]>("Cyrillic");

  useEffect(() => {
    if (activeLang === "Cyrillic") {
      setTranslation(translateCyrillicToLatin(original));
    } else {
      setTranslation(translateLatinToCyrillic(original));
    }
  }, [original, activeLang]);

  function handleChangeOriginalText(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const textarea = event.currentTarget;
    resizeTextAreaToContent(textarea);

    setOriginal(event.target.value);
  }
  function handleChangeTranslation(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const textarea = event.currentTarget;
    resizeTextAreaToContent(textarea);
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-10">
        <label className={styles.label}>{translations[activeLang]}</label>
        <button
          type="button"
          className="btn btn-lg btn-circle btn-primary"
          onClick={() => {
            setActiveLang((prev) =>
              prev === "Cyrillic" ? "Latin" : "Cyrillic"
            );
            setOriginal(translation);
          }}
        >
          <ArrowsLeftRight className="size-7" />
        </button>
        <label className={styles.label}>
          {translations[activeLang === "Cyrillic" ? "Latin" : "Cyrillic"]}
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-5 lg:p-10">
        <div className={styles.formControl}>
          <Textarea
            name="original"
            id="original"
            value={original}
            onChange={handleChangeOriginalText}
          />
        </div>

        <div className={styles.formControl}>
          <Textarea
            readOnly
            disabled
            name="translation"
            id="translation"
            className="disabled:cursor-text"
            value={translation}
            onChange={handleChangeTranslation}
          />
        </div>
      </div>
    </div>
  );
}
function resizeTextAreaToContent(textarea: HTMLTextAreaElement) {
  textarea.style.height = "1px";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default Translator;
