const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function StoryStageSkeleton() {
	return (
		<div
			className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
		></div>

		// <div className="flex-1 flex flex-col items-center justify-center w-full p-4 md:p-8 lg:p-16 bg">
		// 		{currStage?.mainText}
		// 		{currStage?.id !== "end" && (
		// 			<Image
		// 				src={climateChangeImg}
		// 				alt="test climate change image"
		// 				height={300}
		// 				width={300}
		// 				className="pt-8"
		// 			/>
		// 		)}
		// 	</div>
		// 	<div className="flex-2 flex items-center justify-center w-full">
		// 		<ul className="w-full">{options}</ul>
		// 	</div>

		//   <li key={stage.optId} className="mx-auto w-4/5 md:w-2/3 lg:w-1/2">
		// 	<button
		// 		className="w-full my-2 p-2 rounded bg-blue-500"
		// 		onClick={() => handleSelectOption(stage.to)}
		// 	>
		// 		{stage.text}
		// 	</button>
		// </li>
	);
}
