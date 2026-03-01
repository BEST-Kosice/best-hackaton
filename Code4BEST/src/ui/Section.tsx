import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Section({
    id,
    children,
    className,
    style,
}: {
    id?: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}) {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id={id}
            className={["py-12 sm:py-16 md:py-24 fade-in-section", className].filter(Boolean).join(" ")}
            style={style}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {children}
            </div>
        </section>
    );
}