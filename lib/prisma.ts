// import PrismaClient, initialise it, and then export as variable so it can be reused wherever we want in the application

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
