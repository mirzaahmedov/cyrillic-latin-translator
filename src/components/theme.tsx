"use client";

import { useState, useEffect } from "react";
import { SunDim, Moon } from "@phosphor-icons/react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== undefined || !window.matchMedia) {
      return "dark";
    }
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, [theme]);

  console.log(theme);

  return (
    <div className="form-control">
      <label className="label flex gap-1">
        <span className="label-text">
          <SunDim />
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        <span className="label-text">
          <Moon />
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;
