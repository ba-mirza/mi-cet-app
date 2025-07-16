import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mi-CET App",
  description: "Created by today.development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
      <Banner />
      <Header/>
        {children}
      </body>
    </html>
  );
}
