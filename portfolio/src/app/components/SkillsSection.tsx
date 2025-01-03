"use client";

import { IconType } from 'react-icons';
import { FaCode, FaJs, FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiExpress, SiBootstrap, SiPostgresql, SiMongodb, SiJest, SiRsocket, SiElectron } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const iconMap: { [key: string]: IconType } = {
  FaCode, FaJs, FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub,
  SiTypescript, SiNextdotjs, SiRedux, SiExpress, SiBootstrap, SiPostgresql, SiMongodb, SiJest, SiRsocket, SiElectron,
  TbBrandReactNative
};

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript (ES6+)", icon: "FaJs" },
      { name: "HTML5", icon: "FaHtml5" },
      { name: "CSS3", icon: "FaCss3" },
      { name: "Sass", icon: "FaSass" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "FaReact" },
      { name: "React Native", icon: "TbBrandReactNative" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Redux", icon: "SiRedux" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Bootstrap", icon: "SiBootstrap" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" }
    ]
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", icon: "SiJest" },
      { name: "Supertest", icon: "FaCode" }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "FaGithub" },
      { name: "AWS", icon: "FaAws" },
      { name: "Docker", icon: "FaDocker" },
      { name: "Travis CI", icon: "FaCode" },
      { name: "WebSockets", icon: "SiWebsocket" },
      { name: "Electron", icon: "SiElectron" }
    ]
  },
  {
    name: "Other",
    skills: [
      { name: "RESTful APIs", icon: "FaCode" },
      { name: "GraphQL", icon: "FaCode" },
      { name: "OAuth", icon: "FaCode" },
      { name: "Agile Methodologies", icon: "FaCode" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">{category.name}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-gray-300">
                  <span className="mr-2 text-xl text-blue-400">
                    {iconMap[skill.icon] ? iconMap[skill.icon]({}) : <FaCode />}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}