"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/provider/shopProvider';
import { addProduct } from '@/libs/addProduct';

const ProductForm = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [error, setError] = useState(false);
    const { product, setProduct} = useShopContext();
    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([productName, productDescription, productPrice].includes('')) {
        setError(true);
        return
        }

        setError(false);

        const newProduct = {
            productName,
            productDescription,
            productPrice
        }

        if (product === null) {
        addProduct(newProduct);
        setProduct(null);
        route.push("/registerproduct");
        }
        else if (product !== null) {
        updateProduct(newProduct, product.id);
        setProduct(null);
        route.push("/");
        }
    }

    return (
        <div className='w-[50%] mt-4'>
        <h2 className='text-center text-[#333] mb-4'>
            {
                product ? "Edita al producto" : "Registra un producto"
            }
        </h2>
        <form className='flex flex-col space-y-4'>
            <div className='border-dotted border-b-2 border-[#ccc]'></div>
            { error && <div className='bg-red-500 p-2 rounded-md font-bold'>Error: Debes llenar todos los campos</div> }
            <label htmlFor="productName" className='text-[#333]'>Nombre del producto</label>
            <input type="text" placeholder='ej. Gansito' id='productName' className='p-2 rounded-md border border-[#ccc]' value={productName} onChange={e => setProductName(e.target.value)}/>
            <label htmlFor="productDescription" className='text-[#333]'>Descripción</label>
            <input type="text" placeholder='Recuerdame' id='productDescription' className='p-2 rounded-md border border-[#ccc]' value={productDescription} onChange={e => setProductDescription(e.target.value)}/>
            <label htmlFor="productPrice" className='text-[#333]'>Precio</label>
            <input type="text" placeholder='20.00' id='productPrice' className='p-2 rounded-md border border-[#ccc]' value={productPrice} onChange={e => setProductPrice(e.target.value)}/>
            {
                product === null ? (        
                    <div className='flex justify-center'>
                    <input type="submit" value="Registrar" className='font-bold text-[#fff] bg-[#00A1C6] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
                    </div>) : (
                    <div className='flex justify-center'>
                    <input type="submit" value="Editar" className='font-bold text-[#fff] bg-[#00A1C6] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
                    </div>
                )
            }
        </form>
        </div>
    )
}

export default ProductForm;