import { createContext } from "react";

export const context = createContext();


export const AuthContext = ({context, children}) => {
    return(
        <>
        <context.Provider context = {context}> 

            {children}
        </context.Provider>
        </>
    )
}