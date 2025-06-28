import blogs from "@/components/blogs";
import { notFound } from 'next/navigation';
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {

    const { slug } = await params;
    const blog = blogs.find((p) => p.slug === slug);

    if (!blog) {
        notFound(); // Triggers Next.js 404
    }

    const { id, title, description, image, alt, tag, author, date, content } = blog;

    return (
        <>
            <div key={id} className="main-container max-w-[900px] mx-auto pt-[38px] px-4 min-h-screen">
                <div className="aarticle-header border-b-[1.5px] border-solid border-border pb-5 mb-[30px]">
                    <div className="article-title text-h1 font-extrabold mb-2 tracking-[0.01em] text-white leading-[1.18]">
                        {title}
                    </div>
                    <div className="article-meta text-muted text-body mb-0 flex gap-4 items-center">
                        <span>By {author}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="article-body flex gap-6 items-start">
                    <div className="content-col flex-1 min-w-0 max-w-full">
                        {/* <img className="hero-img w-full rounded-[13px] mt-[18px] mb-[22px] shadow-[0_2px_14px_rgba(0,0,0,0.18)] block object-cover max-h-[220px] bg-(--icon-bg)" src={image} alt={alt} /> */}
                        <ImageWithFallback
                            src={image}
                            fallbackSrc="/not-found.jpeg"
                            className="hero-img w-full rounded-[13px] mt-[18px] mb-[22px] shadow-[0_2px_14px_rgba(0,0,0,0.18)] block object-cover max-h-[220px] bg-(--icon-bg)"
                            alt={alt}
                        />
                        <div className="article-section mb-8">
                            <p className="text-muted text-body mb-[15px] lh-base">
                                {description}
                            </p>
                        </div>
                        {
                            content.map((element, idx) => (
                                <div key={idx} className="article-section mb-8">
                                    <div className="section-title text-white text-h3 font-bold mt-7 mb-2.5" id={`${element.title.replaceAll(' ', '')}`}>{element.title}</div>
                                    {!Array.isArray(element.description) ?
                                        (
                                            <p className="text-muted text-body mb-[15px] lh-base">
                                                {element.description}
                                            </p>
                                        ) : (
                                            <ul className="text-muted text-body mb-[15px] ml-6 lh-base list-disc">
                                                {element.description.map((e, idx) => (
                                                    <li key={idx}>{e}</li>
                                                ))}
                                            </ul>
                                        )}
                                    {element.image && (
                                        // <img className="additional block mt-[18px] mb-[22px] mx-auto max-w-[400px] w-full bg-(--icon-bg) rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.18)] " src={element.image} alt={element.alt} />
                                        <ImageWithFallback
                                            src={element.image}
                                            fallbackSrc="/not-found.jpeg"
                                            className="additional block mt-[18px] mb-[22px] mx-auto max-w-[400px] w-full bg-(--icon-bg) rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.18)]"
                                            alt={element.alt}
                                        />
                                    )}
                                </div>
                            ))
                        }
                    </div>
                    <aside className="toc-container bg-(--icon-bg) border border-solid border-border rounded-[11px] p-4.5 pb-2.5 min-w-[200px] max-w-[260px] mb-4.5 ml-6 text-body text-white shadow-[0_2px_10px_rgba(0,0,0,0.13)] sticky top-50">
                        <div className="toc-title font-bold text-h3 mb-2.5 text-white">Table of Contents</div>
                        <ul className="toc-list list-none p-0 m-0 text-muted text-body mb-[15px] ml-6 lh-base">
                            {
                                content.map((element, idx) => (
                                    <li className="mb-2" key={idx} >
                                        <Link className="text-muted text-body no-underline transition-colors duration-200 hover:text-hover" href={`#${element.title.replaceAll(' ', '')}`}>
                                            {element.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    )
};