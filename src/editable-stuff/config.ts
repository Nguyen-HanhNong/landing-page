// Types
export interface NavBarConfig {
  show: boolean;
}

export interface SocialIcon {
  image: string;
  url: string;
}

export interface MainBodyConfig {
  gradientColors: string;
  firstName: string;
  middleName: string;
  lastName: string;
  message: string;
  icons: SocialIcon[];
}

export interface AboutConfig {
  show: boolean;
  heading: string;
  imageLink: string;
  imageSize: number;
  message: string;
  resume: string;
}

export interface ReposConfig {
  show: boolean;
  heading: string;
  gitHubUsername: string;
  reposLength: number;
  specificRepos: string[];
}

export interface LeadershipImage {
  img: string;
  label: string;
  paragraph: string;
}

export interface LeadershipConfig {
  show: boolean;
  heading: string;
  message: string;
  images: LeadershipImage[];
  imageSize: {
    width: string;
    height: string;
  };
}

export interface GetInTouchConfig {
  show: boolean;
  heading: string;
  message: string;
  email: string;
}

export interface Experience {
  role: string;
  company: string;
  companylogo: string;
  date: string;
  description: string;
  technologies: string[];
}

export interface ExperiencesConfig {
  show: boolean;
  heading: string;
  data: Experience[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface StatsConfig {
  show: boolean;
  data: Stat[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsConfig {
  show: boolean;
  heading: string;
  categories: SkillCategory[];
}

export interface FeaturedProject {
  name: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface FeaturedProjectsConfig {
  show: boolean;
  heading: string;
  projects: FeaturedProject[];
}

// Navigation Bar SECTION
export const navBar: NavBarConfig = {
  show: true,
};

// Main Body SECTION
export const mainBody: MainBodyConfig = {
  gradientColors: "#3235ce, #1ad3c0, #ff1b11, #9b59b6, #ff3f7f, #ecf0f1",
  firstName: "Nguyen-Hanh",
  middleName: "",
  lastName: "Nong",
  message: "Not just another software engineer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Nguyen-HanhNong",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nguyen-hanh-nong/",
    },
  ],
};

// Stats Banner SECTION
export const stats: StatsConfig = {
  show: true,
  data: [
    {
      value: "5+",
      label: "Internships",
      icon: "Briefcase",
    },
    {
      value: "6",
      label: "Companies",
      icon: "Building2",
    },
    {
      value: "5+",
      label: "Projects",
      icon: "Code2",
    },
  ],
};

// ABOUT SECTION
export const about: AboutConfig = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.jpg"),
  imageSize: 375,
  message:
    "Hi! My name is Nguyen-Hanh Nong and I'm a 4th-year Computer Science student at Carleton University, with an estimated graduation date of April 2026. I'm most passionate about giving back to the community, and my goal is to pursue this passion within software engineering and machine learning. In my free time, I like to create music and contribute to open-source projects.",
  resume: require("../editable-stuff/sample-resume.pdf"),
};

// SKILLS SECTION
export const skills: SkillsConfig = {
  show: true,
  heading: "Skills & Technologies",
  categories: [
    {
      name: "Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Java", icon: "☕" },
        { name: "C/C++", icon: "⚡" },
        { name: "SQL", icon: "🗃️" },
        { name: "Go", icon: "🐹" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Next.js", icon: "▲" },
        { name: "Django", icon: "🎸" },
        { name: "FastAPI", icon: "⚡" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Electron", icon: "☸️" },
        { name: "Git", icon: "📦" },
        { name: "Linux", icon: "🐧" },
        { name: "CI/CD", icon: "🔄" },
        { name: "K9s", icon: "🚀" },
      ],
    },
  ],
};

// EXPERIENCES SECTION
export const experiences: ExperiencesConfig = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Engineer Intern",
      company: "Tesla",
      companylogo: require("../assets/img/tesla.jpg"),
      date: "September 2025 - December 2025",
      description: "Built data visualization systems and backend services on the Cell Software team, focusing on analytics, APIs, and manufacturing insights.",
      technologies: ["Python", "C++", "AWS", "Docker"],
    },
    {
      role: "Software Developer Intern",
      company: "Amazon Web Services",
      companylogo: require("../assets/img/aws.png"),
      date: "May 2025 - August 2025",
      description: "Developed partner registration systems and tooling on the AWS Marketplace & Partner Central team.",
      technologies: ["Java", "AWS", "Kubernetes", "TypeScript"],
    },
    {
      role: "Software Engineer Intern",
      company: "Cisco",
      companylogo: require("../assets/img/cisco.png"),
      date: "January 2025 - April 2025",
      description: "Built reliability and performance tooling for IOS-XE telemetry and developer workflows.",
      technologies: ["C++", "Python", "Linux", "Networking"],
    },
    {
      role: "Software Engineer Intern",
      company: "Qualcomm",
      companylogo: require("../assets/img/qualcomm.png"),
      date: "May 2024 - August 2024",
      description: "Developed display color-calibration software on the Display Systems team (React, Electron).",
      technologies: ["C", "C++", "Python", "Embedded Systems"],
    },
    {
      role: "Software Developer Intern",
      company: "Government of Canada",
      companylogo: require("../assets/img/government.png"),
      date: "September 2023 - December 2023",
      description: "Developed front-end features for internal services (TypeScript, SQL).",
      technologies: ["React", "Node.js", "PostgreSQL", "Azure"],
    },
    {
      role: "Software Developer Intern",
      company: "Nokia",
      companylogo: require("../assets/img/nokia.png"),
      date: "May 2023 - August 2023",
      description: "Developed MACSec test automation for Ethernet encryption on the MACSec testing team.",
      technologies: ["Python", "C++", "TCL", "Linux"],
    },
  ],
};

