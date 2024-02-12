import type {Metadata} from "next";
import {Providers} from "./providers";
import {AppContextProvider} from "@/context/AppContext";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Rotate",
  description: "Rotate Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppContextProvider>{children}</AppContextProvider>
        </Providers>
      </body>
    </html>
  );
}
