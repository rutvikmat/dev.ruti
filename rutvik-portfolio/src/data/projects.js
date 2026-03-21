const projects = [
  {
    id: "car-rental",

    title: "Car Rental System",
    tagline: "Scalable booking platform with payment integration",

    description:
      "A full-stack Django-based web application that enables users to book cars online, manage rentals, and process payments seamlessly.",

    problem:
      "Traditional car rental systems relied heavily on manual processes, leading to inefficiencies, booking errors, and poor user experience.",

    solution:
      "Developed a fully automated booking system with role-based access, Razorpay payment integration, and real-time booking management.",

    impact: [
      "Reduced admin workload by 45%",
      "Improved booking efficiency by 50%",
      "Automated billing and payment workflows",
    ],

    tech: ["Django", "Python", "Razorpay", "MySQL", "Bootstrap"],

    images: [
      "/projects/car1.png",
      "/projects/car2.png",
      "/projects/car3.png",
    ],

    features: [
      "User authentication & role-based access",
      "Online car booking system",
      "Integrated payment gateway (Razorpay)",
      "Admin dashboard for management",
      "Automated billing & notifications",
    ],

    challenges: [
      "Securely integrating payment gateway",
      "Handling concurrent bookings efficiently",
      "Optimizing database queries for performance",
    ],

    github: "https://github.com/rutvikmat",
    live: "#",
  },

  {
    id: "dairy-management",

    title: "Dairy Farm Management System",
    tagline: "Full-stack system for managing dairy operations",

    description:
      "A Java-based web application designed to manage dairy farm operations including inventory, production tracking, and user management.",

    problem:
      "Manual tracking of dairy operations resulted in inefficiencies, data inconsistencies, and lack of real-time insights.",

    solution:
      "Developed a centralized system with admin and user dashboards to track operations and automate workflows.",

    impact: [
      "Improved operational efficiency by 60%",
      "Reduced manual errors significantly",
      "Enabled real-time monitoring of data",
    ],

    tech: ["Java", "JSP", "MySQL", "HTML", "CSS"],

    images: [
      "/projects/dairy1.png",
      "/projects/dairy2.png",
    ],

    features: [
      "Admin & user dashboards",
      "Inventory and production tracking",
      "Data management system",
      "Real-time updates",
    ],

    challenges: [
      "Designing scalable backend logic",
      "Managing relational database efficiently",
      "Ensuring data consistency",
    ],

    github: "https://github.com/rutvikmat",
    live: "#",
  },

  {
    id: "syncher",

    title: "SYNCHER (Period Tracker)",
    tagline: "ML-powered menstrual cycle prediction system",

    description:
      "A Django-based web application that predicts menstrual cycles using machine learning and provides analytics dashboards.",

    problem:
      "Existing tracking apps lacked personalized insights and accurate prediction capabilities.",

    solution:
      "Developed an ML-based prediction engine using real-world datasets combined with user input data for better accuracy.",

    impact: [
      "Improved prediction accuracy significantly",
      "Provided personalized health insights",
      "Enhanced user engagement with analytics",
    ],

    tech: ["Django", "Python", "Machine Learning", "Chart.js"],

    images: [
      "/projects/syncher1.png",
      "/projects/syncher2.png",
    ],

    features: [
      "Cycle prediction using ML",
      "User data tracking system",
      "Analytics dashboard",
      "Historical data visualization",
    ],

    challenges: [
      "Improving prediction accuracy",
      "Handling real-world dataset inconsistencies",
      "Integrating ML model with web app",
    ],

    github: "https://github.com/rutvikmat",
    live: "#",
  },

  {
    id: "nail-classifier",

    title: "Nail Disease Classifier",
    tagline: "AI-powered image classification with Grad-CAM",

    description:
      "A Flask-based AI application that detects nail diseases using CNN models and provides visual explanations using Grad-CAM.",

    problem:
      "Users lacked accessible tools for early detection of nail diseases.",

    solution:
      "Developed a deep learning model integrated into a web app with visual explanations to improve interpretability.",

    impact: [
      "Improved accessibility to early diagnosis tools",
      "Enhanced model transparency with Grad-CAM",
      "Provided user-friendly AI interface",
    ],

    tech: ["Flask", "TensorFlow", "CNN", "Grad-CAM"],

    images: [
      "/projects/nail1.png",
      "/projects/nail2.png",
    ],

    features: [
      "Image upload and prediction",
      "CNN-based classification",
      "Grad-CAM visual explanation",
      "User-friendly interface",
    ],

    challenges: [
      "Training accurate CNN model",
      "Improving model interpretability",
      "Optimizing prediction performance",
    ],

    github: "https://github.com/rutvikmat",
    live: "#",
  },
];

export default projects;