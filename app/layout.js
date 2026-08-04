import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata = {
  title: "Lo&Vi",
  description: "Catálogo Lo&Vi - semijoias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
