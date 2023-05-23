import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const ineter = Inter({ subsets: ["latin"] });

export default async function Home() {
    const session = await getServerSession();
    // session === null if the user is not logged in
    if (!session) {
        redirect("/api/auth/signin");
    }

    return <main></main>;
}
