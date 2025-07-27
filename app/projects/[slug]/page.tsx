import projects from "@/components/projects";
import { notFound } from 'next/navigation';
import { FaStarHalfStroke } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import Link from 'next/link';
import { ProjectTags } from "@/components/ProjectTags";
import ImageWithFallback from "@/components/ImageWithFallback";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {

    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound(); // Triggers Next.js 404
    }

    const { id, title, description, image, alt, tags, viewProject, gitLink, data } = project;

    return (
        <>
            <div key={id} className="max-w-[1200px] mx-auto px-4 pt-8 flex flex-col gap-8 main-container">
                <div className="flex flex-row items-center justify-between gap-4 flex-wrap title-row">
                    <div className="w-[46rem]">
                        <div className="text-h1 font-bold mb-0.5 main-title">{title}</div>
                        <div className="text-muted text-body mb-3 main-subtitle">{description}</div>
                    </div>
                    <div className="flex gap-3 action-buttons">
                        <Link href={viewProject} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-accent text-white text-body font-semibold py-2.5 px-5 rounded-md border-0 cursor-pointer transition-colors duration-200 hover:bg-hover primary-btn"><FiLink /> Live Demo</Link>
                        <Link href={gitLink} target="_blank" rel="noopener noreferrer" className="bg-card text-accent border-2 border-accent text-body font-semibold py-2.5 px-5 rounded-md cursor-pointer transition-colors duration-200 hover:bg-hover hover:text-white secondary-btn">View Code on GitHub</Link>
                    </div>
                </div>
                <div className="grid grid-cols-[1.8fr_1fr] gap-7 mt-2 content-grid">
                    <div className="flex flex-col gap-7 left-col">
                        {/* <img className="w-full rounded-(--radius) shadow-(--shadow) mb-0 object-cover bg-(--icon-bg) aspect-video main-image" src={image} alt={alt} /> */}
                        <ImageWithFallback
                            src={image}
                            fallbackSrc="/not-found.jpeg"
                            className="w-full rounded-(--radius) shadow-(--shadow) mb-0 object-contain bg-(--icon-bg) aspect-video main-image"
                            alt={alt}
                        />
                        <div className="bg-card rounded-(--radius) p-6 shadow-(--shadow) border border-border mb-0 project-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Project Overview</h3>
                            <p className="text-muted text-body mb-0">
                                {data.projectOverview}
                            </p>
                            <h3 className="mt-5 text-h3 font-bold mb-3">Goals</h3>
                            <ul className="text-muted text-body mb-0 mt-3 pl-4 list-disc goals-list">
                                {
                                    data.goals.map((goal, idx) => (
                                        <li key={idx} >{goal}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="bg-card rounded-(--radius) p-6 shadow-(--shadow) border border-border mb-0 feature-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Key Features</h3>
                            <ul className="text-muted text-body list-none m-0 p-0 flex flex-col gap-4 features-list">
                                {
                                    data.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 feature-item">
                                            <span className="text-accent w-7 h-7 flex items-center justify-center text-lg mt-0.5 flex-shrink-0 feature-icon"><FaStarHalfStroke /></span>
                                            <div>
                                                <strong>{feature.title}</strong>
                                                <div className="text-muted text-body feature-desc">{feature.description}</div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="bg-card rounded-(--radius) p-5 shadow-(--shadow) border border-border mt-3 mb-0 demo-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Live Demo &amp; Preview</h3>
                            {data.liveDemoPreview ?
                                (
                                    <div className="relative w-full aspect-video rounded-[10px] overflow-hidden mt-2.5 bg-(--icon-bg) demo-img-container">
                                        {/* <img className="w-full h-full object-cover block demo-img" src={data.liveDemoPreview.image} alt={data.liveDemoPreview.alt} /> */}
                                        <ImageWithFallback
                                            src={data.liveDemoPreview.image}
                                            fallbackSrc="/not-found.jpeg"
                                            className="w-full h-full object-cover block demo-img"
                                            alt={data.liveDemoPreview.alt}
                                        />
                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark bg-opacity-60 rounded-full w-15 h-15 flex items-center justify-center text-white text-4xl border-4 border-text cursor-pointer play-btn">&#9654;</span>
                                    </div>
                                )
                                :
                                (
                                    <p className="text-muted text-body">Currently Not Available.</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 right-col">
                        <div className="bg-card rounded-(--radius) p-5 shadow-(-shadow) border border-border mb-0 tech-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-7 mt-2 tech-list">
                                <ProjectTags tags={tags} />
                            </div>
                        </div>
                        <div className="bg-card rounded-(--radius) p-5 shadow-(--shadow) border border-border mb-0 flex flex-col gap-3 arch-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Architecture &amp; Workflow</h3>
                            {/* <img className="w-full rounded-[10px] bg-(--icon-bg) object-cover aspect-video arch-img" src={data.architectureAndWorkflow.image} alt={data.architectureAndWorkflow.alt} /> */}
                            <ImageWithFallback
                                src={data.architectureAndWorkflow.image}
                                fallbackSrc="/not-found.jpeg"
                                className="w-full rounded-[10px] bg-(--icon-bg) object-cover aspect-video arch-img"
                                alt={data.architectureAndWorkflow.alt}
                            />
                            <p className="text-muted text-body mb-0">
                                {data.architectureAndWorkflow.description}
                            </p>
                        </div>
                        <div className="bg-card rounded-[14px] p-5 shadow-(--shadow) border border-border min-h-[120px] mb-0 screenshots-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Additional Screenshots</h3>
                            {data.additionalScreenshots ?
                                (data.additionalScreenshots.map((image, idx) => (
                                    // <img key={idx} src={image} alt="adds photo" />
                                    <ImageWithFallback
                                        key={idx}
                                        src={image}
                                        fallbackSrc="/not-found.jpeg"
                                        alt={alt}
                                    />
                                )))
                                :
                                (
                                    <p className="text-muted text-body">Currently Not Available.</p>
                                )
                            }
                        </div>
                        <div className="bg-card rounded-(--radius) p-6 shadow-(--shadow) border border-border mb-0 feature-card">
                            <h3 className="mt-0 text-h3 font-bold mb-3">Planned Enhancements</h3>
                            <ul className="text-muted text-body list-none m-0 p-0 flex flex-col gap-4 features-list">
                                {data.plannedEnhancements ?
                                    (data.plannedEnhancements.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 feature-item">
                                            <span className="text-accent w-7 h-7 flex items-center justify-center text-lg mt-0.5 flex-shrink-0 feature-icon"><FaStarHalfStroke /></span>
                                            <div>
                                                <strong>{feature.category}</strong>
                                                <ul className="text-muted text-body mb-0 mt-3 pl-4 list-disc goals-list">
                                                    {
                                                        feature.items.map((item, idx) => (
                                                            <li key={idx} >{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                                {/* <div className="text-muted text-body feature-desc">{feature.items}</div> */}
                                            </div>
                                        </li>
                                    )))
                                    :
                                    (
                                        <p className="text-muted text-body">Currently Not Available.</p>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};