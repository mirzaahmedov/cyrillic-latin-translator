export class Translator {
  toCyrillic(input: string, autoApostrophe: boolean = false): string {
    if (!input) {
      return "";
    }

    input = input.replaceAll("‘", "ʻ");
    if (autoApostrophe) {
      input = input.replaceAll("'", "ʻ");
    }

    const mappings = Object.entries(mappedLetters).sort(
      (a, b) => b[1].length - a[1].length
    );
    for (const [cyrill, latin] of mappings) {
      if (latin === "") {
        continue;
      }
      input = input.replaceAll(latin, (match, i) => {
        if (["E", "e"].includes(match)) {
          if (i - 1 < 0 || [" ", "\n"].includes(input[i - 1])) {
            return match === "E" ? "Э" : "э";
          }
          return match === "E" ? "Е" : "е";
        }
        return cyrill;
      });
    }

    return input;
  }
  toLatin(input: string): string {
    if (!input) {
      return "";
    }

    const mappings = Object.entries(mappedLetters).sort(
      (a, b) => b[0].length - a[0].length
    );
    for (const [cyrill, latin] of mappings) {
      input = input.replaceAll(cyrill, latin);
    }
    return input;
  }
}

export const mappedLetters = {
  Ё: "Yo",
  ё: "yo",
  Ц: "Ts",
  ц: "ts",
  Ч: "Ch",
  ч: "ch",
  Ш: "Sh",
  ш: "sh",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
  Ў: "Oʻ",
  ў: "oʻ",
  Ғ: "Gʻ",
  ғ: "gʻ",
  А: "A",
  а: "a",
  Б: "B",
  б: "b",
  В: "V",
  в: "v",
  Г: "G",
  г: "g",
  Д: "D",
  д: "d",
  Ж: "J",
  ж: "j",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  Й: "Y",
  й: "y",
  К: "K",
  к: "k",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  О: "O",
  о: "o",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ф: "F",
  ф: "f",
  Х: "X",
  х: "x",
  Ъ: "ʼ",
  ъ: "ʼ",
  Ь: "",
  ь: "",
  Э: "E",
  э: "e",
  Е: "E",
  е: "e",
  Қ: "Q",
  қ: "q",
  Ҳ: "H",
  ҳ: "h",
};
