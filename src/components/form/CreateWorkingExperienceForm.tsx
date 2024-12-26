import { Company } from "@context/company/models/company.model";
import { findCompany } from "@context/company/service";
import { CreateWorkingExperienceDTO } from "@context/experience/models/dto/CreateWorkingExperience.dto";
import { createWorkingExperience } from "@context/experience/service";
import { Technology } from "@context/technology/models/technology.model";
import { findTechnology } from "@context/technology/service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Translatable from "@components/Translatable";
import InputIcon from "@components/InputIcon";
import { useTranslatable } from "@hooks/useTranslatable";
import styles from "./CreateExperienceForm.module.css";
import SelectIcon from "@components/SelectIcon";

export default function CreateWorkingExperienceForm() {
    const [technologies, setTechnologies] = useState<Technology[] | undefined>(undefined);
    const [companies, setCompanies] = useState<Company[] | undefined>(undefined);
    const navigate = useNavigate();
    const translate = useTranslatable();

    useEffect(() => {
        findTechnology(1, 25).then(setTechnologies);
        findCompany(1, 25).then(setCompanies);
    }, []);
    const formAction = (formData: FormData) => {
        console.log(typeof formData.get("finish-date"));

        const createWorkingExperienceData: CreateWorkingExperienceDTO = {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            technologies: formData.getAll("techs").map(val => parseInt(val as string)) as number[],
            startDate: new Date(formData.get("start-date") as string),
            finishDate: formData.has("finish-date") && formData.get("finish-date") !== "" ? new Date(formData.get("finish-date") as string) : undefined,
            company: parseInt(formData.get("company") as string)
        }

        createWorkingExperience(createWorkingExperienceData).then(workingExperience => {
            navigate("/experience", {
                state: {
                    type: "working",
                    data: workingExperience
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
            {
                companies === undefined ?
                    <p>Loading companies...</p> :
                    <SelectIcon name="company" id="company" icon="building" required>
                        {...companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>)}
                    </SelectIcon>
            }
            <InputIcon type="date" name="start-date" id="start-date" placeholder="Start date" icon="calendar" required />
            <InputIcon type="date" name="finish-date" id="finish-date" placeholder="Finish date" icon="calendar" />
            <button type="submit"><Translatable translateKey="buttons/experience.working.create" /></button>
        </form>
    );
}