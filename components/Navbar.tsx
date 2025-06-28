import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import ImageWithFallback from "./ImageWithFallback";

export default function Navbar() {
  return (
    /* Navbar */
    < header className="bg-dark p-0 border-border border-b-[1.5px] border-solid position-sticky top-0 z-10" >
      <nav className="max-w-[1200px] mx-auto px-6 sm:px-2 flex justify-between items-center py-8 pb-6 border-b border-border bg-dark m:flex-col sm:gap-4 sm:py-4 navbar-grid">
        <div className="flex items-center gap-2 font-extrabold text-[1.15rem]">
          <Link className="flex items-center gap-[9px] font-bold text-lg tracking-[0.01em] text-text logo" href="/">
            {/* <span className="w-7 h-7 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-full flex items-center justify-center text-[1.1rem] text-white font-extrabold logo-icon">⌘</span> */}
            <ImageWithFallback
              src="/profile.jpg"
              fallbackSrc="/user-profile.jpeg"
              className="w-7 h-7 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-full flex items-center justify-center  logo-icon"
              alt="Aman Meena"
              priority
            />
            Aman Meena
          </Link>
        </div>
        <ul className="flex gap-10 list-none font-semibold text-muted">
          <li><Link className="no-underline hover:text-accent" href="/">Home</Link></li>
          <li><Link className="no-underline hover:text-accent" href="/projects">Projects</Link></li>
          <li><Link className="no-underline hover:text-accent" href="/blogs">Blogs</Link></li>
          <li><Link className="no-underline hover:text-accent" href="/contact">Contact</Link></li>
        </ul>
        <div className="flex gap-6 text-muted text-[1.15rem]">
          <Link className="no-underline hover:text-accent" href="#" target="_blank" rel="noopener noreferrer"><FaGithub className="w-5 h-5" /></Link>
          <Link className="no-underline hover:text-accent" href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5" /></Link>
          <Link className="no-underline hover:text-accent" href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="w-5 h-5" /></Link>
          {/* <Link className="no-underline hover:text-accent" href="#"><FaTwitter /></Link> */}
        </div>
      </nav>
    </header >
  );
};