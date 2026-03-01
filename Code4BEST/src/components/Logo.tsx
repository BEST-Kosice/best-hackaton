import React from 'react';
import logomark from '../assets/logos/logomark.svg';

export const Logo: React.FC = () => {
    return (
        <div data-type="logomark" className="px-4 py-2 md:px-7 md:py-3.5 flex justify-center items-center gap-2.5">
            <a href="#">
                <img
                    className="w-10 h-12 md:w-14 md:h-16 relative object-contain"
                    src={logomark}
                    alt="BEST Kosice Logo"
                />
            </a>
        </div>
    );
};
