"use client";

const Features = () => {
    const features = [
        {
            title: "Fair prices",
            description: "We pride ourselves on offering competitive and transparent pricing with no hidden fees. Our team is committed to providing high-quality services at affordable rates",
        },
        {
            title: "Reliability",
            description: "We are committed to providing dependable and consistent services every time. You can count on us to show up on time, complete the job to the highest standards",
        },
        {
            title: "Top quality",
            description: "We are dedicated to delivering the highest quality in every service we provide. From the materials we use to the attention to detail in our work, we ensure that each project meets the highest standards",
        },
    ]
    return (
        <section className="w-full py-16 max-md:py-8 container mx-auto max-sm:pt-[130px]" id="about">
            <div className="mx-auto px-10 sm:px-6 lg:px-8 !w-full">
                <div className="flex flex-col md:flex-row justify-between w-full max-md:gap-4 xl:gap-[62px] xl:justify-center max-sm:gap-[36px]">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-start justify-start w-[285px] max-md:w-full relative max-lg:w-[200px] max-sm:w-[238px]">
                            <h3 className="text-[36px] font-[500] mb-1 max-lg:text-[26px] max-sm:text-[24px]">{feature.title}</h3>
                            <p className="text-[18px] max-lg:text-[16px] max-sm:text-[16px] font-normal text-[#ffffffb0]">{feature.description}</p>
                            <div className="absolute top-0 left-[-12px] h-[48px] max-lg:h-[41px] max-sm:h-[35px] w-[3px] bg-[linear-gradient(180deg,#FFFFFF_0%,#999999_100%)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
