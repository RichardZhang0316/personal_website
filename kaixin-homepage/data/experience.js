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
  }
];

export const poemTags = [
  "查尔斯顿", "华盛顿 DC", "费城", "纽约",
  "北京", "武汉", "旧金山", "圣何塞", "凤凰城",
  "博鳌", "万宁", "琼海", "海口"
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
