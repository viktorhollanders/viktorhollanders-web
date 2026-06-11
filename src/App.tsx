import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Projects } from "@/data/projects";

export default function App() {
	return (
		<div className="mx-5 mb-14 md:mb-14 mt-24 md:mt-60 md:max-w-175 md:m-auto">
			<header className="flex flex-col gap-14 items-center md:flex-row md:justify-between">
				<div className="flex flex-col items-start md:w-fit">
					<h1 className="font-semibold text-fluid-title">Viktor</h1>
					<h1 className="font-semibold text-fluid-title">Hollanders</h1>
				</div>
				<div className="max-w-85 h-auto md:w-63">
					<picture className="">
						<source srcSet="./header/profile.webp" type="image/webp" />
						<img
							src="./header/profile.jpg"
							alt="Viktor on a glacier"
							className="w-full h-full rounded-2xl"
						/>
					</picture>
				</div>
			</header>

			<section className="section">
				<h2 className="font-medium text-[48px] md:text-vertical">About</h2>

				<div className="flex flex-col gap-4 tracking-[0.04%]">
					<p>
						I am a developer from Iceland with a BSc in Computer Science from
						Reykjavik University. I have a passion for well-designed user
						experiences that are simple and intuitive to use. I strongly believe
						in designing with the user in mind — form follows function. Besides
						frontend development, I am very interested in DevOps, testing, and
						LLM tooling.
					</p>

					<p>
						I enjoy good conversations about design, tech, and life in general.
						When I'm not grinding away at a computer designing or programming,
						I'm out taking photos, climbing, or enjoying the wide outdoors of
						Iceland. Always up for interesting projects or a good conversation —
						find me in the footer.
					</p>
				</div>
			</section>

			<section className="section">
				<h2 className="font-medium text-[48px] md:text-vertical">Projects</h2>

				<div className="flex flex-col gap-8">
					{Projects.map((project) => (
						<ProjectCard projectData={project} key={project.title} />
					))}
				</div>
			</section>
			<Footer />
		</div>
	);
}
