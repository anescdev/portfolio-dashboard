import { deleteCompany } from "@context/company/service"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Item.module.css";

export default function CompanyItem({
    id,
    name,
    onDelete
}: {
    id: number,
    name: string,
    onDelete?: (() => void) | (() => Promise<void>)
}) {
    const onClickDelete = async () => {
        try {
            await deleteCompany(id);
            if(onDelete != undefined) onDelete();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <article className={`${styles.item} box`}>
            <FontAwesomeIcon icon="building" fixedWidth size="3x"/>
            <h2>{name}</h2>
            <button onClick={onClickDelete}><FontAwesomeIcon icon={"trash"} fixedWidth></FontAwesomeIcon></button>
        </article>
    )
}