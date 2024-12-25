import LoginForm from "@components/form/LoginForm";
import styles from "./LoginPage.module.css";
import { useAuthStatus } from "@hooks/AuthStatus";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const isLogged = useAuthStatus();
    
    if(isLogged) {
        return <Navigate to={sessionStorage.getItem("lastUrl") ?? "/"}/>
    }

    return (
        <div className={styles.loginPage}>
            <LoginForm/>
        </div>
    );
}