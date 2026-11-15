import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MedGuard AI",
    description:
      "Agentic RAG pipeline in LangGraph that retrieves, grades evidence sufficiency, rewrites queries and retries in a bounded loop, abstaining when evidence is weak. Uses hybrid retrieval (ChromaDB + BM25 with Reciprocal Rank Fusion and cross encoder reranking), document version checks for outdated guidelines, and answers grounded in cited document IDs. Evaluated with precision, recall, MRR and Gemini judged RAGAS metrics.",
    tags: ["LangGraph", "Gemini", "ChromaDB", "BM25", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/Swathi63446/MedGuardAI",
  },
  {
    id: 2,
    title: "PayTrace Invoice Agent",
    description:
      "Five node LangGraph agent that extracts, validates, saves, summarizes and escalates PDF invoices needing human review. Uses Google Document AI for OCR and Gemini for structured extraction into a Pydantic schema, with deterministic validation of totals, line items and dates, retry loops and duplicate prevention. Logs to Google Sheets, sends Gmail summaries with the original PDF, and is tested with a pytest evaluation suite.",
    tags: ["LangGraph", "Gemini", "Google Document AI", "Pydantic", "Docker"],
    githubUrl: "https://github.com/Swathi63446/PayTraceInvoiceAgent",
  },
  {
    id: 3,
    title: "Polymer Property Prediction",
    description:
      "Machine learning models predicting five polymer properties (Tg, FFV, Tc, Density, Rg) from SMILES strings for the NeurIPS Open Polymer Prediction 2025 Kaggle competition. Features engineered from RDKit molecular descriptors and 1024 bit Morgan fingerprints, with XGBoost models validated using 5 fold cross validation.",
    tags: ["Python", "RDKit", "XGBoost", "Scikit-learn"],
    githubUrl: "https://github.com/Swathi63446/PolymerPropertyPrediction",
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
          Here are some of my recent projects in agentic AI, RAG and machine learning.
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
