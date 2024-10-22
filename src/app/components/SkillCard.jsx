import skillsData from '@data/skills.json';

const SkillCard = () => {
  return (
    <div className="">
      {skillsData.map(skill => (
        <div
          key={skill.id}
          className=""
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="h-16 w-16"
          />
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
