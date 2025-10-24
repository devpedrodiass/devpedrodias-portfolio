import type { Metadata } from "next";
import {
  Source_Sans_3 as FontSans,
  Playfair_Display as FontSerif,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontSerif = FontSerif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Dias",
  description: "Dev. Pedro Dias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.className} ${fontSerif.className} ${fontMono.variable} antialiased overflow-x-hidden min-h-dvh w-dvw max-w-dvw`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
