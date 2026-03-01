import type { ReactNode } from "react";
export function Container({ children }: { children: ReactNode }) {
    return <div className="mx-auto w-auto max-w-6xl px-6">{children}</div>;
}