import { Link, ProjectInfo } from "./type";

export const links: Link[] = [
    { nameEng: "Home", hash: "#home" },
    { nameEng: "About", hash: "#about" },
    { nameEng: "Projects", hash: "#projects" },
    { nameEng: "Skills", hash: "#skills" },
    { nameEng: "Contact", hash: "#contact" },
]

export const categoriesData = ["All", "React Native", "SaaS / Apps", "Clones"] as const;

export const projectsData: ProjectInfo[] = [
   {
    title: "Reporting Portal Mobile App",
    description: "A powerful ERP Reporting Mobile Application built with React Native CLI, designed to provide complete access to Sales, Purchase, Inventory, and other business reports in one place. Users can view detailed reports, generate summaries, print documents, and analyze statistics through an interactive dashboard. The app also supports multi-branch management, allowing companies with multiple branches to instantly switch between branches and view branch-specific data with a single click. Built for performance, scalability, and seamless enterprise reporting.",
    tags: ["React Native CLI", "ERP", "Hooks", "Dashboard", "Multi-Branch", "Reports"],
    imageUrl: "/reportingPortal.png",
    link: "https://drive.google.com/file/d/1vEf4Uzs-0QiJhBsssh1SmVeIq2K7bPd6/view?usp=sharing",
    category: "React Native"
},
    {
        title: "Luxury Living Redefined",
        description: "A professional Real Estate lead generation platform for luxury property sales. Features include a dynamic property catalog, contact management system, and a robust admin dashboard for property listings. Built with React (Vite), TypeScript, Tailwind CSS, and Supabase.",
        tags: ["React (Vite)", "Next.js", "react-hooks" ,"Supabase", "Typescript", "Tailwind"],
        imageUrl: "/thumbnail.jpeg",
        link: "https://luxury-living-codesphinx.vercel.app/",
        category: "SaaS / Apps"
    },
      {
        title: "Fresh Laundry",
        description: "A premium SaaS-based Laundry Management System. Features include monthly subscription plans, automated service allocation, user/admin dashboards, and secure authentication. Built with React (Vite), TypeScript, Tailwind CSS, and Supabase.",
        tags: ["React", "Next.js", "Admin" ,"Supabase", "Typescript", "Tailwind"],
        imageUrl: "/laundry.jpeg",
        link: "https://freshlaundry-codesphinx.vercel.app/",
        category: "SaaS / Apps"
    },
    {
        title: "Shop Vibe",
        description: "A premium E-commerce ecosystem built atCodesphinx. Features advanced Redux state architecture, high-fidelity UI animations, and a seamless end-to-end checkout experience.",
        tags: ["Next.js 15", "Redux Toolkit", "Framer Motion", "Tailwind"],
        imageUrl: "/ShopVibe.jpg",
        link: "https://react-e-commerce-website-sepia.vercel.app/",
        category: "SaaS / Apps"
    },
    {
        title: "Ruffy Construction",
        description: "An architectural digital portfolio for enterprise construction. Focuses on high-end visual storytelling and service-oriented UI/UX for corporate scaling.",
        tags: ["React.js", "JavaScript", "Tailwind CSS"],
        imageUrl: "/cons.jpg",
        link: "https://ruffy-constructions.netlify.app/",
        category: "SaaS / Apps"
    },
    {
        title: "Weather Analytics",
        description: "A data-driven weather dashboard utilizing live API streams. Features dynamic background transitions mapped to real-time global climate conditions.",
        tags: ["React.js", "REST APIs", "Context API"],
        imageUrl: "/weather.png",
        link: "https://react-weather-app-rophile.vercel.app/",
        category: "SaaS / Apps"
    },
    {
        title: "Memes Generator",
        description: "A creative SaaS tool for real-time asset manipulation. Implements high-speed image rendering and custom text overlay logic in a modern Next.js environment.",
        tags: ["Next.js", "React.js", "CSS Modules"],
        imageUrl: "/meme.png",
        link: "https://memes-generator-nex-tjs.vercel.app/",
        category: "SaaS / Apps"
    },
    {
        title: "Noon Clone",
        description: "A meticulous architectural study of the Middle East's leading marketplace. Focuses on complex grid layouts and large-scale navigation systems.",
        tags: ["HTML5", "Tailwind CSS", "JavaScript"],
        imageUrl: "/noon.jpg",
        link: "https://noon-by-rophile.netlify.app/",
        category: "Clones"
    },
    {
        title: "Salt n Pepper Clone",
        description: "A luxury hospitality platform clone. Replicates the performance-optimized menus and booking flows of the iconic Salt n Pepper brand.",
        tags: ["Bootstrap 5", "JQuery", "CSS3"],
        imageUrl: "/Salt.png",
        link: "https://rophilekhan.github.io/Salt-n-pepper-Responsive/",
        category: "Clones"
    },
    {
        title: "Expense Management",
        description: "A financial logic engine for personal budgeting. Implements local storage persistence and category-wise data visualization for financial tracking.",
        tags: ["JavaScript", "Bootstrap", "Local Storage"],
        imageUrl: "/expence.png",
        link: "https://expense-management-system-by-rophile.netlify.app/",
        category: "SaaS / Apps"
    },
]

export const skillsData = [
    // 📱 MOBILE ENGINEERING (Core Focus)
    "React Native", // Focus of 7+ project conversations
    "React Native Specialist", // Focus of 7+ project conversations
    "Expo & Bare Workflow", // Used for iOS environment setup
    "React Navigation", 
    "NativeWind (Tailwind for Mobile)",
    "React Native Reanimated",
    "FlashList (Performance UI)",
    "Google Play Console Management", // Handled dormant account warnings
    "App Store & Play Store Deployment",

    // 🌐 FULLSTACK ARCHITECTURE
    "Next.js 14/15 Mastery",
    "React.js Expert",
    "TypeScript",
    "JavaScript",
    "MERN Stack (MongoDB, Express, React, Node)", // Primary professional stack
    "Redux Toolkit & Zustand",
    "React Query (TanStack)",

    // ⚙️ CLOUD & DATA
    "Firebase (Cloud Messaging & Auth)", // Key for Bites & Braces
    "Node.js Backend",
    "MongoDB",
    "RESTful API Architecture",
    "SQL Server & .NET MVC",
    "C Programming & Flowcharts", // From Programming Fundamentals
    "C#", // From Programming Fundamentals

    // 🛠️ LEADERSHIP & PROFESSIONAL TOOLS
    "CEO atCodesphinx", // Current leadership role
    "Agile Leadership",
    "Technical Architecture",
    "Git / GitHub Workflow",
    "Postman API Testing",
    "Vercel / Netlify Deployment",
    "Professional Communication", // Drafted formal emails to Google & HR
] as const;