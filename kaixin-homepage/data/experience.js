export const personal = {
  name: "KAIXIN ZHANG",
  email: "richardzhangkaixin0316@gmail.com",
  phone: "743-649-1607",
  linkedin: "https://www.linkedin.com/in/richardzhangkaixin/",
  github: "https://github.com/RichardZhang0316",
  medium: "https://medium.com/@richardzhangkaixin0316",
  summary: "Software engineer with strong programming, analytical, and communication skills. Experienced in system programming, full-stack, distributed system, agile development, fintech, machine learning, and mobile development with Java, C/C++, and Python",
  objective: "Seeking a software engineering new grad position after May 2026"
};

export const education = [
  {
    id: 1,
    institution: "University of Pennsylvania",
    location: "Philadelphia, PA, US",
    degree: "M.S.",
    major: "Computer and Information Science (CIS)",
    startDate: "2024-08",
    endDate: "2026-05",
    achievements: [],
    logo: "/images/universities/penn.svg.png"
  },
  {
    id: 2,
    institution: "Wake Forest University",
    location: "Winston Salem, NC, US",
    degree: "B.S.",
    major: "Computer Science & Math Business",
    startDate: "2020-08",
    endDate: "2024-05",
    achievements: ["Dean's List", "Meritorious Winner of the 2022 Interdisciplinary Contest in Modeling (ICM)", "Third Place in the 2022 WakeHacks Hackathon"],
    logo: "/images/universities/WF.svg"
  }
];

export const courses = [
  "Object Oriented Programming (OOP)",
  "System Design",
  "Algorithm",
  "Computer Systems",
  "Software System",
  "Network",
  "Database",
  "Machine Learning",
  "Large Language Model (LLM)",
  "Cloud Computing"
];

export const skills = {
  languages: ["Java", "C/C++", "Python", "JavaScript", "PHP", "SQL", "Swift", "CUDA"],
  frameworks: ["React", "Vue", "REST API", "Spring Boot", "Node.js", "Express", "PyTorch", "TensorFlow", "MPI4PY", "Ray", "SLURM"],
  tools: ["Git", "UNIX", "MySQL", "PostgreSQL", "NoSQL", "MongoDB", "AWS EC2 & RDS", "GCP", "Azure", "Kubernetes", "Docker", "Spark", "HPC"]
};

