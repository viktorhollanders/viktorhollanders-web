import type { TagType } from "@/types/tags"

interface TagProps {
	value: TagType;
}

export function Tag({ value }: TagProps) {
	return (
		<div className="border border-brand-gray-600 rounded-2xl text-[12px] px-3 py-1">
			{value}
		</div>
	)
}
