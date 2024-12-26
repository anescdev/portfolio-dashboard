import styles from "./CreateExperienceForm.module.css";

import { CreatePersonalExperienceDTO } from "@context/experience/models/dto/CreatePersonalExperience.dto";
import { createPersonalExperience } from "@context/experience/service";
import { Technology } from "@context/technology/models/technology.model";
import { findTechnology } from "@context/technology/service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Translatable from "@components/Translatable";
import InputIcon from "@components/InputIcon";
import { useTranslatable } from "@hooks/useTranslatable";
import SelectIcon from "@components/SelectIcon";


export default function CreatePersonalExperienceForm() {
    const [technologies, setTechnologies] = useState<Technology[] | undefined>(undefined);
    const navigate = useNavigate();
    const translate = useTranslatable();
    useEffect(() => {
        findTechnology(1, 25).then(technologies => setTechnologies(technologies));
    }, []);
    const formAction = (formData: FormData) => {
        const createPersonalExperienceData: CreatePersonalExperienceDTO = {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            technologies: formData.getAll("techs").map(val => parseInt(val as string)) as number[],
            projectLink: new URL(formData.get("link") as string)
        }

        createPersonalExperience(createPersonalExperienceData).then(personalExperience => {
            navigate("/experience", {
                state: {
                    type: "personal",
                    data: { ...personalExperience, projectLink: personalExperience.projectLink.toString() }
                }
            })
        }).catch(console.error);
    }
    return (
        <form action={formAction} className={`box ${styles.form}`}>
            <InputIcon type="text" name="name" id="name" placeholder={translate("labels/experience.name")} icon="tag" required />
            <InputIcon type="textarea" name="description" id="description" placeholder={translate("labels/experience.description")} icon="newspaper" required />
            {
                technologies === undefined ?
                    <p>Loading technologies...</p> :
                    <SelectIcon id="techs" name="techs" icon="microchip" multiple required>
                        {...technologies.map(tech => <option key={tech.id} value={tech.id}>{tech.name}</option>)}
                    </SelectIcon>
            }
            <InputIcon type="url" name="link" id="link" placeholder={translate("labels/experience.personal.link")} icon="link" required />
            <button type="submit"><Translatable translateKey="buttons/experience.personal.create" /></button>
        </form>
    );
}