"use client";

import { useEffect, useState } from "react";
import LinkStyled from "@/components/LinkStyled";
import handleSmoothScroll from "@/utils/smoothScroll";
import ContactUs from "@/sections/ContactUs";

const MainServices = () => {
    const services = [
        {
            title: "Prepare to MOT",
            description: "Worried about your upcoming MOT? I'll check your vehicle from top to bottom, catch any issues before the test, and get everything in shape.",
            link: "#contact",
        },
        {
            title: "Suspension repair",
            description: "With precise suspension service and quality parts, we ensure your car drives smoothly, handles sharply, and stays reliable on every trip.",
            link: "#contact",
        },
        {
            title: "Engine repair",
            description: "Our engine repair service offers comprehensive diagnostics, maintenance, and full rebuilds for gasoline and diesel engines.",
            link: "#contact",
        },
        {
            title: "Regular service",
            description: "Keep your vehicle running smoothly and reliably with regular maintenance tailored to prevent breakdowns and extend its lifespan.",
            link: "#contact",
        },
        {
            title: "Transmission Repair",
            description: "From minor faults to full rebuilds, our experienced team ensures smooth gear shifting and long-term reliability for vehicles of all makes and models.",
            link: "#contact",
        },
        {
            title: "Computer Diagnostics",
            description: "We run advanced computer diagnostics to detect faults in your vehicle's engine, transmission, and electronics — fast, accurate, and efficient.",
            link: "#contact",
        },
        {
            title: "Oil Change",
            description: "Quick and professional oil change to keep your engine running smoothly. We use high-quality oil and filters to ensure maximum performance and engine protection.",
            link: "#contact",
        },
        {
            title: "Wheel Alignment",
            description: "Professional wheel alignment service to improve handling, extend tire life, and ensure safe driving using precise equipment.",
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

    // Функция для определения варианта кнопки и цвета карточки
    const isWhiteCard = (idx: number) => {
        if (isLg) {
            // lg и выше: белые карточки 2, 3, 6, 7 (индексы 1,2,5,6)
            return idx === 1 || idx === 2 || idx === 5 || idx === 6;
        } else {
            // меньше lg: белые карточки каждая вторая (индексы 1,3,5,7)
            return idx % 2 === 1;
        }
    };

    const getButtonVariant = (idx: number) => {
        return isWhiteCard(idx) ? "white" : "black";
    };

    return (
        <>
            <section className="w-full py-16 " id="services">
                <div className="mx-auto container px-2 w-full">
                    <h2 className="text-[40px] font-[500] text-center mb-6 opacity-0">Main Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={service.title}
                                className={
                                    "flex flex-col items-start gap-6 w-full justify-between p-8 max-lg:p-6 shadow-none border-0 " +
                                    (isWhiteCard(idx) ? "bg-white " : "bg-transparent ")
                                }
                            >
                                <h2
                                    className={
                                        "text-[28px] font-[500] mb-2 " +
                                        (isWhiteCard(idx) ? "text-black " : "text-white ")
                                    }
                                >
                                    {service.title}
                                </h2>
                                <p
                                    className={
                                        "text-[16px] font-normal mb-6 " +
                                        (isWhiteCard(idx) ? "text-black " : "text-white ")
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
            <ContactUs />
        </>
    );
};

export default MainServices;
