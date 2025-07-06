"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrain,
  IconDatabase,
  IconCode,
  IconBolt,
  IconTrendingUp,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:grid-cols-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i < 3 ? "md:col-span-2" : 
            i === 3 ? "md:col-span-3" : 
            "md:col-span-3"
          }
        />
      ))}
    </BentoGrid>
  );
}

const AIModelsSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2 opacity-50">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  </div>
);

const DataVisualizationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900 dark:to-emerald-900 relative overflow-hidden">
    <div className="absolute inset-0 p-4">
      <div className="h-full flex flex-col justify-end space-y-1">
        {[60, 80, 40, 90, 70].map((height, i) => (
          <div key={i} className="bg-white/40 rounded-sm animate-pulse" style={{ height: `${height}%`, animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  </div>
);

const CodeSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-200 to-gray-200 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 p-4 font-mono text-xs">
      <div className="space-y-2 opacity-60">
        <div className="w-3/4 h-2 bg-white/40 rounded"></div>
        <div className="w-1/2 h-2 bg-white/40 rounded"></div>
        <div className="w-5/6 h-2 bg-white/40 rounded"></div>
        <div className="w-2/3 h-2 bg-white/40 rounded"></div>
      </div>
    </div>
  </div>
);



const AutomationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-900 dark:to-amber-900 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-white/40 rounded-lg animate-spin" style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }} />
        ))}
      </div>
    </div>
  </div>
);

const AnalyticsSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900 relative overflow-hidden">
    <div className="absolute inset-0 p-4">
      <div className="h-full flex items-end justify-between">
        {[40, 70, 30, 90, 60, 80].map((height, i) => (
          <div key={i} className="w-3 bg-white/40 rounded-t animate-pulse" style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  </div>
);

const items = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI models, neural networks, and intelligent automation solutions that learn and adapt to your business needs.",
    header: <AIModelsSkeleton />,
    icon: <IconBrain className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Data Science & Analytics", 
    description: "Transform raw data into actionable insights with advanced analytics, predictive modeling, and business intelligence.",
    header: <DataVisualizationSkeleton />,
    icon: <IconDatabase className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Web Development",
    description: "Modern, scalable web applications and platforms built with cutting-edge technologies and best practices.",
    header: <CodeSkeleton />,
    icon: <IconCode className="h-4 w-4 text-slate-500" />,
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation, reducing costs and improving efficiency across your organization.",
    header: <AutomationSkeleton />,
    icon: <IconBolt className="h-4 w-4 text-yellow-500" />,
  },
  {
    title: "Business Intelligence",
    description: "Strategic insights and data-driven decision making through comprehensive analytics and reporting solutions.",
    header: <AnalyticsSkeleton />,
    icon: <IconTrendingUp className="h-4 w-4 text-indigo-500" />,
  },
]; 