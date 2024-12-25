import { CreateTechnologyDTO } from "@context/technology/models/dto/CreateTechnologyDto"
import { createTechnology } from "@context/technology/service";
import { useNavigate } from "react-router-dom";
import styles from "./CreateTechnologyForm.module.css";
import InputIcon from "@components/InputIcon";
import { useTranslatable } from "@hooks/useTranslatable";
import Translatable from "@components/Translatable";

export default function CreateTechnologyForm() {
    const navigate = useNavigate();
    const translate = useTranslatable();
    const onSubmit = (formData: FormData) => {
        if (!formData.has("techName")) throw new Error("Nombre vacío");
        if (!formData.has("techLogo")) throw new Error("Logo vacío");

        const formDataJson: Required<CreateTechnologyDTO> = {
            techName: formData.get("techName") as string,
            techLogo: formData.get("techLogo") as File
        }
        
        createTechnology(formDataJson).then((tech) => {
            if (tech != undefined) {
                navigate({ pathname: '/technology' }, {
                    state: {
                        type: "tech",
                        data: tech
                    }
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
    return (
        <form action={onSubmit} className={`box ${styles.form}`}>
            <InputIcon name="techName" id="techName" icon="tag" required placeholder={translate("labels/technology.name")}/>
            <InputIcon type="file" name="techLogo" id="techLogo" icon="image" required/>
            <button type="submit"><Translatable translateKey="buttons/technology.create"/></button>
        </form>
    )
}