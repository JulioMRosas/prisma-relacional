import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, { params: {id} }) => {
    try {
        const product = await prisma.product.findFirst({
            where: {
                id
            }
        })
    
        return NextResponse.json(product);
        
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
        const deletedProduct = await prisma.product.delete({
            where: {
                id
            }
        })
    
        return NextResponse.json(deletedProduct);
        
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
    const { productName, productDescription, productPrice } = await request.json();

    try {
        const updatedProduct = await prisma.product.update({
            where: {
                id
            },
            data: {
                productName,
                productDescription,
                productPrice: parseFloat(productPrice)
            }
        })
    
        return NextResponse.json(updatedProduct);
        
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}