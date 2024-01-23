import "./style.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import bag from "public/icons/bag.svg";

export default function Header(): JSX.Element {
  const t = useTranslations("Header");

  return (
    <header>
      <ul>
        <li>
          <Link href="/" className="logo">
            {t("Logo")}
          </Link>
        </li>
        {/* <li>
          <div
            className="user-menus"
            style={{ display: "flex", alignItems: "center", gap: "1.5em" }}
          >
            <Link href="/">
              <Image src={bag} alt="bag icon" />
            </Link>
            <Link href="/" className="login-button">
              Login
            </Link>
          </div>
        </li> */}
      </ul>
    </header>
  );
}
