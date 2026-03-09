import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhumika | Full Stack Developer",
  description: "Modern portfolio of Bhumika, a full stack developer."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light text-charcoal font-display antialiased overflow-x-hidden select-none min-h-screen">
        {children}
      </body>
    </html>
  );
}

