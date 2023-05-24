"use client";

// useSession hook from next-auth
// this hook allows us to access the current session and the user status (authenticated, loading, unauthenticated)
// user status will help us determine what UI to load
import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    console.log(session, status);

    if (status === "authenticated") {
        return <>{children}</>;
    } else {
        return <>Not logged in to see this</>;
    }
}
