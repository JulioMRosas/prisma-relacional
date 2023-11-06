import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request) => {
    try {
        const shoppingCarts = await prisma.shoppingCart.findMany();
        return NextResponse.json(shoppingCarts);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}