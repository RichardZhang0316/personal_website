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
  },
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
  },
  {
    id: 79,
    title: "我好迷茫 但十分钟就没事了",
    date: "2023-06-02",
    location: "北京",
    tags: ["北京"],
    excerpt: "小贩兜售九块九一包花的浪漫，而再便宜的也不是我能拥有的",
    body: `小贩兜售九块九一包花的浪漫 而再便宜的也不是我能拥有的

十分钟后：哈哈哈 多大点事 不开心就吃饭！`
  },
  {
    id: 80,
    title: "我在想她，或是在想念过去的我",
    date: "2023-05-17",
    location: "北京",
    tags: ["北京"],
    excerpt: "我想她。想问问她最近怎么样……",
    body: `我想她。想问问她最近怎么样。想和她一起去吃饭、看展、看电影，就像那年夏天一样。

我恨她、怨恨她。不理解她的谎话。

我想回去。回到高中毕业后的暑假，什么都不懂的年纪。让故事再来一遍。我想继续奉献，我想继续牺牲，为了她。

我残缺的那一页，我被撕掉的那一页。如果我可以再来一遍，我还会爱她。因为我们从来就没有选择爱谁的能力，不是吗？`
  },
  {
    id: 81,
    title: "520小麻",
    date: "2022-05-20",
    location: "北京",
    tags: ["北京"],
    excerpt: "最近常常感觉迷失了好久好久，已经看不到归途了……",
    body: `最近常常感觉迷失了好久好久，已经看不到归途了。

可能是因为好久没有回家了，也可能因为之前失败太多了，对于爱没有什么憧憬了，觉得它也不是那么重要了。

现在碰到所谓的"机会"，不知道该怎么做了。每次聊天都很想逃，想赶紧结束话题，也没有啥期待和想象。

总结一下，就是麻了。没有办法和任何人说，于是就放在这里讲给陌生人听。希望能早日脱离这样的烦恼`
  },
  {
    id: 82,
    title: "学大诗人说话",
    date: "2022-04-08",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "新的转机和闪闪的星斗，正在缀满没有遮拦的天空",
    body: `新的转机和闪闪的星斗，正在缀满没有遮拦的天空`
  },
  {
    id: 83,
    title: "据说，希望的事情",
    date: "2021-06-26",
    location: "北京",
    tags: ["北京"],
    excerpt: "据说，希望的事情，迟早会实现，但实现的希望，总是变了味的",
    body: `"据说，希望的事情，迟早会实现

但实现的希望，总是变了味的"

——杨绛，1981`
  },
  {
    id: 84,
    title: "我们还剩一约未赴",
    date: "2021-06-22",
    location: "北京",
    tags: ["北京"],
    excerpt: "无论答案美好还是残酷，无论我的命运如何，我还是忘不掉你、以及你对我的唯一性。",
    body: `"爬行中
不能没有
一路思念
让我谢谢你，几番追逐之后
爱情远遁心中
让我在树下和夜晚对面而坐"

——海子，1985

无论答案美好还是残酷，无论我的命运如何，我还是忘不掉你、以及你对我的唯一性。希望明晚一切美丽。让我在这里，在你看不到的地方，跟你真诚地说声晚安。"别熬夜学经济了，多休息，那成绩不值得你的美丽"`
  },
  {
    id: 85,
    title: "May I always do for others",
    date: "2025-05-17",
    location: "费城",
    tags: ["费城"],
    excerpt: "May I always do for others, and let others do for me",
    body: `May I always do for others
And let others do for me`
  },
  {
    id: 86,
    title: "行行重行行",
    date: "2021-12-19",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "行行重行行，与君生别离",
    body: `行行重行行，与君生别离
相去万余里，各在天一涯
道路阻且长，会面安可知
胡马依北风，越鸟巢南枝
相去日已远，衣带日已缓
浮云蔽白日，游子不顾反
思君令人老，岁月忽已晚
弃捐勿复道，努力加餐饭

——古诗十九首`
  },
  {
    id: 87,
    title: "再长的路也要一步一步走",
    date: "2021-11-12",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "再长的路也要一步一步走，就像朴树说，'而你可知道我的汗水将淹没寒冷的异乡'",
    body: `再长的路也要一步一步走，就像朴树说，"而你可知道我的汗水将淹没寒冷的异乡"`
  },
  {
    id: 88,
    title: "神死去，我们才能独立",
    date: "2021-10-02",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "也许只有神死了我们才能独立自立。",
    body: `也许只有神死了我们才能独立自立。也就是说，对迷信者来说神仙皇帝死去是最好的，对盖茨比来说失去绿光是最好的。对我来说那天亦如是。`
  },
  {
    id: 89,
    title: "不怕千万里千万事",
    date: "2021-09-14",
    location: "温斯顿塞勒姆",
    tags: ["温斯顿塞勒姆"],
    excerpt: "不怕千万里千万事",
    body: `不怕千万里千万事`
  }
];

