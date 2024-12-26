import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./(components)/Navbar";

export const metadata: Metadata = {
  title: "BarberIQ",
  description: "Powered by Groven Builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer></footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
