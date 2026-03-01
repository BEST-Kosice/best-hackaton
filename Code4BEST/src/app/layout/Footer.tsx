import { content } from "../../content/content";
import bestLogoWhite from "../../assets/logos/best-logo-white.png";

export function Footer() {
    const { footer } = content;

    return (
        <footer className="bg-rose-800 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <a href="https://best.tuke.sk" target="_blank" rel="noopener noreferrer">
                            <img
                                src={bestLogoWhite}
                                alt="BEST Košice Logo"
                                className="w-[250px] h-auto mb-4"
                            />
                        </a>
                        <p className="text-sm">
                            {footer.description}
                        </p>
                    </div>

                    {footer.sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="hover:underline"
                                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h4 className="font-bold text-lg mb-4">{footer.address.title}</h4>
                        <address className="not-italic text-sm leading-relaxed">
                            {footer.address.lines.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < footer.address.lines.length - 1 && <br />}
                                </span>
                            ))}
                        </address>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
                    <p>{footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}