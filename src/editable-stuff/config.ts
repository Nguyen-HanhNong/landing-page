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
  message: "Building impactful software at the intersection of engineering and machine learning",
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
      value: "6+",
      label: "Internships",
      icon: "Briefcase",
    },
    {
      value: "7",
      label: "Companies",
      icon: "Building2",
    },
    {
      value: "50+",
      label: "Projects",
      icon: "Code2",
    },
    {
      value: "2026",
      label: "Graduation",
      icon: "GraduationCap",
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
        { name: "C#", icon: "🎮" },
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
        { name: "Kubernetes", icon: "☸️" },
        { name: "Git", icon: "📦" },
        { name: "Linux", icon: "🐧" },
        { name: "CI/CD", icon: "🔄" },
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
      description:
        "Building next-generation software solutions for Tesla's engineering teams, focusing on automation and efficiency improvements.",
      technologies: ["Python", "C++", "AWS", "Docker"],
    },
    {
      role: "Software Developer Intern",
      company: "Amazon Web Services",
      companylogo: require("../assets/img/aws.png"),
      date: "May 2025 - August 2025",
      description:
        "Developing cloud-native applications and services that power AWS infrastructure, working with distributed systems at scale.",
      technologies: ["Java", "AWS", "Kubernetes", "TypeScript"],
    },
    {
      role: "Software Engineer Intern",
      company: "Cisco",
      companylogo: require("../assets/img/cisco.png"),
      date: "January 2025 - April 2025",
      description:
        "Contributing to networking software and security solutions, optimizing performance for enterprise-grade systems.",
      technologies: ["C++", "Python", "Linux", "Networking"],
    },
    {
      role: "Software Engineer Intern",
      company: "Qualcomm",
      companylogo: require("../assets/img/qualcomm.png"),
      date: "May 2024 - August 2024",
      description:
        "Worked on embedded systems and mobile platform development, improving performance and power efficiency.",
      technologies: ["C", "C++", "Python", "Embedded Systems"],
    },
    {
      role: "Software Developer Intern",
      company: "Government of Canada",
      companylogo: require("../assets/img/government.png"),
      date: "September 2023 - December 2023",
      description:
        "Developed internal tools and applications to improve government services and citizen engagement.",
      technologies: ["React", "Node.js", "PostgreSQL", "Azure"],
    },
    {
      role: "Software Developer Intern",
      company: "Nokia",
      companylogo: require("../assets/img/nokia.png"),
      date: "May 2023 - August 2023",
      description:
        "Contributed to telecommunications software, focusing on 5G network infrastructure and optimization.",
      technologies: ["Python", "C++", "Linux", "5G"],
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Carleton University",
      companylogo: require("../assets/img/carleton-university.png"),
      date: "September 2022 - April 2023",
      description:
        "Assisted students in understanding core CS concepts, held office hours, and graded assignments for introductory programming courses.",
      technologies: ["Python", "Java", "Teaching", "Mentoring"],
    },
  ],
};

// FEATURED PROJECTS SECTION
export const featuredProjects: FeaturedProjectsConfig = {
  show: true,
  heading: "Featured Projects",
  projects: [
    {
      name: "AI Code Assistant",
      description:
        "An intelligent code completion and suggestion tool powered by machine learning, helping developers write better code faster.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com/Nguyen-HanhNong",
      featured: true,
    },
    {
      name: "Distributed Task Scheduler",
      description:
        "A scalable task scheduling system designed for cloud environments, handling millions of jobs with fault tolerance.",
      technologies: ["Go", "Kubernetes", "Redis", "gRPC"],
      github: "https://github.com/Nguyen-HanhNong",
      featured: true,
    },
    {
      name: "Real-time Collaboration Platform",
      description:
        "A collaborative workspace enabling real-time document editing and team communication with WebSocket technology.",
      technologies: ["TypeScript", "Next.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/Nguyen-HanhNong",
      demo: "https://example.com",
      featured: true,
    },
  ],
};

// PROJECTS SECTION (GitHub repos)
export const repos: ReposConfig = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Nguyen-HanhNong",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
export const leadership: LeadershipConfig = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [
    {
      img: require("../editable-stuff/headshot.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/headshot.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// GET IN TOUCH SECTION
export const getInTouch: GetInTouchConfig = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering or Machine Learning internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nongnguyenhanh@gmail.com",
};
