import { Minus, Plus } from "lucide-react";
import type { Project } from "@/types/project";
import { Tag } from "./tag";
import { Url } from "./url";

export function ProjectCard({ projectData }: { projectData: Project }) {
	const websiteUrl = projectData.websiteUrl ? projectData.websiteUrl : "";
	return (
		<div>
			<div
				style={{
					backgroundColor: projectData.titleBackgroundColor,
					color: projectData.titleTextColor,
				}}
				className="p-3 rounded-t-2xl flex flex-row justify-between items-center"
			>
				<h1 className="text-[28px]">{projectData.title}</h1>
				<Minus size={35} />
			</div>
			<div className="flex flex-col gap-6 p-4 border-l border-r border-b rounded-b-2xl">
				<div className="flex flex-wrap gap-3">
					{projectData.tags.map((tag) => (
						<Tag key={tag} value={tag} />
					))}
				</div>
				<p>{projectData.description}</p>
				<div>
					{websiteUrl && <Url url={websiteUrl} key={projectData.title} />}
				</div>
			</div>
		</div >
	);
}
