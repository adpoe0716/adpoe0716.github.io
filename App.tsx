import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Server,
  Database,
  Layout,
  Brain,
  Terminal,
  ExternalLink,
  Calendar,
  MessageSquareQuote,
  Sparkles,
  ArrowUpRight,
  Medal,
  CheckCircle,
  Maximize2
} from 'lucide-react';

import { PROFILE, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS, EDUCATION, SKILL_ICONS } from './constants';
import { Project, Experience } from './types';

// --- Components ---

// Custom Gemini Icon Component (Zodiac Symbol)
const GeminiIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Left Pillar */}
    <path d="M9 5v14" />
    {/* Right Pillar */}
    <path d="M15 5v14" />
    {/* Top Curve */}
    <path d="M5 5c4-3 10-3 14 0" />
    {/* Bottom Curve */}
    <path d="M5 19c4 3 10 3 14 0" />
  </svg>
);

// Star Field Component
const StarBackground = () => {
  // Generate static stars once to avoid re-renders causing flickering
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random() * 0.7 + 0.3,
      delay: `${Math.random() * 2}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-[#0B1026] to-darker"></div>
      
      {/* Nebula/Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Stars */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay
          }}
        ></div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於我', href: '#about' },
    { name: '技能', href: '#skills' },
    { name: '經歷', href: '#experience' },
    { name: '專案', href: '#projects' },
    { name: '證照', href: '#certifications' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/80 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer tracking-tight" onClick={() => window.scrollTo(0,0)}>
            {PROFILE.englishName}
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-200 hover:text-white' : 'text-slate-200 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-white/10 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 scroll-mt-0">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="mb-10 relative inline-block group animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <img 
            src={PROFILE.avatar} 
            alt="Profile" 
            className="relative w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto border-[3px] border-white/20 shadow-2xl object-cover bg-slate-800"
          />
          <div className="absolute -top-2 -right-2 bg-darker p-2 rounded-full border border-primary/50 shadow-[0_0_15px_rgba(129,140,248,0.5)]">
            <GeminiIcon className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PROFILE.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-200 mb-8 font-light flex items-center justify-center gap-2">
          {PROFILE.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-100 mb-10 leading-relaxed glass-panel p-6 rounded-2xl border-white/10 font-medium">
          {PROFILE.about}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={PROFILE.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-primary hover:bg-indigo-500 md:py-4 md:text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(129,140,248,0.4)] font-medium"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
          {/* Contact Me Button Removed as requested */}
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})}>
        <ChevronDown className="text-slate-400 w-8 h-8" />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const displayOrder: Array<'Backend' | 'Database' | 'Frontend' | 'AI' | 'Tools'> = [
    'Backend', 'Database', 'Frontend', 'AI', 'Tools'
  ];

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          <span className="border-b-4 border-primary/50 pb-2 shadow-[0_4px_10px_rgba(129,140,248,0.3)]">核心技能</span>
        </h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto text-lg">
          以專案實戰為導向的技術堆疊，專注於解決問題與系統架構。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayOrder.map((category) => {
            const skills = SKILLS.filter(s => s.category === category);
            if (skills.length === 0) return null;
            
            const isBackend = category === 'Backend';
            
            return (
              <div 
                key={category} 
                className={`
                  glass-panel rounded-2xl p-6 md:p-8 
                  glass-card-hover transition-all duration-300 relative overflow-hidden
                  ${isBackend ? 'md:col-span-2' : ''}
                `}
              >
                {isBackend && (
                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                )}

                {/* Header */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`p-3 rounded-xl mr-4 ${isBackend ? 'bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(129,140,248,0.2)]' : 'bg-slate-800 text-slate-200 border border-slate-600'}`}>
                    {SKILL_ICONS[category]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-md
                        ${isBackend 
                          ? 'bg-slate-900/60 border border-primary/40 text-primary-200 shadow-[0_0_10px_rgba(129,140,248,0.1)] hover:shadow-[0_0_15px_rgba(129,140,248,0.3)] hover:border-primary hover:text-white text-slate-100' 
                          : 'bg-slate-800/60 border border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500 hover:text-white'}
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const [reflectionExp, setReflectionExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-16">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-20 text-white">
          <span className="border-b-4 border-secondary/50 pb-2 shadow-[0_4px_10px_rgba(192,132,252,0.3)]">工作經歷</span>
        </h2>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              
              {/* Date Column (Left) */}
              <div className="md:w-1/4 flex-shrink-0 flex md:justify-end">
                <div className="glass-panel p-4 rounded-xl inline-block md:block md:w-full md:text-right h-fit border-l-4 border-l-primary md:border-l-0 md:border-r-4 md:border-r-primary">
                   <div className="flex items-center md:justify-end text-primary font-bold text-xl mb-1 shadow-primary drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]">
                      <Calendar className="w-5 h-5 mr-2 md:order-last md:mr-0 md:ml-2" />
                      {exp.period}
                   </div>
                   <div className="text-slate-300 text-base md:text-right flex items-center md:justify-end">
                      <MapPin size={16} className="mr-1 md:order-last md:mr-0 md:ml-1"/> 
                      {exp.location}
                   </div>
                </div>
              </div>

              {/* Content Column (Right) */}
              <div className="md:w-3/4 relative border-l-2 border-slate-700 pl-8 md:pl-12 pb-12 last:pb-0 last:border-l-0">
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-6 w-5 h-5 bg-darker rounded-full border-4 border-primary shadow-[0_0_15px_rgba(129,140,248,0.8)] group-hover:scale-150 transition-transform z-10"></div>

                <div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300">
                  <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <div className="text-xl text-primary font-semibold">{exp.role}</div>
                    </div>
                  </div>

                  {exp.image && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500 bg-slate-800"
                      />
                    </div>
                  )}

                  <ul className="list-disc list-outside ml-6 space-y-4 text-slate-100 text-lg leading-relaxed mb-8">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="pl-1">{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-slate-900/60 text-indigo-200 border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.reflection && (
                    <button 
                      onClick={() => setReflectionExp(exp)}
                      className="w-full sm:w-auto flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-white rounded-xl transition-all shadow-[0_0_10px_rgba(129,140,248,0.2)] border border-primary/30 text-sm font-bold group/btn"
                    >
                      <MessageSquareQuote className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform text-primary" />
                      查看心得感想
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Reflection Modal */}
      {reflectionExp && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setReflectionExp(null)}></div>
          <div className="bg-darker/95 backdrop-blur-xl w-full max-w-2xl rounded-2xl shadow-[0_0_50px_rgba(129,140,248,0.2)] relative animate-fadeIn flex flex-col overflow-hidden border border-white/20 max-h-[90vh]">
            <div className="p-6 bg-gradient-to-r from-primary/80 to-secondary/80 text-white relative flex-shrink-0">
              <button 
                onClick={() => setReflectionExp(null)}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-1 pr-8">{reflectionExp.company}</h3>
              <p className="opacity-90">{reflectionExp.role} - 階段性反思</p>
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="prose prose-lg text-slate-200 leading-relaxed">
                <p>{reflectionExp.reflection}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Reset image index when a new project is selected
  useEffect(() => {
    if (selectedProject) {
      setCurrentImgIndex(0);
    }
  }, [selectedProject]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          <span className="border-b-4 border-secondary/50 pb-2 shadow-[0_4px_10px_rgba(192,132,252,0.3)]">精選專案</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="glass-panel rounded-2xl overflow-hidden glass-card-hover transition-all duration-300 group cursor-pointer flex flex-col h-full border border-white/10 relative"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-90"></div>
                
                {/* View More Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-darker/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center bg-primary text-white px-6 py-2 rounded-full font-bold shadow-lg border border-white/20">
                      <span>查看更多</span>
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                   </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                   <span className="bg-darker/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-primary rounded border border-primary/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      {project.period}
                   </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors text-shadow-sm">{project.title}</h3>
                </div>
                
                <p className="text-slate-200 text-lg mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.techStack.slice(0, 3).map(tech => (
                       <span key={tech} className="text-sm font-medium px-3 py-1 rounded bg-slate-800 text-slate-200 border border-slate-600">
                         {tech}
                       </span>
                     ))}
                     {project.techStack.length > 3 && (
                       <span className="text-sm font-medium px-3 py-1 rounded bg-slate-800 text-slate-400 border border-slate-600">
                         +{project.techStack.length - 3}
                       </span>
                     )}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Carousel */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="glass-panel w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.1)] relative animate-fadeIn flex flex-col bg-darker border border-white/20 my-8">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed z-[70] top-4 right-4 md:absolute md:top-4 md:right-4 p-2 bg-black/60 hover:bg-primary rounded-full text-white transition-all border border-white/20 backdrop-blur-md shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Carousel Container */}
            <div className="relative w-full aspect-video flex-shrink-0 bg-slate-900 group/carousel overflow-hidden">
              <img 
                src={selectedProject.images[currentImgIndex]} 
                alt={`${selectedProject.title} - ${currentImgIndex + 1}`} 
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-60"></div>
              
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors border border-white/10 opacity-0 group-hover/carousel:opacity-100 z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors border border-white/10 opacity-0 group-hover/carousel:opacity-100 z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedProject.images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute bottom-6 left-6 md:left-10 right-6 text-white pointer-events-none">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">{selectedProject.title}</h3>
                <span className="bg-primary/90 backdrop-blur-md px-4 py-1 rounded-md text-white font-bold inline-block shadow-[0_0_15px_rgba(129,140,248,0.5)]">
                  {selectedProject.period}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Brain className="mr-2" /> 專案描述
                </h4>
                <p className="text-xl text-slate-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Terminal className="mr-2" /> 核心功能與技術細節
                </h4>
                <ul className="space-y-4">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-lg text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Server className="mr-2" /> 技術堆疊
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="text-lg font-medium px-4 py-2 rounded-lg bg-slate-900 border border-indigo-500/30 text-indigo-200 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                 <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="bg-white text-darker hover:bg-slate-200 px-8 py-3 rounded-xl font-bold text-lg flex items-center transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transform">
                      <Github className="mr-2" /> 前往 Github
                    </a>
                 </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const EducationAndCertSection = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-white flex items-center">
              <span className="w-1.5 h-8 bg-primary mr-3 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"></span>
              學歷
            </h2>
            <div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.school}</h3>
              <p className="text-xl text-primary font-medium mb-1 text-shadow-sm">{EDUCATION.degree}</p>
              <p className="text-slate-300 text-lg mb-4">{EDUCATION.period} | {EDUCATION.location}</p>
              <p className="text-slate-200 text-lg">主修：{EDUCATION.major}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-white flex items-center">
              <span className="w-1.5 h-8 bg-secondary mr-3 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></span>
              證照與獎項
            </h2>
            <div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300">
              <ul className="space-y-5">
                {CERTIFICATIONS.map((cert, index) => {
                  const isAward = cert.type === 'award' || cert.name.includes('競賽') || cert.name.includes('名');
                  return (
                    <li key={index} className="flex items-start">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 border ${isAward ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' : 'bg-green-500/20 border-green-500/30 text-green-400'}`}>
                        {isAward ? <Medal className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                      </div>
                      <span className="text-slate-200 text-lg py-1">{cert.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="glass-panel border-t border-white/10 py-12 mt-12 bg-darker/50 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">{PROFILE.name}</h2>
            <p className="text-slate-300">{PROFILE.title}</p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center text-slate-300 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              {PROFILE.email}
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-primary transition-colors">
              <Github className="w-4 h-4 mr-2" />
              github.com/adpoe0716
            </a>
            <div className="flex items-center text-slate-300">
               <Phone className="w-4 h-4 mr-2" />
               {PROFILE.phone}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Ting-An Zhou. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen text-text font-sans selection:bg-primary/30 selection:text-white bg-darker relative">
      <StarBackground />
      <Navbar />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationAndCertSection />
      <Footer />
    </div>
  );
}

export default App;