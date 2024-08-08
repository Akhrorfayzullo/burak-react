import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import { error } from "console";

interface Globalnterface {
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
}

export const GlobalContext  = createContext<Globalnterface | undefined>(
    undefined
)

export const useGlobals = () => {
    const context  = useContext(GlobalContext);
    if(context === undefined ) throw new Error("useGlobals with it provider")
    return context;
}