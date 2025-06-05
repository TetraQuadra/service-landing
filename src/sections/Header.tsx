"use client";

import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/Navlink";

const Header = () => {


    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string) => {
        e.preventDefault();

        if (window.location.pathname === '/' || window.location.pathname === '') {
            const targetElement = document.getElementById(hash);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                window.history.pushState(null, '', `/#${hash}`);
            }
        } else {
            window.location.href = `/${hash ? '#' + hash : ''}`;
        }
    };

    const navLinks = [
        { href: "/", hash: "about", text: "About" },
        { href: "/", hash: "services", text: "Services" },
        { href: "/", hash: "reviews", text: "Reviews" },
        { href: "/", hash: "contacts", text: "Contacts" }
    ];

    return (
        <header className="py-4 container mx-auto px-2">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={45} height={35} />
                    <span className="text-xl font-[500] font-[Orbitron]">YuriyFix</span>
                </Link>
                <nav className="md:flex items-center gap-11 max-md:hidden max-lg:gap-6">
                    {navLinks.map((link) => (
                        <Navlink
                            key={link.hash}
                            href={`${link.href}${link.hash ? '#' + link.hash : ''}`}
                            className="text-lg p-2 cursor-pointer"
                            onClick={(e) => handleSmoothScroll(e, link.href, link.hash)}
                        >
                            {link.text}
                        </Navlink>
                    ))}
                </nav>

                <Navlink
                    href="tel:+447918450051"
                    className="font-[Orbitron] text-white px-4 py-2 gap-2"
                >
                    +44 7918 450051
                </Navlink>
            </div>
        </header>
    );
};

export default Header;