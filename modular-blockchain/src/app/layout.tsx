import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modular Blockchain | @samdevrel",
  description: "Modular blockchain architecture: Settlement, Data Availability, Execution, ZK verification layers.",
  keywords: ["modular", "blockchain", "rollup", "Celestia", "zk-proof", "layer-2"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
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
