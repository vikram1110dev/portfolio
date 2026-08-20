export const portfolioData = {
  personal: {
    name: "Vikram B",
    title: "Software Developer",
    subtitle: "I build software that solves real-world problems.",
    description: "Software Developer focused on building practical applications across web, mobile, backend, AI, and modern software technologies.",
    email: "vikrambalamurugan11@gmail.com",
    phone: "+91 6380537615",
    location: "Mayiladuthurai, Tamil Nadu",
    github: "https://github.com/vikram1110dev",
    linkedin: "https://www.linkedin.com/in/vikram-b-164834295",
    resume: "/resume.pdf",
  },
  about: {
    story: [
      "I am a B.Tech Information Technology student at M.I.E.T. Engineering College with a strong foundation in full-stack development, mobile applications, and AI/ML.",
      "I build practical applications using technologies like Java, C#, Python, and Android. My projects range from AI-powered detection systems to civic issue reporting platforms.",
      "Currently, I am exploring AI Engineering and modern system design to build production-quality software.",
      "My goal is to become a strong Software Developer who doesn't just write code, but builds real-world solutions."
    ]
  },
  stats: [
    { number: 6, suffix: "+", label: "Projects Built" },
    { number: 5, suffix: "+", label: "Tech Domains" },
    { number: 1, suffix: "", label: "Internship" },
    { number: 4, suffix: "", label: "Years of Learning" },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", description: "Used for Android development and object-oriented programming." },
        { name: "Python", description: "Used for AI/ML experiments, backend APIs, and computer vision." },
        { name: "C#", description: "Used for .NET backend development and desktop applications." },
        { name: "JavaScript", description: "Used for modern web frontend development." }
      ]
    },
    {
      category: "Web & Backend",
      items: [
        { name: "ASP.NET MVC & Core", description: "Building robust enterprise backends." },
        { name: "FastAPI", description: "High performance Python APIs for AI integrations." }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "SQL Server", description: "Relational database management for .NET apps." },
        { name: "MySQL", description: "Relational database for general web applications." }
      ]
    },
    {
      category: "AI & ML",
      items: [
        { name: "Computer Vision (YOLO/CNN)", description: "Real-time object detection and classification." },
        { name: "RAG & LLMs", description: "Retrieval-Augmented Generation for smart chatbots." }
      ]
    },
    {
      category: "Mobile",
      items: [
        { name: "Android SDK", description: "Native Android app development using Java." }
      ]
    }
  ],
  projects: [
    {
      title: "Python Kadhai",
      slug: "python-kadhai",
      year: "2026",
      category: "AI • Full Stack",
      description: "An interactive, story-driven platform designed to teach Python programming through engaging narratives and practical examples.",
      role: "Full Stack Developer",
      status: "In Development",
      technologies: ["Python", "FastAPI", "React", "Next.js"],
      github: null,
      liveDemo: null,
      problem: "Traditional programming tutorials can be dry and fail to maintain student engagement over long periods.",
      solution: "A story-based learning environment ('Kadhai' meaning story) that integrates Python coding challenges into a narrative progression.",
      features: [
        { name: "Story-driven Learning", description: "Learn concepts through an interactive narrative." },
        { name: "Code Execution", description: "Run and test Python code directly in the browser." },
        { name: "Progress Tracking", description: "Save your place in the story and track your learning journey." }
      ],
      architecture: "React Frontend → FastAPI Backend → Python Execution Engine"
    },
    {
      title: "PlacementPrep AI",
      slug: "placement-prep-ai",
      year: "2026",
      category: "AI • Full Stack • Education",
      description: "An AI-powered placement preparation platform designed to help students practice aptitude, DSA, interviews, and technical skills.",
      role: "Full Stack Developer",
      status: "In Development",
      technologies: ["Python", "FastAPI", "React", "MongoDB", "AI APIs"],
      github: null,
      liveDemo: null,
      problem: "Students often use multiple disconnected resources for aptitude practice, DSA preparation, interview preparation, and progress tracking.",
      solution: "A centralized, AI-driven platform that provides a structured learning experience, tracking performance and adapting to the user's skill level.",
      features: [
        { name: "Authentication", description: "Secure user authentication and account management." },
        { name: "Aptitude Practice", description: "Question-based practice with categories and difficulty levels." },
        { name: "Progress Tracking", description: "Track user performance and learning progress." }
      ],
      architecture: "React Frontend → FastAPI Backend → AI Service → MongoDB"
    },
    {
      title: "Adaptive Wild Animal Detection System",
      slug: "wild-animal-detection",
      year: "2025",
      category: "AI • Computer Vision",
      description: "A real-time detection system that processes live CCTV video feeds to identify and classify wild animals.",
      role: "AI Developer",
      status: "Completed",
      technologies: ["Python", "YOLO", "CNN", "Computer Vision", "FastAPI"],
      github: null,
      liveDemo: null,
      problem: "Human-wildlife conflict is increasing, and manual monitoring of CCTV feeds is inefficient and error-prone.",
      solution: "An automated system using deep learning to instantly identify animals in video feeds and alert authorities, reducing false positives in varying conditions.",
      features: [
        { name: "Real-Time Processing", description: "Analyzes CCTV feeds with minimal latency." },
        { name: "YOLO Integration", description: "High-accuracy object detection for specific animal classes." },
        { name: "Adaptive Filtering", description: "Maintains accuracy in different lighting and weather conditions." }
      ],
      architecture: "CCTV Feed → Python Script (YOLO/CNN) → Alert System"
    },
    {
      title: "AI-Powered Civic Issue Reporting System",
      slug: "civic-issue-reporting",
      year: "2025",
      category: "AI • Full Stack",
      description: "A smart platform enabling citizens to report problems with real-time Google Maps location tagging and an AI chatbot.",
      role: "Full Stack Developer",
      status: "Completed",
      technologies: ["RAG", "LLM", "Google Maps API", "React", "Node.js"],
      github: null,
      liveDemo: null,
      problem: "Citizens struggle to report local issues effectively, and authorities lack a streamlined way to triage and manage them.",
      solution: "A map-integrated reporting system with an intelligent RAG chatbot that provides instant, context-aware responses regarding issue status.",
      features: [
        { name: "Location Tagging", description: "Precise reporting using Google Maps API." },
        { name: "RAG Chatbot", description: "Users can query issue status naturally." },
        { name: "Priority Management", description: "Automated triaging of reported civic issues." }
      ],
      architecture: "User Interface → Node.js API → RAG Service & Google Maps → Database"
    },
    {
      title: "Food Donation Management System",
      slug: "food-donation-management",
      year: "2024",
      category: ".NET • Web Application",
      description: "A full-stack web application connecting surplus food donors with NGOs to streamline the donation process.",
      role: "Backend Developer",
      status: "Completed",
      technologies: ["C#", "ASP.NET MVC", "SQL Server"],
      github: null,
      liveDemo: null,
      problem: "Significant food waste occurs while NGOs struggle to find reliable surplus food sources.",
      solution: "A database-driven platform that securely matches donors with recipients and provides real-time visibility into donation status.",
      features: [
        { name: "Secure Authentication", description: "Protect donor and recipient data." },
        { name: "Real-time Tracking", description: "Monitor the status of food donations." },
        { name: "Reporting System", description: "Generate insights on donation impact." }
      ],
      architecture: "ASP.NET MVC Frontend → C# Controllers → Entity Framework → SQL Server"
    },
    {
      title: "Truck Logistics and Maintenance System",
      slug: "truck-logistics",
      year: "2024",
      category: ".NET • Web Application",
      description: "A comprehensive dashboard for managing truck fleets, tracking maintenance, and optimizing logistics.",
      role: "Full Stack Developer",
      status: "In Development",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "HTML/CSS"],
      github: null,
      liveDemo: null,
      problem: "Manual tracking of fleet maintenance leads to vehicle breakdowns and inefficient routing.",
      solution: "A centralized dashboard that tracks maintenance schedules, logistics functionality, and fleet status.",
      features: [
        { name: "Dashboard", description: "Overview of fleet health and active routes." },
        { name: "Maintenance Tracking", description: "Automated reminders for vehicle service." }
      ],
      architecture: "ASP.NET Core → SQL Server"
    }
  ],
  experience: [
    {
      title: "Android Development Intern",
      company: "Extazee Software Solution",
      location: "Mayiladuthurai, Tamil Nadu",
      date: "Jul 2025 – Aug 2025",
      description: [
        "Developed user-friendly Android mobile applications using Java, following standard software development practices.",
        "Tested applications across multiple devices and screen sizes to ensure compatibility, stability, and responsiveness.",
        "Debugged and resolved code-level issues to ensure correct functionality and improve application reliability."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "M.I.E.T. Engineering College",
      location: "Trichy, Tamil Nadu",
      date: "2022 – 2026",
      score: "CGPA: 7.5 / 10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "S.G.M. Sri Muthaiah Matriculation Hr. Sec. School",
      location: "Sirkali, Mayiladuthurai",
      date: "2022",
      score: "64.83%"
    }
  ]
};
