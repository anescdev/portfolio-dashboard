import { Technology } from "@context/technology/models/technology.model";

export default function TechnologyLogo({
    technology,
    width,
    className
}: {
    technology: Technology
    width?: number
    className?: string
}) {
    return <img src={`${import.meta.env.VITE_API_BASE_URL}/file?idFile=${technology.icon}`} className={className} width={width} alt={`Logo de ${technology.name}`} />
}