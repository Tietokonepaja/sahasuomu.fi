import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahasuomu",
  description: "Käärmeistä ammattitaidolla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${lexendSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
