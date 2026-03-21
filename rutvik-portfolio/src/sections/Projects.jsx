import TiltCard from "../components/ui/TiltCard";
import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Projects() {
  const ref = useRef();

  // GSAP reveal
  useGsap((gsap) => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  const projects = [
    {
      title: "🚗 Car Rental System",
      desc: "Full-stack Django application with booking, billing & Razorpay integration.",
      problem:
        "Manual booking & billing processes were inefficient and error-prone.",
      solution:
        "Built automated booking system with role-based access, payments & email confirmations.",
      impact:
        "Reduced admin workload by 45% and improved user engagement by 50%.",
      tech: ["Django", "Razorpay", "MySQL", "Bootstrap"],
      github: "https://github.com/rutvikmat",
    },
    {
      title: "🐄 Dairy Farm Management System",
      desc: "Java full-stack system to manage farm operations efficiently.",
      problem:
        "Manual tracking of dairy operations caused delays and inefficiencies.",
      solution:
        "Developed web system with admin/user dashboards and real-time data handling.",
      impact:
        "Improved operational efficiency by 60% and reduced manual work.",
      tech: ["Java", "JSP", "MySQL", "HTML/CSS"],
      github: "https://github.com/rutvikmat",
    },
    {
      title: "📊 SYNCHER (Period Tracker)",
      desc: "ML-powered web app for predicting menstrual cycles.",
      problem:
        "Existing apps lacked personalized predictions and insights.",
      solution:
        "Built ML-based prediction system using real data + analytics dashboard.",
      impact:
        "Improved prediction accuracy and provided actionable health insights.",
      tech: ["Django", "ML", "Chart.js", "Python"],
      github: "https://github.com/rutvikmat",
    },
    {
      title: "🧠 Nail Disease Classifier",
      desc: "AI-based image classifier with Grad-CAM visual explanations.",
      problem:
        "Users lacked accessible tools to identify nail diseases early.",
      solution:
        "Developed CNN-based classifier with visual explanation support.",
      impact:
        "Enhanced interpretability and usability of ML predictions.",
      tech: ["Flask", "TensorFlow", "CNN", "Grad-CAM"],
      github: "https://github.com/rutvikmat",
    },
  ];

  return (
    <section ref={ref} id="projects" className="section relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-10 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text text-center mb-16">
          Projects & Case Studies
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (
            <motion.div key={i} className="project-card">
              <TiltCard>

                {/* TITLE */}
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-2 text-sm">
                  {project.desc}
                </p>

                {/* PROBLEM */}
                <p className="mt-4 text-sm">
                  <span className="text-red-400 font-medium">Problem:</span>{" "}
                  {project.problem}
                </p>

                {/* SOLUTION */}
                <p className="mt-2 text-sm">
                  <span className="text-blue-400 font-medium">Solution:</span>{" "}
                  {project.solution}
                </p>

                {/* IMPACT */}
                <p className="mt-2 text-sm">
                  <span className="text-green-400 font-medium">Impact:</span>{" "}
                  {project.impact}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="glass-light px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-indigo-400 hover:underline"
                  >
                    💻 GitHub
                  </a>

                  <a
                    href="#"
                    className="text-sm text-cyan-400 hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                </div>

              </TiltCard>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Want to see more projects or collaborate?
          </p>
          <a
            href="https://github.com/rutvikmat"
            target="_blank"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2 rounded-xl"
          >
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}