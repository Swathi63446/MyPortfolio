import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Engineer — Agentic AI, RAG and ML Specialist
            </h3>

            <p className="text-muted-foreground">
              I specialize in architecting multi-agent systems and Retrieval-Augmented Generation pipelines using LangChain, LangGraph, and frontier LLMs. Currently at MetaNova AI, I build autonomous end-to-end workflows that automate complex business processes at scale.
            </p>

            <p className="text-muted-foreground">
              With hands-on experience across vector databases (Qdrant, ChromaDB), cloud-native deployments, and predictive ML models, I bridge the gap between cutting-edge AI research and production-ready solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Dhanyamraju_Swathi__AI_Engineer.pdf"
                download="Dhanyamraju_Swathi_AI_Engineer.pdf"
                className="px-6 py-3 rounded-full border border-primary text-primary font-semibold text-base hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agentic AI and RAG</h4>
                  <p className="text-muted-foreground">
                    I design multi-agent orchestration systems and RAG pipelines using LangChain, LangGraph, and vector databases like Qdrant and ChromaDB to deliver intelligent, autonomous solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    I build high-performance ML models using XGBoost, Scikit-learn, and Python for real-world applications including fraud detection and customer churn prediction.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">End-to-End Delivery</h4>
                  <p className="text-muted-foreground">
                    From ideation to deployment, I ship production-grade AI applications combining FastAPI, Streamlit, and cloud infrastructure to bring intelligent systems to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
