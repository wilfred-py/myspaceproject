import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Access users through users API route

// Export function of a GET request
// Query all users from the database and return them as a JSON object
export async function GET(request: Request) {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json(users);
}
