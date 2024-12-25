import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./InputIcon.module.css"
import { HTMLInputTypeAttribute } from "react"

export default function InputIcon(
    {
        name,
        id,
        placeholder,
        icon, 
        required,
        type = "text"
    }: {
        name?: string,
        id?: string,
        placeholder?: string
        icon: IconProp
        required?: boolean
        type?: HTMLInputTypeAttribute
    }
) {
    return (
        <span className={`${styles.textIconInput}`}>
            <span className={styles.icon}><FontAwesomeIcon icon={icon} fixedWidth/></span>
            <input type={type} id={id} name={name} placeholder={placeholder} required={required}/>
        </span>
    )
}