import type { ReactNode } from "react";

interface ButtonProps {
    href: string;
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
}

const styles = {
    primary: {
        className: "text-[#ffc50e] bg-[#981a36] hover:bg-[#5c1021]",
        boxShadow: "0 -6px 0 #5c1021 inset, 0 6px 0 #5c1021, 0 3px 8px rgba(0,0,0,0.4)",
    },
    secondary: {
        className: "text-white bg-[#17789c] hover:bg-[#10475c]",
        boxShadow: "0 -6px 0 #10475c inset, 0 6px 0 #10475c, 0 3px 8px rgba(0,0,0,0.4)",
    },
};

export function Button({ href, variant = "primary", children, className = "", fullWidth = false }: ButtonProps) {
    const s = styles[variant];
    return (
        <a
            href={href}
            className={[
                "inline-flex justify-center items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium rounded-md focus:outline-none transform hover:-translate-y-1 transition-all duration-200 ease-in-out font-upheaval",
                s.className,
                fullWidth ? "w-full" : "",
                className,
            ].filter(Boolean).join(" ")}
            style={{
                boxShadow: s.boxShadow,
                transformStyle: "preserve-3d",
                minWidth: "200px",
            }}
        >
            {children}
        </a>
    );
}
