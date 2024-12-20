"use client";

import { Moon, SunDim } from "@phosphor-icons/react";

import Link from "next/link";
import { Logo } from "@common/components";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useThemeStore } from "@common/store/theme";

function Header() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    return () => {
      delete document.documentElement.dataset.theme;
      delete document.body.dataset.theme;
    };
  }, [theme]);

  return (
    <header>
      <nav className="navbar flex-col md:flex-row gap-5 p-5 md:p-10">
        <div className="flex-1">
          <Link
            href="/"
            className="flex flex-col md:flex-row items-center gap-5"
          >
            <div className="text-8xl">
              <Logo />
            </div>
            <h1
              className={twMerge(
                "text-base font-medium uppercase leading tracking-[0.3em]"
              )}
            >
              Lotincha-Kirillcha
            </h1>
          </Link>
        </div>
        <div>
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
      </nav>
    </header>
  );
}

export default Header;
