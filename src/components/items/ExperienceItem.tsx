import TechnologyLogo from "@components/TechnologyLogo";
import { Experience } from "@context/experience/models/Experience.model";
import { deletePersonalExperience, deleteWorkingExperience } from "@context/experience/service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ExperienceItem.module.css";
import { PersonalExperience } from "@context/experience/models/PersonalExperience.model";

export default function ExperienceItem({
  experience,
  onDelete
}: {
  experience: Experience,
  onDelete?: (() => void) | (() => Promise<void>)
}) {
  const onDeleteExperience = async () => {
    try {
      if (Object.keys(experience).includes("projectLink")) {
        await deletePersonalExperience(experience.id)
      } else {
        await deleteWorkingExperience(experience.id)
      }
      if (onDelete !== undefined) onDelete();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <article className={`box ${styles.item} ${styles.experienceItem}`}>
      <FontAwesomeIcon icon="briefcase" fixedWidth size="2x" />
      <h2>{experience.name}</h2>
      <section>
        <h4>Tecnologías</h4>
        {experience.technologies.map(tech => <TechnologyLogo className="box" key={tech.id} width={50} technology={tech} />)}
      </section>
      <div>
        {
          (experience as PersonalExperience).projectLink instanceof URL ? <a href={(experience as PersonalExperience).projectLink.toString()} className="button"><FontAwesomeIcon icon="link" fixedWidth/></a> : <></>
        }
        <button onClick={onDeleteExperience}><FontAwesomeIcon icon="trash" fixedWidth/></button>
      </div>
    </article>
  )
}