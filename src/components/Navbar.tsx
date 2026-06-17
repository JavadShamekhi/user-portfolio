"use client";

import {useState} from "react";
import Link from "next/link";

const navLinks = [
	{label: "خانه", href: "/"},
	{label: "درباره من", href: "#about"},
	{label: "مهارت‌ها", href: "#skills"},
	{label: "پروژه‌ها", href: "#projects"},
	{label: "تماس", href: "#contact"},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
			<header
					dir="rtl"
					className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
			>
				<nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					{/* Logo */}
					<Link
							href="/public"
							className="text-xl font-bold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors"
					>
						پورتفولیو
					</Link>

					{/* Desktop Links */}
					<ul className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
								<li key={link.href}>
									<Link
											href={link.href}
											className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium relative group"
									>
										{link.label}
										<span
												className="absolute -bottom-1 right-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"/>
									</Link>
								</li>
						))}
					</ul>

					{/* CTA Button */}
					<a
							href="#contact"
							className="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
					>
						با من در تماس باش
					</a>

					{/* Mobile Menu Button */}
					<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
							aria-label="منو"
					>
						<div className="w-5 flex flex-col gap-1.5">
            <span
		            className={`h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
							<span
									className={`h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
							/>
							<span
									className={`h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
							/>
						</div>
					</button>
				</nav>

				{/* Mobile Menu */}
				{isOpen && (
						<div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
							<ul className="flex flex-col gap-4">
								{navLinks.map((link) => (
										<li key={link.href}>
											<Link
													href={link.href}
													onClick={() => setIsOpen(false)}
													className="block text-sm text-gray-700 hover:text-indigo-600 font-medium transition-colors py-1"
											>
												{link.label}
											</Link>
										</li>
								))}
								<li>
									<a
											href="#contact"
											onClick={() => setIsOpen(false)}
											className="inline-flex items-center bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors hover:bg-indigo-700"
									>
										با من در تماس باش
									</a>
								</li>
							</ul>
						</div>
				)}
			</header>
	);
}