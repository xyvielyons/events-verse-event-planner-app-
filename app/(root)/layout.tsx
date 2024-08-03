import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/lib/shared/Header";
import Footer from "@/lib/shared/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-poppins'

});

export const metadata: Metadata = {
  title: "EventVerse",
  description: "EventVerse is a platform for event management",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="flex h-screen flex-col">
      <Header/>
      <main className={poppins.variable}>{children}</main>
      <Footer/>
    </div>
  );
}
