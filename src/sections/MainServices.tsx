"use client";

import { useEffect, useState } from "react";
import LinkStyled from "@/components/LinkStyled";
import handleSmoothScroll from "@/utils/smoothScroll";

const MainServices = () => {
    const services = [
        {
            title: "MAIN SERVICES",
            description: "Count on me for fast, reliable, and honest car repair services — whether you need a quick fix, regular maintenance, or a full diagnostic check.",
            link: "/other-services",
        },
        {
            title: "Engine Diagnostics",
            description: "Comprehensive check using computer tools and inspection to detect faults early and keep your engine running smoothly and efficiently.",
            link: "#contact",
        },
        {
            title: "Engine Overhaul",
            description: "Complete engine disassembly with replacement or restoration of all major components to return your engine to factory-like performance and durability.",
            link: "#contact",
        },
        {
            title: "Partial Engine Repair",
            description: "Targeted repairs such as replacing gaskets, timing belts, or pumps to fix specific issues without a complete engine teardown.",
            link: "#contact",
        },
    ];

    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        // Функция для обновления состояния
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Функция для определения варианта кнопки
    const getButtonVariant = (idx: number) => {
        if (isLg) {
            // lg и выше: белый для 2 и 3, чёрный для остальных
            return (idx === 1 || idx === 2) ? "white" : "black";
        } else {
            // меньше lg: белый для 2 и 4, чёрный для остальных
            return (idx === 1 || idx === 3) ? "white" : "black";
        }
    };

    return (
        <section className="w-full py-16 max-sm:py-4" id="services">
            <div className="mx-auto container px-2">
                <h2 className="text-[40px] font-[500] text-center mb-6 hidden">Main Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className={
                                "flex flex-col items-start gap-6 w-full justify-between p-8 max-lg:p-6 shadow-none border-0 " +
                                ((isLg ? (idx === 1 || idx === 2) : (idx === 1 || idx === 3)) ? "bg-white " : "bg-transparent ")
                            }
                        >
                            <h2
                                className={
                                    "text-[28px] font-[500] mb-2 " +
                                    ((isLg ? (idx === 1 || idx === 2) : (idx === 1 || idx === 3)) ? "text-black " : "text-white ")
                                }
                            >
                                {service.title}
                            </h2>
                            <p
                                className={
                                    "text-[16px] font-normal mb-6 " +
                                    ((isLg ? (idx === 1 || idx === 2) : (idx === 1 || idx === 3)) ? "text-black " : "text-[#ffffffb0]")
                                }
                            >
                                {service.description}
                            </p>
                            <LinkStyled
                                href={service.link}
                                variant={getButtonVariant(idx)}
                                icon
                                className="mt-auto w-fit"
                                onClick={(e) => {
                                    if (service.link === "#contact") {
                                        handleSmoothScroll(e, "#contact");
                                    }
                                }}
                            >
                                {service.link === "#contact" ? "Book now" : "Other services"}
                            </LinkStyled>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainServices;
