const skills = [
	{ label: "فرانت‌اند", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
	{ label: "بک‌اند", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
	{ label: "ابزارها", items: ["Git", "Docker", "Figma", "VS Code"] },
];

const stats = [
	{ value: "۳+", label: "سال تجربه" },
	{ value: "۲۰+", label: "پروژه انجام شده" },
	{ value: "۱۵+", label: "مشتری راضی" },
];

export default function AboutSection() {
	return (
			<section
					id="about"
					dir="rtl"
					className="py-24 bg-gray-50 px-6"
			>
				<div className="max-w-6xl mx-auto flex flex-col gap-16">

					{/* Section Header */}
					<div className="flex flex-col gap-2">
						<span className="text-sm font-medium text-indigo-600">درباره من</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							کمی بیشتر بشناسیدم
						</h2>
					</div>

					{/* Content Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

						{/* Left — Bio */}
						<div className="flex flex-col gap-6">
							{/* Image placeholder */}
							<div className="w-full aspect-square max-w-xs rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-300">
								<svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
								</svg>
							</div>

							{/* Stats */}
							<div className="flex gap-6">
								{stats.map((s) => (
										<div key={s.label} className="flex flex-col gap-1">
											<span className="text-2xl font-bold text-indigo-600">{s.value}</span>
											<span className="text-xs text-gray-500">{s.label}</span>
										</div>
								))}
							</div>
						</div>

						{/* Right — Text + Skills */}
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-4 text-gray-600 leading-8 text-sm">
								<p>
									اینجا داستان خودت رو بنویس — از کجا شروع کردی، چی یاد گرفتی،
									و الان روی چه چیزی تمرکز داری.
								</p>
								<p>
									می‌تونی از علایقت، سبک کارت، یا ارزش‌هایی که بهشون اعتقاد داری
									هم بنویسی تا مشتری بهتر بشناستت.
								</p>
							</div>

							{/* Skills */}
							<div className="flex flex-col gap-5">
								{skills.map((group) => (
										<div key={group.label} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {group.label}
                  </span>
											<div className="flex flex-wrap gap-2">
												{group.items.map((item) => (
														<span
																key={item}
																className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-medium shadow-sm"
														>
                        {item}
                      </span>
												))}
											</div>
										</div>
								))}
							</div>

							{/* Download CV */}
							<a
									href="/cv.pdf"
									className="w-fit flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
									      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
								</svg>
								دانلود رزومه
							</a>
						</div>
					</div>
				</div>
			</section>
	);
}