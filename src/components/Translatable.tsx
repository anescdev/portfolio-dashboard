import { useTranslatable } from "@hooks/useTranslatable"

export default function Translatable({
    translateKey
}: {
    translateKey: string
}) {
    const translate  = useTranslatable();
    return (<>{translate(translateKey)}</>)
}