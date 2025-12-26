import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Air Travel Agency",
  description: "Travel Smarter. Fly Better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        <div className="bg-white">
          <div className="m-auto w-11/12">
            <Navbar />
          </div>
          <Header />
          {children}
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
