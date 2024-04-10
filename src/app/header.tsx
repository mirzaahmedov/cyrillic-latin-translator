import { Dancing_Script } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ThemeToggle } from "@/components";
import Logo from "@/app/logo";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Header() {
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
                "text-2xl md:text-4xl font-bold",
                dancing_script.className
              )}
            >
              Kirillcha-Lotincha
            </h1>
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
