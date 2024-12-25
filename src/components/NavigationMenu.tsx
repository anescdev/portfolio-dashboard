import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "./NavigationMenu.css";
import { useEffect, useState } from "react";
import Translatable from "./Translatable";

export default function NavigationMenu() {
    const location = useLocation()
    const [title, setTitle] = useState("");
    const [unfold, setUnfold] = useState(false);
    useEffect(() => {
        const titleFromState: string = location.state?.title ?? location.pathname.substring(1).replace("/", ".");
        const titleParts = titleFromState.trim().split(".");
        let titleId = titleParts.splice(0, 1)[0]
        if (titleId === "") titleId = "general";
        if (titleParts.length > 0) titleId += `.${titleParts.join(".")}`;
        setTitle(`titles/${titleId}`);
    }, [location])
    return (
        <nav role="button" className="button" onClick={() => setUnfold(actualUnfold => !actualUnfold)}>
            <p><FontAwesomeIcon icon="bars" size="xl"/><Translatable translateKey={title}/></p>
            <ul className={`box ${unfold ? "unfolded" : ""}`}>
                <li>
                    <FontAwesomeIcon icon="table" size="xl" fixedWidth/>
                    <Link to="/" state={{ title: "general" }}><Translatable translateKey="nav/general"/></Link>
                </li>
                <li>
                    <FontAwesomeIcon icon="briefcase" size="xl" fixedWidth/>
                    <Link to="/experience" state={{ title: "experience" }}><Translatable translateKey="nav/experience"/></Link>
                </li>
                <li>
                    <FontAwesomeIcon icon="microchip" size="xl" fixedWidth/>
                    <Link to="/technology" state={{ title: "technology" }}><Translatable translateKey="nav/technology"/></Link>
                </li>
                <li>
                    <FontAwesomeIcon icon="building" size="xl" fixedWidth/>
                    <Link to="/company" state={{ title: "company" }}><Translatable translateKey="nav/company"/></Link>
                </li>
            </ul>
        </nav>
    )
}