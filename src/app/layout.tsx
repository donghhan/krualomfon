import "../styles/global.scss";
import { kanit, charm } from "@/styles/variables/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${charm.className}`}>
        {children}
      </body>
    </html>
  );
}
