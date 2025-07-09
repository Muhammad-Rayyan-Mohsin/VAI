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
    title: "Enterprise Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="Comprehensive analytics solution that transforms raw business data into actionable insights using advanced machine learning algorithms and real-time processing capabilities. This platform revolutionized how our client makes data-driven decisions across all departments."
      outcomes={[
        "40% faster decision making across all departments",
        "60% reduction in manual reporting processes",
        "Real-time data processing for instant insights",
        "$2.3M annual cost savings through automation"
      ]}
      techStack={["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Apache Kafka", "Docker"]}
      duration="6 months"
      clientType="Fortune 500 Manufacturing Company"
    />,
  },
  {
    category: "Industrial Automation",
    title: "Smart Manufacturing Automation",
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="End-to-end automation solution for manufacturing operations, featuring predictive maintenance, quality control, and resource optimization using IoT sensors and AI algorithms. This system transformed traditional manufacturing into a smart, connected operation."
      outcomes={[
        "75% reduction in manual tasks and human error",
        "30% improvement in overall efficiency",
        "Predictive maintenance reducing downtime by 45%",
        "ROI of 340% within the first year"
      ]}
      techStack={["Node.js", "IoT Sensors", "Machine Learning", "Docker", "Kubernetes", "MQTT", "InfluxDB"]}
      duration="8 months"
      clientType="Mid-size Manufacturing Company"
    />,
  },
  {
    category: "System Integration",
    title: "Multi-Platform API Integration",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="Complex API integration project connecting 15+ disparate systems including CRM, ERP, and third-party services to create a unified data ecosystem. This integration eliminated data silos and created a single source of truth for the organization."
      outcomes={[
        "15+ systems seamlessly integrated",
        "Real-time data synchronization achieved",
        "99.9% uptime with robust error handling",
        "50% reduction in data inconsistencies"
      ]}
      techStack={["REST APIs", "GraphQL", "Redis", "MongoDB", "Microservices", "AWS Lambda", "API Gateway"]}
      duration="4 months"
      clientType="Fast-growing Technology Startup"
    />,
  },
  {
    category: "AI & Machine Learning",
    title: "AI Predictive Maintenance System",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="Advanced predictive maintenance system using sensor data and machine learning to forecast equipment failures up to 2 weeks in advance. This system revolutionized maintenance schedules and dramatically reduced unexpected downtime."
      outcomes={[
        "2 weeks early failure prediction accuracy",
        "45% reduction in unplanned downtime",
        "Cost savings of $2M annually",
        "Maintenance efficiency improved by 60%"
      ]}
      techStack={["Python", "TensorFlow", "IoT Sensors", "Time Series Analysis", "Apache Kafka", "PostgreSQL"]}
      duration="5 months"
      clientType="Industrial Equipment Manufacturer"
    />,
  },
  {
    category: "E-commerce Platform",
    title: "Next-Gen E-commerce Platform",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="Complete e-commerce platform redesign focusing on performance, user experience, and conversion optimization with advanced analytics and personalization features. This platform transformed the client's online presence and sales performance."
      outcomes={[
        "300% performance improvement in page load times",
        "45% increase in conversion rates",
        "Mobile-first responsive design implementation",
        "75% improvement in user engagement metrics"
      ]}
      techStack={["Next.js", "TypeScript", "Stripe", "Vercel", "Prisma", "PostgreSQL", "Redis"]}
      duration="7 months"
      clientType="National Retail Chain"
    />,
  },
  {
    category: "Document Processing",
    title: "Intelligent Document Processing",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProjectDetailContent 
      description="AI-powered document processing pipeline that extracts, categorizes, and processes various document types using OCR, NLP, and machine learning technologies. This system automated complex document workflows and eliminated manual data entry."
      outcomes={[
        "10,000+ documents processed daily",
        "95% accuracy rate in data extraction",
        "80% time savings in document processing",
        "Compliance automation for regulatory requirements"
      ]}
      techStack={["Python", "OCR", "NLP", "AWS Lambda", "ElasticSearch", "MongoDB", "Docker"]}
      duration="6 months"
      clientType="Financial Services Company"
    />,
  },
]; 