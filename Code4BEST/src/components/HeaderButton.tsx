import React from 'react';

interface HeaderButtonProps {
    label: string;
    href: string;
    isActive?: boolean;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ label, href, isActive = false }) => {
    return (
        <a
            href={href}
            className={`
                relative px-4 py-4 md:px-5 md:py-6
                inline-flex flex-col justify-center items-center gap-1
                cursor-pointer flex-shrink
                transition-all duration-300 ease-in-out
                bg-rose-800 hover:bg-[#f2edda]
                group
            `}
        >
            <div className="justify-center text-xl md:text-2xl lg:text-3xl font-bold font-upheaval whitespace-nowrap transition-colors duration-300 text-orange-100 group-hover:text-rose-800">
                {label}
            </div>
            {/* Active underline */}
            <span
                className={`
                    absolute bottom-2 left-1/2 -translate-x-1/2
                    h-[2px] bg-[#ffc50e] rounded-full
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0'}
                `}
            />
        </a>
    );
};
