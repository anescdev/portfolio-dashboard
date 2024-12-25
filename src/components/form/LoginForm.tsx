import Translatable from "@components/Translatable";
import { HttpClient } from "@context/shared/client/http.client";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import InputIcon from "@components/InputIcon";
import { useTranslatable } from "@hooks/useTranslatable";

export default function LoginForm() {
    const navigate = useNavigate();
    const translate = useTranslatable();
    const loginAction = async (formData: FormData) => {
        const username = formData.get("username")?.toString() ?? "", password = formData.get("password")?.toString() ?? "";
        if (username === "") throw new Error("Usuario vacío");
        if (password === "") throw new Error("Contraseña vacío");
        if (await HttpClient.instance().login(username, password)) navigate(sessionStorage.getItem("lastUrl") ?? "/", { replace: true });
    }
    return (
        <form action={loginAction} className={`${styles.form} box`}>
            <InputIcon icon="user" id="username" name="username" placeholder={translate("auth/user")}/>
            <InputIcon type="password" icon="key" id="password" name="password" placeholder={translate("auth/password")} />
            <button type="submit"><Translatable translateKey="buttons/login"/></button>
        </form>
    )
}