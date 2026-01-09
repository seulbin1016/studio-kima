
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CATEGORIES, PROJECTS } from './constants';
import { Category, Project } from './types';
import Sidebar from './components/Sidebar';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    setSelectedProject(null); // Return to grid view when switching categories
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
  };

  const handleProjectLinkClick = (projectId: string) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleThumbnailClick = (project: Project) => {
    setSelectedProject(project);
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#101010] text-white">
      {/* Sidebar is always fixed on the left */}
      <Sidebar 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick}
        projects={filteredProjects}
        onProjectClick={handleProjectLinkClick}
        hoveredProjectId={hoveredProjectId}
        setHoveredProjectId={setHoveredProjectId}
      />

      {/* Main Content Area switches between Grid and Detail */}
      <main 
        ref={mainScrollRef}
        className="flex-1 overflow-y-auto bg-[#101010] relative"
      >
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleBackToGrid} 
          />
        ) : (
          <div className="pt-4 pb-20 px-4 md:px-8">
            <ProjectGrid 
              projects={filteredProjects} 
              hoveredProjectId={hoveredProjectId}
              setHoveredProjectId={setHoveredProjectId}
              onProjectSelect={handleThumbnailClick}
            />
          </div>
        )}
      </main>

      {/* Mobile Sticky Header */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#101010] border-t border-white/10 py-3 px-4 flex justify-between items-center z-50">
        <span className="font-black text-xl tracking-tighter">μ</span>
        <select 
          className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-sm uppercase font-bold text-white outline-none"
          value={activeCategory}
          onChange={(e) => handleCategoryClick(e.target.value as Category)}
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
