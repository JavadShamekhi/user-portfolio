import Link from "next/link";

const socialLinks = [
	{
		label: "گیت‌هاب",
		href: "https://github.com",
		icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
					<path
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
				</svg>
		),
	},
	{
		label: "لینکدین",
		href: "https://linkedin.com",
		icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
					<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
		),
	},
	{
		label: "تلگرام",
		href: "https://t.me",
		icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
					<path
							d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
				</svg>
		),
	},
];

const quickLinks = [
	{label: "خانه", href: "/"},
	{label: "درباره من", href: "#about"},
	{label: "مهارت‌ها", href: "#skills"},
	{label: "پروژه‌ها", href: "#projects"},
	{label: "تماس", href: "#contact"},
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
			<footer dir="rtl" className="bg-gray-950 text-gray-400">
				<div className="max-w-6xl mx-auto px-6 py-14">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{/* Brand */}
						<div className="flex flex-col gap-4">
							<Link
									href="/public"
									className="text-white text-xl font-bold hover:text-indigo-400 transition-colors w-fit"
							>
								پورتفولیو
							</Link>
							<p className="text-sm leading-7 text-gray-500">
								توسعه‌دهنده وب با تمرکز بر طراحی تجربه کاربری بهتر و ساخت
								محصولات دیجیتال ماندگار.
							</p>
							{/* Socials */}
							<div className="flex items-center gap-3 mt-1">
								{socialLinks.map((s) => (
										<a
												key={s.label}
												href={s.href}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={s.label}
												className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-400 transition-colors"
										>
											{s.icon}
										</a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div className="flex flex-col gap-4">
							<h3 className="text-white font-semibold text-sm">دسترسی سریع</h3>
							<ul className="flex flex-col gap-2.5">
								{quickLinks.map((link) => (
										<li key={link.href}>
											<Link
													href={link.href}
													className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
											>
												{link.label}
											</Link>
										</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div className="flex flex-col gap-4">
							<h3 className="text-white font-semibold text-sm">تماس با من</h3>
							<ul className="flex flex-col gap-3 text-sm text-gray-500">
								<li className="flex items-center gap-2">
									<svg
											className="w-4 h-4 text-indigo-500 shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
									>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span>example@email.com</span>
								</li>
								<li className="flex items-center gap-2">
									<svg
											className="w-4 h-4 text-indigo-500 shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
									>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span dir="ltr">+98 912 345 6789</span>
								</li>
								<li className="flex items-center gap-2">
									<svg
											className="w-4 h-4 text-indigo-500 shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
									>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span>تهران، ایران</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div
							className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
						<p>
							© {year} تمامی حقوق محفوظ است.
						</p>
						<p>
							ساخته شده با ❤️ در ایران
						</p>
					</div>
				</div>
			</footer>
	);
}