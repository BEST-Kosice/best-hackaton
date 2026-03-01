import { useState, useEffect } from "react";
import { Logo } from "../../components/Logo";
import { HeaderButton } from "../../components/HeaderButton";
import { content } from "../../content/content";

const SECTION_IDS = ["participants", "sponsors", "about-project", "about-us", "contact"];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${id}`);
                    }
                },
                { rootMargin: "-50% 0px -50% 0px" }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const navItems = content.nav;

    return (
        <header className="w-full px-6 md:px-12 lg:px-24 sticky top-0 bg-rose-800 shadow-[0px_7px_4px_0px_rgba(122,120,111,0.70)] flex justify-between items-center z-50">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex h-24 justify-start items-center">
                {navItems.map((item) => (
                    <HeaderButton
                        key={item.href}
                        label={item.label}
                        href={item.href}
                        isActive={activeSection === item.href}
                    />
                ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-4 text-orange-100 focus:outline-none"
                aria-label="Toggle menu"
            >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-rose-800 shadow-xl xl:hidden flex flex-col border-t border-rose-700">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="px-8 py-6 text-orange-100 text-2xl font-bold font-upheaval hover:bg-rose-900 border-b border-rose-700 last:border-none transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}