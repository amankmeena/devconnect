"use client"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ImageWithFallback from "@/components/ImageWithFallback";

const faqs = [
    {
        id: 111,
        question: "What services do you offer?",
        answer: "We offer AI consulting, custom ML solutions, data infrastructure, and cloud-based AI deployment."
    },
    {
        id: 112,
        question: "How can I request a quote?",
        answer: "You can request a quote by filling out our contact form or emailing us directly at info@techsolutions.com."
    },
    {
        id: 113,
        question: "Do you offer consultations?",
        answer: "Yes, we offer free initial consultations to discuss your project requirements and recommend solutions."
    },
    {
        id: 114,
        question: "What is your typical project timeline?",
        answer: "Project timelines vary but most engagements range from 4 to 16 weeks depending on scope and complexity."
    },
    {
        id: 115,
        question: "Are you hiring?",
        answer: "We are always looking for talented professionals. Visit our Careers page for current openings."
    }
];

export default function Contact() {
    const [faqAnswerDisplay, setFaqAnswerDisplay] = useState(Number);
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
    const [contactFormData, setContactFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const urlGithub = `https://github.com/${process.env.GITHUB_PROFILE_ENDPOINT}`;
    const urlLinkedin = `https://www.linkedin.com/in/${process.env.LINKEDIN_PROFILE_ENDPOINT}`;
    const urlWhatsapp = `https://wa.me/${process.env.PERSONAL_WHATSAPP}`;
    const urlEmail = `mailto:${process.env.PERSONAL_EMAIL}`;
    const urlFormspree = 'https://formspree.io/f/' + process.env.NEXT_PUBLIC_FORMSPREE_API_KEY;

    const showNotification = (message: string, type: "success" | "error") => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification({ message: "", type: null });
        }, 3000);
    };

    const toggleFAQAnswer = (idx: number) => {
        setFaqAnswerDisplay(idx);
    }

    const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(urlFormspree, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactFormData)
            });
            const data = await response.json();

            if (response.ok) {
                showNotification("Form submitted successfully!", "success");
            } else {
                showNotification("Failed to submit form: " + data.errors[0].message, "error");
            }

            setContactFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error: unknown) {
            let errorMessage = "An unexpected error occurred.";
            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message?: string }).message);
            }
            showNotification("Error: " + errorMessage, "error");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    }

    return (
        <>
            {/* Notification Popup */}
            {notification.type && (
                <div
                    className={`fixed top-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg z-50 transition-all duration-300
                    ${notification.type === "success" ? "bg-green-600 text-white" : "bg-red-800 text-white"}`}
                >
                    {notification.message}
                </div>
            )}

            <section className="relative pt-[56px] pb-[42px] text-center overflow-hidden hero-one border-1 border-border">
                <div className="absolute w-[230px] h-[230px] rounded-full bg-[#27263a] z-0  left-[-80px] top-[24px] circle left"></div>
                <div className="absolute w-[230px] h-[230px] rounded-full bg-[#27263a] z-0  right-[-80px] top-[48px] circle right"></div>
                <div className="relative z-[1]  hero-content">
                    <div className="text-5xl font-extrabold mb-3 text-white tracking-[.01em] hero-title">Innovate. Transform. Connect.</div>
                    <div className="text-body text-muted mb-0 max-w-[620px] mx-auto hero-subtitle">
                        We build the future of AI with you. Let&#39;s discuss your next breakthrough project.
                    </div>
                </div>
            </section>
            <section className="flex gap-8 justify-center items-start p-0 mx-auto max-w-[1200px] mb-12 flex-wrap contact-section">
                <div className="bg-(--panel-bg) rounded-(--radius) shadow-(--shadow) border-[1.5px] border-solid border-border p-7 pt-8 my-0 flex-1 min-w-[320px] max-w-[470px] panel">
                    <h2 className="mt-0 text-h2 font-bold mb-2.5">Get in Touch</h2>
                    <p className="text-muted text-body mb-5">Fill out the form below to connect with our team.</p>
                    <form className="contact-form" onSubmit={handleContactFormSubmit}>
                        <label className="block text-body font-medium mb-1.5 mt-4.5 text-white" htmlFor="name">Name</label>
                        <input className="w-full bg-(--input-bg) border border-(--input-border) text-white text-body rounded-[6px] px-3 py-[10px] mt-0.5 mb-0 focus:border-accent transition-colors duration-200 outline-none" type="text" id="name" value={contactFormData.name} name="name" onChange={handleChange} placeholder="Enter your name" autoComplete="off" required />

                        <label className="block text-body font-medium mb-1.5 mt-4.5 text-white" htmlFor="email">Email</label>
                        <input className="w-full bg-(--input-bg) border border-(--input-border) text-white text-body rounded-[6px] px-3 py-[10px] mt-0.5 mb-0 focus:border-accent transition-colors duration-200 outline-none" type="email" id="email" value={contactFormData.email} name="email" onChange={handleChange} placeholder="your@email.com" autoComplete="off" required />

                        <label className="block text-body font-medium mb-1.5 mt-4.5 text-white" htmlFor="subject">Subject</label>
                        <input className="w-full bg-(--input-bg) border border-(--input-border) text-white text-body rounded-[6px] px-3 py-[10px] mt-0.5 mb-0 focus:border-accent transition-colors duration-200 outline-none" type="text" id="subject" value={contactFormData.subject} name="subject" onChange={handleChange} placeholder="What can we help you with?" required />

                        <label className="block text-body font-medium mb-1.5 mt-4.5 text-white" htmlFor="message">Message</label>
                        <textarea className="w-full bg-(--input-bg) border border-(--input-border) text-white text-body rounded-[6px] px-3 py-[10px] mt-0.5 mb-0 min-h-[80px] resize-y focus:border-accent transition-colors duration-200 outline-none" id="message" value={contactFormData.message} name="message" onChange={handleChange} placeholder="Tell us more about your inquiry or project..." required ></textarea>

                        {/* <label className="block text-body font-medium mb-1.5 mt-4.5 text-white" htmlFor="file-upload" style={{ marginTop: 18 }}>Attach Files (Optional)</label> */}
                        {/* <label className="block bg-(--input-bg) text-white border border-(--input-border) text-body rounded-[6px] px-4 py-2 cursor-pointer mt-2.5 mb-2.5 transition-colors duration-200 hover:border-accent hover:text-accent file-label" htmlFor="file-upload">Choose files</label> */}
                        {/* <input className="hidden" type="file" id="file-upload" multiple /> */}

                        <button type="submit" className="w-full bg-accent text-white border-0 text-body font-bold py-3 rounded-[7px] mt-5 cursor-pointer transition-colors duration-200 hover:bg-hover submit-btn">Send Message</button>
                    </form>
                </div>
                <div className="bg-(--panel-bg) rounded-(--radius) shadow-(--shadow) border-[1.5px] border-solid border-border p-7 pt-8 my-0 flex-1 min-w-[320px] max-w-[470px] panel">
                    <h2 className="mt-0 text-h2 font-bold mb-2.5">Our Reach & Expertise</h2>
                    <p>We are ready to assist you. Find our direct contact information below.</p>
                    <div className="mb-6 contact-details">
                        <div className="detail-row flex items-center gap-2.5 mb-2 text-accent text-body"><span className="text-muted text-body"><MdEmail /></span> <span className="text-muted text-body">amankmeena845@gmail.com</span></div>
                        <div className="detail-row flex items-center gap-2.5 mb-2 text-accent text-body"><span className="text-muted text-body"><FaWhatsapp /></span> <span className="text-muted text-body">+91 80059 03704</span></div>
                        <div className="detail-row flex items-center gap-2.5 mb-2 text-accent text-body"><span className="text-muted text-body"><FaMapLocationDot /></span> <span className="text-muted text-body">Kota, Rajasthan, India</span></div>
                    </div>
                    <div className="mt-5.5 why-partner">
                        <div className="font-bold mb-2.5 text-h3 text-white why-partner-title">Why Partner with Us?</div>
                        <ul className="list-none p-0 m-0 mb-4.5 why-partner-list">
                            <li className="text-accent mb-2 text-body flex items-center gap-2"><IoMdCheckmarkCircleOutline /> <span className="text-muted font-normal">Cutting-edge AI and Machine Learning solutions</span></li>
                            <li className="text-accent mb-2 text-body flex items-center gap-2"><IoMdCheckmarkCircleOutline /> <span className="text-muted font-normal">Dedicated team of industry experts</span></li>
                            <li className="text-accent mb-2 text-body flex items-center gap-2"><IoMdCheckmarkCircleOutline /> <span className="text-muted font-normal">Scalable and secure cloud infrastructure</span></li>
                            <li className="text-accent mb-2 text-body flex items-center gap-2"><IoMdCheckmarkCircleOutline /> <span className="text-muted font-normal">Proven track record of successful project delivery</span></li>
                        </ul>
                    </div>
                    {/* <img className="w-full rounded-[10px] mt-4.5 object-cover min-h-[110px] bg-(--input-bg) random-img" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="AI Network" /> */}
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                        fallbackSrc="/not-found.jpeg"
                        className="w-full rounded-[10px] mt-4.5 object-cover min-h-[110px] bg-(--input-bg) random-img"
                        alt="AI Network"
                    />
                </div>
            </section>
            <section className="mx-auto max-w-[1050px] pt-8 faq-section">
                <div className="text-center text-h2 font-bold mb-7 mt-0 faq-title">Frequently Asked Questions</div>
                <div className="bg-none rounded-[12px] p-0 m-0 border-0 faq-list">
                    {
                        faqs.map((faq) => (
                            <div key={faq.id} className="border-b border-border p-0 m-0 faq-item">
                                <button className="text-white text-h3 font-semibold py-5 pr-2 w-full text-left bg-none border-0 cursor-pointer outline-none transition-colors duration-200 hover:text-accent faq-question" onClick={() => toggleFAQAnswer(faq.id)} >{faq.question}</button>
                                <div className={`text-muted text-body pb-4.5 faq-answer${(faqAnswerDisplay === faq.id) ? " block" : " hidden"}`}>{faq.answer}</div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="text-center mt-14 connect-section">
                <div className="text-h2 font-bold mb-1.5 connect-title">Connect With Us Online</div>
                <div className="text-muted text-body mb-5.5 connect-desc">
                    Follow our journey and stay updated with our latest innovations.
                </div>
                <div className="flex gap-6.5 justify-center items-center text-body mb-0 connect-icons">
                    {/* <Link className="text-muted transition-colors duration-200 hover:text-accent" href="#"><span aria-label="Twitter">🐦</span></Link> */}
                    <Link className="text-muted transition-colors duration-200 hover:text-accent" href={urlGithub} target="_blank" rel="noopener noreferrer"><span aria-label="GitHub"><FaGithub className="w-10 h-10" /></span></Link>
                    <Link className="text-muted transition-colors duration-200 hover:text-accent" href={urlLinkedin} target="_blank" rel="noopener noreferrer"><span aria-label="LinkedIn"><FaLinkedin className="w-10 h-10" /></span></Link>
                    <Link className="text-muted transition-colors duration-200 hover:text-accent" href={urlWhatsapp} target="_blank" rel="noopener noreferrer"><span aria-label="Whatsapp"><FaWhatsapp className="w-10 h-10" /></span></Link>
                    <Link className="text-muted transition-colors duration-200 hover:text-accent" href={urlEmail} target="_blank" rel="noopener noreferrer"><span aria-label="Email"><FaEnvelope className="w-10 h-10" /></span></Link>
                </div>
            </section>
        </>
    )
};