export default function HeroSection() {
	return (
			<section
					id="hero"
					dir="rtl"
					className="min-h-screen flex items-center justify-center bg-white px-6"
			>
				<div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center gap-6">
					{/* Avatar placeholder */}
					<div className="w-32 h-32 rounded-full bg-indigo-100 border-4 border-indigo-200 flex items-center justify-center text-indigo-400">
						<svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
						</svg>
					</div>

					{/* Headline */}
					<div className="flex flex-col gap-2">
						<p className="text-sm font-medium text-indigo-600 tracking-wide">
							👋 خوش آمدید
						</p>
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
							نام و نام خانوادگی
						</h1>
						<p className="text-lg md:text-xl text-gray-500 font-medium">
							توسعه‌دهنده فول‌استک | طراح رابط کاربری
						</p>
					</div>

					{/* Bio */}
					<p className="max-w-xl text-gray-500 leading-8 text-sm md:text-base">
						اینجا یک معرفی کوتاه از خودت قرار می‌گیره — چی کار می‌کنی، چه
						تکنولوژی‌هایی بلدی، و چرا باید باهات کار کنن.
					</p>

					{/* CTA Buttons */}
					<div className="flex items-center gap-4 flex-wrap justify-center">
						<a
								href="#projects"
								className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-7 py-3 rounded-full transition-colors text-sm"
						>
							مشاهده پروژه‌ها
						</a>
						<a
								href="#contact"
								className="border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-medium px-7 py-3 rounded-full transition-colors text-sm"
						>
							تماس با من
						</a>
					</div>

					{/* Tech stack chips — placeholder */}
					<div className="flex flex-wrap gap-2 justify-center mt-2">
						{["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
								(tech) => (
										<span
												key={tech}
												className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium"
										>
                {tech}
              </span>
								)
						)}
					</div>
				</div>
			</section>
	);
}