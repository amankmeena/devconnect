import blogs from "@/components/blogs";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";

export default function Blogs() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto pt-[38px] px-4 main-container">
                <div className="main-title text-h1 font-extrabold text-center mb-3 tracking-[0.01em]">Latest Insights from the DevBlog</div>
                <div className="main-desc text-muted text-body text-center mb-8 max-w-[620px] mx-auto">
                    Stay ahead with articles on web development, AI, cloud, and career growth.
                </div>
                <div className="featured-post bg-card rounded-[13px] shadow-[0_2px_14px_rgba(0,0,0,0.18)] flex items-stretch gap-0 overflow-hidden mb-8 min-h-[260px]">
                    {/* <img className="featured-img w-[46%] min-w-[220px] object-cover bg-card block" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Featured" /> */}
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                        fallbackSrc="/not-found.jpeg"
                        className="featured-img w-[46%] min-w-[220px] object-cover bg-card block"
                        alt="Featured"
                    />
                    <div className="featured-content p-8 pt-8 pb-7 flex flex-col justify-center flex-1 min-w-0">
                        <div>
                            <span className="featured-tag inline-block bg-accent text-white text-body font-semibold px-[13px] py-1 rounded-[6px] mb-2.5">Web Development</span>
                            <span className="featured-date text-[#b0b3b8] text-body ml-2.5 font-normal">Oct 28, 2023</span>
                        </div>
                        <div className="featured-title text-h3 font-extrabold mb-2.5 mt-0 leading-[1.2] text-white">
                            The Future of Frontend: Web Components and Micro-Frontends
                        </div>
                        <div className="featured-desc text-[#b0b3b8] text-body mb-4.5">
                            Dive deep into the evolving landscape of frontend development. This comprehensive guide explores the power of Web Components, reusable UI, and how Micro-Frontends can revolutionize large-scale application architecture, offering unparalleled scalability and team autonomy.
                        </div>
                        <button className="featured-btn bg-accent text-white font-semibold border-0 rounded-[6px] px-5 py-2.5 text-body cursor-pointer self-start transition-colors duration-200 hover:bg-hover">Read More &rarr;</button>
                    </div>
                </div>
                <div className="filter-bar flex gap-3 justify-center mb-7 flex-wrap">
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn active">All Posts</button>
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Web Development</button>
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">HTML</button>
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Cloud & DevOps</button>
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Open Source</button>
                    <button className="bg-none border border-accent text-accent py-2 px-[18px] rounded-[5px] cursor-pointer font-semibold transition-colors duration-200 hover:bg-hover hover:text-white [&.active]:bg-hover [&.active]:text-white filter-btn">Career Insights</button>
                </div>
                <div className="posts-grid grid gap-7 mb-11 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
                    {
                        blogs.map((blog, index) => (
                            /* <!-- Post --> */
                            <div key={blog.id} className="post-card bg-card rounded-[13px] shadow-[0_2px_10px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col min-h-[310px] relative border border-border">
                                {/* <img className="post-img w-full h-[124px] object-cover bg-card block" src={blog.image} alt={blog.alt} /> */}
                                <ImageWithFallback
                                    src={blog.image}
                                    fallbackSrc="/not-found.jpeg"
                                    className="post-img w-full h-[124px] object-cover bg-card block"
                                    alt={blog.alt}
                                />
                                <div className="post-content p-4 pt-4 pb-4 flex flex-col flex-1">
                                    <div className="post-tag-row flex items-center gap-2.5 mb-1.5">
                                        <span className="post-tag bg-(--icon-bg) text-muted text-tag font-semibold px-2.5 py-0.5 border border-muted rounded-[6px] inline-block">{blog.tag}</span>
                                        <span className="post-date text-muted text-tag">{blog.date}</span>
                                    </div>
                                    <div className="post-title text-h3 font-bold mb-2 text-white leading-[1.23]">{blog.title}</div>
                                    <div className="post-desc text-muted text-body mb-3.5 flex-1 line-clamp-3">{blog.description}</div>
                                    <Link className="post-btn bg-accent text-white font-semibold border-0 rounded-[6px] px-4 py-2 text-body cursor-pointer w-full mt-auto transition-colors duration-200 hover:bg-hover" href={`/blogs/${blog.slug}`}>Read More &rarr;</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="pagination flex gap-2.5 justify-center items-center mb-11">
                    <button className="pagination-btn bg-(--icon-bg) text-muted border border-border rounded-[7px] px-4 py-2 text-[1rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-white hover:border-hover">&lt; Previous</button>
                    <button className="pagination-btn bg-(--icon-bg) text-muted border border-border rounded-[7px] px-4 py-2 text-[1rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-white hover:border-hover active">1</button>
                    <button className="pagination-btn bg-(--icon-bg) text-muted border border-border rounded-[7px] px-4 py-2 text-[1rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-white hover:border-hover">2</button>
                    <button className="pagination-btn bg-(--icon-bg) text-muted border border-border rounded-[7px] px-4 py-2 text-[1rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-white hover:border-hover">3</button>
                    <button className="pagination-btn bg-(--icon-bg) text-muted border border-border rounded-[7px] px-4 py-2 text-[1rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-white hover:border-hover">Next &gt;</button>
                </div>
            </div>
        </>
    )
};