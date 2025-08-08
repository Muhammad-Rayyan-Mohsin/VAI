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
    <BentoGrid className="max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i < 3 ? "sm:col-span-1 md:col-span-2" : 
            i === 3 ? "sm:col-span-2 md:col-span-3" : 
            "sm:col-span-2 md:col-span-3"
          }
        />
      ))}
    </BentoGrid>
  );
}

const AIModelsSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="aiChipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="aiGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* AI Chip/Processor Background */}
      <rect x="60" y="35" width="80" height="50" rx="8" fill="url(#aiChipGradient)" opacity="0.1" filter="url(#softShadow)"/>
      <rect x="65" y="40" width="70" height="40" rx="6" fill="none" stroke="url(#aiChipGradient)" strokeWidth="1" opacity="0.3"/>
      
      {/* Circuit Pattern */}
      <g opacity="0.4">
        <path d="M70 50 L85 50" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M70 60 L85 60" stroke="#ec4899" strokeWidth="1.5"/>
        <path d="M70 70 L85 70" stroke="#6366f1" strokeWidth="1.5"/>
        <path d="M115 50 L130 50" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M115 60 L130 60" stroke="#ec4899" strokeWidth="1.5"/>
        <path d="M115 70 L130 70" stroke="#6366f1" strokeWidth="1.5"/>
      </g>
      
      {/* Enhanced Neural Network */}
      {/* Input Layer */}
      <circle cx="30" cy="40" r="5" fill="#f472b6" opacity="0.8" filter="url(#aiGlow)">
        <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="60" r="5" fill="#f472b6" opacity="0.7" filter="url(#aiGlow)">
        <animate attributeName="r" values="5;6;5" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="80" r="5" fill="#f472b6" opacity="0.9" filter="url(#aiGlow)">
        <animate attributeName="r" values="5;7;5" dur="2.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Hidden Layers */}
      <circle cx="100" cy="25" r="6" fill="#a855f7" opacity="0.8" filter="url(#aiGlow)">
        <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="45" r="6" fill="#a855f7" opacity="0.9" filter="url(#aiGlow)">
        <animate attributeName="r" values="6;9;6" dur="2.7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="65" r="6" fill="#a855f7" opacity="0.7" filter="url(#aiGlow)">
        <animate attributeName="r" values="6;8;6" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="85" r="6" fill="#a855f7" opacity="0.8" filter="url(#aiGlow)">
        <animate attributeName="r" values="6;7;6" dur="2.9s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="105" r="6" fill="#a855f7" opacity="0.6" filter="url(#aiGlow)">
        <animate attributeName="r" values="6;8;6" dur="2.1s" repeatCount="indefinite"/>
      </circle>
      
      {/* Output Layer */}
      <circle cx="170" cy="50" r="7" fill="#6366f1" opacity="0.9" filter="url(#aiGlow)">
        <animate attributeName="r" values="7;10;7" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="170" cy="70" r="7" fill="#6366f1" opacity="0.8" filter="url(#aiGlow)">
        <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Animated Connections */}
      <g stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.6">
        <path d="M35 40 L94 25" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M35 40 L94 45" strokeLinecap="round">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite"/>
        </path>
        <path d="M35 60 L94 45" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
        </path>
        <path d="M35 60 L94 65" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.9s" repeatCount="indefinite"/>
        </path>
        <path d="M35 80 L94 65" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
        </path>
        <path d="M35 80 L94 85" strokeLinecap="round">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.7s" repeatCount="indefinite"/>
        </path>
        
        <path d="M106 25 L163 50" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite"/>
        </path>
        <path d="M106 45 L163 50" strokeLinecap="round">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.1s" repeatCount="indefinite"/>
        </path>
        <path d="M106 65 L163 70" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite"/>
        </path>
        <path d="M106 85 L163 70" strokeLinecap="round">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Floating Data Particles */}
      <circle cx="50" cy="20" r="2" fill="#f472b6" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 20,-5; 0,0" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="30" r="2" fill="#6366f1" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; -15,10; 0,0" dur="3.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="15" r="1.5" fill="#a855f7" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; 10,15; 0,0" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
);

const DataVisualizationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="dataGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="dataGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
        <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="dataGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Dashboard Background */}
      <rect x="15" y="20" width="170" height="80" rx="12" fill="white" opacity="0.8" filter="url(#softShadow)"/>
      <rect x="20" y="25" width="160" height="70" rx="8" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
      
      {/* Advanced Bar Chart with Grouped Data */}
      <g transform="translate(25, 30)">
        {/* Chart Title Area */}
        <rect x="0" y="0" width="60" height="8" rx="4" fill="#d1fae5" opacity="0.6"/>
        <circle cx="5" cy="4" r="2" fill="#10b981" opacity="0.8"/>
        
        {/* Multi-layered Bar Groups */}
        <g transform="translate(0, 7)">
          <rect x="8" y="40" width="6" height="25" rx="3" fill="url(#dataGradient1)" opacity="0.8" filter="url(#dataGlow)">
            <animate attributeName="height" values="25;35;25" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="y" values="40;30;40" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="16" y="45" width="6" height="20" rx="3" fill="url(#dataGradient2)" opacity="0.7" filter="url(#dataGlow)">
            <animate attributeName="height" values="20;28;20" dur="3.2s" repeatCount="indefinite"/>
            <animate attributeName="y" values="45;37;45" dur="3.2s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="30" y="25" width="6" height="40" rx="3" fill="url(#dataGradient1)" opacity="0.9" filter="url(#dataGlow)">
            <animate attributeName="height" values="40;50;40" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="y" values="25;15;25" dur="2.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="38" y="35" width="6" height="30" rx="3" fill="url(#dataGradient2)" opacity="0.8" filter="url(#dataGlow)">
            <animate attributeName="height" values="30;38;30" dur="2.8s" repeatCount="indefinite"/>
            <animate attributeName="y" values="35;27;35" dur="2.8s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="52" y="50" width="6" height="15" rx="3" fill="url(#dataGradient1)" opacity="0.7" filter="url(#dataGlow)">
            <animate attributeName="height" values="15;22;15" dur="2.7s" repeatCount="indefinite"/>
            <animate attributeName="y" values="50;43;50" dur="2.7s" repeatCount="indefinite"/>
          </rect>
          <rect x="60" y="45" width="6" height="20" rx="3" fill="url(#dataGradient2)" opacity="0.8" filter="url(#dataGlow)">
            <animate attributeName="height" values="20;28;20" dur="3.1s" repeatCount="indefinite"/>
            <animate attributeName="y" values="45;37;45" dur="3.1s" repeatCount="indefinite"/>
          </rect>
        </g>
      </g>
      
      {/* Advanced Data Flow Visualization */}
      <g transform="translate(110, 30)">
        {/* Data Stream Background */}
        <rect x="0" y="10" width="70" height="50" rx="8" fill="#f0fdfa" opacity="0.5"/>
        
        {/* Flowing Data Streams */}
        <path d="M5 20 Q25 15 45 25 Q55 30 65 20" stroke="url(#dataFlowGradient)" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="d" values="M5 20 Q25 15 45 25 Q55 30 65 20;M5 22 Q25 17 45 27 Q55 32 65 22;M5 20 Q25 15 45 25 Q55 30 65 20" dur="4s" repeatCount="indefinite"/>
        </path>
        
        <path d="M5 35 Q30 30 50 40 Q60 45 65 35" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.3s" repeatCount="indefinite"/>
          <animate attributeName="d" values="M5 35 Q30 30 50 40 Q60 45 65 35;M5 37 Q30 32 50 42 Q60 47 65 37;M5 35 Q30 30 50 40 Q60 45 65 35" dur="3.5s" repeatCount="indefinite"/>
        </path>
        
        <path d="M5 50 Q20 45 40 55 Q50 60 65 50" stroke="#2dd4bf" strokeWidth="1.8" fill="none" opacity="0.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
          <animate attributeName="d" values="M5 50 Q20 45 40 55 Q50 60 65 50;M5 52 Q20 47 40 57 Q50 62 65 52;M5 50 Q20 45 40 55 Q50 60 65 50" dur="4.2s" repeatCount="indefinite"/>
        </path>
        
        {/* Data Points with Insights */}
        <circle cx="15" cy="20" r="3" fill="#10b981" opacity="0.9" filter="url(#dataGlow)">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="35" cy="35" r="3" fill="#14b8a6" opacity="0.8" filter="url(#dataGlow)">
          <animate attributeName="r" values="3;4;3" dur="2.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="55" cy="50" r="3" fill="#2dd4bf" opacity="0.9" filter="url(#dataGlow)">
          <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        
        {/* Trending Arrow */}
        <path d="M50 15 L60 10 L58 12 L60 10 L58 8" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Floating Analytics Particles */}
      <circle cx="45" cy="15" r="1.5" fill="#10b981" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 15,5; 0,0" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="25" r="1.5" fill="#14b8a6" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; -10,8; 0,0" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="90" cy="105" r="1" fill="#2dd4bf" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; 20,-10; 0,0" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
);

const CodeSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="browserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="codeEditorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="syntaxGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="syntaxGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="codeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Main Browser Window */}
      <rect x="15" y="15" width="170" height="90" rx="12" fill="url(#browserGradient)" filter="url(#softShadow)"/>
      
      {/* Browser Header */}
      <rect x="15" y="15" width="170" height="25" rx="12" fill="#64748b" opacity="0.1"/>
      <rect x="20" y="20" width="160" height="15" rx="8" fill="white" opacity="0.8"/>
      
      {/* Browser Controls */}
      <circle cx="30" cy="27" r="2.5" fill="#ef4444" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="27" r="2.5" fill="#f59e0b" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="27" r="2.5" fill="#10b981" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* URL Bar */}
      <rect x="65" y="22" width="80" height="10" rx="5" fill="#f1f5f9" opacity="0.9"/>
      <rect x="70" y="24" width="6" height="6" rx="3" fill="#94a3b8" opacity="0.6"/>
      <rect x="80" y="25" width="30" height="4" rx="2" fill="#cbd5e1" opacity="0.7"/>
      
      {/* Tab Indicators */}
      <rect x="155" y="22" width="20" height="10" rx="5" fill="#e2e8f0" opacity="0.7"/>
      <circle cx="165" cy="27" r="1.5" fill="#3b82f6" opacity="0.8"/>
      
      {/* Code Editor Interface */}
      <rect x="20" y="45" width="75" height="55" rx="8" fill="url(#codeEditorGradient)" opacity="0.9" filter="url(#softShadow)"/>
      
      {/* Code Editor Sidebar */}
      <rect x="22" y="47" width="12" height="51" rx="6" fill="#0f172a" opacity="0.3"/>
      <circle cx="28" cy="52" r="1.5" fill="#64748b" opacity="0.6"/>
      <circle cx="28" cy="58" r="1.5" fill="#64748b" opacity="0.4"/>
      <circle cx="28" cy="64" r="1.5" fill="#3b82f6" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Syntax Highlighted Code Lines */}
      <g transform="translate(38, 50)">
        {/* Line numbers */}
        <text x="-3" y="6" fontSize="3" fill="#64748b" opacity="0.5">1</text>
        <text x="-3" y="12" fontSize="3" fill="#64748b" opacity="0.5">2</text>
        <text x="-3" y="18" fontSize="3" fill="#64748b" opacity="0.5">3</text>
        <text x="-3" y="24" fontSize="3" fill="#64748b" opacity="0.5">4</text>
        <text x="-3" y="30" fontSize="3" fill="#64748b" opacity="0.5">5</text>
        
        {/* Code syntax */}
        <rect x="2" y="3" width="20" height="2" rx="1" fill="url(#syntaxGradient1)" opacity="0.8" filter="url(#codeGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="24" y="3" width="8" height="2" rx="1" fill="#f59e0b" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
        </rect>
        
        <rect x="5" y="9" width="25" height="2" rx="1" fill="url(#syntaxGradient2)" opacity="0.9" filter="url(#codeGlow)">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="32" y="9" width="12" height="2" rx="1" fill="#8b5cf6" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite"/>
        </rect>
        
        <rect x="8" y="15" width="18" height="2" rx="1" fill="#ec4899" opacity="0.7" filter="url(#codeGlow)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite"/>
        </rect>
        <rect x="28" y="15" width="15" height="2" rx="1" fill="#06b6d4" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3.2s" repeatCount="indefinite"/>
        </rect>
        
        <rect x="2" y="21" width="30" height="2" rx="1" fill="url(#syntaxGradient1)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.7s" repeatCount="indefinite"/>
        </rect>
        
        <rect x="5" y="27" width="22" height="2" rx="1" fill="#10b981" opacity="0.8" filter="url(#codeGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite"/>
        </rect>
        
        {/* Cursor blinking */}
        <rect x="28" y="27" width="1" height="2" fill="#3b82f6" opacity="1">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      {/* Browser Preview Window */}
      <rect x="105" y="45" width="75" height="55" rx="8" fill="white" opacity="0.95" filter="url(#softShadow)"/>
      
      {/* Mock Website Content */}
      <g transform="translate(110, 50)">
        {/* Header */}
        <rect x="0" y="0" width="65" height="12" rx="6" fill="#f8fafc" opacity="0.8"/>
        <rect x="5" y="3" width="15" height="6" rx="3" fill="#3b82f6" opacity="0.7"/>
        <rect x="45" y="4" width="8" height="4" rx="2" fill="#64748b" opacity="0.5"/>
        <rect x="55" y="4" width="8" height="4" rx="2" fill="#64748b" opacity="0.5"/>
        
        {/* Content Cards */}
        <rect x="0" y="18" width="30" height="25" rx="4" fill="#dbeafe" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="35" y="18" width="30" height="25" rx="4" fill="#dcfce7" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        
        {/* Interactive Elements */}
        <rect x="5" y="22" width="20" height="3" rx="1.5" fill="#3b82f6" opacity="0.8"/>
        <rect x="5" y="27" width="15" height="2" rx="1" fill="#64748b" opacity="0.6"/>
        <rect x="5" y="31" width="12" height="2" rx="1" fill="#64748b" opacity="0.5"/>
        
        <rect x="40" y="22" width="20" height="3" rx="1.5" fill="#10b981" opacity="0.7"/>
        <rect x="40" y="27" width="18" height="2" rx="1" fill="#64748b" opacity="0.6"/>
        <rect x="40" y="31" width="15" height="2" rx="1" fill="#64748b" opacity="0.5"/>
      </g>
      
      {/* Floating Code Particles */}
      <circle cx="50" cy="12" r="1.5" fill="#3b82f6" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 20,5; 0,0" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="10" r="1" fill="#10b981" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; -15,8; 0,0" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="180" cy="35" r="1.5" fill="#8b5cf6" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; -10,-5; 0,0" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
);

const AutomationSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="automationGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="automationGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="automationGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" opacity="0.8"/>
        </marker>
      </defs>
      
      {/* Workflow Background */}
      <rect x="10" y="15" width="180" height="90" rx="12" fill="white" opacity="0.7" filter="url(#softShadow)"/>
      <rect x="15" y="20" width="170" height="80" rx="8" fill="none" stroke="#fef3c7" strokeWidth="1" opacity="0.4"/>
      
      {/* Process Flow Nodes */}
      {/* Start Node */}
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="25" height="18" rx="9" fill="url(#automationGradient1)" opacity="0.9" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
        </rect>
        <circle cx="12.5" cy="9" r="3" fill="white" opacity="0.8"/>
        <path d="M10 9 L15 9 M12.5 6.5 L12.5 11.5" stroke="#f59e0b" strokeWidth="1" opacity="0.9"/>
      </g>
      
      {/* Decision Node */}
      <g transform="translate(85, 30)">
        <polygon points="15,0 30,12 15,24 0,12" fill="url(#automationGradient2)" opacity="0.8" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
        </polygon>
        <text x="15" y="16" textAnchor="middle" fontSize="8" fill="white" opacity="0.9">?</text>
      </g>
      
      {/* Process Nodes */}
      <g transform="translate(140, 20)">
        <rect x="0" y="0" width="25" height="18" rx="4" fill="url(#automationGradient1)" opacity="0.8" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
        </rect>
        <rect x="3" y="3" width="19" height="12" rx="2" fill="white" opacity="0.2"/>
        <rect x="6" y="6" width="4" height="2" rx="1" fill="#f59e0b" opacity="0.8"/>
        <rect x="6" y="9" width="6" height="2" rx="1" fill="#f59e0b" opacity="0.6"/>
        <rect x="6" y="12" width="5" height="2" rx="1" fill="#f59e0b" opacity="0.7"/>
      </g>
      
      <g transform="translate(140, 50)">
        <rect x="0" y="0" width="25" height="18" rx="4" fill="url(#automationGradient2)" opacity="0.7" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.2s" repeatCount="indefinite"/>
        </rect>
        <rect x="3" y="3" width="19" height="12" rx="2" fill="white" opacity="0.2"/>
        <rect x="6" y="6" width="5" height="2" rx="1" fill="#d97706" opacity="0.8"/>
        <rect x="6" y="9" width="4" height="2" rx="1" fill="#d97706" opacity="0.6"/>
        <rect x="6" y="12" width="6" height="2" rx="1" fill="#d97706" opacity="0.7"/>
      </g>
      
      {/* Data Storage Node */}
      <g transform="translate(60, 75)">
        <ellipse cx="12.5" cy="9" rx="12.5" ry="9" fill="url(#automationGradient1)" opacity="0.8" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="12.5" cy="6" rx="8" ry="3" fill="white" opacity="0.3"/>
        <rect x="6" y="8" width="3" height="1" rx="0.5" fill="white" opacity="0.6"/>
        <rect x="10" y="10" width="4" height="1" rx="0.5" fill="white" opacity="0.5"/>
        <rect x="8" y="12" width="5" height="1" rx="0.5" fill="white" opacity="0.6"/>
      </g>
      
      {/* End Node */}
      <g transform="translate(140, 80)">
        <circle cx="12" cy="12" r="12" fill="url(#automationGradient2)" opacity="0.9" filter="url(#automationGlow)">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="12" cy="12" r="8" fill="white" opacity="0.2"/>
        <path d="M8 12 L12 16 L16 12 L12 8 Z" fill="white" opacity="0.8"/>
      </g>
      
      {/* Animated Flow Connections */}
      <g stroke="url(#flowGradient)" strokeWidth="2.5" fill="none" opacity="0.7" markerEnd="url(#arrowhead)">
        <path d="M55 49 L85 42" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="strokeDasharray" values="0,100;20,100;0,100" dur="3s" repeatCount="indefinite"/>
        </path>
        
        <path d="M115 35 L140 29" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
          <animate attributeName="strokeDasharray" values="0,100;15,100;0,100" dur="3.5s" repeatCount="indefinite"/>
        </path>
        
        <path d="M115 48 L140 59" strokeLinecap="round">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
          <animate attributeName="strokeDasharray" values="0,100;18,100;0,100" dur="2.8s" repeatCount="indefinite"/>
        </path>
        
        <path d="M100 54 L73 75" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="strokeDasharray" values="0,100;12,100;0,100" dur="4s" repeatCount="indefinite"/>
        </path>
        
        <path d="M152 68 L152 80" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite"/>
          <animate attributeName="strokeDasharray" values="0,100;10,100;0,100" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Rotating Gears */}
      <g transform="translate(170, 45)">
        <circle cx="0" cy="0" r="8" fill="url(#automationGradient1)" opacity="0.6" filter="url(#automationGlow)">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
        </circle>
        <g opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite"/>
          <circle r="5" fill="none" stroke="#f59e0b" strokeWidth="1"/>
          <rect x="-1" y="-8" width="2" height="3" rx="1" fill="#f59e0b"/>
          <rect x="-1" y="5" width="2" height="3" rx="1" fill="#f59e0b"/>
          <rect x="-8" y="-1" width="3" height="2" rx="1" fill="#f59e0b"/>
          <rect x="5" y="-1" width="3" height="2" rx="1" fill="#f59e0b"/>
          <rect x="-6" y="-6" width="2" height="2" rx="1" fill="#f59e0b" transform="rotate(45)"/>
          <rect x="4" y="-6" width="2" height="2" rx="1" fill="#f59e0b" transform="rotate(45)"/>
          <rect x="-6" y="4" width="2" height="2" rx="1" fill="#f59e0b" transform="rotate(45)"/>
          <rect x="4" y="4" width="2" height="2" rx="1" fill="#f59e0b" transform="rotate(45)"/>
        </g>
      </g>
      
      <g transform="translate(35, 70)">
        <circle cx="0" cy="0" r="6" fill="url(#automationGradient2)" opacity="0.5" filter="url(#automationGlow)">
          <animateTransform attributeName="transform" type="rotate" values="360;0" dur="8s" repeatCount="indefinite"/>
        </circle>
        <g opacity="0.7">
          <animateTransform attributeName="transform" type="rotate" values="360;0" dur="8s" repeatCount="indefinite"/>
          <circle r="4" fill="none" stroke="#d97706" strokeWidth="1"/>
          <rect x="-0.5" y="-6" width="1" height="2" rx="0.5" fill="#d97706"/>
          <rect x="-0.5" y="4" width="1" height="2" rx="0.5" fill="#d97706"/>
          <rect x="-6" y="-0.5" width="2" height="1" rx="0.5" fill="#d97706"/>
          <rect x="4" y="-0.5" width="2" height="1" rx="0.5" fill="#d97706"/>
        </g>
      </g>
      
      {/* Status Indicators */}
      <circle cx="20" cy="25" r="2" fill="#10b981" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="180" cy="25" r="2" fill="#f59e0b" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Floating Process Particles */}
      <circle cx="65" cy="20" r="1.5" fill="#f59e0b" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 25,10; 0,0" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="120" cy="100" r="1" fill="#d97706" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; -20,-15; 0,0" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
);

const AnalyticsSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="analyticsGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="analyticsGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="analyticsGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5b21b6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="analyticsGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Dashboard Container */}
      <rect x="10" y="10" width="180" height="100" rx="12" fill="white" opacity="0.95" filter="url(#softShadow)"/>
      <rect x="15" y="15" width="170" height="90" rx="8" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
      
      {/* Dashboard Header */}
      <rect x="20" y="20" width="160" height="15" rx="6" fill="#f8fafc" opacity="0.8"/>
      <circle cx="28" cy="27" r="2" fill="#6366f1" opacity="0.8"/>
      <rect x="35" y="25" width="30" height="4" rx="2" fill="#e2e8f0" opacity="0.6"/>
      <circle cx="170" cy="27" r="1.5" fill="#10b981" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Main Analytics Charts Section */}
      <g transform="translate(20, 40)">
        {/* Ascending Trend Chart */}
        <rect x="0" y="0" width="75" height="50" rx="6" fill="#faf5ff" opacity="0.6"/>
        <rect x="3" y="3" width="69" height="44" rx="4" fill="white" opacity="0.8"/>
        
        {/* Chart Title */}
        <rect x="8" y="8" width="25" height="3" rx="1.5" fill="#c7d2fe" opacity="0.7"/>
        <circle cx="60" cy="9" r="1.5" fill="#6366f1" opacity="0.8"/>
        
        {/* Trend Line Chart */}
        <path d="M10 35 Q20 30 30 25 Q40 20 50 18 Q60 15 65 12" stroke="url(#trendGradient)" strokeWidth="2.5" fill="none" opacity="0.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="d" values="M10 35 Q20 30 30 25 Q40 20 50 18 Q60 15 65 12;M10 37 Q20 32 30 27 Q40 22 50 20 Q60 17 65 14;M10 35 Q20 30 30 25 Q40 20 50 18 Q60 15 65 12" dur="4s" repeatCount="indefinite"/>
        </path>
        
        {/* Data Points */}
        <circle cx="10" cy="35" r="2" fill="#6366f1" opacity="0.9" filter="url(#analyticsGlow)">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="30" cy="25" r="2" fill="#8b5cf6" opacity="0.8" filter="url(#analyticsGlow)">
          <animate attributeName="r" values="2;3.5;2" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50" cy="18" r="2" fill="#a855f7" opacity="0.9" filter="url(#analyticsGlow)">
          <animate attributeName="r" values="2;4;2" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="65" cy="12" r="2.5" fill="#7c3aed" opacity="1" filter="url(#analyticsGlow)">
          <animate attributeName="r" values="2.5;4.5;2.5" dur="2.8s" repeatCount="indefinite"/>
        </circle>
        
        {/* Trend Arrow */}
        <path d="M58 15 L65 10 L63 12 L65 10 L63 8" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Bar Chart Dashboard */}
      <g transform="translate(105, 40)">
        <rect x="0" y="0" width="75" height="50" rx="6" fill="#f0f9ff" opacity="0.6"/>
        <rect x="3" y="3" width="69" height="44" rx="4" fill="white" opacity="0.8"/>
        
        {/* Chart Title */}
        <rect x="8" y="8" width="30" height="3" rx="1.5" fill="#dbeafe" opacity="0.7"/>
        <circle cx="65" cy="9" r="1.5" fill="#3b82f6" opacity="0.8"/>
        
        {/* Advanced Bar Chart */}
        <rect x="10" y="32" width="4" height="15" rx="2" fill="url(#analyticsGradient1)" opacity="0.8" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="15;20;15" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="y" values="32;27;32" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="18" y="25" width="4" height="22" rx="2" fill="url(#analyticsGradient2)" opacity="0.9" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="22;28;22" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="y" values="25;19;25" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="26" y="28" width="4" height="19" rx="2" fill="url(#analyticsGradient3)" opacity="0.7" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="19;24;19" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="y" values="28;23;28" dur="2.8s" repeatCount="indefinite"/>
        </rect>
        <rect x="34" y="20" width="4" height="27" rx="2" fill="url(#analyticsGradient1)" opacity="0.85" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="27;32;27" dur="3.2s" repeatCount="indefinite"/>
          <animate attributeName="y" values="20;15;20" dur="3.2s" repeatCount="indefinite"/>
        </rect>
        <rect x="42" y="30" width="4" height="17" rx="2" fill="url(#analyticsGradient2)" opacity="0.8" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="17;22;17" dur="2.7s" repeatCount="indefinite"/>
          <animate attributeName="y" values="30;25;30" dur="2.7s" repeatCount="indefinite"/>
        </rect>
        <rect x="50" y="22" width="4" height="25" rx="2" fill="url(#analyticsGradient3)" opacity="0.9" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="25;30;25" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="y" values="22;17;22" dur="2.4s" repeatCount="indefinite"/>
        </rect>
        <rect x="58" y="18" width="4" height="29" rx="2" fill="url(#analyticsGradient1)" opacity="1" filter="url(#analyticsGlow)">
          <animate attributeName="height" values="29;35;29" dur="2.9s" repeatCount="indefinite"/>
          <animate attributeName="y" values="18;12;18" dur="2.9s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      {/* KPI Metrics Section */}
      <g transform="translate(20, 95)">
        {/* Metric Cards */}
        <rect x="0" y="0" width="35" height="12" rx="4" fill="#ecfccb" opacity="0.8" filter="url(#softShadow)"/>
        <circle cx="6" cy="6" r="2" fill="#84cc16" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
        </circle>
        <rect x="12" y="3" width="15" height="2" rx="1" fill="#a3a3a3" opacity="0.6"/>
        <rect x="12" y="7" width="20" height="2" rx="1" fill="#84cc16" opacity="0.8"/>
        
        <rect x="40" y="0" width="35" height="12" rx="4" fill="#fef3c7" opacity="0.8" filter="url(#softShadow)"/>
        <circle cx="46" cy="6" r="2" fill="#f59e0b" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <rect x="52" y="3" width="18" height="2" rx="1" fill="#a3a3a3" opacity="0.6"/>
        <rect x="52" y="7" width="17" height="2" rx="1" fill="#f59e0b" opacity="0.8"/>
        
        <rect x="80" y="0" width="35" height="12" rx="4" fill="#dbeafe" opacity="0.8" filter="url(#softShadow)"/>
        <circle cx="86" cy="6" r="2" fill="#3b82f6" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.3s" repeatCount="indefinite"/>
        </circle>
        <rect x="92" y="3" width="16" height="2" rx="1" fill="#a3a3a3" opacity="0.6"/>
        <rect x="92" y="7" width="19" height="2" rx="1" fill="#3b82f6" opacity="0.8"/>
        
        <rect x="120" y="0" width="35" height="12" rx="4" fill="#fce7f3" opacity="0.8" filter="url(#softShadow)"/>
        <circle cx="126" cy="6" r="2" fill="#ec4899" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.1s" repeatCount="indefinite"/>
        </circle>
        <rect x="132" y="3" width="14" height="2" rx="1" fill="#a3a3a3" opacity="0.6"/>
        <rect x="132" y="7" width="18" height="2" rx="1" fill="#ec4899" opacity="0.8"/>
      </g>
      
      {/* Real-time Data Flow Indicators */}
      <g opacity="0.7">
        <circle cx="190" cy="20" r="1.5" fill="#10b981" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="190" cy="30" r="1.5" fill="#f59e0b" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="190" cy="40" r="1.5" fill="#3b82f6" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="0.8s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Floating Analytics Particles */}
      <circle cx="30" cy="15" r="1.5" fill="#6366f1" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 20,8; 0,0" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="25" r="1" fill="#8b5cf6" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0,0; -15,-5; 0,0" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="90" cy="110" r="1.5" fill="#a855f7" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; 15,-20; 0,0" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite"/>
      </circle>
      
      {/* Data Insight Sparklines */}
      <g transform="translate(160, 55)" opacity="0.6">
        <path d="M0 10 Q5 8 10 6 Q15 4 20 2" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M0 15 Q5 18 10 16 Q15 14 20 12" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
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