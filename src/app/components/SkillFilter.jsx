import React from 'react';
import skillsData from '@data/skills.json';

function SkillFilter({ selectedSkill, onSkillSelect }) {
  const filteredSkills = skillsData.filter(skill => skill.id >= 1 && skill.id <= 6);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button
        onClick={() => onSkillSelect("Tous")}
        className={`px-4 py-2 rounded-full ${
          selectedSkill === "Tous" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } hover:bg-gray-600 hover:text-white`}
      >
        Tous
      </button>
      {filteredSkills.map(skill => (
        <button
          key={skill.id}
          onClick={() => onSkillSelect(skill.id)}
          className={`px-4 py-2 rounded-full ${
            selectedSkill === skill.id ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } hover:bg-gray-600 hover:text-white`}
        >
          {skill.name}
        </button>
      ))}
    </div>
  );
}

export default SkillFilter;
