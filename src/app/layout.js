import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Vikram B | Software Developer — Portfolio",
  description:
    "Software Developer building practical applications across web, mobile, backend, AI, and modern software technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Vikram B",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Vikram B" }],
  openGraph: {
    title: "Vikram B | Software Developer",
    description:
      "Software Developer focused on building practical applications across web, mobile, backend, AI, and modern software technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
