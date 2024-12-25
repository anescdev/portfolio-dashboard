import { useEffect, useState } from "react";
import { Technology } from "@context/technology/models/technology.model";
import { findTechnology } from "@context/technology/service";
import TechologyItem from "@components/items/TechnologyItem";
import styles from "./TechnologyList.module.css";

export default function TechnologyList() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [actualPage, setActualPage] = useState(1);
    const onDelete = (id: number) => () => {
        setTechnologies(techs => techs.filter(tech => tech.id !== id));
    }
    useEffect(() => {
        findTechnology(actualPage, 25).then(foundedTechs => setTechnologies([...foundedTechs]))
    }, [actualPage]);
    return <ul className={`${styles.technologyList}`}>
        {technologies.map(tech => <TechologyItem
            key={tech.id}
            technology={tech}
            onDelete={onDelete(tech.id)} />)}
    </ul>;
};