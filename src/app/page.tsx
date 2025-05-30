"use client";

import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import MainServices from "@/sections/MainServices";
import ContactUs from "@/sections/ContactUs";
import Feedback from "@/sections/Feedback";
import Reviews from "@/sections/Reviews";
import ContactsSection from "@/sections/ContactsSection";
export default function Home() {
    return (
        <div className="items-center justify-items-center w-full">
            <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
                <Hero />
                <Features />
                <MainServices />
                <Reviews />
                <ContactUs />
                <Feedback />
                <ContactsSection />
            </main>
        </div>
    );
}
