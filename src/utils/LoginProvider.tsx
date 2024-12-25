import { useAuthStatus } from "@hooks/AuthStatus";
import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginProvider(
    {
        children
    }:
    {
        children: ReactNode[] | ReactNode
    }
) {
    const isLogged = useAuthStatus();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        sessionStorage.setItem("lastUrl", location.pathname);
        if(!isLogged) navigate("/login");
    }, [isLogged])
    return children;
}