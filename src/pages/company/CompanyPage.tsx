import styles from "./CompanyPage.module.css";

import CompanyList from "@components/lists/CompanyList";
import IconLinkbutton from "@components/IconLinkButton";
import { useTranslatable } from "@hooks/useTranslatable";
import LoginProvider from "@utils/LoginProvider";

export default function CompanyPage() {
    const translate = useTranslatable();
    return (
        <LoginProvider>
            <div>
                <IconLinkbutton to="/company/create" icon="add" label={translate("buttons/company.create")}/>
            </div>
            <div className={styles.companyPage}>
                <CompanyList />
            </div>
        </LoginProvider>
    )
}