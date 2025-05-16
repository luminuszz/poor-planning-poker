import { atom } from "jotai";

export type Player = {
	id: number;
	name: string;
	avatar: string;
	vote: string | null;
};

export type Room = {
	id: string;
	name: string;
	ownerId: string;
	showVotes: boolean;
};

export const roomAtom = atom<Room | null>(null);

export const playersAtom = atom<Player[]>([]);
