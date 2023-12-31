"use client";
import { createContext, useContext, useState } from "react";

const shopContext = createContext();

export const useShopContext = () => {
    return useContext(shopContext);
}

export const ShopContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
    const [shoppingCart, setShoppingCart] = useState(null);

    return (
        <shopContext.Provider value={{ user, setUser, product, setProduct, shoppingCart, setShoppingCart }}>
            {children}
        </shopContext.Provider>
    )
}