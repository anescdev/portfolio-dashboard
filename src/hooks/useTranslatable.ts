import { useContext } from "react";
import { TranslationContext } from "../utils/TranslationContext";

const VALID_GROUPS = [
    "titles",
    "nav",
    "buttons",
    "labels",
    "auth"
]
/**
 * Hook que devuelve un método que permite obtener la traducción actual a partir de la clave pasada
 * @returns 
 */
export function useTranslatable() {
    const loadedTranslation = useContext(TranslationContext);
    return (translateKey: string) => {
        if (typeof translateKey !== "string") throw new Error("Invalid translateKey type, must be a string")
        if (loadedTranslation === undefined) {
            console.error("No translations loaded");
            return translateKey;
        }
        const [group, translationKey] = translateKey.trim().split("/");
        if (!VALID_GROUPS.includes(group)) return translateKey;   
        return loadedTranslation[group][translationKey] ?? translateKey;
    }
}