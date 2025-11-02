import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const bayerUniversal = localFont({
  variable: "--font-bayer-universal",
  src: "../../app/fonts/Bayer-Universal.woff2",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "texture flex min-h-screen flex-col antialiased",
          geistSans.variable,
          geistMono.variable,
          bricolageGrotesque.variable,
          bayerUniversal.variable,
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
