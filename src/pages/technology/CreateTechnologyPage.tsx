import styles from "./CreateTechnologyPage.module.css";

import LoginProvider from "@utils/LoginProvider";
import CreateTechnologyForm from "@components/form/CreateTechnologyForm";

export default function CreateTechnologyPage() {
    return (
        <LoginProvider>
            <div className={`${styles.createTechnologyPage}`}>
                <CreateTechnologyForm />
            </div>
        </LoginProvider>
    )
}