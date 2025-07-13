"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface ProjectCardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black font-sans mb-8">
        Transforming Ideas Into Impact.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ProjectDetailContent = ({ 
  description, 
  outcomes, 
  techStack, 
  duration, 
  clientType 
}: {
  description: string;
  outcomes: string[];
  techStack: string[];
  duration: string;
  clientType: string;
}) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mb-8">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview
          </span>{" "}
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">Key Outcomes</h4>
            <ul className="space-y-2">
              {outcomes.map((outcome, index) => (
                <li key={index} className="text-neutral-600 dark:text-neutral-400 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="font-semibold">Duration:</span> {duration}
          </div>
          <div>
            <span className="font-semibold">Client:</span> {clientType}
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Ready to start your project?
          </span>{" "}
          Let's discuss how we can transform your vision into reality with cutting-edge technology solutions that drive measurable business results.
        </p>
        
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </>
  );
};

const data: ProjectCardData[] = [
  {
    category: "Data Analytics",
    title: "Global E-Commerce Trends Analysis and Impact on Traditional Retail",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <ProjectDetailContent 
        description="This project analyzes global e-commerce trends and their influence on traditional retail, using PCA, CLV calculation, and what-if analysis to explore impacts on sales and consumer behavior."
        outcomes={[
          "E-commerce sales have consistently grown, outpacing traditional retail",
          "Key drivers: digital payments, mobile commerce, consumer convenience",
          "PCA identified significant features like payment methods and delivery options",
          "CLV analysis showed high value of repeat customers in e-commerce"
        ]}
        techStack={["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"]}
        duration="3 months"
        clientType="E-Commerce Research Initiative"
      />
    ),
  },
  {
    category: "Automation",
    title: "Automated Inbox Management System",
    src: "https://substack-post-media.s3.amazonaws.com/public/images/fdc6c369-096e-487f-9a0c-968d85b995a7_989x382.png",
    content: (
      <ProjectDetailContent 
        description="This project automates Gmail inbox management using n8n, with AI agents that auto-label, categorize, and smartly reply to emails by checking calendar availability and referencing personal goals in Supabase. The system is highly customizable for emotionally intelligent automation."
        outcomes={[
          "Automated email labeling and categorization",
          "AI-powered smart replies considering calendar and goals",
          "Auto-deletion of rejection emails for emotional well-being",
          "Highly customizable workflows for personal needs",
          "Applied to complex workflows with n8n integration"
        ]}
        techStack={["n8n", "Gmail API", "AI Agents", "Supabase", "Calendar Integration"]}
        duration="Summer Project"
        clientType="Personal Automation Initiative"
      />
    ),
  },
  {
    category: "AI & Machine Learning",
    title: "Energy Demand Analysis and Forecasting",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/World_energy_consumption.svg",
    content: (
      <ProjectDetailContent 
        description="This project analyzes energy demand using clustering and forecasting techniques, including Python scripts for preprocessing, EDA, clustering, predictive modeling, and a Flask web app for interactive visualization. It combines clustering insights with advanced forecasting models for comprehensive analysis."
        outcomes={[
          "Identified 3-5 optimal clusters based on weather and time patterns",
          "Achieved 15-30% improvement in forecasting metrics over baseline",
          "Best models: XGBoost and ensembles for highest accuracy",
          "Interactive web app for exploring clusters and forecasts",
          "Demonstrated importance of feature engineering in energy prediction"
        ]}
        techStack={["Python", "Scikit-learn", "PyTorch", "ARIMA", "XGBoost", "Flask", "PCA"]}
        duration="Project Duration"
        clientType="Energy Sector Research"
      />
    ),
  },
  {
    category: "Data Analysis & Visualization",
    title: "Mortality Data Analysis System",
    src: "https://github.com/SharifAthar/Hospital-Mortality-Prediction-SQL/raw/main/Hospital%20Mortality%20Dashboard%20(Tableau).png",
    content: (
      <ProjectDetailContent 
        description="A comprehensive platform for processing, analyzing, validating, visualizing, and forecasting mortality data. Features memory-efficient handling of large datasets, robust cleaning, interactive Streamlit dashboard, and SARIMAX time-series forecasting for public health insights."
        outcomes={[
          "Handled large datasets (>100k rows) with chunk-based processing",
          "Implemented anomaly detection and correction for data integrity",
          "Created interactive visualization dashboard with filters and maps",
          "Enabled multi-year mortality projections with adjustable confidence intervals",
          "Supported state-level analysis and forecasting"
        ]}
        techStack={["Python", "Streamlit", "Pandas", "SARIMAX", "Matplotlib", "Seaborn"]}
        duration="Project Duration"
        clientType="Public Health Research"
      />
    ),
  },
  {
    category: "AI & Education",
    title: "AI-Powered Study Assistant",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <ProjectDetailContent 
        description="An interactive AI-powered assistant designed to help students with personalized study support, including answering questions, summarizing content."
        outcomes={[
          "Provided personalized study recommendations",
          "Offered real-time question answering",
          "Generated content summaries for efficient learning",
          "Improved student engagement and retention",
          "Adapted to individual learning styles"
        ]}
        techStack={["AI", "NLP", "Machine Learning", "Chatbot Framework", "Python"]}
        duration="Project Duration"
        clientType="Educational Technology"
      />
    ),
  },
  {
    category: "AI & Machine Learning",
    title: "Medical-CoT: Fine-Tuned LLaMA 3.2 Model",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <ProjectDetailContent 
        description="A fine-tuned LLaMA 3.2 (3B) model using PEFT techniques to enhance performance in complex multi-step reasoning tasks via chain-of-thought prompting, focused on medical applications."
        outcomes={[
          "Improved multi-step reasoning in medical queries",
          "Enhanced performance through PEFT fine-tuning",
          "Better handling of complex chain-of-thought prompts",
          "Potential applications in healthcare decision support"
        ]}
        techStack={["LLaMA 3.2", "PEFT", "Chain-of-Thought Prompting", "Python", "Transformers"]}
        duration="3 months"
        clientType="Research Project"
      />
    ),
  },
]; 