import { Minus, Plus } from "lucide-react";
import type { Project } from "@/types/project";
import { Tag } from "./tag";
import { Url } from "./url";

export function ProjectCard({ projectData, openProjectId, setOpenProjectId }: { projectData: Project, openProjectId: number | null, setOpenProjectId: React.Dispatch<React.SetStateAction<number | null>> }) {
	const websiteUrl = projectData.websiteUrl ? projectData.websiteUrl : "";
	const isOpen = openProjectId === projectData.id;

	function toggleProject() {
		openProjectId !== projectData.id ? setOpenProjectId(projectData.id) : setOpenProjectId(null);
	}

	return (
		<div>
			<div
				style={{
					backgroundColor: projectData.titleBackgroundColor,
					color: projectData.titleTextColor,
				}}
				className={`${!isOpen ? "rounded-2xl " : "rounded-t-2xl "} p-3 flex flex-row justify-between items-center`}
			>
				<h1 className="text-[28px]">{projectData.title}</h1>
				<button type="button" onClick={toggleProject}>
					{!isOpen ? <Plus size={35} /> : <Minus size={35} />}

				</button>
			</div>
			<div className={`${!isOpen ? "hidden" : "flex"} flex-col gap-6 p-4 border-l border-r border-b rounded-b-2xl`}>
				<div className="flex flex-wrap gap-3">
					{projectData.tags.map((tag) => (
						<Tag key={tag} value={tag} />
					))}
				</div>
				<p className="body-text">{projectData.description}</p>
				<div>
					{websiteUrl && <Url url={websiteUrl} key={projectData.title} />}
				</div>
			</div>
		</div >
	);
}
