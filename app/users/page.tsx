import { prisma } from "@/lib/prisma";
import styles from "../page.module.css";
import UserCard from "@/components/UserCard/UserCard";

export default async function Users() {
    // this will be an array of users
    const users = await prisma.user.findMany();
    return (
        <div className={styles.grid}>
            {/* map over array of users and render a shared-server component called UserCard (a basic UI component that display user avatar and username) */}
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </div>
    );
}
