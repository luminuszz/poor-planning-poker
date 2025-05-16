import { atomWithStorage } from "jotai/utils";

export type User = {
	id: string;
	name: string;
	avatarImgUrl: string;
};

export const storageKey = "poor-planning-poker@user";

export const userAtom = atomWithStorage<User | null>(storageKey, null);
