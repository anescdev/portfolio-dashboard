import styles from "./TechnologyPage.module.css";

import TechnologyList from "@components/lists/TechnologyList";
import IconLinkbutton from "@components/IconLinkButton";
import { useTranslatable } from "@hooks/useTranslatable";
import LoginProvider from "@utils/LoginProvider";

export default function TechnologyPage() {
    const translate = useTranslatable();

    return (
        <LoginProvider>
            <div>
                <IconLinkbutton to="/technology/create" icon="add" label={translate("buttons/technology.create")} />
            </div>
            <div className={`${styles.technologyPage}`}>
                <TechnologyList />
            </div>
        </LoginProvider>
    );
}