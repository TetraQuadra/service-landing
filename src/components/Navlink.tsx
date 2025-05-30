import { LinkHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface NavlinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
//this component is used to create a link component with a hover effect
const Navlink = ({ children, href, className = '', ...props }: NavlinkProps) => {
  return (
    <Link
    href={href}
    className={`group relative flex items-center transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
  </Link>
  
  );
};

export default Navlink;