export const articles = [
  {
    id: 1,
    title: "地铁口流浪家",
    date: "2024-07-14",
    location: "杭州→北京",
    excerpt: "在从杭州回北京的火车上，我刚引导了一个刚上车的拎着大包小包的老奶奶找到了她的座位。她的样子让我想到了我84岁、有阿兹海默症的奶奶……",
    body: `在从杭州回北京的火车上，我刚引导了一个刚上车的拎着大包小包的老奶奶找到了她的座位。她的样子让我想到了我84岁、有阿兹海默症的奶奶。我要去山东看奶奶，要陪在奶奶身边，听她那些对于受迫害的妄想和对逝去的恐惧的话，只要这样的陪伴可以给她慰藉。

坐在我旁边的是一个花臂大哥，除了有点挤我之外，我没什么抱怨。上次一个人坐火车还是在去年春假结束，从华盛顿回北卡的时候。那是一个晚上的火车，开得非常慢。火车开到一半的时候，坐在我斜前方的一个独行的黑人小女孩突然癫痫发作。她先是浑身剧烈颤动、呕吐，然后昏迷口吐白沫。前排的乘客都猛地站起来，看着她昏迷颤抖不知所措。坐我右边的一个四十多岁的黑人女大妈一脸冷漠，平静地看着小女孩说她知道她是癫痫，她小女儿几岁的时候就是得了癫痫去世的，所以她对症状很了解。她说这话的时候如此平静又冷漠，让我感觉有点震惊，又不知道该不该表达些什么安慰她。火车停在荒野里，医护人员在乘务员的指引下来到车厢。在问了好几次谁是陪她一起乘车而被告知她应该是独自一个人乘车后，医护人员把小女孩抬走了。而前排的一个胖黑人大妈开始对乘务员大吼大叫要求换座位。她说："这个车厢的空气是有毒的，这会把小女孩的病传染给这车厢所有的人！"在她大吵大嚷了几分钟后，乘务员悄悄把她带到了别的车厢。我不知道小女孩为什么独行，为什么有癫痫，也不知道右边的女人经历过什么，正如我不知道这个老奶奶为什么一个人提着大包小包坐火车一样。相隔万里的国家、不同的文化、种族，但悲伤的事情和复杂的人却是普遍存在的，而造成这些事情的原因可能更加相似。

我昨天晚上梦到了从纽约的地铁口出来的景象。梦境和真实经历的是相似的。在没有一栋高于五层楼的地方生活很久，然后从曼哈顿下城的一个阴暗逼仄的地铁口走出来，看到鳞次栉比的高楼和熙攘的人群，以及扑鼻而来的marijuana味道，都让我恍惚且觉得虚幻。这种感觉，正如我在长沙五一广场地铁站出来后，看到满街的餐厅广告、茶颜悦色、和更多的人一样。与此不同的是，当我回国后第一次从北京家旁边的地铁站走上来时，看到熟悉的街景和高中每天晚上都去那刷sat的24小时麦当劳，意识到过去的日子以后也很难重现，过去的好朋友已成陌路，前缘已逝，田园牧歌的小孩子生活更是需要结束，而前路如雾且凶险异常，怎么能不感到怅然呢？正如我高中的好朋友去年跟我聊天时说的：大家都马上要毕业工作了，肯定要现实、功利一点，就像个成年人一样。对我来说，这是一个喧杂吵闹的时刻，也是一个易于迷失的时刻。如何听到谬误的语言而不接受，看到荒唐的行为而不苟同，拒绝虚幻的快乐，承认错误、改正错误，如同将白纸上的污点逐个擦去——总之，做正确的事情。只有做到这些，才能让我走出自己的、于自己和他人都有意义的路。高中最后一次在韩国考SAT，我在回国的航班上，帮一个代购装了很多东西，到了北京还给代购的时候，我竟然还习惯性地说了声谢谢，搞得我和代购都笑死了。我曾经比现在更愿意听别人倾诉、喜欢安慰别人，哪怕当时自己也很难过、更喜欢和我喜欢的朋友聊我的近况和故事。有朋友说，我也许是那种需要通过爱别人来爱自己的人。不要再这样下去了。我的行为无法控制别人的想法，比如就算再单纯善良的举动也会被无法理解的他人认为是白莲花。为了自己和爱自己的人生活，不再顾忌自己做的一件事给他人的观感，更不会为了他人而让自己难受，这才是问题的唯一解法和捍卫自身利益的唯一方法论，也是"成年人"的入门券。

我在杭州实习时，mentor吃饭时跟我说："年轻人就要做新的事情。"深以为然。加州？纽约？新加坡？日本？不管是哪，我希望着下一次在世界的哪个地方出地铁口时，不再有什么恍惚怅然，因为我会看到的是绿意盎然、钟灵毓秀的广阔天地。行动起来，创造新生活！`
  },
  {
    id: 2,
    title: "伪装成呓语的爱情",
    date: "2022-04-10",
    location: "温斯顿塞勒姆",
    excerpt: "这篇文章的前面一部分写于去年9月，为笔者刚到达美国时所写，但因为当时还无法和过去做出清晰的分割，因此无法写完，遂辍笔……",
    body: `笔者按：这篇文章的前面一部分写于去年9月，为笔者刚到达美国时所写，但因为当时还无法和过去做出清晰的分割，因此无法写完，遂辍笔。笔者现在早已经与过去的一长段时间做出清晰的分割，并愿意称过去的这个我为旧版本的我。笔者去年写这篇文章时正在读山多尔的《伪装成独白的爱情》，所以当时模仿书中的风格写了这篇文章的前半部分。现在，得此闲暇时间完成了这篇文章。旧版本的笔者情绪浓烈，但无法清晰叙事，因为当时还有情绪的牵绊。新版本的笔者能说清楚很多事，但没有了浓烈的情绪。相信读者可以在读的时候清晰地分别哪一段是哪个版本的笔者所写。感谢阅读我的故事。

晚上好，我的朋友！快坐下，poteat的lounge真是冷，椅子也不舒服！如果这不是美国，我一定会请你喝上一杯我特调的伏特加兑冰红茶，这也是充满故事的味道呢，尽管这不是我今晚要和你讲的故事。总之你明白我的意思吧，我要谢谢你愿意来这里陪我，因为没有什么人知道我的故事，而我也会有一天割掉这些故事，所以你是我唯一的见证者。尽管没有酒神，夜神也可以在今夜始终与我们相伴。你想从什么时候听起？今天吗，或者是三个月前，又或是这个故事的开始——去年10月？……算了，时间都不重要，重要的是热望、挫折、反思、成长和重生这些关键情节对吗？请允许我把他们用昆汀的方式讲出来吧，我喜欢他的《低俗小说》，我还贴了个海报在我房间……哈哈又扯到别的上面了，我脑子有些不清晰了，真是抱歉。那我这就开始讲。谈论时间真是无聊，所以你只需要通过我能提供给你的物证证明它曾经的存在和强烈。我曾和室友在北京冬天点过两杯带着迷你毛绒帽的奶茶，我把帽子取下，夹在平板支架，想象明天美好的日子。我引用过木心的诗句：再不出去也许就停了 温带的雪停了便融化，而我也不曾料到这次的雪下在了西伯利亚冻土带，到了北京最热的时候也像布满灰色尘土的冰块一样顽强存在着。我在北京的一些夜里，有好多话想说，面对她时，话便说不出口了，只是发了 "With a full but soft emotion, like the swell of Summer's ocean" 和史铁生说的"整个夏天，语言总不能捉住心绪，满溢的心绪也许注定无以表达，语言总是离他的心愿太远"来总结那时复杂的思绪和犹豫的心情。"也许注定无以"，一语成谶。人们喜欢将想完成的所有事规划成一条统一且不矛盾的道路，因此我会喜欢《灯光》里的"打击可恨的侵略者战斗更勇敢，为了苏维埃祖国和亲爱的灯光"。在颓废和抑郁后，我看到她，正如普希金说的那样"在穷乡僻壤，在囚禁的阴暗生活中，我的日子就那样静静地消逝，没有倾心的人，没有诗的灵感，没有眼泪，也没有爱情。如今心灵已经开始苏醒：这时在我的面前又重新出现了你，有如昙花一现的幻影，有如纯洁之美的天仙。我的心在狂喜中跳跃，心中的一切又使我重新苏醒，有了倾心的人，有了眼泪，也有了爱情"。19岁的小孩有时会畏惧世界，但我找到的慰藉是豆瓣日历上的：我害怕前面的路，但是一想到你，就有能力往前走了。这样的物证我能找太多了。坐在烛台上，我是一只花圈，想着另一只花圈，不知道何时献上，不知道怎样安放。我仍然记得我们第一次在西单吃饭，我当时暑假整了点小钱，想请她吃饭，但她逛来逛去最后选了家烤鱼，哈哈哈真是不会选。不过那一次我们很开心，从六点一直聊到十点多烤鱼店打烊，又去了旁边一家游戏城，但一直都在聊天。我后来想过很多次，当时应该更hustle一点，结果会很不一样。没关系朋友，我没事。哈哈我亲爱的朋友，看起来你厌倦了？如果我只是想讲热望的物证那也太无聊且狭隘了，正如好的电影情节一定是曲折的，好的故事也不可以都是美好的事情。我的故事不仅有悲伤和纠结，而且旷日持久，如日复一日的折磨与处罚，以至于让我反思和改变，并最终决定坐在Poteat的lounge和你讲述它以做个了断。我猜想过很多爱而不得的原因，是时间太长了，是时常emo并以此为荣，是不够霸道，还是不够好看，五条人这时唱到："你为什么不回来，哦我已全都明白"。我口口声声说不要因为别人说什么改变看法，也赞同海子说的"看着你从门前走过 或是走进我的门"，但我又怎么会没有私心，那时的我，正如树上的男爵的父亲死时的样子："在他急切而含糊不清的话语中混杂着希望之音、祈祷之音、也有恐惧之音"。朋友，你知道我不想为我的无能推卸责任，但我还是觉得是因为她，也因为我，我的心情时起时落，而emo成为常态，这是一个恶性循环，把我和她的距离推得更远了。我时常想，悲剧和不幸也许在最开始就已经注定了，因为我原来总爱想太多。她可能因为我当时的多情而靠近我，但在失去兴趣后也会因为我放任情绪所带来的不稳定而远离我。现在想来，有些我做错的事情纯粹是因为矫情。我喜欢fine dining，不是因为它昂贵、浮夸或可能给用餐者带来的虚荣，而是喜欢fine dining所带给用餐者安逸、温馨和美好的氛围和体验。她也喜欢fine dining，于是我们约定以后要一起经常吃饭。可彼时的我太幼稚，总想用自己的钱请她吃饭。我用高中毕业暑假教托福挣的钱请她吃法餐，但那点钱属实不够我请她吃几顿好饭的，而我也拒绝把我父母的钱花在fine dining上。因此，在11月的那次吃饭后，我在到三四月新学期开始的很长一段时间里都没有再约她吃饭。现在想来实在是太蠢了：漫漫寒假，加上网课的一两个月，我竟然一不聊天二不约饭，服了。但朋友，我是蠢，但我也在努力在遵循我的规则下试图达到我想达到的目的：我一寒假都在研究股市，最开始赚了点，但因为没有及时回收浮盈而又亏了很多，所以我没有办法用自己赚到的钱请她吃饭。当我的账户终于盈利时，已是第二年的五月末，我从股市里提出一部分利润到银行卡里，却不再有机会用这些钱实现我的愿望了，正如我那时在小红书上所引用的杨绛的话："据说希望的事情迟早会实现，但实现的希望总是变了味的"。朋友，这就是我所说的"时间太长"的前因后果，我后悔过，我不该这么轴。

我的朋友，你渴了吗？要不要去贩卖机买两瓶可乐？我不知道该怎么说下去，越说越感觉我在推卸责任……但我还是说下去。凭借我的经验，我觉得一旦一个人对另一个人很重要，那后者会在他的思想和动机层面就开始考虑前者，而人的所有行为都是基于思想和动机的……所以你懂了吗？如果强行把被爱那个人从脑子里剔除掉，对另一个人的影响是颠覆性的，无论是思想还是行为。所以无论如何，在那天夜里从金融街走到西单之后，改变自己已经是自然且注定的事情了。让改变自己成为更加必要的事情的是她的一句话："只可惜你还缺点霸道"。霸道到底是什么？"保持自我"不过是资本主义社会哄骗大众多买东西的难以推敲的骗局：如果真的要保持自我，又为什么要改变四岁时自己在幼儿园时的性格呢？在那天晚上后的第二天，我在小红书上写道："要改变，要不停往前走。前进，不择手段的前进"。我自离了金融街的实习，因为她就要来金融街离我一街之隔的公司实习了，而我不想每天一看到金融街三个大字的时候就想到她。我从西二环离开，去到北五环外实习，也决心要改变自己易于伤感、放任情绪的状态以及做事的方式。我在新公司硬着头皮和各种人接洽，在别人指责我时也刻意保持微笑，然后强迫自己注视着他们的眼睛。每当我有机会不必受他人注视时，我便会告诉自己"people change"然后握紧拳头继续抗住运营姐姐的毒打。那段时间现在想来是难熬的，换做是现在的我可能都熬不住，但只是因为那时的我不情愿相信我只是原来的我，也不情愿相信我不能改变自己的性格，所以我坚持下来，并通过这段经历变得可以不再放任自己的情绪。我认识了新的朋友，看到了原来被狭隘目的所阻挡的视野，也正如我小红书那时所写的："摆脱绝望的境地"。

朋友，你真是聪明，你看到了我当时的矛盾之处：我努力要改变，因为我被拒绝了，但我改变的目的和方向还是冲着她的那句话而制定的。你想的没错，差不多一年的时间已经让我对她的依恋到达了不可替代的地步。虽然不想这样，但我还是无法控制地喜欢她，我很想为了她而改变，希望她能回心转意，直到我发现我变了也没用。你想知道我离开金融街去小米工作的另一个原因吗？所谓"远离她"只是我搪塞别人的借口罢了：金融街券商实习工资太少了，少到不足以让我用自己挣的钱请她吃一顿米其林三星新荣记。那家新荣记就在我实习公司的旁边那栋楼——英蓝大厦——如果我没记错的话。我每天上班下班，在金融街看着西装革履的人群、高楼大厦、和对面的新荣记，总感觉有一道无形的屏障将我和他们隔开，我总觉得我不属于这里。我必须去一家给我更多钱的公司，就算离她更远，但通过这种方式我总算能有机会和她再吃一顿fine dining。"我虽然物理上离她更远了，我其实离她更近了"，我当时如是想。我要用全新的面貌和她吃饭，告诉她我已经变了：是一个更坚强、有韧性、可以被依靠、"霸道"的男生了。只要这样，她就会回心转意，我当时幼稚地这样想。几个月前的周五。我的朋友，我清晰地记得是7月16日下午五点，我从北五环外的小米早退，辗转几次地铁回到金融街，带她去吃北京坊的na+，用我刚挣到的钱。我通过语言神情谈论的话题对事物的反应——所有我能做到的一切——去向她证明我已经改变了。"我能感觉到"这是我收到的回复，但也就这了。我们从北京坊一路走到她家楼下，就像那天夜晚一样，这不过这次我更加狼狈罢了。请别让我详细描述，我亲爱的朋友。

之后发生的事情也简单到没有必要向你一一陈述：我把注意力放到了别的上面，以此来掩饰我内心的难过。也是这段时间，让我得到了很好的朋友，让我明白了我要做什么，也让我反思了很多事情。这段时光很珍贵，也是这段时光让我今夜坐在poteat lounge有机会把这些事情向你一一陈述。谢谢你，我亲爱的朋友，你能陪我到现在，我真的开心。祝你有个好梦，晚安。

T在2021年九月的某天凌晨写下这些话的时候，他的内心仍然在调和他当时的心愿与现实的矛盾。他当时还存在一些希望，直到后来很多次，经过他和她不懈的努力，那些无用的希望才被浇灭。T后来这样想这件事：他在一个希望爱别人的年纪爱上了一个人，给了很多爱。在没有结果后，他会难过，有时候生气，另一些时候自责或者后悔。但没有关系，因为没有谁做错了，而且他们二人都是对彼此珍贵的人：他们不再以世俗角度看待彼此的优点和缺点，他们的羁绊，那些已经尘埃落定的态度和关系，不会因为别人说什么而动摇。T也在颠覆很多东西后得到了新的视野和希望，变得为了自己而坚强勇敢，不再喝伏特加兑冰红茶来emo。事实上，T自己觉得现在自己已经是一个能做很多事、可以轻易调节情绪、珍惜并坚持自己的心愿和想法的人了。T相信自己可以做的比旧版本的自己好，T知道过去可能没有想象中的那么好，未来也不会比过去糟。The best is yet to come, T现在不仅会这么说，也会这么相信。`
  },
  {
    id: 3,
    title: "emo冇得用啦（美国破火车上小记）",
    date: "2022-03-10",
    location: "温斯顿塞勒姆",
    excerpt: "晚上十一点半，一个人坐在从华盛顿回大学村里的火车上，六个小时的车程很漫长……",
    body: `晚上十一点半，一个人坐在从华盛顿回大学村里的火车上，六个小时的车程很漫长。窗外漆黑的夜色只有偶尔的零星白色冰冷的灯光闪过，听哪首歌都无法帮助我缓解迷茫苦恼的情绪，思绪繁杂却无法组成完整的思路或进行有逻辑的思考。一个人旅行了三天，遇到什么事或有什么感觉都是在心里和自己说，也没有什么不开心，却不想许久不见的低落情绪突然来到。

我最近开始对很多东西感到迷茫和不可靠。对于自己惰性的气愤、申请奖学金的挫折、对于App开发价值的质疑和急迫的时间，都让我感到我做错了一些事，对于另外一些事不够专注和纯粹，以及我本应该能做得更好的自责。

下周就是二十岁生日，回看这一年，我觉得我对于自己想做到的事情还算尽心竭力，不论是对爱的追寻还是对自己想做的事的执着。但正如我很早就知道的，并不是尽力就能让所有想做的事都有成果。但这也没有关系，屡败屡战对于我已经是轻车熟路，正如《美丽心灵》里的台词："My odds of success are dramatically improved with every attempt." 如果换成一年前那个多愁善感的我，现在估计已经开始喝伏特加兑冰红茶了，但我经过去年暑假之后，能坚强地面对这些本就没啥的事了。

"即使社会病态，也不要随波逐流；处在人生最低谷时，不妨充实自己。"坚定自己的选择和真正想做的事，就算和大部分人的选择都不一样，也会凭借热爱和专注取得成果。不要因为别人的说法或周围人的做法所改变，做我认为正确的事情。通过各种方法来更自律地学习生活，我们大有希望。最后，我会继续寻找感受别人爱和爱别人的机会，但如果上述所有都能做到，那最后这个也是水到渠成。双鱼座感情思绪多是馈赠又是原罪，我要做的也很简单：情绪波动时独立调节，把阳光乐观的一面留给大家。

保持有用的乐观态度，摒弃无用的悲观态度，相信自己值得被爱，追求创造价值产生影响力，借用邓爷爷的话说，我有信心将自己的事情做得更好。`
  },
  {
    id: 4,
    title: "结束也预示着新生",
    date: "2022-09-07",
    location: "温斯顿塞勒姆",
    excerpt: "世界上有难以改变的事：关系、宿命与未来、现实。这是一个不理想的世界……",
    body: `世界上有难以改变的事：关系、宿命与未来、现实。这是一个不理想的世界，这是一个灰色的世界，这是一个有很多贪嗔痴的人和愚蠢或险恶事情的世界。就像2021年6月25号之后那样，我需要振作、保持乐观的态度、坚持自己的做法和想法，独立自主，勇敢且持续地走自己的路，思考自己的事，旗帜鲜明地对抗我认为错的事。我们忠于理想，我们面对现实，我们谱写浪漫。`
  },
  {
    id: 5,
    title: "近期的一些生活碎片",
    date: "2021-07-11",
    location: "北京",
    excerpt: "大雾重重，前路浩渺，新的挑战和旧的困扰仍缠绕在身体……",
    body: `大雾重重，前路浩渺，新的挑战和旧的困扰仍缠绕在身体。尽管如此，希望和慰藉，正如千千万万过往的日子一样，明亮地挂在我的夜空中。前进是为了摆脱绝望的境地，是为了询问最后的可能，也是为了寻找新的朋友、道路、和自己。`
  },
  {
    id: 6,
    title: "大中午的emo和三天之内面的那些试",
    date: "2021-06-23",
    location: "北京",
    excerpt: "中午吃完饭在公司附近遛弯，看到连绵的高楼，心情就像1900下船时看到的那些灰暗的大厦和人生时一样……",
    body: `中午吃完饭在公司附近遛弯，看到连绵的高楼，心情就像1900下船时看到的那些灰暗的大厦和人生时一样。要改变，要不停往前走。"前进，不择手段地前进"。`
  },
  {
    id: 7,
    title: "人生的第一份实习",
    date: "2021-06-22",
    location: "北京",
    excerpt: "在券商的一个半月就这样过去了……",
    body: `在券商的一个半月就这样过去了。伴随着并不累且重复性的工作的，是思想和心理的双重破坏和极大颠覆。改变与过渡的时期总是艰难且痛苦的，但危机总伴随着机遇。未来从迷茫、遥远、模糊变得具象而看似触手可得。我自己看起来，两周前的我早已不是现在的我了。行动方式、思考方式、关心的问题、以及深植于内心深处的目标已经无声改变。不管这条路会引向哪里，不管它是好是坏，我的世界已经改变。让我拭目以待你会把我带到哪去。无穷的世界和远方、无数的生活和人，我都会遇见、爱上并最终选择它们。`
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

export const reflections = [
  {
    id: 1,
    text: `其实即使在那个处境，也总相信问题是能够解决的。前几年外国朋友问我为什么能度过那个时期，我说没有别的，就是乐观主义。所以，我现在身体还可以。如果天天发愁，日子怎么过？

乐观　忍耐　想得开　挺得住`,
    source: null
  },
  {
    id: 2,
    text: `即使社会病态，也不要随波逐流；处在人生最低谷时，不妨充实自己。

养成阅读的习惯
保持高雅的情趣
坚持道德的勇气
获得真实的自我

雄关漫道真如铁，而今迈步从头越

保持身体健康，保持好奇心，多学习`,
    source: "我的初中导师"
  },
  {
    id: 3,
    text: `人生无根蒂，飘如陌上尘
分散逐风转，此已非常身
落地为兄弟，何必骨肉亲
得欢当作乐，斗酒聚比邻
盛年不重来，一日难再晨
及时当勉励，岁月不待人`,
    source: "陶渊明"
  },
  {
    id: 4,
    text: `夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。
长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，江海寄余生。`,
    source: "苏轼"
  },
  {
    id: 5,
    text: `自信
每天问自己：为什么而学习`,
    source: null
  },
  {
    id: 6,
    text: `愿你在被打击时，
记起你的珍贵，抵抗恶意；
愿你在迷茫时，
坚信你的珍贵。
爱你所爱，行你所行，
听从你心，无问西东`,
    source: "《无问西东》"
  },
  {
    id: 7,
    text: `我看总的局势是这样，唯一的办法是我们自己不乱。我们的基础好，是几十年打出来的，这个威势一直要传到后代，保持下去，这是本钱。别人的事情我们管不了，只讲一个道理：中国的社会主义是变不了的。中国肯定要沿着自己选择的社会主义道路走到底。谁也压不垮我们。只要中国不垮，世界上就有五分之一的人口在坚持社会主义。我们对社会主义的前途充满信心。

总之，对于国际局势，概括起来就是三句话：第一句话，冷静观察；第二句话，稳住阵脚；第三句话，沉着应付。不要急，也急不得。要冷静、冷静、再冷静，埋头实干，做好一件事，我们自己的事。`,
    source: "邓小平"
  },
  {
    id: 8,
    text: `蓼蓼者莪，匪莪伊蒿。哀哀父母，生我劬劳。
蓼蓼者莪，匪莪伊蔚。哀哀父母，生我劳瘁。
瓶之罄矣，维罍之耻。鲜民之生，不如死之久矣。无父何怙？无母何恃？出则衔恤，入则靡至。`,
    source: "《蓼莪》"
  },
  {
    id: 9,
    text: `欲买桂花同载酒，终不似，少年游`,
    source: "刘过"
  },
  {
    id: 10,
    text: `忌：骄奢淫逸贪妒怒傲`,
    source: null
  },
  {
    id: 11,
    text: `天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？

嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。所赖君子见机，达人知命。

老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！`,
    source: "王勃《滕王阁序》"
  },
  {
    id: 12,
    text: `谨慎——放弃integrity一次就会一直放弃`,
    source: null
  },
  {
    id: 13,
    text: `growth mindset

为有牺牲多壮志，敢教日月换新天`,
    source: null
  },
  {
    id: 14,
    text: `山巖巖，海深深，地博厚，天高明，
人之尊，心之灵。广大出胸襟，悠久见生成。
珍重，珍重，这是我新亚精神。

十万里，上下四方，俯仰锦绣。
五千载今来古往，一片光明，
十万万神明子孙，东海西海南海北海有圣人。
珍重，珍重，这是我新亚精神。

手空空，无一物，路遥遥，无止境。
乱离中，流浪裏，饿我体肤劳我精。
艰险我奋进，困乏我多情。
千斤担子两肩挑，趁青春，结队向前行。
珍重，珍重，这是我新亚精神。`,
    source: "新亚书院院歌"
  },
  {
    id: 15,
    text: `颓惰自甘，家业难成`,
    source: null
  },
  {
    id: 16,
    text: `做的事情要有连贯性和目的——记住自己做所有事情的本心是什么`,
    source: null
  },
  {
    id: 17,
    text: `Seek the interaction of technology and humanity`,
    source: null
  },
  {
    id: 18,
    text: `孔曰成仁，孟曰取义，惟其义尽，所以仁至。读圣贤书，所学何事，而今而后，庶几无愧。`,
    source: "文天祥"
  },
  {
    id: 19,
    text: `自我感觉良好的时候，通常也是位于愚昧之巅的时候`,
    source: null
  },
  {
    id: 20,
    text: `自然选择号，前进四！`,
    source: null
  },
  {
    id: 21,
    text: `keep faith　keep faith`,
    source: null
  },
  {
    id: 22,
    text: `逆水行舟，不进则退`,
    source: null
  },
  {
    id: 23,
    text: `道阻且长，行则将至`,
    source: null
  },
  {
    id: 24,
    text: `内心自己的声音`,
    source: null
  },
  {
    id: 25,
    text: `究天人之际，通古今之变，成一家之言`,
    source: "司马迁"
  },
  {
    id: 26,
    text: `舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中，管夷吾举于士，孙叔敖举于海，百里奚举于市。故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。人恒过，然后能改，困于心，衡于虑，而后作；征于色，发于声，而后喻。入则无法家拂士，出则无敌国外患者，国恒亡，然后知生于忧患而死于安乐也。`,
    source: "《孟子·告子下》"
  },
  {
    id: 27,
    text: `先了解要做的事情，不要拖延
ACT NOW for everything！想要做的事就现在立刻做`,
    source: null
  },
  {
    id: 28,
    text: `穷则变，变则通，通则久`,
    source: "《易经》"
  },
  {
    id: 29,
    text: `士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？`,
    source: "《论语·泰伯》"
  },
  {
    id: 30,
    text: `We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.`,
    source: "John F. Kennedy, 1962"
  },
  {
    id: 31,
    text: `冷静观察、稳住阵脚、沉着应付、善于守拙、韬光养晦、决不当头、有所作为`,
    source: "邓小平"
  },
  {
    id: 32,
    text: `当一个工种的工作内容只是攒素材、重复机械性劳动的时候，就意味着更高效的技术已经在路上了`,
    source: null
  },
  {
    id: 33,
    text: `强者和弱者的四个临界点：目标、自信、自律、专注。无论现状如何糟糕，有了这四点就是强者，就一定大有希望。`,
    source: null
  },
  {
    id: 34,
    text: `人必先自辱而后人辱之，国必先自伐而后国伐之`,
    source: null
  },
  {
    id: 35,
    text: `要向着冰球运动的方向滑，而不是它现在的位置`,
    source: "Wayne Gretzky"
  },
  {
    id: 36,
    text: `你必须非常努力，才能看起来毫不费力

爱劳动　求进步`,
    source: null
  },
  {
    id: 37,
    text: `执行力`,
    source: null
  },
  {
    id: 38,
    text: `无冥冥之志者，无昭昭之明；无惛惛之事者，无赫赫之功`,
    source: "《荀子》"
  },
  {
    id: 39,
    text: `人无远虑，必有近忧`,
    source: "《论语》"
  },
  {
    id: 40,
    text: `未雨绸缪`,
    source: null
  },
  {
    id: 41,
    text: `纯粹`,
    source: null
  },
  {
    id: 42,
    text: `有志者事竟成`,
    source: null
  },
  {
    id: 43,
    text: `积极社交，认识更多人，提高社交能力，积极发言，勇敢起来，脚踏实地，踏实成长`,
    source: null
  },
  {
    id: 44,
    text: `选择艰难却正确的事`,
    source: null
  },
  {
    id: 45,
    text: `不要玻璃心，对坏人不要懦弱`,
    source: null
  },
  {
    id: 46,
    text: `跑步进入新时代：乐观　自信　向上　成功`,
    source: null
  },
  {
    id: 47,
    text: `主人翁意识
硬气，水到渠成的事
找喜欢的人，做喜欢的事`,
    source: null
  },
  {
    id: 48,
    text: `祝你我都能知道自己想要什么，并努力地做好自己的事情。不再因为过去的事或所谓的那些"缺陷"而自我怀疑、迷失、或沉沦。保持纯粹，踏实做事，也不急功近利。不再听信他人的声音，也不再关心陌生人的远近、进退、与得失。听到自己的声音，做好自己的事。在困难的时候，要看到成绩，看到光明，提高我们的勇气。希望永远会在我们这一边。`,
    source: null
  },
  {
    id: 49,
    text: `毋好逸恶劳`,
    source: null
  },
  {
    id: 50,
    text: `不要被limited vision of life所阻挡，追求改变，追求格物致知，追求看到大局`,
    source: null
  },
  {
    id: 51,
    text: `镀金时代会过去，更好的地方在未来

Stay hungry. Stay foolish.
求知若饥，虚怀若愚`,
    source: "Steve Jobs"
  },
  {
    id: 52,
    text: `纯真而不欠闻达，善良而不失坚强，把生命高举在尘俗之上，又融化于社会之中，这应当是我们这一代人的共同追求`,
    source: null
  }
];
