const projects = [
	{
		id: 1,
		title: "نام پروژه اول",
		description: "توضیح کوتاهی از پروژه — چه مشکلی رو حل کرده و با چه تکنولوژی‌هایی ساخته شده.",
		tags: ["Next.js", "TypeScript", "Tailwind"],
		link: "#",
		github: "#",
	},
	{
		id: 2,
		title: "نام پروژه دوم",
		description: "توضیح کوتاهی از پروژه — چه مشکلی رو حل کرده و با چه تکنولوژی‌هایی ساخته شده.",
		tags: ["React", "Node.js", "MongoDB"],
		link: "#",
		github: "#",
	},
	{
		id: 3,
		title: "نام پروژه سوم",
		description: "توضیح کوتاهی از پروژه — چه مشکلی رو حل کرده و با چه تکنولوژی‌هایی ساخته شده.",
		tags: ["Vue.js", "Express", "PostgreSQL"],
		link: "#",
		github: "#",
	},
];

export default function ProjectsSection() {
	return (
			<section
					id="projects"
					dir="rtl"
					className="py-24 bg-white px-6"
			>
				<div className="max-w-6xl mx-auto flex flex-col gap-12">

					{/* Section Header */}
					<div className="flex flex-col gap-2">
						<span className="text-sm font-medium text-indigo-600">پروژه‌ها</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							کارهایی که انجام دادم
						</h2>
						<p className="text-gray-500 text-sm max-w-lg leading-7 mt-1">
							مجموعه‌ای از پروژه‌هایی که روی اون‌ها کار کردم — از ایده تا اجرا.
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
								<article
										key={project.id}
										className="group flex flex-col gap-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-lg rounded-2xl p-6 transition-all duration-300"
								>
									{/* Image placeholder */}
									<div className="w-full h-44 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-300 overflow-hidden">
										<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
											      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>

									{/* Info */}
									<div className="flex flex-col gap-2 flex-1">
										<h3 className="font-bold text-gray-900 text-base group-hover:text-indigo-600 transition-colors">
											{project.title}
										</h3>
										<p className="text-gray-500 text-sm leading-7">
											{project.description}
										</p>
									</div>

									{/* Tags */}
									<div className="flex flex-wrap gap-1.5">
										{project.tags.map((tag) => (
												<span
														key={tag}
														className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium"
												>
                    {tag}
                  </span>
										))}
									</div>

									{/* Links */}
									<div className="flex items-center gap-4 pt-1">
										<a
												href={project.link}
												className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
												      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
											مشاهده پروژه
										</a>
										<a
												href={project.github}
												className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors"
										>
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
											</svg>
											گیت‌هاب
										</a>
									</div>
								</article>
						))}
					</div>

					{/* View All */}
					<div className="flex justify-center">
						<a
								href="#"
								className="border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-medium px-7 py-3 rounded-full transition-colors text-sm"
						>
							مشاهده همه پروژه‌ها
						</a>
					</div>

				</div>
			</section>
	);
}