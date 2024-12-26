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
        cols = 30,
        type = "text"
    }: {
        name?: string,
        id?: string,
        placeholder?: string
        icon: IconProp
        required?: boolean
        cols?: number
        type?: HTMLInputTypeAttribute | "textarea"
    }
) {
    return (
        <span className={`${styles.textIconInput}`}>
            <span className={styles.icon}><FontAwesomeIcon icon={icon} fixedWidth/></span>
            {
                type === "textarea" ?
                 <textarea id={id} name={name} placeholder={placeholder} required={required} cols={cols}></textarea>:
                <input type={type} id={id} name={name} placeholder={placeholder} required={required}/> 
            }
        </span>
    )
}