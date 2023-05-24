import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
    params: {
        id: string;
    };
}

// can't hardcode static meta data because dynamic route means dynamic user data
// need to export async generateMetadata function
// query dynamic data to generate the metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
    // id in URL will correspond to id of the user in the database
    // this allows us to use Prisma in this server component to grab unique user row from the user's table in the database
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    const { name, bio, image } = user ?? {};

    return (
        <div>
            <h1>{name}</h1>

            <img
                width={300}
                src={image ?? "mememan.webp"}
                alt={`${name}'s profile`}
            />
            <h3>Bio</h3>
            <p>{bio}</p>
        </div>
    );
}
