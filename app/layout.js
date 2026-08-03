import "./globals.css";

export const metadata = {
  title: "Lo&Vi",
  description: "Catálogo Lo&Vi - semijoias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
