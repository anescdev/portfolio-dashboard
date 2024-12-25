import styles from "./ExperiencePage.module.css";

import WorkingExperienceList from "@components/lists/ExperienceList";
import IconLinkbutton from "@components/IconLinkButton";
import { useTranslatable } from "@hooks/useTranslatable";
import LoginProvider from "@utils/LoginProvider";


export default function ExperiencePage() {
    const translate = useTranslatable();
    return (
        <LoginProvider>
            <div>
                <IconLinkbutton to="/experience/create" icon="add" label={translate("buttons/experience.create")} />
            </div>
            <div className={`${styles.experiencePage}`}>
                <WorkingExperienceList />
            </div>
        </LoginProvider>
    )
}