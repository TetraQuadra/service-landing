import LinkStyled from "@/components/LinkStyled";
import handleSmoothScroll from "@/utils/smoothScroll";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className="flex flex-col items-start justify-start container mx-auto px-2 py-8 relative gap-3 mb-[120px] pt-[80px] max-lg:pt-[22px] max-xl:mb-[65px] 2xl:mb-[60px]">
                <h1 className="text-[54px] max-lg:text-[48px] max-md:text-[42px] font-[500] text-start max-md:leading-[1.2] bg-gradient-to-r from-white via-white to-[#999999] bg-clip-text text-transparent max-sm:text-[36px] max-sm:text-white">
                    AUTO REPAIRS{" "}
                    <span className="inline max-lg:block text-[42px] max-lg:text-[32px] max-sm:text-[20px] max-sm:text-white">
                        SAVING YOUR TIME AND HEADACHES
                    </span>
                </h1>

                <p className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-[300] text-[#ffffffc2] text-start mb-[124px] max-w-[70%] max-sm:text-[14px] max-sm:mb-[36px]">
                    Fast, precise repairs done with care — so you can skip the stress and get back on the road
                </p>
                <LinkStyled
                    href="#contact"
                    className=""
                    variant="black"
                    aria-label="Contact us for auto repair services"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                    Book now
                </LinkStyled>

            </section>
            <Image src="/images/hero-bg.webp" alt="Hero image" width={465} height={830} className="absolute top-0 right-0 -z-10 max-sm:top-[80px]" />
        </>
    );
};

export default Hero;
