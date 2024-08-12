"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { storyStages } from "../lib/storyStages";
import StoryOptions from "../ui/climateStory/StoryOptions";
import Image from "next/image";
import { Suspense } from "react";
import { StoryStageSkeleton } from "../ui/skeletons";
import climateChangeImg from "@/public/climate-change-example.svg";

export default function ClimateStory() {
	// const searchParams = useSearchParams();
	// const pathname = usePathname();
	// const params = new URLSearchParams(searchParams);
	// const stageParams = params.get("stage");

	// let currStage = storyStages.find((stage) => stage.id === stageParams);
	// if (!currStage) {
	// 	currStage = {
	// 		id: "error",
	// 		mainText:
	// 			"Uh oh ... something went wrong. Please try going back or starting over.",
	// 		options: [],
	// 	};
	// }

	return (
		<main className="flex flex-col min-h-screen items-center">
			<div className="flex-1 flex flex-col items-center justify-center w-full p-4 md:p-8 lg:p-16 bg">
				{/* <Suspense key={1} fallback={<StoryStageSkeleton />}>
					{currStage?.mainText}
					{currStage?.id !== "end" && (
						<Image
							src={climateChangeImg}
							alt="test climate change image"
							height={300}
							width={300}
							className="pt-8"
						/>
					)}
				</Suspense> */}
			</div>
			<div className="flex-2 flex items-center justify-center w-full">
				<ul className="w-full">
					<Suspense key={2} fallback={<StoryStageSkeleton />}>
						<StoryOptions />
					</Suspense>
				</ul>
			</div>
		</main>
	);
}
