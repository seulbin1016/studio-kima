
import React from 'react';
import { Category, Project } from '../types';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: Category;
  onCategoryClick: (category: Category) => void;
  projects: Project[];
  onProjectClick: (id: string) => void;
  hoveredProjectId: string | null;
  setHoveredProjectId: (id: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeCategory, 
  onCategoryClick, 
  projects, 
  onProjectClick,
  hoveredProjectId,
  setHoveredProjectId
}) => {
  return (
    <aside className="hidden md:flex flex-row h-full w-[330px] shrink-0 border-r border-white/10 bg-[#101010] z-40">
      
      {/* Column 1: Category List + Logo at bottom */}
      <div className="w-[140px] border-r border-white/10 flex flex-col h-full">
        <nav className="flex-1 pt-4 pl-3 pr-1 overflow-y-auto hide-scrollbar">
          <ul className="space-y-0.5">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onCategoryClick(cat)}
                  className={`text-left uppercase text-[12px] font-black tracking-tight transition-colors duration-200 block w-full truncate ${
                    activeCategory === cat ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
                  }`}
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo aligned left side of the category text */}
        <div className="pl-3 pb-8 flex justify-start">
          <button 
            onClick={() => onCategoryClick('ALL')}
            className="font-black text-6xl leading-none tracking-tight transform scale-y-125 hover:opacity-50 transition-opacity text-white"
          >
            μ
          </button>
        </div>
      </div>

      {/* Column 2: Project Title List */}
      <div className="flex-1 pt-4 flex flex-col overflow-y-auto hide-scrollbar pb-20">
        <div className="pl-3 pr-2">
          <ul className="space-y-0.5">
            {projects.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => onProjectClick(p.id)}
                  onMouseEnter={() => setHoveredProjectId(p.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`text-left uppercase text-[11px] leading-tight font-bold tracking-tight transition-all duration-150 block w-full truncate ${
                    hoveredProjectId === p.id ? 'text-white translate-x-1' : 'text-zinc-600'
                  }`}
                  style={{ fontFamily: "'Archivo Narrow', sans-serif" }}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
