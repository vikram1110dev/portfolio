import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vikram B | Software Developer",
  description: "Software Developer focused on building practical applications across web, mobile, backend, AI, and modern software technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
