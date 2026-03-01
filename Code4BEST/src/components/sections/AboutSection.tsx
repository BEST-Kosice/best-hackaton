import { content } from "../../content/content";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import localhostLogo from "../../assets/logos/LocalHost.png";
import tukeLogo from "../../assets/logos/TUKE.png";
import ipeckoLogo from "../../assets/logos/IPecko.png";

export function AboutSection() {
    const { aboutProject } = content;

    return (
        <Section id="about-project" className="bg-[#f2edda]">
            <SectionTitle title={aboutProject.title} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{aboutProject.heading}</h3>
                    {aboutProject.paragraphs.map((p, i) => (
                        <p key={i} className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-[#2d1810]">{p}</p>
                    ))}
                </div>
                <div>
                    <div className="bg-[#17789c] text-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#ffc50e]">{aboutProject.timelineTitle}</h3>
                        <div className="space-y-4 sm:space-y-6">
                            {aboutProject.timeline.map((item) => (
                                <div key={item.step} className="flex">
                                    <div className="mr-3 sm:mr-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#ffc50e] text-[#981a36] rounded-full flex items-center justify-center font-bold text-sm sm:text-xl flex-shrink-0 font-upheaval">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg">{item.title}</h4>
                                        <p className="text-sm sm:text-base leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sponzori Sections */}
            <div className="mt-16 sm:mt-24 border-t border-[#d7cfae] pt-12 sm:pt-16">
                <div className="flex flex-col items-center">

                    {/* Standard Sponzori - Top */}
                    <div className="mb-12 flex flex-col items-center">
                        <h4 className="text-lg sm:text-xl font-bold mb-6 text-[#17789c] font-upheaval opacity-80 uppercase tracking-widest">Partneri</h4>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            <a href="https://www.tuke.sk" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img src={tukeLogo} alt="TUKE" className="h-16 md:h-20 w-auto object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Main Sponzor - Middle */}
                    <div className="mb-16 flex flex-col items-center">
                        <h3 className="text-xl sm:text-2xl font-bold mb-8 text-[#981a36] font-upheaval">Hlavný partner</h3>
                        <div className="backdrop-blur-sm p-6 md:p-10 rounded-3xl flex flex-col items-center group hover:scale-105 transition-all duration-300">
                            <a href="https://localhost.company" target="_blank" rel="noopener noreferrer" className="max-w-[280px] md:max-w-[400px]">
                                <img src={localhostLogo} alt="LocalHost" className="w-full h-auto object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Media Sponzori - Bottom */}
                    <div className="mb-12 flex flex-col items-center">
                        <h4 className="text-lg sm:text-xl font-bold mb-6 text-[#17789c] font-upheaval opacity-80 uppercase tracking-widest">Mediálni partneri</h4>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            <a href="https://ipcko.sk" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img src={ipeckoLogo} alt="IPečko" className="h-12 md:h-16 w-auto object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Powered By */}
                    <div className="mt-12 group flex flex-col items-center">
                        <p className="text-sm sm:text-base text-[#2d1810]/60 font-medium">Powered by</p>
                        <div className="text-xl sm:text-2xl font-bold text-[#981a36] hover:text-[#17789c] transition-colors duration-300 font-upheaval cursor-default underline-offset-4 hover:underline">
                            <a href="https://hackathonparty.com" target="_blank" rel="noopener noreferrer">
                                HackathonParty
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
