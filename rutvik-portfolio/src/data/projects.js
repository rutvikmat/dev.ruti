const projects = [
  {
    title: "SYNCHER",
    image: "/src/assets/images/projects/syncher.png",
    description:
      "AI-powered menstrual cycle prediction system with analytics and personalized insights.",

    problem:
      "Users struggle to accurately predict menstrual cycles and track symptoms effectively.",

    solution:
      "Built an ML-based prediction system using real-world datasets and user inputs, integrated with analytics dashboard.",

    metrics: [
      { label: "Prediction Accuracy", value: "85%" },
      { label: "Data Points", value: "10K+" },
      { label: "Users Supported", value: "500+" },
    ],

    tech: ["Django", "Machine Learning", "Python", "Chart.js"],

    live: "#",
    github: "#",
    case: "/projects/syncher",
  },

  {
    title: "Car Rental System",
    image: "/src/assets/images/projects/carrental.png",
    description:
      "Full-stack car rental platform with booking, billing, and admin management system.",

    problem:
      "Manual booking systems lack automation, real-time tracking, and scalability.",

    solution:
      "Developed a full-stack platform with dynamic booking system, payment integration, and admin dashboard.",

    metrics: [
      { label: "Modules", value: "10+" },
      { label: "Transactions", value: "100+" },
      { label: "System Efficiency", value: "High" },
    ],

    tech: ["Django", "MySQL", "JavaScript", "Bootstrap"],

    live: "#",
    github: "#",
    case: "/projects/car-rental",
  },

  {
    title: "AI Nail Disease Classifier",
    image: "/src/assets/images/projects/nail-ai.png",
    description:
      "AI-based image classification system to detect nail diseases with visual explanations.",

    problem:
      "Users lack accessible tools for early detection of nail diseases.",

    solution:
      "Built a deep learning model with Grad-CAM visualization to provide explainable predictions.",

    metrics: [
      { label: "Accuracy", value: "90%" },
      { label: "Classes", value: "5+" },
      { label: "Model Type", value: "CNN" },
    ],

    tech: ["Python", "TensorFlow", "Flask", "OpenCV"],

    live: "#",
    github: "#",
    case: "/projects/nail-ai",
  },

  {
    title: "Portfolio Website",
    image: "/src/assets/images/projects/portfolio.png",
    description:
      "Modern interactive portfolio with advanced animations and case-study project presentation.",

    problem:
      "Traditional portfolios lack engagement and storytelling.",

    solution:
      "Built a premium UI portfolio with GSAP animations, 3D interactions, and case-study based project showcase.",

    metrics: [
      { label: "Performance", value: "95+" },
      { label: "Sections", value: "8+" },
      { label: "UI Level", value: "Premium" },
    ],

    tech: ["React", "GSAP", "Tailwind CSS"],

    live: "#",
    github: "#",
  },

  {
    title: "JavaScript Learning Series",
    image: "/src/assets/images/projects/js-series.png",
    description:
      "30-day structured JavaScript learning series with projects, reels, and educational content.",

    problem:
      "Beginners struggle with structured and practical JavaScript learning paths.",

    solution:
      "Created a complete roadmap with daily projects, reels, and structured content delivery.",

    metrics: [
      { label: "Days", value: "30" },
      { label: "Content Pieces", value: "100+" },
      { label: "Reach", value: "10K+" },
    ],

    tech: ["JavaScript", "Content Strategy", "Teaching"],

    live: "#",
    github: "#",
  },
];

export default projects;