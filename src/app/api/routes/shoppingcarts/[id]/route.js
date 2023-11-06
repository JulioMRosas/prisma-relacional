import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, { params: {id} }) => {
    try {
        const shoppingCart = await prisma.shoppingCart.findFirst({
            where: {
                id
            }
        })
    
        return NextResponse.json(shoppingCart);
        
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
        const deletedShoppingCart = await prisma.shoppingCart.delete({
            where: {
                id
            }
        })
    
        return NextResponse.json(deletedShoppingCart);
        
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}