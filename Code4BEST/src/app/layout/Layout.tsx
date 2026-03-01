import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f2edda] text-[#2d1810]">
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-zinc-900 px-3 py-2 text-white"
            >
                Skip to content
            </a>
            <Header />
            <main id="content">{children}</main>
            <Footer />
        </div>
    );
}