export const experiences = [
  {
    id: 1,
    company: "Green Qubit Inc.",
    position: "Software Engineering Intern",
    location: "Palo Alto, California, US",
    startDate: "2023-06",
    endDate: "2023-08",
    companyUrl: "https://www.greenqubit.com",
    companyLogo: "/gqlogo.jpeg",
    highlights: [
      "Developed a cash-and-carry arbitrage system using Python and CCXT API, integrating real-time order book analysis and automated execution to capture spreads between cryptocurrencies and their futures; historical backtesting showed a 55% profit rate",
      "Engineered three algorithmic trading strategies, using NumPy to do statistical analysis and Pandas to process large-scale trading data",
      "Optimized arbitrage execution between centralized and decentralized exchanges, implementing asynchronous task scheduling and distributed computing with Ray, reducing latency from 120s to 60s and minimizing slippage risk"
    ],
    technologies: ["Python", "CCXT API", "NumPy", "Pandas", "Ray", "Distributed Computing"]
  },
  {
    id: 2,
    company: "Bashpole Software Inc.",
    position: "Software Engineering Intern",
    location: "North Webster, IN, US",
    startDate: "2022-05",
    endDate: "2022-09",
    companyUrl: "https://www.bashpole.com",
    companyLogo: "/bashpole_software_inc_logo.jpeg",
    highlights: [
      "Developed and optimized an employee management system using JavaScript, utilizing Web Workers for multithreading and mutex locks to prevent race conditions, reducing execution time from more than 5 minutes to 60 seconds",
      "Implemented eight Google Apps Script programs that automatically executed daily maintenance tasks and realized significant reduction of 5 task hours weekly; constructed library and web app so all employees could use functions",
      "Integrated Google Cloud Functions with remote procedure calls (RPCs) into a client task tracking system, enabling real-time data retrieval across distributed sheets, reducing response time by 20%"
    ],
    technologies: ["JavaScript", "Web Workers", "Google Apps Script", "Google Cloud Functions", "RPCs"]
  },
  {
    id: 3,
    company: "Xiaomi Technology Inc.",
    position: "Product Manager Intern",
    location: "Beijing, China",
    startDate: "2021-06",
    endDate: "2021-08",
    companyUrl: "https://www.xiaomi.com",
    companyLogo: "/Xiaomi_logo.svg",
    highlights: [
      "Collaborated closely with backend team to optimize App Store SDK; integrated Spring Boot for efficient microservices, utilized Hibernate for ORM-based data access, and incorporated Apache Kafka for event-driven messaging",
      "Developed product technical specifications, focusing on Java-based applications; ensured seamless interplay between Spring MVC for web layer in Xiaomi phones, the 2nd most frequently shipped smartphone brand in the world",
      "Led technical redesign of coupon pop-up function by leveraging Vaadin for rich web UI components; launched specialized campaign using enhanced functionality on 2021 Valentine's Day, achieving revenue spike to 0.8M"
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "Apache Kafka", "Vaadin"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Penn Cloud",
    subtitle: "Distributed Cloud Storage and Webmail Platform",
    period: "January 2025 – May 2025",
    description: "A multi-tier fault-tolerant distributed system providing file storage services with primary-backup replication",
    details: [
      "Implemented a multi-tier fault-tolerant distributed system with stateless frontend servers, round-robin load balancer, and a backend key-value store using C/C++, pthreads, and TCP, to provide file storage services with primary-backup replication, row-level locking, checkpointing, and recovery",
      "Designed and built backend data recovery protocols, including full sync, local recovery, and incremental log sync, using checkpoint versions and sequence numbers to minimize data recovery time after node crashes",
      "Developed an interactive admin console for live node monitoring and data inspection, supporting failure injection and verifying system consistency under dynamic conditions",
      "Constructed a multithreaded SMTP and POP3 email server integrated into the system, enabling reliable webmail transmission and retrieval with semaphore-based concurrency control and flock-based file locking; optimized server performance with pthreads for concurrent connections, reducing response latency by 40% and supporting up to 500 simultaneous connections"
    ],
    technologies: ["C/C++", "pthreads", "TCP", "Distributed Systems", "SMTP", "POP3", "Concurrency Control"],
    githubUrl: "https://github.com/RichardZhang0316/Penn-Cloud",
    demoUrl: "https://drive.google.com/file/d/1PfIzjfEB3HQ-oY3UGt6a8DpgvzHluQLP/view?usp=sharing",
    image: "/images/projects/penncloud.jpg",
    featured: true,
    category: "distributed-systems"
  },
  {
    id: 2,
    title: "Movie Match",
    subtitle: "Full-Stack Movie Web Application",
    period: "January 2025 – February 2025",
    description: "A full-stack movie analytics platform for exploring IMDb and Rotten Tomatoes data",
    details: [
      "Built a full-stack movie analytics platform using React.js, Node.js, Express, and PostgreSQL, exposing optimized RESTful APIs for exploring IMDb and Rotten Tomatoes data across 140,000+ movies",
      "Created a relational schema in AWS RDS, implemented complex SQL queries with CTEs for cross-platform rating analysis",
      "Optimized backend performance via database indexing and query caching, achieving a 5× speedup on complex filter queries"
    ],
    technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "AWS RDS", "RESTful API"],
    githubUrl: "https://github.com/RichardZhang0316/MovieMatch",
    demoUrl: "https://drive.google.com/file/d/1lAKnHcC3KHiNlJQ_OO4uUtWgB0sz5X5G/view?usp=sharing",
    image: "/images/projects/moviematch.png",
    featured: true,
    category: "web-development"
  },
  {
    id: 3,
    title: "Network Routing and Overlay Search Engine",
    subtitle: "Link-State, Distance-Vector, and Chord-based DHT",
    period: "January 2025 – February 2025",
    description: "Implementation of custom routing protocols and a distributed hash table for efficient search",
    details: [
      "Implemented custom routing protocols at the network layer in ns-3, including neighbor discovery, link-state flooding, Dijkstra-based shortest-path routing, and distance-vector exchanges for dynamic packet forwarding",
      "Optimized LS message processing, reducing execution count from thousands to under 1,000, improving efficiency and stability",
      "Built a Chord-based distributed hash table（DHT）with 32-bit SHA hashing and finger tables; developed a keyword-based search engine on top, supporting inverted index publishing and efficient multi-hop document query routing"
    ],
    technologies: ["ns-3", "Network Protocols", "Distributed Hash Table", "Chord", "SHA Hashing"],
    githubUrl: "",
    demoUrl: "https://drive.google.com/file/d/1PfIzjfEB3HQ-oY3UGt6a8DpgvzHluQLP/view?usp=sharing",
    image: "/images/projects/network.png",
    featured: false,
    category: "networking"
  },
  {
    id: 4,
    title: "WFU Eatery",
    subtitle: "Mobile App Development",
    period: "September 2021 – January 2023",
    description: "A campus dining mobile application providing real-time dining information",
    details: [
      "Designed and developed a campus dining mobile application using React.js and serverless cloud functions, providing real-time dining hall menus, food calorie details, and crowd levels, enhancing the dining experience for 200+ DAU",
      "Built a user review feature using MySQL, allowing users to submit food reviews, like/dislike items, and rate canteens",
      "Implemented a Python-based web crawler with caching to aggregate real-time dining data and display live traffic conditions, ensuring accurate menu updates while reducing manual input errors by 70%"
    ],
    technologies: ["React.js", "Serverless Cloud Functions", "MySQL", "Python", "Web Crawler"],
    githubUrl: "https://github.com/yourusername/wfu-eatery",
    demoUrl: "",
    image: "/images/projects/eatery.png",
    featured: true,
    category: "mobile-development"
  }
];

export const categories = [
  { id: "distributed-systems", name: "Distributed Systems" },
  { id: "web-development", name: "Web Development" },
  { id: "mobile-development", name: "Mobile Development" },
  { id: "networking", name: "Networking" },
  { id: "machine-learning", name: "Machine Learning" }
];
