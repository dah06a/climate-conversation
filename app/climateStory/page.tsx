"use client";

import StoryMain from "../ui/climateStory/StoryMain";
import StoryOptions from "../ui/climateStory/StoryOptions";
import { Suspense } from "react";
import { StoryStageSkeleton } from "../ui/skeletons";

export default function ClimateStory() {
	return (
		<main className="flex flex-col min-h-screen items-center">
			<div className="flex-1 flex flex-col items-center justify-center w-full p-4 md:p-8 lg:p-16 bg">
				<Suspense key={2} fallback={<StoryStageSkeleton />}>
					<StoryMain />
				</Suspense>
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
