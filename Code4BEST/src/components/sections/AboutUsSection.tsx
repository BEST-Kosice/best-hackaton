import { content } from "../../content/content";
import { PointIcon, ExternalLinkIcon } from "../../assets/icons";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import bestLogo from "../../assets/logos/best-logo.png";

export function AboutUsSection() {
    const { aboutUs } = content;
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="about-us"
            className="py-12 sm:py-16 md:py-24 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-24 fade-in-section"
            style={{ background: "linear-gradient(135deg, #d7cfae 0%, #f2edda 100%)" }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#981a36]">{aboutUs.title}</h2>
                    <span className="section-underline" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{aboutUs.heading}</h3>
                        {aboutUs.paragraphs.map((p, i) => (
                            <p key={i} className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-[#2d1810]">{p}</p>
                        ))}
                        <div className="mt-4 sm:mt-6">
                            <h4 className="font-bold text-base sm:text-lg mb-3 text-[#981a36]">{aboutUs.valuesTitle}</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {aboutUs.values.map((value) => (
                                    <li key={value} className="flex items-center">
                                        {/* <ChevronDownIcon className="mr-2 text-[#981a36] h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> */}
                                        <PointIcon className="mr-2 text-[#981a36] h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                        <span className="text-sm sm:text-base text-[#17789c]">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center animate-float">
                        <img
                            src={bestLogo}
                            alt="BEST Košice Logo"
                            className="w-64 h-auto sm:w-80 md:w-96 lg:w-[400px] object-contain"
                        />
                    </div>
                </div>

                <div className="mt-12 sm:mt-16">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-[#981a36]">{aboutUs.projectsTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {aboutUs.projects.map((project) => (
                            <div key={project.title} className="bg-[#981a36] p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg text-[#ffc50e] mb-2">{project.title}</h4>
                                <p className="text-white">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#ffc50e] font-medium flex items-center"
                                >
                                    Viac informácií
                                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
