import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (response) => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}

export const POST = async (response) => {
    try {
        const { username, password, email } = await response.json();
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
                email
            }
        })
        return NextResponse.json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}