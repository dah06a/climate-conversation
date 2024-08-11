import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<Link
				href="/climateStory?stage=start"
				className="bg-blue-500 hover:bg-blue-800 text-white font-bold text-lg py-8 px-4 rounded"
			>
				Start Climate Story
			</Link>
		</main>
	);
}
