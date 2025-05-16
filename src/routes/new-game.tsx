import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { createGameRoom } from "@/db/game.ts";
import { userAtom } from "@/store/user.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import { type FormEvent, useState } from "react";

export const Route = createFileRoute("/new-game")({
	component: RouteComponent,
});

function RouteComponent() {
	const user = useAtomValue(userAtom);

	const navigate = Route.useNavigate();

	const [name, setName] = useState("");

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!user) return;

		const { roomId } = await createGameRoom({
			ownerId: user.id,
			name: name,
		});

		navigate({
			to: "/game/$gameId",
			params: {
				gameId: roomId,
			},
		});
	}

	return (
		<div className="m-auto max-w-2xl w-full">
			<div className="flex-1 h-screen flex w-full justify-center items-center">
				<Card className="w-full ">
					<CardContent>
						<form className="space-y-4 w-full" onSubmit={handleSubmit}>
							<Label className="text-2xl">Nome da sala</Label>
							<Input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="h-15"
								placeholder="Sala de guerra"
							/>
							<Button
								disabled={!name}
								size="lg"
								className="w-full text-primary-foreground text-md cursor-pointer"
								variant="default"
							>
								Criar
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
