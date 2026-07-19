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
    location: "查尔斯顿",
    tags: ["查尔斯顿", "异乡", "旅途"],
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
    location: "华盛顿 DC",
    tags: ["华盛顿 DC", "南方", "夏日"],
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
  },
  {
    id: 3,
    title: "报君黄金台上意",
    date: "2026-03-26",
    location: "费城",
    tags: ["费城"],
    excerpt: "报君黄金台上意，提携玉龙为君死",
    body: `报君黄金台上意，提携玉龙为君死`
  },
  {
    id: 4,
    title: "多情多感仍多病",
    date: "2026-02-09",
    location: "纽约",
    tags: ["纽约"],
    excerpt: "多情多感仍多病，多景楼中，尊酒相逢，乐事回头一笑空",
    body: `多情多感仍多病，多景楼中，尊酒相逢，乐事回头一笑空`
  },
  {
    id: 5,
    title: "自古有羁旅",
    date: "2026-01-24",
    location: "北京",
    tags: ["北京"],
    excerpt: "自古有羁旅，我何苦哀伤",
    body: `自古有羁旅，我何苦哀伤`
  },
  {
    id: 6,
    title: "寓身此世一尘沙",
    date: "2026-01-14",
    location: "北京",
    tags: ["北京"],
    excerpt: "寓身此世一尘沙，笑看潮来潮去了生涯",
    body: `寓身此世一尘沙，笑看潮来潮去了生涯`
  },
  {
    id: 7,
    title: "往前走吧，别害怕",
    date: "2026-01-05",
    location: "博鳌",
    tags: ["博鳌"],
    excerpt: "往前走吧，别害怕",
    body: `往前走吧，别害怕`
  },
  {
    id: 8,
    title: "水光都眼净",
    date: "2025-12-28",
    location: "万宁",
    tags: ["万宁"],
    excerpt: "水光都眼净，山色总眉愁",
    body: `水光都眼净，山色总眉愁`
  },
  {
    id: 9,
    title: "大江动我前",
    date: "2025-12-24",
    location: "琼海",
    tags: ["琼海"],
    excerpt: "大江动我前，汹若溟渤宽……",
    body: `大江动我前，汹若溟渤宽
篙师暗理楫，歌笑轻波澜`
  },
  {
    id: 10,
    title: "珍重",
    date: "2025-12-23",
    location: "海口",
    tags: ["海口"],
    excerpt: "珍重珍重，陪伴家人的时刻……",
    body: `珍重珍重，陪伴家人的时刻。
珍重珍重，每一位良师益友。
珍重珍重，旅途中的酸涩、眼泪、迷惘、幸福和希望。
珍重珍重，和过去的伤痛与停滞道别。
珍重珍重，乐观地面对未至的挑战和赐予。
珍重珍重，保持勇气、坚持善良、热爱学习、忠信于人。
珍重珍重，这是我人生精神。珍重珍重，这是我新起点。

歌曰：
人生无根蒂，飘如陌上尘
分散逐风转，此已非常身
落地为兄弟，何必骨肉亲
得欢当作乐，斗酒聚比邻
盛年不重来，一日难再晨
及时当勉励，岁月不待人`
  },
  {
    id: 11,
    title: "又是离家五百天后",
    date: "2025-12-09",
    location: "北京",
    tags: ["北京"],
    excerpt: "又是离家五百天后，家乡的风，家乡的云……",
    body: `又是离家五百天后
家乡的风
家乡的云
收聚翅膀
睡在我的双肩`
  },
  {
    id: 12,
    title: "人生如逆旅",
    date: "2025-12-09",
    location: "武汉",
    tags: ["武汉"],
    excerpt: "惆怅孤帆连夜发，送行淡月微云……",
    body: `惆怅孤帆连夜发，送行淡月微云。尊前不用翠眉颦。
人生如逆旅，我亦是行人。`
  },
  {
    id: 13,
    title: "杨花似雪",
    date: "2025-12-08",
    location: "旧金山",
    tags: ["旧金山"],
    excerpt: "去年相送，馀杭门外，飞雪似杨花……",
    body: `去年相送，馀杭门外，飞雪似杨花。
今年春尽，杨花似雪，犹不见还家。`
  },
  {
    id: 14,
    title: "一纸乡书来万里",
    date: "2025-12-08",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "一纸乡书来万里，问我何年，真个成归计……",
    body: `一纸乡书来万里。问我何年，真个成归计。回首送春拚一醉，东风吹破千行泪。`
  },
  {
    id: 15,
    title: "此生飘荡何时歇",
    date: "2025-12-07",
    location: "凤凰城",
    tags: ["凤凰城"],
    excerpt: "此生飘荡何时歇，家在西南，常作东南别",
    body: `巾偏扇坠藤床滑，觉来幽梦无人说。此生飘荡何时歇。家在西南，常作东南别。`
  },
  {
    id: 16,
    title: "惟有归来是",
    date: "2025-12-06",
    location: "费城",
    tags: ["费城"],
    excerpt: "买花载酒长安市，又争似、家山见桃李……",
    body: `买花载酒长安市，又争似、家山见桃李？
不枉东风吹客泪，
相思难表，梦魂无据，惟有归来是。`
  },
  {
    id: 17,
    title: "此心安处是吾乡",
    date: "2025-12-07",
    location: "费城",
    tags: ["费城"],
    excerpt: "万里归来年愈少，微笑，笑时犹带岭梅香……",
    body: `万里归来年愈少，微笑，笑时犹带岭梅香。
试问岭南应不好，却道，此心安处是吾乡。`
  },
  {
    id: 18,
    title: "清夜无尘",
    date: "2025-11-08",
    location: "费城",
    tags: ["费城"],
    excerpt: "清夜无尘，月色如银……",
    body: `清夜无尘，月色如银
酒斟时、须满十分
浮名浮利，虚苦劳神
叹隙中驹，石中火，梦中身`
  },
  {
    id: 19,
    title: "我仍忘不了那个下雪的冬日",
    date: "2025-11-06",
    location: "费城",
    tags: ["费城"],
    excerpt: "苍白的天空下，雪覆盖着北卡的土地……",
    body: `苍白的天空下，雪覆盖着北卡的土地，吹在我脸上，正残忍地剜去我的记忆。我打开宿舍门，就能看到她和那辆车了。我来送她离开北卡的最后一程。

整条路都很安静，鞋底蹭在结冰的路面上发出细碎声。我的身体有一半被掏空了。我看着她，不知道如何说再见。我与你在一起的记忆，谁还会珍重？此后的世界，谁会在意你我。没有了心力，我又该如何生活下去，与这艰难底世道斗争？

她上车了，我不想回头看她，因为怒气和悲伤。雪花呼啸着，掩埋着青春的记忆。然后我去食堂，嚼着百年不变的炒蛋、香肠、培根。

雪这样厚，天这么冷，海那样深。我的一切在那天停滞了。那是2022年1月的一天，那年我19岁。`
  },
  {
    id: 20,
    title: "那是我更大的幸福",
    date: "2025-11-02",
    location: "费城",
    tags: ["费城"],
    excerpt: "当然，但凡去年来过的鸟，清清楚楚，一看就认得……",
    body: `当然，但凡去年来过的鸟
清清楚楚，一看就认得
那是我更大的幸福`
  },
  {
    id: 21,
    title: "费城的秋天来了",
    date: "2025-10-21",
    location: "费城",
    tags: ["费城"],
    excerpt: "云何，当此去，人生底事，来往如梭……",
    body: `费城的秋天来了！
云何，当此去，人生底事，来往如梭？待闲看秋风，洛水清波`
  },
  {
    id: 22,
    title: "世事一场大梦",
    date: "2025-10-06",
    location: "费城",
    tags: ["费城"],
    excerpt: "中秋 · 啤酒鸭 — 世事一场大梦，人生几度新凉……",
    body: `世事一场大梦，人生几度新凉。
夜来风叶已鸣廊，看取眉头鬓上。
酒贱常愁客少，月明多被云妨。
中秋谁与共孤光，把盏凄然北望。`
  },
  {
    id: 23,
    title: "河汉虽同路绝",
    date: "2025-09-22",
    location: "费城",
    tags: ["费城"],
    excerpt: "河汉，河汉，晓挂秋城漫漫……",
    body: `河汉，河汉，晓挂秋城漫漫。愁人起望相思，塞北江南别离。离别，离别，河汉虽同路绝`
  },
  {
    id: 24,
    title: "行动起来，创造新生活",
    date: "2025-09-19",
    location: "费城",
    tags: ["费城"],
    excerpt: "行动起来，创造新生活",
    body: `行动起来，创造新生活`
  },
  {
    id: 25,
    title: "不管风吹浪打",
    date: "2025-09-18",
    location: "费城",
    tags: ["费城"],
    excerpt: "不管风吹浪打，胜似闲庭信步",
    body: `不管风吹浪打，胜似闲庭信步`
  },
  {
    id: 26,
    title: "太平世界，环球同此凉热",
    date: "2025-09-14",
    location: "费城",
    tags: ["费城"],
    excerpt: "太平世界，环球同此凉热……",
    body: `太平世界，环球同此凉热

激情在我的生活并无用武之地。压力和愤怒无处发泄，孤独更无法忍受。嘲笑与挫折完全无法影响我的情绪。一点也不会在乎别人的看法。心也像最卑鄙的人一样冷漠无情。在残酷的生活中，在淡漠的人情里，我拥抱世界的本来样貌。心里憋着一口五六年的怒气，什么时候才能大展拳脚大干一番。干他个天翻地覆？`
  },
  {
    id: 27,
    title: "暖风不解留花住",
    date: "2025-09-13",
    location: "费城",
    tags: ["费城"],
    excerpt: "暖风不解留花住，片片着人无数……",
    body: `暖风不解留花住，片片着人无数
楼上望春归去，芳草迷归路`
  },
  {
    id: 28,
    title: "人间正道是沧桑",
    date: "2025-09-03",
    location: "费城",
    tags: ["费城"],
    excerpt: "钟山风雨起苍黄，百万雄师过大江……",
    body: `钟山风雨起苍黄，百万雄师过大江。
虎踞龙盘今胜昔，天翻地覆慨而慷。
宜将剩勇追穷寇，不可沽名学霸王。
天若有情天亦老，人间正道是沧桑。`
  },
  {
    id: 29,
    title: "只要有信念，去哪无所谓",
    date: "2025-08-15",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "明天有多难，只要有信念，去哪无所谓",
    body: `明天有多难
只要有信念，去哪无所谓`
  },
  {
    id: 30,
    title: "去二十二世纪看看",
    date: "2025-08-08",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "去二十二世纪看看！行动起来，走过荆棘……",
    body: `去二十二世纪看看！
行动起来，走过荆棘，创造新生活，看到新人类！`
  },
  {
    id: 31,
    title: "世上无难事，只要肯登攀",
    date: "2025-08-08",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "世上无难事，只要肯登攀",
    body: `世上无难事，只要肯登攀`
  },
  {
    id: 32,
    title: "与谁同坐",
    date: "2025-08-06",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "与谁同坐，明月清风我。",
    body: `与谁同坐，明月清风我。`
  },
  {
    id: 33,
    title: "梅花欢喜漫天雪",
    date: "2025-08-02",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "独有英雄驱虎豹，更无豪杰怕熊罴……",
    body: `独有英雄驱虎豹，更无豪杰怕熊罴。
梅花欢喜漫天雪，冻死苍蝇未足奇`
  },
  {
    id: 34,
    title: "何处可栖，唯有我心",
    date: "2025-07-29",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "闪烁的星光只是家的幻象……",
    body: `闪烁的星光只是家的幻象
挣扎和苦痛却在异乡永存
何处可栖
唯有我心`
  },
  {
    id: 35,
    title: "从头越",
    date: "2025-07-25",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "从头越，苍山如海，残阳如血……",
    body: `从头越，苍山如海，残阳如血
玻璃冷映铁楼头，霞火无声似血流。
未许人间长太息，从头越处正登楼。`
  },
  {
    id: 36,
    title: "新亚精神",
    date: "2025-07-24",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "手空空，无一物，路遥遥，无止境……",
    body: `手空空，无一物，路遥遥，无止境。
乱离中，流浪裏，饿我体肤劳我精。
艰险我奋进，困乏我多情。
千斤担子两肩挑，趁青春，结队向前行。
珍重珍重，这是我新亚精神。`
  },
  {
    id: 37,
    title: "国际悲歌歌一曲",
    date: "2025-07-23",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "国际悲歌歌一曲，狂飙为我从天落",
    body: `国际悲歌歌一曲，狂飙为我从天落`
  },
  {
    id: 38,
    title: "我和过去",
    date: "2025-07-13",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "我和过去，隔着黑色的土地……",
    body: `我和过去
隔着黑色的土地
我和未来
隔着无声的空气`
  },
  {
    id: 39,
    title: "时差",
    date: "2025-07-10",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "少年心境，被南方的淅淅小雨，洗得干净通透……",
    body: `少年心境
被南方的淅淅小雨
洗得干净通透
柔柔细雨、幽静园林、清风鸟鸣
于心底筑起守护

未来的阳光裹在身上
走进少女初见时的微笑
做白日梦
然后徐徐走向弯曲的迷途

五年如百年
孤独迷雾
城市是沙子
时间是恶魔
我是失败者
从今而后，寻找救赎之路`
  },
  {
    id: 40,
    title: "要看到光明",
    date: "2025-07-02",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "我们的同志在困难的时候，要看到成绩，要看到光明……",
    body: `我们的同志在困难的时候，要看到成绩，要看到光明，要提高我们的勇气。`
  },
  {
    id: 41,
    title: "东方欲晓",
    date: "2025-06-26",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "东方欲晓，莫道君行早",
    body: `东方欲晓，莫道君行早`
  },
  {
    id: 42,
    title: "此情惟有落花知",
    date: "2025-06-14",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "沙上不闻鸿雁信，竹间时有鹧鸪啼……",
    body: `沙上不闻鸿雁信，竹间时有鹧鸪啼。此情惟有落花知`
  },
  {
    id: 43,
    title: "A long day",
    date: "2025-06-07",
    location: "圣何塞",
    tags: ["圣何塞"],
    excerpt: "在艰难条件下坚持下去，独立去面对未知的一切，这就是我的救赎",
    body: `临走前清洗炉子被烫伤了。行李超重五磅多交了100刀。杀了七八只蜘蛛，房间杀虫剂的味道一度让我咳嗽。在艰难条件下坚持下去，独立去面对未知的一切，这就是我的救赎`
  },
  {
    id: 44,
    title: "钱塘江上须忠信",
    date: "2025-06-07",
    location: "费城",
    tags: ["费城"],
    excerpt: "江水似知孤客恨，南风为解佳人愠……",
    body: `江水似知孤客恨，南风为解佳人愠。莫学时流轻久困。频寄问，钱塘江上须忠信。`
  },
  {
    id: 45,
    title: "佳节连梅雨",
    date: "2025-06-02",
    location: "费城",
    tags: ["费城"],
    excerpt: "佳节连梅雨，馀生寄叶舟……",
    body: `佳节连梅雨，馀生寄叶舟
山与歌眉敛，波同醉眼流。
游人都上十三楼，不羡竹西歌吹古扬州`
  },
  {
    id: 46,
    title: "月是故乡明",
    date: "2025-05-18",
    location: "费城",
    tags: ["费城"],
    excerpt: "露从今夜白，月是故乡明……",
    body: `羹饭一时熟，不知贻阿谁

戍鼓断人行，边秋一雁声。
露从今夜白，月是故乡明。
有弟皆分散，无家问死生。
寄书长不达，况乃未休兵`
  },
  {
    id: 47,
    title: "生日快乐，给我自己",
    date: "2025-03-16",
    location: "费城",
    tags: ["费城"],
    excerpt: "昵昵儿女语，灯火夜微明……",
    body: `昵昵儿女语，灯火夜微明。恩怨尔汝来去，弹指泪和声。忽变轩昂勇士，一鼓填然作气，千里不留行。回首暮云远，飞絮搅青冥`
  },
  {
    id: 48,
    title: "深夜读苏轼",
    date: "2025-03-14",
    location: "费城",
    tags: ["费城"],
    excerpt: "莫叹平齐落落，且应去鲁迟迟……",
    body: `莫叹平齐落落，且应去鲁迟迟。与君各记少年时，须信人生如寄。
白发千茎相送，深杯百罚休辞。拍浮何用酒为池，我已为君德醉。

想念最真挚的好朋友，怀念最好的时光。嘉宁，什么时候再见？见面莫徘徊。东武望馀杭，云海天涯两渺茫。何日功成名遂了，还乡，醉笑陪公三万场。`
  },
  {
    id: 49,
    title: "万里之遥 大洋之彼岸",
    date: "2025-03-02",
    location: "费城",
    tags: ["费城"],
    excerpt: "眼泪在奶奶的眼中打转，记忆逐渐模糊……",
    body: `眼泪在奶奶的眼中打转
记忆逐渐模糊
却决不会忘却牵着我小手回家的黄昏
她的声音哆嗦着：我想你
眼泪流下她的沟壑 照亮她的阴影

故乡归期仍漫长未知
还要忍受多久
自己不开花的折磨

我最珍视的人们
他们为我在异国北方的夜空里
长情地挂上了的星星
坐在新月之上笑着互相嘀咕、看着我哩

每天再多做一件事
为了做好一个玻璃罩子
种好浅草和花朵
挖好小溪与温泉
驯养小鹿与狗子
调好春天的温度和阳光
安排微风和细雨
再盖一个木屋
把他们装进去

我要做这罩子的忠诚的守卫
凶恶无二
抵御邪恶的操纵和冷酷的恶意
风穿刺我的衣服 泥沙淹没我的拄杖
依然心如岩石 而目光如锋
若我也堕落 那就让我遭受火与刃
若我忠贞 则让我为他们牺牲奉献所有！`
  },
  {
    id: 50,
    title: "红军不怕远征难",
    date: "2025-03-02",
    location: "费城",
    tags: ["费城"],
    excerpt: "红军不怕远征难，万水千山只等闲",
    body: `红军不怕远征难，万水千山只等闲`
  },
  {
    id: 51,
    title: "何处依刘客，寂寞赋登楼",
    date: "2025-02-28",
    location: "费城",
    tags: ["费城"],
    excerpt: "功名事，身未老，几时休……",
    body: `功名事，身未老，几时休？诗书万卷，致身须到古伊周。莫学班超投笔，纵得封侯万里，憔悴老边州。何处依刘客，寂寞赋《登楼》`
  },
  {
    id: 52,
    title: "心之忧矣，其谁知之",
    date: "2025-02-22",
    location: "费城",
    tags: ["费城"],
    excerpt: "心之忧矣，聊以行国……",
    body: `今天读诗经：

园有棘 其实之食
心之忧矣 聊以行国
不知我者 谓我士也罔极
彼人是哉 子曰何其
心之忧矣 其谁知之
其谁知之 盖亦勿思`
  },
  {
    id: 53,
    title: "一万年太久，只争朝夕",
    date: "2025-02-20",
    location: "费城",
    tags: ["费城"],
    excerpt: "多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕",
    body: `多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕`
  },
  {
    id: 54,
    title: "一点浩然气，千里快哉风",
    date: "2025-02-18",
    location: "费城",
    tags: ["费城"],
    excerpt: "一千顷，都镜净，倒碧峰……",
    body: `一千顷，都镜净，倒碧峰
忽然浪起，掀舞一叶白头翁
堪笑兰台公子，
未解庄生天籁，刚道有雌雄
一点浩然气，千里快哉风`
  },
  {
    id: 55,
    title: "小舟从此逝，江海寄余生",
    date: "2025-02-17",
    location: "费城",
    tags: ["费城"],
    excerpt: "长恨此身非我有，何时忘却营营……",
    body: `今天读了许倬云的书！看到了这首诗：

命运如轮转动西风
故国余音彻夜回响
此岸之水愈深
彼岸身影愈发清朗

好诗！还想读出苏轼的诗搭配：

敲门都不应，倚杖听江声。长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，江海寄余生`
  },
  {
    id: 56,
    title: "二月之雪",
    date: "2025-02-12",
    location: "费城",
    tags: ["费城"],
    excerpt: "雪这么温柔怜爱，把腐烂的东西覆盖着，不想给你看见……",
    body: `他说："要有理想、有纪律"

昨天有漫无天日的大雪和诡谲的雾
你今早路过树枝下
滴到额头上的冰和水
像不像被绞的人滴下的
肉块和血

雪这么温柔怜爱
把腐烂的东西覆盖着
不想给你看见

你想起来了
最好的春天是2020年
是你的十八岁！
在北京和最后的朋友
体验和煦无忧的春日
自怜地
幻想变幻而无穷的将来

他对你说，
我们都是被保佑之人
你还不曾见过爸妈的白发和疲态
脆弱幼稚的缸中之鱼
不曾设想过深海之外的、等待着的挣扎
孤独寒冷的苦难

记住浪费的时间所给你的所有教训
张开双翼
闪烁有序 沉默不屈 心无旁骛
穿越暴风、大雪、春天、海洋
踏向星辰
奇迹与惊叹 充盈宇宙之时
方知你的归宿`
  },
  {
    id: 57,
    title: "处在人生最低谷时，不妨充实自己",
    date: "2025-02-10",
    location: "费城",
    tags: ["费城"],
    excerpt: "即使社会病态，也不要随波逐流……",
    body: `"即使社会病态，也不要随波逐流；处在人生最低谷时，不妨充实自己。"我的初中导师如是说。

我的导师还嘱咐我：
养成阅读的习惯
保持高雅的情趣
坚持道德的勇气
获得真实的自我

十年前的话现在看到还是历久弥新啊。
必须高歌一句：雄关漫道真如铁，而今迈步从头越`
  },
  {
    id: 58,
    title: "千面之神",
    date: "2025-02-07",
    location: "费城",
    tags: ["费城"],
    excerpt: "我戴着镣铐，在无生长的荒原上，拖行了多久了……",
    body: `我戴着镣铐
在无生长的荒原上
拖行了多久了？
雨水爆裂 泥土凶恶
被四根针刺穿的
眼
还想寻找什么？
水蛭啃食着
我让血顺着手臂流到地上喂养虫子

盲目的我
曾冲动地饥饿 悲伤地发怒
现在我用无谓的挣扎骄傲地盖起我的教堂
矛盾是你的礼物
幻象是你的分身
包括绿光、音乐、歌剧、诗歌、那个女孩
无常的分身已足够令我
沉迷或灭亡

吝啬的千面之神
你是我的一部分
我谦卑地命令您
让我跪在你的王座前
听听你对于绝伦宫殿的宏图

在血泪与激情中
我命令你提供伟大光明公正的未来
而我为你提供忠实可靠的力量
你不可再被他人夺取
千面之神，你只能被我祈祷

—2025.2.8凌晨，费城`
  },
  {
    id: 59,
    title: "天空沉默不语",
    date: "2025-02-07",
    location: "费城",
    tags: ["费城"],
    excerpt: "天空沉默不语 / How should i greet you?",
    body: `天空沉默不语
How should i greet you?`
  },
  {
    id: 60,
    title: "重读《荒原》",
    date: "2025-02-03",
    location: "费城",
    tags: ["费城"],
    excerpt: "四月是最残忍的月份，从死去的土地里……",
    body: `四月是最残忍的月份，从死去的土地里
培育出丁香，把记忆和欲望
混合在一起，用春雨
搅动迟钝的根蒂。`
  },
  {
    id: 61,
    title: "换一种心情，转身遇到另一种人生",
    date: "2025-02-02",
    location: "费城",
    tags: ["费城"],
    excerpt: "换一种心情，转身遇到另一种人生",
    body: `换一种心情，转身遇到另一种人生`
  },
  {
    id: 62,
    title: "我又拥有了眼泪",
    date: "2025-01-25",
    location: "费城",
    tags: ["费城"],
    excerpt: "我又拥有了眼泪，为我们而掉的眼泪",
    body: `我又拥有了眼泪
为我们而掉的眼泪`
  },
  {
    id: 63,
    title: "我们忠于理想",
    date: "2025-01-24",
    location: "费城",
    tags: ["费城"],
    excerpt: "我们忠于理想，我们面对现实，我们谱写浪漫",
    body: `我们忠于理想
我们面对现实
我们谱写浪漫`
  },
  {
    id: 64,
    title: "记录2025年1月11日",
    date: "2025-01-11",
    location: "费城",
    tags: ["费城"],
    excerpt: "一杯茶喝了一生的時間……",
    body: `我在你的食肆裏
碰上多年未見的朋友
在漬物和泡飯之間
一杯茶喝了一生的時間
……
給我唱一支歌吧
在深夜街頭的轉角
我們與昨天碰個滿懷
卻怎也想不起今天`
  },
  {
    id: 65,
    title: "狂飙为我从天落",
    date: "2025-01-10",
    location: "费城",
    tags: ["费城"],
    excerpt: "深夜健身房歌一曲……",
    body: `狂飙为我从天落

深夜健身房歌一曲：
手空空 无一物
路遥遥 无止尽
乱离中 流浪里
饿我体肤劳我精
艰险我奋进
困乏我多情
世上无难事
只要肯登攀`
  },
  {
    id: 66,
    title: "飞向未来 万事胜意",
    date: "2025-01-01",
    location: "费城",
    tags: ["费城"],
    excerpt: "挑战与希望并存。过去的事都放下。从新开始，做新造的人",
    body: `挑战与希望并存。过去的事都放下。从新开始，做新造的人`
  },
  {
    id: 67,
    title: "行到水穷处，坐看云起时",
    date: "2024-12-25",
    location: "费城",
    tags: ["费城"],
    excerpt: "行到水穷处，坐看云起时",
    body: `行到水穷处，坐看云起时`
  },
  {
    id: 68,
    title: "是时候找回希望了",
    date: "2024-12-23",
    location: "费城",
    tags: ["费城"],
    excerpt: "希望是最宝贵的东西，而我失去它三四年了……",
    body: `希望是最宝贵的东西
而我失去它三四年了
是时候找回希望了`
  },
  {
    id: 69,
    title: "大雾重重",
    date: "2024-09-27",
    location: "费城",
    tags: ["费城"],
    excerpt: "这样的雾，在19年的北京也见过。只不过那时候的我还憧憬着未来",
    body: `大雾重重

这样的雾，在19年的北京也见过。只不过那时候的我还憧憬着未来`
  },
  {
    id: 70,
    title: "救赎之旅",
    date: "2024-08-17",
    location: "云南弥勒",
    tags: ["云南弥勒"],
    excerpt: "救赎之旅",
    body: `救赎之旅`
  }
];

  {
    id: 71,
    title: "the ash valley",
    date: "2024-07-14",
    location: "山东",
    tags: ["山东"],
    excerpt: "雾霾 尘土 城乡结合部 混沌态 悲伤 自私 复杂的社会关系",
    body: `雾霾 尘土 城乡结合部 混沌态 悲伤 自私 复杂的社会关系`
  },
  {
    id: 72,
    title: "大学毕业了",
    date: "2024-05-20",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "纯真而不欠闻达，善良而不失坚强……",
    body: `🎓🎩

纯真而不欠闻达
善良而不失坚强
这应是我们这一代人的共同追求`
  },
  {
    id: 73,
    title: "我希望能帮助别人而不是只顾自己",
    date: "2024-05-10",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "我是中国人的儿子，我一定要努力回馈生我养我的土地和人们……",
    body: `我希望能帮助别人而不是只顾自己

我在美国读书，还想在美国找工作，还想挣钱，和爸爸妈妈过上好生活。但我仍然希望自己有机会可以努力帮助到在中国，三亿贫穷的农民工。我是中国人的儿子，我一定要努力回馈生我养我的土地和人们。至于那些吸血鬼们，一定会被消除干净`
  },
  {
    id: 74,
    title: "在森林里的最后一节课",
    date: "2024-05-01",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "白云低垂，满目葱翠。在森林里的最后一节课就这样结束了",
    body: `白云低垂，满目葱翠。看前面小哥玩了一整节课麻将连连看。走的时候白嫖了一份鸡肉三明治。在森林里的最后一节课就这样结束了`
  },
  {
    id: 75,
    title: "北卡下起了细雨",
    date: "2024-03-27",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "细雨如烟，清风鸟鸣，只可惜这不是真江南。",
    body: `细雨如烟，清风鸟鸣，只可惜这不是真江南。`
  },
  {
    id: 76,
    title: "维克晴月",
    date: "2024-02-23",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "四年一下子就要过去了。我们都变了好多……",
    body: `四年一下子就要过去了。我们都变了好多。沮丧挫折失望是这四年的主旋律。面对未知的未来和新的开始，我许下最美好的祝愿。

但愿人长久，千里共婵娟`
  },
  {
    id: 77,
    title: "杀死那个留子",
    date: "2023-12-07",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "如此生活四年，无聊孤独无助，远处暗淡的灯塔，影射我的命运……",
    body: `晚上八点演讲完 穿着单薄的西服
小卖部没水果卖了 我去食堂打了蔫了吧唧的水果
如此生活四年 无聊孤独无助
远处暗淡的灯塔 影射我的命运

期末事真多 还得申请研究生
明天有俩论文 一笔还没写
踌躇我的将来 厌弃这个破村
夜幕覆盖波托马克河之南 复杂心绪浸透我的心`
  },
  {
    id: 78,
    title: "老家照片2024",
    date: "2024-01-11",
    location: "老家",
    tags: ["老家"],
    excerpt: "北方小城城郊的凌晨、雾霾、荒芜、杂乱、残破。可这就是我的老家……",
    body: `北方小城城郊的凌晨、雾霾、荒芜、杂乱、残破。可这就是我的老家，是养育我、保护我、爱我的人在的地方。`
  }
];

export const poemTags = [
  "查尔斯顿", "华盛顿 DC", "费城", "纽约",
  "北京", "武汉", "旧金山", "圣何塞", "凤凰城",
  "博鳌", "万宁", "琼海", "海口", "云南弥勒",
  "山东", "温斯顿塞勒姆", "老家"
];

export const paintings = [
  {
    id: 1,
    title: "窗",
    date: "2026-07-05",
    location: "Santa Clara",
    image: "/images/art/window-santa-clara.jpeg",
    description: ""
  }
];

export const paintingLocations = ["Santa Clara"];
