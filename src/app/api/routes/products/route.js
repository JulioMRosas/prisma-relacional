import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request) => {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}

export const POST = async (request) => {
    try {
        const { productName, productDescription, productPrice, shoppingCart } = await request.json();
        const newProduct = await prisma.product.create({
            data: {
                productName,
                productDescription,
                productPrice: parseFloat(productPrice),
            }
        })
        return NextResponse.json(newProduct);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {error: error.stack},
                {status: 500}
            )
        }
    }
}