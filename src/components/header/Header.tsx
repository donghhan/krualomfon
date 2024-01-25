"use client";
import "./style.scss";
import { useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import bag from "public/icons/bag.svg";

interface LanguageSwitcherProp {
  defaultValue: string;
  label: string;
}

export default function Header(): JSX.Element {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const languageSelector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = event.currentTarget.getAttribute("value") as string;
    console.log(language);
    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

  return (
    <header>
      <ul>
        <li className="logo-wrapper">
          <Link href="/" className="logo">
            {t("Logo")}
          </Link>
        </li>
        <li>
          <div className="language-selector">
            {locale === "en" ? (
              <button
                className="language-button"
                onClick={languageSelector}
                value="th"
              >
                <span style={{ fontSize: "2.5rem" }}>ก</span>ก
              </button>
            ) : (
              <button
                className="language-button"
                onClick={languageSelector}
                value="en"
              >
                Aa
              </button>
            )}
          </div>
          {/* <div
            className="user-menus"
            style={{ display: "flex", alignItems: "center", gap: "1.5em" }}
          >
            <Link href="/">
              <Image src={bag} alt="bag icon" />
            </Link>
            <Link href="/" className="login-button">
              Login
            </Link>
          </div> */}
        </li>
      </ul>
    </header>
  );
}
