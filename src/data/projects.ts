import type { Project } from "@/types/project";

export const Projects: Project[] = [
	{
		title: "Söguheimar",
		titleBackgroundColor: "#23AA59",
		titleTextColor: "#000",
		githubUrl: "https://github.com/viktorhollanders/soguheimar-web",
		websiteUrl: "https://soguheimar.is",
		tags: ["Design", "Development", "Website"],
		description: `A website for Söguheimar Summer Camp. Söguheimar is a summer camp for kids which I co-founded with some friends. It's a non-profit and we are run by people who love play, nature, and being outside. As one staff member said, "It's like going hiking but you're taking along 30 kids" — total adventure.`
	},
	{
		title: "Parental Leave",
		titleBackgroundColor: "#2C66DB",
		titleTextColor: "#fff",
		githubUrl: "https://github.com/viktorhollanders/parental-leave-application",
		websiteUrl: "",
		tags: ["Design", "Development", "Web App"],
		description: `A web app built from a technical specification — I designed the UI from the spec, then implemented it using the required stack: Next.js, React Hook Forms, and Zod for validation. The result is a responsive multi-step parental leave application form that works across mobile and desktop.`
	}
];
