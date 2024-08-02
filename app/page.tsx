export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="p-16">top btn</div>
			<div className="flex md:w-full justify-between">
				<div className="p-8 md:p-16">left btn</div>
				<div className="p-8 md:p-16">center text</div>
				<div className="p-8 md:p-16">right btn</div>
			</div>
			<div className="p-16">bot btn</div>
		</main>
	);
}
