"use client";

import { GithubLogo, LinkedinLogo, TelegramLogo } from "@phosphor-icons/react";

import { Button } from "@common/components/ui";
import Link from "next/link";

const socialLinks = [
  {
    icon: TelegramLogo,
    href: "https://t.me/mirzaahmedov_dev",
  },
  {
    icon: LinkedinLogo,
    href: "https://linkedin.com/in/mirzaahmedov",
  },
  {
    icon: GithubLogo,
    href: "https://github.com/mirzaahmedov",
  },
];

function Footer() {
  return (
    <footer className="mt-10 bg-slate-100 dark:bg-black/10">
      <div className="px-5 pt-10 mx-auto w-full max-w-5xl prose prose-slate dark:prose-invert">
        <h3 className="uppercase">Foydali ma&apos;lumotlar</h3>
        <ul className="mt-5">
          <li>
            <Link href="/lotin-alifbosi">Oʻzbek lotin alifbosi</Link>
          </li>
          <li>
            <Link href="/kirill-alifbosi">Kirill alifbosi</Link>
          </li>
          <li>
            <Link href="/about">Ushbu ilova xaqida</Link>
          </li>
        </ul>
      </div>
      <div className="p-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div>
          <h3 className="text-sm text-neutral-500">
            Dasturchi -{" "}
            <a href="https://mirzaahmedov.uz" className="link text-primary">
              Mirzaahmedov Bekzod
            </a>
          </h3>
        </div>
        <ul className="flex justify-center items-center gap-10">
          {socialLinks.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <social.icon className="size-6" />
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
