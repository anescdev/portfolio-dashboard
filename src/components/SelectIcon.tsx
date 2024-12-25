import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./SelectIcon.module.css"

export default function SelectIcon(
    {
        name,
        id,
        icon,
        required,
        multiple,
        children
    }: {
        name?: string,
        id?: string,
        placeholder?: string
        icon: IconProp
        required?: boolean
        multiple?: boolean
        children: React.ReactNode[]
    }
) {
    return (
        <span className={`${styles.textIconSelect}`}>
            <span className={`${styles.icon}`}>
                <FontAwesomeIcon icon={icon} fixedWidth />
            </span>
            <select id={id} name={name} required={required} multiple={multiple}>
                {children}
            </select>
        </span>
    )
}