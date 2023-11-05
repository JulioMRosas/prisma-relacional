import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, { params: {id} }) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })
    
        return NextResponse.json(user);
        
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}

export const DELETE = async (request, { params: {id} }) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id
            }
        })
    
        return NextResponse.json(deletedUser);
        
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}

export const PUT = async (request, { params: {id} }) => {
    const { username, email, password } = await request.json();

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                username,
                email,
                password
            }
        })
    
        return NextResponse.json(updatedUser);
        
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}