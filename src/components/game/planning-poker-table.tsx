import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export type Participant = {
	id: number;
	name: string;
	avatar: string;
	vote: string | null;
};

type PlanningPokerTableProps = {
	participants: Participant[];
	showVotes: boolean;
};

export function PlanningPokerTable({
	participants,
	showVotes,
}: PlanningPokerTableProps) {
	const topParticipants = participants.slice(0, 3);
	const rightParticipants = participants.slice(3, 5);
	const bottomParticipants = participants.slice(5, 8);
	const leftParticipants = participants.slice(8, 10);

	return (
		<div className="relative mb-8">
			<div className="relative bg-blue-900 border-4 border-blue-900 rounded-3xl h-[500px] shadow-xl">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<h3 className="text-xl font-bold text-white">Aguardando votação</h3>
					{showVotes && (
						<div className="mt-4 bg-black/30 p-3 rounded-lg">
							<p className="text-lg">Média: {calculateAverage(participants)}</p>
						</div>
					)}
				</div>

				{/* Participantes no topo */}
				<div className="absolute top-4 left-0 right-0 flex justify-center gap-4">
					{topParticipants.map((participant) => (
						<ParticipantCard
							key={participant.id}
							participant={participant}
							showVote={showVotes}
						/>
					))}
				</div>

				{/* Participantes à direita */}
				<div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
					{rightParticipants.map((participant) => (
						<ParticipantCard
							key={participant.id}
							participant={participant}
							showVote={showVotes}
						/>
					))}
				</div>

				{/* Participantes na parte inferior */}
				<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
					{bottomParticipants.map((participant) => (
						<ParticipantCard
							key={participant.id}
							participant={participant}
							showVote={showVotes}
						/>
					))}
				</div>

				{/* Participantes à esquerda */}
				<div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
					{leftParticipants.map((participant) => (
						<ParticipantCard
							key={participant.id}
							participant={participant}
							showVote={showVotes}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function ParticipantCard({
	participant,
	showVote,
}: { participant: Participant; showVote: boolean }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<Avatar className="h-12 w-12 border-2 border-white">
				<AvatarImage
					src={participant.avatar || "/placeholder.svg"}
					alt={participant.name}
				/>
				<AvatarFallback>{participant.name.substring(0, 2)}</AvatarFallback>
			</Avatar>
			<div className="text-center">
				<p className="text-sm font-medium text-white">{participant.name}</p>
				<div className="mt-1">
					{participant.vote ? (
						<Card
							className={`w-10 h-14 flex items-center justify-center mx-auto ${!showVote ? "bg-blue-600" : "bg-white"}`}
						>
							<CardContent className="p-0 flex items-center justify-center h-full">
								{showVote ? (
									<span className="text-xl font-bold text-black">
										{participant.vote}
									</span>
								) : (
									<span className="text-xl font-bold text-white">?</span>
								)}
							</CardContent>
						</Card>
					) : (
						<div className="w-10 h-14 border border-dashed border-gray-400 rounded-md mx-auto" />
					)}
				</div>
			</div>
		</div>
	);
}

function calculateAverage(participants: Participant[]): string {
	const numericVotes = participants
		.filter((p) => p.vote && !Number(p.vote))
		.map((p) => Number(p.vote));

	if (numericVotes.length === 0) return "-";

	const sum = numericVotes.reduce((acc, vote) => acc + vote, 0);
	return (sum / numericVotes.length).toFixed(1);
}
