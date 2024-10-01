export type Experience = {
  title: string;
  company: string;
  duration: string;
  logo: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  image: string;
};

export async function getExperiences(): Promise<Experience[]> {
  return [
    {
      title: "Software Engineer",
      company: "TimeCroc",
      duration: "September 2023 - Present",
      logo: "/TimeCrocLogo.png",
      responsibilities: [
        "Applied dynamic and responsive UIs using React.js, leveraging its component-based architecture and virtual DOM toenhance development efficiency, promote code reusability, and deliver a seamless, interactive UX",
        "Developed a user-input sanitization module to refine and structure incoming data, ensuring seamless and error-freeposting to the SQL database, resulting in a notable 30% reduction in data corruption incidents and significantly boosting its reliability and efficiency"
      ],
      achievements: [
        "Reduced application load time by 40% through optimization techniques",
        "Led the migration from JavaScript to TypeScript, resulting in a 20% improvement in code maintainability, enhancedcollaboration through strong typing, and ensured a more resilient and scalable software architecture"
      ],
      technologies: ["React", "Node.js", "Typescript", "elephantSQL", "Auth"],
      image: "/TimeCrocScreenshot.png"
    },
    {
      title: "Software Engineer",
      company: "ReacType",
      duration: "December 2021 - December 2022",
      logo: "/ReactypeLogo.ico",
      responsibilities: [
        "Assembled drag-and-drop functionality in React.js, providing an intuitive and seamless user experience for organizingand manipulating content within the interface",
        "Optimized state management by transitioning from the Context API to Redux, addressing size-related issues and bolstering performance with centralized state management for a scalable architecture"
      ],
      achievements: [
        "Enabled secure user authentication with GitHub OAuth, configured settings on the GitHub Developer platform, and Applied Passport.js with cookie-based sessions in Node.js for heightened security and seamless navigation across authenticated routes",
        "Adopted ongoing T est-Driven Development (TDD) using Jest for unit tests and Supertest for API endpoint testing, ensuring code reliability and maintainability"
      ],
      technologies: ["React", "Node.js", "Typescript", "Javascript", "MongoDB", "O-Auth"],
      image: "/ReactTypeScreenshot.webp"
    }
  ];
}
