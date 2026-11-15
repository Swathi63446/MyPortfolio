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
              AI Engineer specializing in Agentic AI, LLM Applications and RAG
            </h3>

            <p className="text-muted-foreground">
             I build AI agents that think, decide and act on their own. With LangGraph, LangChain and Gemini, I turn messy business workflows into smart, automated systems.
            </p>

            <p className="text-muted-foreground">
             From WhatsApp bots that verify reports in real time to OCR agents that read invoices without manual entry, I love building AI that takes real work off people’s plates.
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
                    At MetaNova AI I designed multi agent automation workflows for cross platform marketing, built OCR agents and an autonomous invoice processing pipeline, and architected a multimodal RAG pipeline over 180+ Instagram video assets using ChromaDB for real time sales intelligence.
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
                    I build predictive ML models with XGBoost and Scikit learn to speed up data preprocessing and training, including models for the NeurIPS Open Polymer Prediction 2025 Kaggle competition using RDKit features and 5 fold cross validation.
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
                  <h4 className="font-semibold text-lg">LLM Apps and Automation</h4>
                  <p className="text-muted-foreground">
                    I built and deployed WhatsApp bot agents with Meta API integrations, including real time healthcare report verification, and shipped LLM flows with tool calling and prompt engineering to production.
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
