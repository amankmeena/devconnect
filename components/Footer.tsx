import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  const urlGithub = `https://github.com/${process.env.GITHUB_PROFILE_ENDPOINT}`;
  const urlLinkedin = `https://www.linkedin.com/in/${process.env.LINKEDIN_PROFILE_ENDPOINT}`;
  const urlEmail = `mailto:${process.env.PERSONAL_EMAIL}`;

  return (
    /* Footer */
    < footer className="bg-dark border-t border-border py-10 pb-5 mt-12" id="contact" >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-2 flex flex-row justify-evenly items-center gap-5 footer-content">

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 text-body">
          <Link href="/" className="hover:text-hover transition">Home</Link>
          <Link href="/about" className="hover:text-hover transition">About</Link>
          <Link href="/projects" className="hover:text-hover transition">Projects</Link>
          <Link href="/contact" className="hover:text-hover transition">Contact</Link>
        </nav>

        {/* Name & Copyright */}
        <p className="text-body text-center md:text-left">
          © {new Date().getFullYear()} Aman Meena. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-body">
          <Link href={urlGithub} target="_blank" rel="noopener noreferrer" className="hover:text-hover transition">
            <FaGithub />
          </Link>
          <Link href={urlLinkedin} target="_blank" rel="noopener noreferrer" className="hover:text-hover transition">
            <FaLinkedin />
          </Link>
          <Link href={urlEmail} className="hover:text-hover transition">
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer >
  );
};