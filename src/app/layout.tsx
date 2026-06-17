import type {Metadata} from "next";
import {Vazirmatn} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-vazirmatn",
	display: "swap",
});

export const metadata: Metadata = {
	title: "پورتفولیو | توسعه‌دهنده وب",
	description: "پورتفولیو شخصی توسعه‌دهنده وب",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
			<html lang="fa" dir="rtl" className={vazirmatn.variable}>
			<body className="font-sans antialiased bg-white text-gray-900">
			<Navbar/>
			<main className="pt-[72px]">{children}</main>
			<Footer/>
			</body>
			</html>
	);
}