"use client";

import { GithubLogo, LinkedinLogo, TelegramLogo } from "@phosphor-icons/react";

import { Button } from "@common/components/ui";

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
    <footer>
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
