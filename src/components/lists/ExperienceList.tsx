import styles from "./ExperienceList.module.css";

import ExperienceItem from "@components/items/ExperienceItem";
import Translatable from "@components/Translatable";
import { Experience } from "@context/experience/models/Experience.model";
import { findPersonalExperiences, findWorkingExperiences } from "@context/experience/service";
import { ChangeEventHandler, useEffect, useState } from "react"

export default function WorkingExperienceList() {
    const [experiences, setExperience] = useState<Experience[]>([]);
    const [experienceType, setExperienceType] = useState<"personal" | "working">("personal");

    const onChangeExperienceType: ChangeEventHandler<HTMLSelectElement> = (changeEvent) => {
        const newValue = changeEvent.target.value.trim();
        if (!(newValue === "personal" || newValue === "working")) return;
        setExperienceType(newValue);
    }

    const onDeleteItem = (id: Experience["id"]) => {
        // Hacer que se borre el elemento del array
        return () => {
            setExperience(oldExperencies => oldExperencies.filter(oldExperience => oldExperience.id !== id));
        }
    }

    useEffect(() => {
        if (experienceType === "personal") {
            findPersonalExperiences(1, 25).then(setExperience);
        } else {
            findWorkingExperiences(1, 25).then(setExperience);
        }
    }, [experienceType]);

    return (
        <div>
            <section onChange={onChangeExperienceType}>
                <select>
                    <option value="personal"><Translatable translateKey="labels/experience.filter.personal" /></option>
                    <option value="working"><Translatable translateKey="labels/experience.filter.working" /></option>
                </select>
            </section>
            <ul className={`${styles.experienceList}`}>
                {experiences.map(experience => <ExperienceItem key={experience.id} experience={experience} onDelete={onDeleteItem(experience.id)} />)}
            </ul>
        </div>
    )
}