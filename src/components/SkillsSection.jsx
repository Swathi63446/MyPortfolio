import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Agentic Workflows",  category: "Agentic AI" },
  { name: "RAG Orchestration",  category: "Agentic AI" },
  { name: "Prompt Engineering", category: "Agentic AI" },
  { name: "LLMs",               category: "Agentic AI" },

  { name: "LangChain",  category: "AI Frameworks" },
  { name: "LangGraph",  category: "AI Frameworks" },

  { name: "XGBoost",             category: "Machine Learning" },
  { name: "Scikit-learn",        category: "Machine Learning" },
  { name: "Feature Engineering", category: "Machine Learning" },
  { name: "EDA",                 category: "Machine Learning" },

  { name: "Python",    category: "Development" },
  { name: "FastAPI",   category: "Development" },
  { name: "Streamlit", category: "Development" },

  { name: "Qdrant",            category: "Databases and Tools" },
  { name: "ChromaDB",          category: "Databases and Tools" },
  { name: "Pinecone",          category: "Databases and Tools" },
  { name: "SQL",               category: "Databases and Tools" },
  { name: "Microsoft Fabric",  category: "Databases and Tools" },
  { name: "Power BI",          category: "Databases and Tools" },
  { name: "REST APIs",         category: "Databases and Tools" },
];

const categories = [
  "Agentic AI",
  "AI Frameworks",
  "Machine Learning",
  "Development",
  "Databases and Tools",
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
