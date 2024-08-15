import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { storyStages } from "@/app/lib/storyStages";

export default function StoryOptions() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);

	const stageParams = params.get("stage");
	const currStage = storyStages.find((stage) => stage.id === stageParams);
	const stageOptions = currStage?.options || [];

	const options = stageOptions.map((option) => (
		<li key={option.optId} className="mx-auto w-4/5 md:w-2/3 lg:w-1/2">
			<Link href={`${pathname}?stage=${option.to}`}>
				<button className="w-full my-2 p-2 rounded bg-blue-500">
					{option.text}
				</button>
			</Link>
		</li>
	));
	return options;
}
