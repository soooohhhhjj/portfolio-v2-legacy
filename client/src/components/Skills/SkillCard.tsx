import type { SkillGroup } from "./skillsData";
import { skillsStyles } from "./skillsStyles";
import TechPill from "./TechPill";

type SkillCardProps = {
  group: SkillGroup;
};

function SkillCard({ group }: SkillCardProps) {
  const { title, description, tech, Icon } = group;

  return (
    <div className={skillsStyles.card.shell}>
      <div className={skillsStyles.card.body}>
        <div className={skillsStyles.card.titleRow}>
          <Icon className="text-white w-4 h-4" />
          <h3 className={skillsStyles.card.title}>{title}</h3>
        </div>

        <div className={skillsStyles.card.description}>{description}</div>

        <div className={skillsStyles.card.pills}>
          {tech.map((name) => (
            <TechPill key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
