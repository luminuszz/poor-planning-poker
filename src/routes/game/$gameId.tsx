import { PlanningPokerControls } from "@/components/game/planning-poker-controls.tsx";
import { PlanningPokerTable } from "@/components/game/planning-poker-table.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game/$gameId")({
	component: RouteComponent,
});

const users = [
	{
		id: 1,
		name: "Ana Silva",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 2,
		name: "Bruno Costa",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 10,
		name: "Bruno Costa",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 30,
		name: "Bruno Costa",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 50,
		name: "Bruno Costa",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 3,
		name: "Carla Mendes",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 4,
		name: "Daniel Oliveira",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 5,
		name: "Elena Santos",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 6,
		name: "Fernando Lima",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
	{
		id: 7,
		name: "Gabriela Rocha",
		avatar: "/placeholder.svg?height=40&width=40",
		vote: null,
	},
];

function RouteComponent() {
	return (
		<div className="px-10 max-w-[1300px] m-auto mt-10 space-y-4">
			<PlanningPokerTable participants={users} showVotes={false} />
			<PlanningPokerControls
				selectedCard={null}
				onVote={() => {}}
				onReveal={() => {}}
				onReset={() => {}}
				showVotes={false}
			/>
		</div>
	);
}
