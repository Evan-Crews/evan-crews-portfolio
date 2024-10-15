export type Project = {
  id: string;
  title: string;
  description: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string; // Optional, as not all projects might have a live demo
};

export async function getProjects(): Promise<Project[]> {
  // In a real application, you might fetch this data from an API
  // For now, we'll return a static array of projects
  return [
    {
      id: "1",
      title: "Repair Tracking App (to be named soon)",
      description: [
      "A purpose built app to help a specific niche area of the repair community track their repair tickets and client's information.",
      "Due to the sensitive nature of the client's information, extreme measures regarding data management have been implemeneted."
    ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "elephantSQL", "Auth"],
      // imageUrl: "/images/portfolio-project.jpg",
      // githubUrl: "https://github.com/yourusername/portfolio",
      // liveUrl: "https://your-portfolio-url.com"
    },
    {
      id: "2",
      title: "Frollic",
      description: [
        "A full-stack application integrating Yelp's API in order to filter through various results.",
        "Incorporated accessibility principles throughout the development process, emphasizing perceivability, operability, and understandability to improve usability for users of diverse abilities.",
        "Configured Express to build a scalable backend by allowing compartmentalization of middleware functions and handling a variety of endpoints to link the front end with a multitude of APIs and access the database.",
        "Utilized a SQL database to securely store relational data to improve UX by allowing users to store their favorites and preferences."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      // imageUrl: "/images/task-manager-project.jpg",
      // githubUrl: "https://github.com/yourusername/task-manager",
      // liveUrl: "https://your-task-manager-url.com"
    }
    // Add more projects as needed
  ];
}

