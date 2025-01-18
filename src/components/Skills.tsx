import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <span>{skill.name}</span>
            <div>{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 