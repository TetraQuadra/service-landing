import { HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface LinkStyledProps extends HTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    variant?: 'white' | 'black';
    icon?: boolean;
    href: string;
}

const LinkStyled = ({
    children,
    variant = 'white',
    className = '',
    icon = true,
    href,
    ...props
}: LinkStyledProps) => {
    const baseStyles = "px-[50px] py-5 flex items-center gap-3 transition-all duration-300 border-2 font-[Orbitron] text-[20px] max-sm:px-[20px] max-sm:py-[14px] max-sm:text-[16px]";

    const variantStyles = {
        white: "border-black bg-white fill-black text-black hover:bg-black hover:text-white",
        black: "border-white bg-transparent fill-white text-white hover:bg-white hover:text-black"
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
            {icon && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
        </Link>
    );
};

export default LinkStyled;
