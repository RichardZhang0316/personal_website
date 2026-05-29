export const personal = {
  name: "KAIXIN ZHANG",
  email: "richardzhangkaixin0316@gmail.com",
  phone: "743-649-1607",
  linkedin: "https://www.linkedin.com/in/richardzhangkaixin/",
  github: "https://github.com/RichardZhang0316",
  medium: "https://medium.com/@richardzhangkaixin0316",
  summary: "Software engineer with strong programming, analytical, and communication skills. Experienced in system programming, full-stack, distributed system, agile development, fintech, machine learning, and mobile development with Java, C/C++, and Python",
  objective: "Incoming Software Engineer @ TikTok · Ads Measurement Signal Privacy Infrastructure"
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
    id: 4,
    company: "TikTok",
    position: "Software Engineering Intern",
    location: "San Jose, California, US",
    startDate: "2025-06",
    endDate: "2025-08",
    companyUrl: "https://www.tiktok.com",
    companyLogo: "/tiktok_logo.svg",
    highlights: [
      "Redesigned the attribution storage system in the TikTok Ads SIA data pipeline using Go, splitting a monolithic 980TiB Abase (Redis) instance of touchpoint data into consistent-hashed shards with merge-on-read to support scalable touchpoint storage",
      "Designed and implemented a zero-downtime database instance migration mechanism by maintaining dual consistent hash rings; used dual-read, dual-write approach with rollback mechanism to enable elastic scaling and balanced load distribution",
      "Validated data consistency via integration tests and experiments to test storage services and logging downstream fields; confirmed <1% diff in pre-production environment; further verified business correctness with A/B testing before rolling out to production traffic"
    ],
    technologies: ["Go", "Redis", "Consistent Hashing", "Distributed Systems", "A/B Testing", "Data Pipelines"]
  },
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

export const blogPosts = [
  {
    id: 1,
    title: "Building a Fault-Tolerant Distributed Key-Value Store in C++",
    excerpt: "A deep dive into primary-backup replication, checkpointing, and log-based recovery — lessons learned from building Penn Cloud from scratch.",
    date: "2025-04-15",
    readTime: "8 min read",
    tags: ["Distributed Systems", "C++", "Systems"],
    mediumUrl: "https://medium.com/@richardzhangkaixin0316",
    featured: true
  },
  {
    id: 2,
    title: "Chord DHT: From Theory to a Working Search Engine",
    excerpt: "How I implemented consistent hashing, finger tables, and an inverted index on top of a 32-bit SHA Chord ring to build a keyword search engine.",
    date: "2025-03-10",
    readTime: "6 min read",
    tags: ["Networking", "Distributed Systems", "Algorithms"],
    mediumUrl: "https://medium.com/@richardzhangkaixin0316",
    featured: false
  },
  {
    id: 3,
    title: "Optimizing Crypto Arbitrage Latency with Ray",
    excerpt: "From 120s to 60s: how asynchronous task scheduling and distributed computing with Ray helped cut execution latency in a cash-and-carry arbitrage system.",
    date: "2023-09-01",
    readTime: "5 min read",
    tags: ["Python", "Distributed Computing", "Fintech"],
    mediumUrl: "https://medium.com/@richardzhangkaixin0316",
    featured: false
  }
];

export const blogTags = [
  "Distributed Systems",
  "C++",
  "Systems",
  "Networking",
  "Algorithms",
  "Python",
  "Distributed Computing",
  "Fintech"
];

export const poems = [
  {
    id: 1,
    title: "南卡罗来那",
    date: "2026-05-12",
    tags: ["异乡", "旅途"],
    excerpt: "异乡的旅途带着对未知的忧愁，故国的灯火隐没天边……",
    body: `异乡的旅途带着对未知的忧愁
故国的灯火隐没天边
夏日平原上的橡树寂寞零落
海岸边的木屋黑暗寒冷
等你回到旧日生活的地方
那里会变成什么模样？`
  },
  {
    id: 2,
    title: "夏天",
    date: "2026-05-07",
    tags: ["南方", "夏日"],
    excerpt: "平原从沥青路上长向南方，绿荫如盖，天空幽蓝……",
    body: `平原从沥青路上长向南方
绿荫如盖，天空幽蓝
暗淡的孤星沉默不语
五月的南方一派生机
勾起回忆，刺激欲望
我从北方出发，为过去整理尸骸
为她在湖边草地修起一块纪念碑
你空空荡荡，我无可奈何
我仍想像你一样心存希望
新的一天将要来临
我要把泥沙握得紧紧
流浪，从东方到东方`
  }
];

export const poemTags = ["异乡", "旅途", "南方", "夏日"];
