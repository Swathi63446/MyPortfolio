import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Sales RAG Application",
    description:
      "Multi-stage RAG pipeline processing 180+ Instagram video assets. Scrapes, transcribes, and extracts sales intelligence using LLMs and ChromaDB vector search for real-time querying.",
    tags: ["ChromaDB", "LLMs", "Streamlit", "RAG", "Python"],
    githubUrl: "https://github.com/Swathi63446/AI-Sales-RAG",
  },
  {
    id: 2,
    title: "HealthMatrix-AI",
    description:
      "Cloud-backed health intelligence platform using LangChain multi-agent orchestration and Qdrant RAG to deliver personalized 7-day health action plans with an interactive Streamlit dashboard.",
    tags: ["LangChain", "Qdrant Cloud", "Streamlit", "RAG"],
    githubUrl: "https://github.com/Swathi63446/HealthMatrix-AI",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description:
      "XGBoost-powered churn prediction system with a Flask web interface for real-time risk assessment and Cohere AI integration for interpretable, stakeholder-friendly results.",
    tags: ["XGBoost", "Flask", "Power BI", "Cohere AI", "Python"],
    githubUrl: "https://github.com/Swathi63446/CustomerChurnPrediction",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one is carefully crafted with attention to detail, performance, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover border border-border flex flex-col"
            >
              <div className="p-8 pb-4">
                <h3 className="text-xl font-bold mb-3 leading-tight">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-8 pb-4 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="px-8 pb-8 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Swathi63446"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
