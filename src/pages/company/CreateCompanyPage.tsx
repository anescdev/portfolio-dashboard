import styles from "./CreateCompanyPage.module.css";

import CreateCompanyForm from "@components/form/CreateCompanyForm";
import LoginProvider from "@utils/LoginProvider";

export default function CreateCompanyPage() {
    return (
        <LoginProvider>
            <div className={`${styles.createCompanyPage}`}>
                <CreateCompanyForm />
            </div>
        </LoginProvider>
    );
}