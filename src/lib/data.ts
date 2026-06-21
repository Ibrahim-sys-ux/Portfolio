export const siteConfig = {
  name: "Ibrahim Kutty T.A",
  title: "Full Stack Developer",
  email: "ibrahimkutty.c3.11@gmail.com",
  phone: "+91 81291 97535",
  location: "Kanayannur, Kerala, India",
  github: "https://github.com/Ibrahim-sys-ux",
  linkedin: "https://www.linkedin.com/in/ibrahim-kutty-302728314/?isSelfProfile=false",
  leetcode: "https://leetcode.com/u/ibrahimkutty/",
  codechef: "https://codechef.com/ibrahim-kutty",
  tagline: "Building scalable systems. Crafting clean code. Shipping impact.",
  about: `Full-stack software developer and MCA student at Amrita Vishwa Vidyapeetham with hands-on experience engineering production-grade web applications. I specialize in Python/Django backends and the MERN stack, with a focus on performance-optimized RESTful APIs, clean architecture, and responsive UIs.
  
  I've reduced API response times by ~30% in production systems, built multi-vendor e-commerce platforms serving complex business workflows, and developed job portals with sub-2-second response times. My foundation in DSA and OOP makes me write code that scales—not just code that runs.
  
  Currently pursuing MCA while actively building side projects, expanding into AI-integrated applications, and contributing to open source. I'm looking for full-time SDE/full-stack roles where I can solve challenging engineering problems at scale.`,
  typingRoles: [
    "Full Stack Developer",
    "Backend Engineer",
    "Python & Django Expert",
    "MERN Stack Developer",
    "Problem Solver",
    "Open Source Contributor",
  ],
}

export const experiences = [
  {
    id: "exp-1",
    company: "Zoople Technologies",
    role: "MERN Full Stack Development Intern",
    duration: "Mar 2025 – Apr 2025",
    location: "Kochi, Kerala",
    type: "Internship",
    current: false,
    description: [
      "Built full-stack applications using the complete MERN stack (MongoDB, Express.js, React, Node.js) following industry-standard architecture principles.",
      "Designed and implemented RESTful APIs with clean separation of concerns and modular service architecture.",
      "Developed reusable React component libraries that significantly improved UI scalability and development velocity across the team.",
      "Optimized MongoDB query pipelines and indexing strategies to reduce data retrieval latency in high-traffic scenarios.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Git"],
    color: "indigo",
  },
  {
    id: "exp-2",
    company: "Zoople Technologies",
    role: "Full Stack Python Development Intern",
    duration: "Apr 2024 – May 2024",
    location: "Kochi, Kerala",
    type: "Internship",
    current: false,
    description: [
      "Engineered a Django (MVC) e-commerce module featuring dynamic product listing, cart management, and session-based user authentication.",
      "Designed and implemented secure checkout workflows with data validation and error handling at every layer.",
      "Optimized SQL queries and backend business logic, achieving a ~30% reduction in average API response time.",
      "Improved overall system reliability through structured error handling, logging, and database optimization techniques.",
    ],
    technologies: ["Python", "Django", "SQL", "SQLite", "HTML/CSS", "Bootstrap", "Git"],
    color: "purple",
    highlight: "~30% API response time reduction",
  },
]

