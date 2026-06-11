import type { TagType } from "@/types/tags";

export interface Project {
	title: string;
	titleBackgroundColor: string;
	titleTextColor: string;
	githubUrl: string;
	websiteUrl: string | null;
	tags: TagType[];
	description: string;
}
