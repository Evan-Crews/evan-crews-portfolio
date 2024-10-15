import Image from 'next/image';
import { getProjects, Project } from '@/utils/getProjects';

export default async function ProjectsSection() {
  const projects: Project[] = await getProjects();

  return (
    <section id="projects" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-700 p-4 rounded-lg">
            {/* <Image 
              src={project.imageUrl} 
              alt={project.title} 
              width={300} 
              height={200} 
              className="rounded-lg mb-4" 
            /> */}
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            {/* <div className="flex gap-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Live Demo</a>
              )}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
