import Image from 'next/image';
import { getExperiences, Experience } from '../../utils/getExperience';

export default async function ExperienceSection() {
  const experiences = await getExperiences();

  if (!experiences || experiences.length === 0) {
    return <div>No experience data available.</div>;
  }

  return (
    <section id="experience" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Professional Experience</h2>
      {experiences.map((exp: Experience, index: number) => (
        <div key={index} className="mb-8 bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Image src={exp.logo} alt={exp.company} width={50} height={50} className="rounded-full mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">{exp.title}</h3>
              <p className="text-gray-400">{exp.company} | {exp.duration}</p>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-2 text-blue-200">Key Responsibilities:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2 text-blue-200">Key Achievements:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2 text-blue-200">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.technologies.map((tech, i) => (
              <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{tech}</span>
            ))}
          </div>
          <div>
            <Image src={exp.image} alt={`${exp.company} project`}  width={300} height={200} className="rounded-lg" />
          </div>
        </div>
      ))}
    </section>
  );
}
