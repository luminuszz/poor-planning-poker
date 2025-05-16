import { Button } from "@/components/ui/button";

export type PlanningPokerControlsProps = {
	selectedCard: string | null;
	onVote: (value: string) => void;
	onReveal: () => void;
	onReset: () => void;
	showVotes: boolean;
};

const cardValues = ["1", "2", "3", "5", "8", "13", "21", "?", "☕"];

export function PlanningPokerControls({
	selectedCard,
	onVote,
	onReveal,
	onReset,
	showVotes,
}: PlanningPokerControlsProps) {
	return (
		<div className="mt-8">
			<div className="flex flex-col gap-6">
				{!showVotes && (
					<div>
						<div className="flex flex-wrap gap-2 justify-center">
							{cardValues.map((value) => (
								<Button
									key={value}
									variant={selectedCard === value ? "default" : "outline"}
									className={`h-16 w-12 text-xl font-bold ${
										selectedCard === value
											? "bg-blue-600 border-blue-400"
											: "bg-white text-muted-foreground"
									}`}
									onClick={() => onVote(value)}
								>
									{value}
								</Button>
							))}
						</div>
					</div>
				)}

				<div className="flex justify-center gap-4">
					{!showVotes ? (
						<Button
							onClick={onReveal}
							disabled={!selectedCard}
							variant="outline"
						>
							Revelar Votos
						</Button>
					) : (
						<Button onClick={onReset} className="bg-gray-600 hover:bg-gray-700">
							Nova Votação
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
