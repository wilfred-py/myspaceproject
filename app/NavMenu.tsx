import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
    return (
        // Accessing nav class from styles object
        <nav className={styles.nav}>
            {/* Clicking image takes user back to route URL; <Link /> replaces <a> tags and uses CSR to make app feel faster */}
            <Link href={"/"}>
                {/* Replaces HTML <img>; allows NextJS to automatically optimise your images */}
                <Image
                    src="/logo.svg"
                    width={216}
                    height={30}
                    alt="NextSpace Logo"
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link href={"/users"}>Users</Link>
                </li>
            </ul>
        </nav>
    );
}
