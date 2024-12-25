import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTechnology } from "@context/technology/service";
import TechnologyLogo from "@components/TechnologyLogo";
import { Technology } from "@context/technology/models/technology.model";
import styles from "./Item.module.css";

export default function TechologyItem({
    technology,
    onDelete
}: {
    technology: Technology
    onDelete?: (() => void) | (() => Promise<void>)
}) {
    const onClickDelete = async () => {
        try {
            await deleteTechnology(technology.id);
            if (onDelete != undefined) onDelete();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
    return (
        <article className={`box ${styles.item}`}>
            <TechnologyLogo technology={technology}/>
            <h2>{technology.name}</h2>
            <button onClick={onClickDelete}><FontAwesomeIcon icon={"trash"} /></button>
        </article>
    );
}