"use client";
import Link from "next/link"
import { FaReact, FaNode, FaPython, FaFigma, FaAws, FaGit, FaDocker } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";
import projects from "@/components/projects";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function Projects() {

  const urlGithub = `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_PROFILE_ENDPOINT}`;

  return (
    <>
      <section className="hero relative bg-cover bg-center text-white text-center py-[60px] px-5 pb-[40px] bg-dark border-b border-border bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80')]" >
        <div className="absolute inset-0 bg-black/60"></div> {/* <-- Overlay */}
        <div className="relative z-5 p-10">
          <h1 className="text-5xl font-bold mb-4 text-white">Innovate, Build, Deliver.</h1>
          <p className="text-muted text-body mb-7 max-w-[540px] mx-auto">Showcasing a passion for crafting impactful software solutions that blend innovative design with robust engineering. Explore a diverse portfolio of projects.</p>
          <Link className="bg-accent text-white border-0 py-[14px] px-[36px] rounded-[8px] font-bold text-body cursor-pointer transition-colors duration-200 hover:bg-hover primary-btn" href={urlGithub} target="_blank" rel="noopener noreferrer" >View My Projects</Link>
        </div>
      </section>
      <section className="py-[48px] px-5 max-w-[1200px] mx-auto section">
        <h2 className="text-center text-h2 mb-8 font-bold text-white">My Projects</h2>
        <div className="flex gap-4 justify-center mb-8 flex-wrap filters">
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn active">All</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Web Development</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Mobile Apps</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">AI & ML</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">UI/UX Design</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Backend Systems</button>
          <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">DevOps</button>
        </div>
        <div className="grid gap-7 grid-cols-[repeat(auto-fit,minmax(270px,1fr))] projects-grid">
          {/* <!-- Project cards --> */}
          {
            projects.map((project) => (
              <div key={project.id} className="bg-card rounded-[5px] shadow-(--shadow) overflow-hidden border border-border flex flex-col h-full card">
                {/* <img
                  className="w-full h-[140px] object-cover bg-(--panel-bg)"
                  src={project.image ? project.image : '/not-found.jpeg'}
                  alt={project.alt}
                /> */}
                <ImageWithFallback
                  src={project.image}
                  fallbackSrc="/not-found.jpeg"
                  className="w-full h-[140px] object-cover bg-(--panel-bg)"
                  alt={project.alt}
                />
                <div className="py-[18px] px-4 pb-4 flex-1 flex flex-col card-content">
                  <div className="text-h3 font-bold mb-2 text-white card-title">{project.title}</div>
                  <div className="text-muted text-body mb-4 flex-1 card-desc multi-ellipsis">{project.description}</div>
                  <div className="flex flex-wrap gap-2 mb-3 project-tags">
                    {
                      project.tags.slice(0, 3).map((tag, id) => (
                        <span key={id} className="bg-(--icon-bg) text-muted text-tag px-3 py-1 rounded-lg border border-muted font-semibold project-tag">{tag}</span>
                      ))
                    }
                  </div>
                  <div className="flex justify-center gap-2.5 mt-auto card-actions">
                    <Link className="bg-accent text-white border-0 py-2 px-4 rounded-[6px] font-semibold text-body cursor-pointer transition-colors duration-200 no-underline flex items-center hover:bg-hover demo-btn" href={`/projects/${project.slug}`} >View Project <RiLoginCircleLine className='ml-1' /></Link>
                    <Link className="bg-accent text-white border-0 py-2 px-4 rounded-[6px] font-semibold text-body cursor-pointer transition-colors duration-200 no-underline flex items-center hover:bg-hover github-btn" href={project.gitLink} target="_blank" rel="noopener noreferrer" >GitHub <FiGithub className='ml-1' /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <h2 className="text-center text-h2 mt-14 mb-8 font-bold text-white">Technologies I Master</h2>
        <div className="flex gap-8 justify-center my-11 flex-wrap tech-icons">
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaReact /><span className="text-muted text-body mt-1">React</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaNode /><span className="text-muted text-body mt-1">Node.js</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaPython /><span className="text-muted text-body mt-1">Python</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaFigma /><span className="text-muted text-body mt-1">Figma</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><TbBrandReactNative /><span className="text-muted text-body mt-1">React Native</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaAws /><span className="text-muted text-body mt-1">AWS</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaGit /><span className="text-muted text-body mt-1">Git</span></div>
          <div className="flex flex-col items-center text-accent text-h2 gap-1.5 tech-icon"><FaDocker /><span className="text-muted text-body mt-1">Docker</span></div>
        </div>
        <div className="bg-(--panel-bg) rounded-[10px] py-9 px-5 text-center mx-auto mt-12 max-w-[800px] border border-border cta-section">
          <h3 className="text-h2 font-bold text-white mb-3">Ready to Build Something Amazing?</h3>
          <p className="text-muted mb-4.5">Whether you have a groundbreaking idea or need expert development for your next project, I&#39;m here to help bring your vision to life.</p>
          <Link href="/contact" className="bg-accent text-white border-0 py-3 px-7 rounded-[7px] font-bold text-body cursor-pointer transition-colors duration-200 hover:bg-hover primary-btn">Get In Touch</Link>
        </div>
      </section>
    </>
  )
};