// src/pages/home/Skills.tsx
import SkillCard from "../../components/Skills/SkillCard";
import SkillsHeader from "../../components/Skills/SkillsHeader";
import { SKILL_GROUPS, SKILLS_SECTION_META } from "../../components/Skills/skillsData";
import { skillsStyles } from "../../components/Skills/skillsStyles";

export default function Skills() {
  return (
    <section className={skillsStyles.section}>
      <div className={skillsStyles.content}>
        <div className={skillsStyles.wrapper}>
          <SkillsHeader
            title={SKILLS_SECTION_META.title}
            subtitle={SKILLS_SECTION_META.subtitle}
          />

          <div className={skillsStyles.grid}>
            {SKILL_GROUPS.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