export const projects = [
  {
    id: "proj-1",
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "A production-grade multi-vendor marketplace featuring role-based vendor dashboards, real-time inventory management, and a complete checkout workflow with payment gateway simulation.",
    longDescription:
      "Built from scratch to support multiple vendors with isolated storefronts, order management, and analytics dashboards. Implemented secure CRUD operations across all entities with proper authorization guards.",
    duration: "4 months",
    technologies: ["Django", "SQLite", "Bootstrap", "JavaScript", "Python"],
    features: [
      "Role-based access: Admin, Vendor, Customer workflows",
      "Indexed product search delivering sub-second query results",
      "Secure checkout with payment gateway simulation",
      "Vendor dashboard with order & inventory management",
      "Session-based authentication with CSRF protection",
    ],
    github: "https://github.com/Ibrahim-sys-ux",
    live: null,
    featured: true,
    gradient: "from-indigo-500/20 to-purple-500/20",
    accentColor: "indigo",
  },
  {
    id: "proj-2",
    title: "Job Portal Web Application",
    description:
      "A full-featured job portal with distinct recruiter and candidate workflows, mobile-first responsive design, and backend-optimized query performance for fast load times.",
    longDescription:
      "Designed dual-role flows for job posting (recruiters) and job searching (candidates) with secure session management. Achieved sub-2-second API response times via backend tuning and database indexing.",
    duration: "3 months",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Recruiter portal: post jobs, manage applications, track candidates",
      "Candidate portal: search, filter, and apply for jobs",
      "API response times under 2 seconds via backend optimization",
      "Mobile-first responsive UI with cross-device compatibility",
      "Secure session management with input validation and XSS protection",
    ],
    github: "https://github.com/Ibrahim-sys-ux",
    live: null,
    featured: true,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "blue",
  },
]

export const skills = {
  languages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Java", level: 70, icon: "☕" },
    { name: "C++", level: 65, icon: "⚙️" },
    { name: "PHP", level: 60, icon: "🐘" },
  ],
  frameworks: [
    { name: "Django", level: 88, icon: "🎯" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚀" },
    { name: "Bootstrap", level: 85, icon: "🅱️" },
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "SQLite", level: 82, icon: "💾" },
  ],
  tools: [
    "Git", "GitHub", "REST APIs", "Postman", "VSCode",
    "Linux", "Docker (basics)", "Figma", "Agile/Scrum",
  ],
  concepts: [
    "RESTful APIs", "MVC Architecture", "OOP", "DSA",
    "System Design", "Database Design", "Clean Code",
    "CRUD Operations", "Authentication & Auth", "Query Optimization",
  ],
}

export const achievements = [
  {
    id: "ach-1",
    title: "Python Foundation Certification",
    issuer: "Infosys SpringBoard",
    date: "Dec 2025",
    description: "Certified in Python fundamentals, OOP, and data structures through Infosys's industry-recognized program.",
    icon: "🏆",
    color: "from-yellow-500/20 to-orange-500/20",
    accentColor: "yellow",
  },
  {
    id: "ach-2",
    title: "Graphic Design Expert",
    issuer: "MSME Technology Development Centre, Chennai",
    date: "Feb–Mar 2024",
    description: "Completed expert-level graphic design training at India's premier MSME technology development center.",
    icon: "🎨",
    color: "from-pink-500/20 to-purple-500/20",
    accentColor: "pink",
  },
  {
    id: "ach-3",
    title: "2nd Place — Graphic Design Competition",
    issuer: "KMEA College, Mahatma Gandhi University",
    date: "2024",
    description: "Secured 2nd place in a university-level graphic design competition, demonstrating strong visual design skills.",
    icon: "🥈",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "blue",
  },
  {
    id: "ach-4",
    title: "7.97 CGPA in BCA",
    issuer: "KMEA College, Mahatma Gandhi University",
    date: "Jun 2022 – May 2025",
    description: "Graduated with a strong academic record in Bachelor of Computer Applications, maintaining a 7.97/10 CGPA.",
    icon: "🎓",
    color: "from-green-500/20 to-teal-500/20",
    accentColor: "green",
  },
]

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Kochi, Kerala",
    duration: "Jul 2025 – May 2027",
    status: "current",
    grade: "",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KMEA College of Arts and Science, MG University",
    location: "Ernakulam, Kerala",
    duration: "Jun 2022 – May 2025",
    status: "completed",
    grade: "CGPA: 7.97/10",
  },
]

export const stats = [
  { label: "Projects Built", value: 2, suffix: "+" },
  { label: "API Response Improvement", value: 30, suffix: "%" },
  { label: "Months of Experience", value: 4, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
]
