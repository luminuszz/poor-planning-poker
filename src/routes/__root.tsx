import { ThemeProvider } from "@/components/contexts/theme-provider.tsx";
import { Navbar } from "@/components/navbar";
import { storageKey, userAtom } from "@/store/user.ts";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Provider, useAtom } from "jotai";
import { useEffect } from "react";

export const Route = createRootRoute({
	component: () => {
		const [, setUser] = useAtom(userAtom);

		useEffect(() => {
			if (!localStorage.getItem(storageKey)) {
				setUser({
					id: faker.string.uuid(),
					name: faker.person.fullName(),
					avatarImgUrl: faker.image.avatar(),
				});
			}
		}, [setUser]);

		return (
			<Provider>
				<ThemeProvider defaultTheme="dark">
					<main className="h-screen bg-background">
						<Navbar />
						<Outlet />
						<TanStackRouterDevtools />
					</main>
				</ThemeProvider>
			</Provider>
		);
	},
});
