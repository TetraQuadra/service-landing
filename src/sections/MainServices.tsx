"use client";

import { useEffect, useState } from "react";
import LinkStyled from "@/components/LinkStyled";
import handleSmoothScroll from "@/utils/smoothScroll";

const MainServices = () => {
    const services = [
        {
            title: "MAIN SERVICES",
            description: "Professional window cleaning for any height and complexity. We use modern methods and eco-friendly products to achieve crystal clear windows without streaks or spots.",
            link: "/other-services",
        },
        {
            title: "Prepare to MOT",
            description: "Thorough cleaning of gutter systems from leaves, debris and blockages. We prevent damage to facades and foundations, protecting your home from moisture and dampness.",
            link: "#contact",
        },
        {
            title: "Regular service",
            description: "Comprehensive cleaning of fascias and soffits from dirt, mold and algae. We restore the original appearance and extend the service life of facade elements.",
            link: "#contact",
        },
        {
            title: "Suspension repair",
            description: "Comprehensive cleaning of fascias and soffits from dirt, mold and algae. We restore the original appearance and extend the service life of facade elements.",
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
        <section className="w-full py-16 " id="services">
            <div className="mx-auto container px-2">
                <h2 className="text-[40px] font-[500] text-center mb-6 opacity-0">Main Services</h2>
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
                                    ((isLg ? (idx === 1 || idx === 2) : (idx === 1 || idx === 3)) ? "text-black " : "text-white ")
                                }
                            >
                                {service.description}
                            </p>
                            <LinkStyled
                                href={service.link}
                                variant={getButtonVariant(idx)}
                                icon
                                className="mt-auto w-fit"
                                onClick={(e) => handleSmoothScroll(e, "#contact")}
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
