
import React from 'react';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  hoveredProjectId: string | null;
  setHoveredProjectId: (id: string | null) => void;
  onProjectSelect: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  hoveredProjectId, 
  setHoveredProjectId,
  onProjectSelect
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-10">
      {projects.map((project) => (
        <div 
          key={project.id}
          id={`project-${project.id}`}
          className={`group cursor-pointer transition-opacity duration-300 ${
            hoveredProjectId && hoveredProjectId !== project.id ? 'opacity-30' : 'opacity-100'
          }`}
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
          onClick={() => onProjectSelect(project)}
        >
          {/* Image Container */}
          <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-3">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col pt-1">
            <div className="flex justify-between items-start gap-2">
              <h3 className="uppercase font-black text-[13px] leading-none tracking-tight truncate flex-1 text-white" style={{ fontFamily: "'Archivo Narrow', sans-serif" }}>
                {project.title}
              </h3>
              <span className="font-bold text-[12px] leading-none tracking-tight text-zinc-400">
                {project.year}
              </span>
            </div>
            <div className="uppercase text-[11px] font-medium text-zinc-500 mt-1 tracking-tight">
              {project.subTitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
