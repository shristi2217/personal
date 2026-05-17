// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "the study",
  description: "a personal universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 antialiased bg-[#f8f8f6] text-black">
        {children}
      </body>
    </html>
  );
}