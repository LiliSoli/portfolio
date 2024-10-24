"use client";

import skillsData from '@data/skills.json';

const SkillCard = () => {
  const categories = {
    "Langages et frameworks": [],
    "Outils de développement": [],
    "Méthodologies et collaboration": []
  };

  skillsData.forEach(skill => {
    categories[skill.category].push(skill);
  });

  return (
    <div className="flex flex-col gap-6 pb-24 px-16 cursor-default">
      <div className="flex flex-row justify-between">
        {Object.keys(categories).map((category, index) => (
          <div
            key={category}
            className={`flex flex-col items-center w-1/3 ${index < 2 ? 'border-r border-gray-300' : ''}`}
          >
            <h2 className="text-lg font-bold mb-10">{category}</h2>
            <div className="flex flex-wrap justify-center gap-2 px-10 rounded-lg">
              {categories[category].map(skill => (
                <div
                  key={skill.id}
                  className="relative w-24 h-32 m-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-300 to-red-300 transition-transform transform hover:scale-105 hover:border-none hover:bg-transparent"
                >
                  <div
                    className="absolute flex flex-col items-center justify-center w-20 h-28 bg-gray-100 transition-all duration-300 hover:opacity-0"
                  >

                    {/* Image de la skill (disparaît au survol) */}
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-14 h-14 transition-all duration-300"
                    />
                  </div>

                  {/* Texte de la skill (apparaît au survol) */}
                  <div
                    className="flex items-center justify-center w-20 h-28 bg-gradient-to-r from-orange-300 to-red-300 transition-all duration-300 hover:opacity-100"
                  >
                    <span className="font-medium text-lg text-black transition-all duration-300 rounded-lg">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;


// "use client";

// import skillsData from '@data/skills.json';

// const SkillCard = () => {
//   const categories = {
//     "Langages et frameworks": [],
//     "Outils de développement": [],
//     "Méthodologies et collaboration": []
//   };

//   skillsData.forEach(skill => {
//     categories[skill.category].push(skill);
//   });

//   return (
//     <div className="flex flex-col gap-6 pb-24 px-16 cursor-default">
//       <div className="flex flex-row justify-between">
//         {Object.keys(categories).map((category, index) => (
//           <div
//             key={category}
//             className={`flex flex-col items-center w-1/3 ${index < 2 ? 'border-r border-gray-300' : ''}`}
//           >
//             <h2
//               className="text-lg font-bold mb-10">
//               {category}
//             </h2>
//             <div
//               className="flex flex-wrap justify-center gap-2 px-10 rounded-lg"
//             >
//               {categories[category].map(skill => (
//                 <div
//                   key={skill.id}
//                   className="relative w-24 h-36 m-2 bg-transparent flex align-middle justify-center rounded-lg"
//                 >
//                   <div
//                     className="flex flex-col items-center justify-center gap-2 w-full h-full front bg-gradient-to-r from-orange-300 to-red-300 rounded-lg"
//                   >
//                     <img
//                       src={skill.img}
//                       alt={skill.name}
//                       className="w-12 h-12"
//                     />
//                     <span
//                       className="font-medium text-lg text-black">
//                       {skill.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SkillCard;
