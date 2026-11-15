import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "AI Agents", category: "AI and LLMs" },
  { name: "Multi Agent Systems", category: "AI and LLMs" },
  { name: "RAG", category: "AI and LLMs" },
  { name: "Tool Calling", category: "AI and LLMs" },
  { name: "Prompt Engineering", category: "AI and LLMs" },
  { name: "LLM Workflows", category: "AI and LLMs" },
  { name: "LLM Evaluation (RAGAS)", category: "AI and LLMs" },
  { name: "LangGraph", category: "AI and LLMs" },
  { name: "LangChain", category: "AI and LLMs" },
  { name: "ChromaDB", category: "AI and LLMs" },
  { name: "Pinecone", category: "AI and LLMs" },

  { name: "XGBoost", category: "Machine Learning" },
  { name: "Scikit-learn", category: "Machine Learning" },
  { name: "Feature Engineering", category: "Machine Learning" },
  { name: "Model Evaluation", category: "Machine Learning" },
  { name: "EDA", category: "Machine Learning" },

  { name: "Python", category: "Backend and Automation" },
  { name: "FastAPI", category: "Backend and Automation" },
  { name: "Flask", category: "Backend and Automation" },
  { name: "Streamlit", category: "Backend and Automation" },
  { name: "REST APIs", category: "Backend and Automation" },
  { name: "SQL", category: "Backend and Automation" },
  { name: "WhatsApp Business and Meta APIs", category: "Backend and Automation" },
  { name: "OCR", category: "Backend and Automation" },
  

  { name: "Docker", category: "Cloud and DevOps" },
  { name: "GCP (Cloud Run, Document AI)", category: "Cloud and DevOps" },
  { name: "GitHub Actions", category: "Cloud and DevOps" },
  { name: "Git", category: "Cloud and DevOps" },

  { name: "Oracle Cloud Infrastructure (OCI) 2025 AI Foundations Associate", category: "Certifications" },
  { name: "RapidMiner ML Professional", category: "Certifications" },
];

const categories = [
  "AI and LLMs",
  "Machine Learning",
  "Backend and Automation",
  "Cloud and DevOps",
  "Certifications",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2 rounded-full text-base font-medium transition-all duration-300",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.45)]"
                : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-base font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.45)]"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
