"use client";

import { TelegramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const styles = {
  socialLink: "btn btn-link",
  logo: "size-10",
};

function Footer() {
  return (
    <footer>
      <div className="p-10">
        <ul className="flex justify-center items-center gap-10">
          <li>
            <a
              href="https://t.me/mirzaahmedov_dev"
              className={styles.socialLink}
            >
              <TelegramLogo className={styles.logo} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mirzaahmedov"
              className={styles.socialLink}
            >
              <LinkedinLogo className={styles.logo} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mirzaahmedov"
              className={styles.socialLink}
            >
              <GithubLogo className={styles.logo} />
            </a>
          </li>
        </ul>
        <ul className="text-center mt-10">
          <li>
            <h3 className="text-lg text-neutral-500">
              Dasturchi - Mirzaahmedov Bekzod
            </h3>
          </li>
          <li className="mt-5">
            <a href="https://mirzaahmedov.uz" className="link text-primary">
              mirzaahmedov.uz
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
