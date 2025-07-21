import React from 'react';
import Image from 'next/image';

interface BackgroundSectionProps {
    children: React.ReactNode;
    className?: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ children, className = '' }) => {
    return (
        <section className={`relative ${className}`}>
            <Image
                src="/img/3d-elem.png"
                alt=""
                width={800}
                height={760}
                className="absolute right-[1%] -bottom-100 -z-10 h-[670px] opacity-70 blur-md"
                priority={false}
            />
            {children}
        </section>
    );
};

export default BackgroundSection;