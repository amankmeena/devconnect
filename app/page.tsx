"use client"
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import "../styles/globals.css";
import skills from "../components/skills";
import projects from '../components/projects';
import testimonials from '../components/testimonials';
import ImageWithFallback from '@/components/ImageWithFallback';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-2 flex flex-wrap items-center justify-between py-16 pb-8 min-h-[420px] max-[900px]:flex-col max-[900px]:gap-10" id="home">
          <div className="flex-1 min-w-[320px] max-w-[520px]">
            <p className="text-muted mb-2 text-body">Hello, I'm</p>
            <h1 className="text-h1 font-extrabold mb-2 leading-tight">
              Aman Meena<br />
              <span className="text-accent inline">Full Stack Web<br />Developer</span>
            </h1>
            <div className="text-muted mb-6 text-body max-w-[420px]">
              Crafting robust and intuitive web experiences from concept to deployment. Specializing in modern JavaScript frameworks and scalable backend solutions.
            </div>
            <div className="flex gap-4 mb-6">
              {/* Trigger Button for Resume */}
              <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer px-7 py-3 rounded-md font-semibold text-body border-2 border-accent transition bg-accent text-white hover:bg-hover"
              >
                View Resume
              </button>
              <Link href="/contact" className="no-underline px-7 py-3 rounded-md font-semibold text-body border-2 border-accent transition bg-transparent text-accent hover:bg-accent hover:text-white">Contact Me</Link>
            </div>
            {/* <div className="flex gap-4 mt-4">
              <Link className="no-underline hover:text-accent" href="#"><FaGithub /></Link>
              <Link className="no-underline hover:text-accent" href="#"><FaLinkedin /></Link>
              <Link className="no-underline hover:text-accent" href="#"><FaTwitter /></Link>
            </div> */}
          </div>
          <div className="flex-1 flex justify-center items-center min-w-[260px] mt-8 max-[900px]:mt-10">
            <div className="w-[260px] h-[260px] rounded-full border-4 border-accent bg-card flex items-center justify-center overflow-hidden relative sm:w-[260px] sm:h-[260px]">
              {/* <img className="w-[96%] h-[96%] object-cover rounded-full block" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aman Meena" /> */}
              <ImageWithFallback
                src="/profile.jpg"
                fallbackSrc="/user-profile.jpeg"
                className="w-[96%] h-[96%] object-cover rounded-full block"
                alt="Aman Meena"
              />
            </div>
          </div>
        </section>
        {/* About Me */}
        <section id="about" className="max-w-[1200px] mx-auto px-6 sm:px-2">
          <div className="text-h2 font-extrabold text-center mb-2 mt-14">About Me</div>
          <div className="text-muted text-center mb-10 text-body">
            A brief introduction to my professional journey, skills, and expertise.
          </div>
          <div className="flex flex-wrap gap-6 justify-center mb-10 max-[900px]:flex-col max-[900px]:items-center">
            {
              Object.entries(skills).map(([catagory, skillList], index) => (
                <div key={index} className="bg-card rounded-xl p-8 px-6 min-w-[260px] max-w-[330px] flex-1 mb-4 sm:p-4 sm:px-3 about-card">
                  <h3 className="text-h3 font-bold mb-4">{catagory}</h3>
                  <ul className="list-none pl-0">
                    {
                      skillList.map((skill, idx) => (
                        <li key={idx} className="mb-2 text-body  text-muted flex items-center gap-[0.6rem]"><FaRegCircleCheck className="text-accent" /> {skill}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="max-w-[1200px] mx-auto px-6 sm:px-2">
          <div className="text-h2 font-extrabold text-center mb-2 mt-14">Featured Projects</div>
          <div className="text-muted text-center mb-10 text-body">
            Discover a selection of my recent work, showcasing diverse skills and successful outcomes.
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mb-10">
            {
              projects.slice(0, 6).map((project, idx) => (
                <div key={idx} className="bg-card rounded-xl overflow-hidden flex flex-col min-h-[320px] project-card">
                  {/* <img className="w-full h-[140px] object-cover bg-card" src={project.image} alt={project.alt} /> */}
                  <ImageWithFallback
                    src={project.image}
                    fallbackSrc="/not-found.jpeg"
                    className="w-full h-[140px] object-cover bg-card"
                    alt={project.alt}
                  />
                  <div className="p-3 pt-4 flex-1 flex flex-col project-card-content">
                    <h4 className="text-h3 font-bold mb-2">{project.title}</h4>
                    <p className="text-muted text-body mb-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3 project-tags">
                      {
                        project.tags.slice(0, 3).map((tag, id) => (
                          <span key={id} className="bg-(--icon-bg) text-muted text-tag px-3 py-1 rounded-lg border border-muted font-semibold project-tag">{tag}</span>
                        ))
                      }
                    </div>
                    <div>
                      {/* <Link className="text-accent text-body font-semibold mt-auto underline transition-colors duration-200 hover:text-hover project-link" href={`/projects/${project.slug}`}>View Project →</Link> */}
                      <Link className="block bg-accent text-white font-semibold border-0 rounded-[6px] px-4 py-2 text-body cursor-pointer mt-auto transition-colors duration-200 hover:bg-hover project-link" href={`/projects/${project.slug}`}>View Project →</Link>
                    </div>
                  </div>
                </div>
              )
              )
            }
          </div>
          <div className='flex justify-center'>
            <Link href="/projects" className="no-underline px-7 py-3 rounded-md font-semibold text-body border-2 border-accent transition bg-transparent text-accent hover:bg-hover hover:text-white">Explore More</Link>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="max-w-[1200px] mx-auto px-6 sm:px-2">
          <div className="text-h2 font-extrabold text-center mb-2 mt-14">Client Testimonials</div>
          <div className="text-muted text-center mb-10 text-body">
            Hear what clients and collaborators have to say about working with me.
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mb-10">
            {
              testimonials.map((testimonal, idx) => (
                <div key={idx} className="bg-card rounded-xl p-[1.3rem] pt-8 flex flex-col min-h-[180px] testimonial-card">
                  <div className="text-muted text-body mb-5 italic testimonial-text">{testimonal.text}</div>
                  <div className="flex items-center gap-4 mt-auto testimonial-profile">
                    {/* <img className="w-11 h-11 rounded-full object-cover" src={testimonal.image} alt={testimonal.alt} /> */}
                    <ImageWithFallback
                      src={testimonal.image}
                      fallbackSrc="/user-profile.jpeg"
                      className="w-11 h-11 rounded-full object-cover"
                      alt={testimonal.alt}
                    />
                    <div className="flex flex-col testimonial-profile-info">
                      <span className="font-bold text-body">{testimonal.name}</span>
                      <small className="text-muted text-tag font-normal">{testimonal.role}</small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </main>

      {/* Resume Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/60"></div> {/* <-- Overlay */}
          <div className="bg-[#492a5b] w-[90%] max-w-4xl p-4 rounded-lg shadow-lg relative">
            <div className="flex justify-end gap-3 mb-3">
              <a
                href="/resume.pdf"
                download
                className="bg-accent text-white px-4 py-2 rounded hover:bg-hover transition"
              >
                <FaFileDownload />
              </a>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="bg-accent cursor-pointer text-white px-4 py-2 rounded hover:bg-hover transition"
              >
                <IoClose />
              </button>
            </div>

            {/* PDF Preview */}
            <iframe
              src="/resume.pdf"
              className="w-full h-[500px] border rounded"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}