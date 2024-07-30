import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {  ClerkProvider,} from '@clerk/nextjs'
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
const IBMPLEX = IBM_Plex_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "ImageMagic",
  description: "Upscale Your images With ImageMagic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBMPLEX antialiased", IBMPLEX)}>
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
    </ClerkProvider> 
  );
}
