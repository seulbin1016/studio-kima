
import React, { useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when project changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project.id]);

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-[#101010]">
      {/* Left side: Scrollable Images - Wider */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto hide-scrollbar bg-[#101010] relative"
      >
        {/* Escape Button - Just a thin arrow */}
        <button 
          onClick={onClose}
          className="sticky top-8 left-8 z-10 flex items-center justify-center text-white hover:text-zinc-400 transition-colors"
          aria-label="Back to grid"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className="flex flex-col gap-1 px-2 md:px-4 pb-20 pt-2">
          {project.detailImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${project.title} detail ${index + 1}`}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Right side: Information Panel - Narrower (300px) */}
      <div className="w-full lg:w-[300px] border-l border-white/10 p-8 flex flex-col justify-between bg-[#101010] overflow-y-auto lg:h-full shrink-0">
        <div>
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.75] break-words text-white" style={{ fontFamily: "'Archivo Narrow', sans-serif" }}>
              {project.title}
            </h1>
            
            <div className="space-y-6">
              <div>
                <p className="text-[9px] font-black uppercase text-zinc-500 mb-1 tracking-widest">Category</p>
                <p className="text-[11px] font-black uppercase tracking-tight text-white">{project.category}</p>
              </div>
              
              <div>
                <p className="text-[9px] font-black uppercase text-zinc-500 mb-1 tracking-widest">Year</p>
                <p className="text-[11px] font-black tracking-tight text-white">{project.year}</p>
              </div>

              <div>
                <p className="text-[9px] font-black uppercase text-zinc-500 mb-1 tracking-widest">Description</p>
                <p className="text-[12px] leading-snug text-zinc-300 font-medium tracking-normal">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          <span className="font-black text-5xl tracking-tight transform scale-y-125 block origin-left text-white">μ</span>
          <p className="text-[9px] font-bold text-zinc-600 uppercase mt-4 tracking-widest">© 2025 Muon Studio</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
