"use client";
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUserContext = () => {
    return useContext(userContext);
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}