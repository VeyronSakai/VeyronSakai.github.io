import type { ReactNode } from "react";

type SocialLinkProps = {
    href: string;
    label: string;
    children: ReactNode;
};

export const SocialLink = ({ href, label, children }: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-300"
        >
            {children}
            <span>{label}</span>
        </a>
    );
};
