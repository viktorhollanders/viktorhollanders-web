import { ArrowUpRight } from "lucide-react";

export function Url({ url }: { url: string }) {
	const displayUrl = url.replace("https://", "");

	return (
		<a href={url} className="flex flex-row gap-2">
			<p className="body-text">{displayUrl}</p>
			<ArrowUpRight />
		</a>

	)
}
