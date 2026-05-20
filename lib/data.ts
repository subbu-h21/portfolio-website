export const siteConfig = {
  name: "Subramanya Hegde",
  title: "Subramanya Hegde — Full-Stack Developer",
  description:
    "Full-stack developer experienced in MERN stack and Python, building REST APIs, real-time systems, and data-processing applications.",
  url: "https://subramanyahegde.dev",
  ogImage: "/og-image.png",
  email: "subramanyah65@gmail.com",
  location: "Vellore, India",
  github: "https://github.com/subbu-h21",
  linkedin: "https://www.linkedin.com/in/subramanya-hegde-6099661a1",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML/CSS", icon: "html5" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "REST APIs", icon: "fastapi" },
      { name: "WebSockets", icon: "socketdotio" },
    ],
  },
  {
    category: "Creative",
    items: [
      { name: "Illustrator", icon: "illustrator" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "After Effects", icon: "aftereffects" },
      { name: "Premiere Pro", icon: "premierepro" },
      { name: "Canva", icon: "canva" },
    ],
  },
];

export const projects = [
  {
    id: "payment-notifications",
    title: "Real-Time Payment Notification System",
    date: "Dec 2025",
    category: "Live in Production",
    impact: "Zero-latency alerts — used every business day",
    shortDesc:
      "Event-driven payment notification system integrating Python, WebSockets, Firebase, and a local backend server.",
    fullDesc:
      "Android app monitors incoming bank SMS, extracts credited transaction details (amount, sender), and pushes structured data to Firebase in real time. Backend listeners and browser-extension clients broadcast payment alerts instantly across multiple systems — zero polling, pure event-driven architecture.",
    bullets: [
      "Event-driven alert system spanning mobile, cloud, and browser",
      "Android app parses incoming bank SMS to extract credited transaction details in real time",
      "Structured data pushed instantly to Firebase for cloud persistence and fan-out",
      "Python backend listener broadcasts alerts via WebSocket connections",
      "Browser extension receives live notifications — zero polling, pure push",
    ],
    architecture: ["Android SMS Parser", "Firebase", "Python Listener", "WebSocket Broadcast", "Browser Extension"],
    tags: ["Python", "WebSockets", "Firebase", "Android", "Browser Extension"],
    github: "https://github.com/subbu-h21/payment_notifier_local_server_files",
    demo: "#",
    gradient: "from-violet-600 to-cyan-500",
  },
  {
    id: "account-reconciliation",
    title: "Account Reconciliation System",
    date: "Aug 2025",
    category: "Business Impact",
    impact: "83% time reduction — 6 hours → 1 hour",
    shortDesc:
      "Flask backend automating reconciliation between bank statements and internal records with AI-powered matching.",
    fullDesc:
      "Data cleaning, aggregation, and discrepancy detection using Pandas and NumPy. Integrated Google Gemini 2.5 Flash API to intelligently match related entries across sources using name similarity and amount proximity, with batch prompting (10 dates per request) to optimize token usage. Generates structured Excel reports with AI-highlighted matched discrepancies — reduced manual reconciliation time by 83%.",
    bullets: [
      "Flask-based automation system for bank statement reconciliation",
      "Data cleaning and aggregation pipeline using Pandas and NumPy",
      "Google Gemini 2.5 Flash matches entries by name similarity and amount proximity",
      "Batch prompting (10 dates per request) to minimize API token usage",
      "Generates structured Excel reports with discrepancies flagged for audit",
    ],
    architecture: ["Raw Bank Statements", "Data Cleaning Pipeline", "AI Matching Engine", "Discrepancy Detector", "Excel Report"],
    tags: ["Flask", "Pandas", "NumPy", "Gemini API", "Excel Automation"],
    github: "https://github.com/subbu-h21/account-reconciliation-tool",
    demo: "#",
    gradient: "from-amber-500 to-rose-500",
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking Platform",
    date: "2026",
    category: "Full-Stack",
    impact: "3 user roles — patients, doctors, admins — one unified platform",
    shortDesc:
      "Full-stack MERN platform with separate patient, doctor, and admin dashboards.",
    fullDesc:
      "JWT auth, role-based access control, appointment scheduling workflows, doctor management. Responsive React frontend with React Router, Context API, Tailwind CSS, dynamic doctor filtering, real-time status updates. Cloudinary image uploads, Razorpay/Stripe payment gateway integration. RESTful APIs and MongoDB schemas for users, doctors, appointments, and payment handling.",
    bullets: [
      "Separate dashboards for patients, doctors, and admins — each with tailored workflows",
      "JWT authentication with role-based access control across all routes",
      "Dynamic doctor filtering, real-time appointment scheduling and status updates",
      "Razorpay/Stripe payment gateway with full transaction flow",
      "Cloudinary image uploads for doctor profiles and RESTful MongoDB schemas",
    ],
    architecture: ["React + Router", "Express API", "MongoDB", "Razorpay/Stripe", "Cloudinary"],
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe"],
    github: "https://github.com/subbu-h21/shubhada",
    demo: "#",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export const experiences = [
  {
    role: "In-House Developer",
    subtitle: "Family Retail Business",
    period: "2025 – Present",
    description:
      "Identified operational bottlenecks and built the software to fix them — a real-time payment notification system and an AI-powered reconciliation tool. Designed the product flow, shipped to production, and iterated based on daily real-world use.",
    type: "dev",
  },
  {
    role: "Freelance Video Editor & Motion Designer",
    subtitle: "Short-Form Content · Reels · After Effects · Premiere Pro",
    period: "2023 – 2024",
    description:
      "Edited short-form reels engineered for engagement — fast pacing, sharp cuts, moving elements, and motion graphics synced to audio. Built visual hooks in the first two seconds and maintained retention through dynamic transitions and animated overlays using After Effects and Premiere Pro. Also designed promotional posters and ran a hands-on video-editing workshop for working professionals.",
    type: "creative",
  },
  {
    role: "Social Media Manager",
    subtitle: "Toastmasters International · VIT Vellore",
    period: "2023 – 2024",
    description:
      "Handled social media for one of ten Toastmasters clubs at VIT Vellore. Designed event posters and Instagram posts and stories to market club events, drive attendance, and build the club's online presence.",
    type: "leadership",
  },
  {
    role: "Co-Founder",
    subtitle: "RedChilli Foods · Sirsi, KA",
    period: "Aug 2020",
    description:
      "Co-created and operated a home-based burger delivery service during COVID restrictions. Built a promotional website, ran Instagram marketing for customer acquisition, managed direct customer communication, and handled end-to-end operations.",
    type: "business",
  },
];

export const roles = [
  "Full-Stack Developer",
  "Python Engineer",
  "MERN Specialist",
  "Event-Driven Systems",
  "API Architect",
];
