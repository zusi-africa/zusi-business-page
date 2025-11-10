import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZUSI - All-in-one utility & shared payment platform",
  description: "Pay bills. Split expenses. All Automated. Simplify your bill payments with ZUSI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

