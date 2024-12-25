import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStatus } from "@hooks/AuthStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Translatable from "./Translatable";

export default function UserAuth() {
    const loggedStatus = useAuthStatus();
    const [isLogged, setIsLogged] = useState(loggedStatus);

    useEffect(() => {
        setIsLogged(loggedStatus);
    }, [loggedStatus])

    return <p><FontAwesomeIcon icon="user" size="xl" fixedWidth />{isLogged ? <Translatable translateKey="auth/started"/> : <Link to="/login"><Translatable translateKey="buttons/login"/></Link>}</p>;
}