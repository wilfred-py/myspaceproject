"use client";

import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
};

// export function that has a children prop wrapped by this session provider
// this allows any client side components nested below this to access the current user
export default function AuthProvider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>;
}
