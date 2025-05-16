import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { userAtom } from "@/store/user.ts";
import { Link } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import type { PropsWithChildren, ReactNode } from "react";

export type NavLinkProps = PropsWithChildren<{
	to: string;
	children: ReactNode;
	isActive: boolean;
}>;

export function NavLink({ children, to, isActive }: NavLinkProps) {
	return (
		<Link
			data-active={isActive}
			to={to}
			className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
		>
			{children}
		</Link>
	);
}

export function Navbar() {
	const user = useAtomValue(userAtom);
	return (
		<header className="border-b">
			<div className="flex items-center space-x-4 lg:space-x-6 justify-between px-2">
				<nav className="flex items-center gap-2">
					<img src="/logo.png" alt="logos" className="size-20" />
					<h3 className="text-foreground text-xl">Poor planning poker</h3>
				</nav>

				<nav className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src={user?.avatarImgUrl} alt={user?.name} />
					</Avatar>
					<p>{user?.name}</p>
				</nav>
			</div>
		</header>
	);
}
