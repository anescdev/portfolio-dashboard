import InputIcon from "@components/InputIcon";
import Translatable from "@components/Translatable";
import { CreateCompanyDto } from "@context/company/models/dto/CreateCompanyDto";
import { createCompany } from "@context/company/service";
import { useTranslatable } from "@hooks/useTranslatable";
import { useNavigate } from "react-router-dom";

import styles from "./CreateCompanyForm.module.css";

export default function CreateCompanyForm() {
    const navigate = useNavigate();
    const translate = useTranslatable();
    const onSubmit = (formData: FormData) => {
        if (!formData.has("companyName")) throw new Error("Nombre vacío");
        const createCompanyDto: CreateCompanyDto = {
            name: formData.get("companyName") as string
        }
        createCompany(createCompanyDto).then(createdCompany => {
            navigate("/company", {
                state: {
                    type: "company",
                    data: createdCompany
                }
            })
        }).catch(err => console.error(err))
    }
    return (
        <form action={onSubmit} className={`${styles.form} box`}>
            <InputIcon id="companyName" name="companyName" icon="building" placeholder={translate("labels/company.name")} />
            <button type="submit"><Translatable translateKey="buttons/company.create" /></button>
        </form>
    );
}