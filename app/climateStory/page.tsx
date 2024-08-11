"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { storyStages } from "../lib/storyStages";
import Image from "next/image";
import { Suspense } from "react";
import { StoryStageSkeleton } from "../ui/climateStory/skeletons";
import climateChangeImg from "@/public/climate-change-example.svg";

export default function ClimateStory() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const params = new URLSearchParams(searchParams);
	const stageParams = params.get("stage");

	function handleSelectOption(stageId: string) {
		params.set("stage", stageId);
		replace(`${pathname}?${params.toString()}`);
	}

	const currStage = storyStages.find((stage) => stage.id === stageParams);
	const options = currStage?.options.map((stage) => (
		<Suspense key={currStage?.id} fallback={<StoryStageSkeleton />}>
			<li key={stage.optId} className="mx-auto w-4/5 md:w-2/3 lg:w-1/2">
				<button
					className="w-full my-2 p-2 rounded bg-blue-500"
					onClick={() => handleSelectOption(stage.to)}
				>
					{stage.text}
				</button>
			</li>
		</Suspense>
	));

	return (
		<Suspense key={currStage?.id} fallback={<StoryStageSkeleton />}>
			<main className="flex flex-col min-h-screen items-center">
				<div className="flex-1 flex flex-col items-center justify-center w-full p-4 md:p-8 lg:p-16 bg">
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
				</div>
				<div className="flex-2 flex items-center justify-center w-full">
					<ul className="w-full">{options}</ul>
				</div>
			</main>
		</Suspense>
	);
}
