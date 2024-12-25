import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, To } from "react-router-dom";
import styles from "./IconLinkbutton.module.css";

export default function IconLinkbutton({
    to,
    icon,
    label
}: {
    to: To,
    icon: IconProp,
    label: string
}) {
    return (
        <Link className={`button ${styles.iconLink}`} to={to}><FontAwesomeIcon icon={icon} fixedWidth/>{label}</Link>
    );
}