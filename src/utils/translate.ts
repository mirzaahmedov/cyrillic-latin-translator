export const cyrillicToLatinMap = {
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
  Е: "E",
  е: "e",
  Ё: "Yo",
  ё: "yo",
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
  Ц: "Ts",
  ц: "ts",
  Ч: "Ch",
  ч: "ch",
  Ш: "Sh",
  ш: "sh",
  Ъ: "ʼ",
  ъ: "ʼ",
  Ь: "",
  ь: "",
  Э: "E",
  э: "e",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
  Ў: "Oʻ",
  ў: "oʻ",
  Ғ: "Gʻ",
  ғ: "gʻ",
  Қ: "Q",
  қ: "q",
  Ҳ: "H",
  ҳ: "h",
};

export const latinToCyrillicMap = {
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  D: "Д",
  d: "д",
  E: "Е",
  e: "е",
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Ҳ",
  h: "ҳ",
  I: "И",
  i: "и",
  J: "Ж",
  j: "ж",
  K: "К",
  k: "к",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  Q: "Қ",
  q: "қ",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  X: "Х",
  x: "х",
  Y: "Й",
  y: "й",
  Z: "З",
  z: "з",
  Oʻ: "Ў",
  oʻ: "ў",
  Gʻ: "Ғ",
  gʻ: "ғ",
  Sh: "Ш",
  sh: "ш",
  Ch: "Ч",
  ch: "ч",
  ng: "нг",
  ʼ: "ъ",
};

export function translateCyrillicToLatin(input: string): string {
  if (!input) {
    return "";
  }
  const cyrillicLetters = Object.keys(cyrillicToLatinMap);
  return input.replaceAll(
    new RegExp(cyrillicLetters.join("|"), "g"),
    (letter) => {
      if (letter in cyrillicToLatinMap) {
        return cyrillicToLatinMap[letter as keyof typeof cyrillicToLatinMap];
      }
      return letter;
    }
  );
}

export function translateLatinToCyrillic(input: string): string {
  if (!input) {
    return "";
  }
  const latinLetters = Object.keys(latinToCyrillicMap);
  return input.replaceAll(
    new RegExp(latinLetters.join("|"), "g"),
    (letter, i) => {
      if (
        (letter === "E" || letter === "e") &&
        (i - 1 < 0 || /\s/.test(input[i - 1]))
      ) {
        return letter === "E" ? "Э" : "э";
      }

      if (letter in latinToCyrillicMap) {
        return latinToCyrillicMap[letter as keyof typeof latinToCyrillicMap];
      }
      return letter;
    }
  );
}
