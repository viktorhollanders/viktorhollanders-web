import { ArrowUpRight } from "lucide-react";


export function Footer() {
	return (
		<footer className="text-brand-gray-600 flex flex-row justify-center gap-6 mt-14 md:mt-30">
			<a href="mailto:viktorhollanders.com" className="flex flex-row gap-2">
				<p>Email</p>
				<ArrowUpRight />
			</a>
			<a href="https://www.linkedin.com/in/viktor-hollanders-1148532b1/" className="flex flex-row gap-2">
				<p>LinkedIn</p>
				<ArrowUpRight />
			</a>
		</footer>
	)
}
