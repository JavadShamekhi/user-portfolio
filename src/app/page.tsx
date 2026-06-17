import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
	return (
			<div className="flex flex-col">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
			</div>
	);
}