import { useSearchParams } from "next/navigation";
import { storyStages } from "@/app/lib/storyStages";
import Image from "next/image";
import testImg from "@/public/climate-change-example.svg";

export default function StoryMain() {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	const stageParams = params.get("stage");
	const currStage = storyStages.find((stage) => stage.id === stageParams);
	const stageText =
		currStage?.mainText ||
		"Uh oh ... something went wrong. Please try going back or starting over.";

	return (
		<>
			{stageText}
			<Image
				src={testImg}
				alt="test climate change image"
				height={300}
				className="pt-8"
				priority
			/>
		</>
	);
}