// FEATURED PROJECTS SECTION
export const featuredProjects: FeaturedProjectsConfig = {
  show: true,
  heading: "Featured Projects",
  projects: [
    {
      name: "Carleton Computer Science Question Repository",
      description:
        "A website that hosts a collection of practice questions and answers for Carleton University's Computer Science courses. ",
      technologies: ["TypeScript", "Python", "Astro", "SCSS"],
      github: "https://github.com/CarletonComputerScienceSociety/questions",
      featured: true,
    },
    {
      name: "Counter-Strike Hacker Analyzer",
      description:
        "A CLI tool that analyzes Counter-Strike 2 match data to identify hackers and provide insights into their performance.",
      technologies: ["Python", "Go", "NumPy", "Pandas", "Scikit-learn", "Tensorflow", "SQLite"],
      github: "https://github.com/Nguyen-HanhNong/cs2-golang-hacker-analyzer",
      featured: true,
    },
    {
      name: "RL Satellite Routing Simulator",
      description:
        "A simulator that models the routing of satellites in the RL Satellite Network using reinforcement learning.",
      technologies: ["PyQt5", "Python", "NumPy", "Pandas", "Scikit-learn", "Tensorflow", "SQLite"],
      github: "https://github.com/Nguyen-HanhNong/Reinforcement-Learning-Satellite-Routing-Simulator",
      featured: true,
    },
  ],
};

// PROJECTS SECTION (GitHub repos)
// export const repos: ReposConfig = {
//   show: true,
//   heading: "Recent Projects",
//   gitHubUsername: "Nguyen-HanhNong",
//   reposLength: 4,
//   specificRepos: [],
// };

// Leadership SECTION
// export const leadership: LeadershipConfig = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   images: [
//     {
//       img: require("../editable-stuff/headshot.jpg"),
//       label: "First slide label",
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//     {
//       img: require("../editable-stuff/headshot.jpg"),
//       label: "Second slide label",
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//   ],
//   imageSize: {
//     width: "615",
//     height: "450",
//   },
// };

// GET IN TOUCH SECTION
export const getInTouch: GetInTouchConfig = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering (< 2 YOE) opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nongnguyenhanh@gmail.com",
};
