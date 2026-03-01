import { content } from "../../content/content";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Button } from "../Button";

export function SponsorsSection() {
    const { sponsors } = content;

    return (
        <Section id="sponsors" className="bg-[#d7cfae]">
            <SectionTitle title={sponsors.title} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{sponsors.heading}</h3>
                    {sponsors.reasons.map((r, i) => (
                        <div key={i}>
                            <p className="text-sm sm:text-base leading-relaxed text-[#2d1810]">{r.title}</p>
                            <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-[#5e5552]">{r.description}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#17789c] text-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h4 className="text-lg sm:text-xl font-bold mb-3 text-[#ffc50e]">{sponsors.benefitsTitle}</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                        {sponsors.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-[#981a36]">{sponsors.packagesTitle}</h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 text-sm sm:text-base">{sponsors.packagesSubtitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {sponsors.tiers.map((tier) => (
                        <div key={tier.name} className="rounded-lg bg-white shadow-lg relative">
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{tier.name}</h3>
                                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    {sponsors.allFeatures.map((feature, fi) => {
                                        const isActive = fi < tier.activeCount;
                                        return (
                                            <li key={fi} className="flex items-start">
                                                <div className={`${isActive ? "text-[#990033]" : "text-gray-300"} mr-2 mt-1`}>✓</div>
                                                <span className={`text-sm sm:text-base ${isActive ? "" : "text-gray-400"}`}>{feature}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Button href="#contact" variant="primary" fullWidth>
                                    Kontaktujte nás
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
