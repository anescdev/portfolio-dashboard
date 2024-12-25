import styles from "./CreateExperiencePage.module.css";

import CreatePersonalExperienceForm from "@components/form/CreatePersonalExperienceForm";
import CreateWorkingExperienceForm from "@components/form/CreateWorkingExperienceForm";
import { ChangeEventHandler, useState } from "react";
import Translatable from "@components/Translatable";
import LoginProvider from "@utils/LoginProvider";

export default function CreateExperiencePage() {
    const [experienceType, setExperienceType] = useState<"personal" | "working">("personal");

    const changeForm: ChangeEventHandler<HTMLSelectElement> = (changeValEvent) => {
        const newValue = changeValEvent.target.value.trim();
        if (!(newValue === "personal" || newValue === "working")) return;
        setExperienceType(newValue);
    }

    return (
        <LoginProvider>
            <div>
                <select id="experience-type" onChange={changeForm}>
                    <option value="personal"><Translatable translateKey="labels/experience.filter.personal"/></option>
                    <option value="working"><Translatable translateKey="labels/experience.filter.working"/></option>
                </select>
            </div>
            <div className={`${styles.createExperiencePage}`}>
                {
                    experienceType === "working" ? <CreateWorkingExperienceForm /> : <CreatePersonalExperienceForm />
                }
            </div>
        </LoginProvider>
    )
}