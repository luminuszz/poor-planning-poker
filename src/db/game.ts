import { createRef } from "@/lib/firebase.ts";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { set } from "firebase/database";

export type CreateGameRoomParams = {
	name: string;
	ownerId: string;
};

export async function createGameRoom(data: CreateGameRoomParams) {
	const roomId = faker.string.nanoid();
	const gameRoomRef = createRef(`rooms/${roomId}`);

	await set(gameRoomRef, {
		id: roomId,
		name: data.name,
		ownerId: data.ownerId,
	});

	return {
		roomId,
	};
}
