import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Personal Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
