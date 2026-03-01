import { content } from "../../content/content";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { iconMap } from "../../assets/icons";

export function ContactUsSection() {
    const { contact } = content;

    return (
        <Section id="contact" className="bg-[#f2edda]">
            <SectionTitle title={contact.title} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{contact.heading}</h3>
                    <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-[#2d1810]">{contact.description}</p>
                    <div className="space-y-3 sm:space-y-4">
                        {contact.links.map((link) => {
                            const Icon = iconMap[link.icon];
                            return (
                                <div key={link.label} className="flex items-center">
                                    <Icon className="mr-3 text-[#981a36] h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                    <a
                                        href={link.href}
                                        className="hover:underline text-sm sm:text-base text-[#17789c]"
                                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        {link.label}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="mt-6 sm:mt-8">
                        <h4 className="font-bold text-base sm:text-lg mb-3 text-[#981a36]">{contact.addressTitle}</h4>
                        <p className="text-sm sm:text-base leading-relaxed text-[#2d1810]">
                            {contact.addressLines.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < contact.addressLines.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
