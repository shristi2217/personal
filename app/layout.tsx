import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desk",
  description: "Interactive desk homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}