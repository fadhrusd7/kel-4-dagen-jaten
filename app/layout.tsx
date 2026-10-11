import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desa Dagen",
  description: "Portal resmi Pemerintah Desa Dagen",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
