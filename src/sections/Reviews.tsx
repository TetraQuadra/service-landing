"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Review {
    name: string;
    rating: number;
    date: string;
    text: string;
    avatar?: string;
}

const Reviews = () => {
    const [isHovering, setIsHovering] = useState(false);
    const rowOneRef = useRef<HTMLDivElement>(null);
    const rowTwoRef = useRef<HTMLDivElement>(null);
    const allRowRef = useRef<HTMLDivElement>(null);

    const reviews: Review[] = [
        {
            name: "John Smith",
            rating: 5,
            date: "12/04/2024",
            text: "Quick and professional service! My car was ready the same day. Highly recommend this garage.",
        },
        {
            name: "Emily Johnson",
            rating: 5,
            date: "10/04/2024",
            text: "Friendly staff and honest pricing. They explained everything clearly and fixed my suspension perfectly.",
        },
        {
            name: "Michael Brown",
            rating: 4,
            date: "08/04/2024",
            text: "Good experience overall. MOT prep was thorough and I passed the test with no issues.",
        },
        {
            name: "Sarah Williams",
            rating: 5,
            date: "05/04/2024",
            text: "Regular service was done quickly and efficiently. My car runs smoother now. Will come back again!",
        },
        {
            name: "David Miller",
            rating: 5,
            date: "03/04/2024",
            text: "Great value for money. They found and fixed a problem other garages missed.",
        },
        {
            name: "Olga Petrova",
            rating: 5,
            date: "01/04/2024",
            text: "Very polite and knowledgeable mechanics. The best car repair experience I've had.",
        },
        {
            name: "James Lee",
            rating: 4,
            date: "29/03/2024",
            text: "Had to wait a bit, but the repair was top quality. Will recommend to friends.",
        },
        {
            name: "Anna Müller",
            rating: 5,
            date: "27/03/2024",
            text: "Excellent service! They even cleaned my car after the repair. Thank you!",
        },
        {
            name: "Lucas Rossi",
            rating: 5,
            date: "25/03/2024",
            text: "Fast diagnostics and honest advice. No unnecessary upselling.",
        },
        {
            name: "Sophie Dubois",
            rating: 5,
            date: "22/03/2024",
            text: "Booked online, everything was smooth. My car feels brand new!",
        },
    ];

    useEffect(() => {
        const animate = () => {
            if (isHovering) return;

            if (window.innerWidth >= 768) {
                if (rowOneRef.current) {
                    rowOneRef.current.scrollLeft += 1;
                    if (rowOneRef.current.scrollLeft >= rowOneRef.current.scrollWidth / 2) {
                        rowOneRef.current.scrollLeft = 0;
                    }
                }

                if (rowTwoRef.current) {
                    rowTwoRef.current.scrollLeft -= 1;
                    if (rowTwoRef.current.scrollLeft <= 0) {
                        rowTwoRef.current.scrollLeft = rowTwoRef.current.scrollWidth / 2;
                    }
                }
            }
            else {
                if (allRowRef.current) {
                    allRowRef.current.scrollLeft += 1;
                    if (allRowRef.current.scrollLeft >= allRowRef.current.scrollWidth / 2) {
                        allRowRef.current.scrollLeft = 0;
                    }
                }
            }
        };

        const animationInterval = setInterval(animate, 30);

        return () => clearInterval(animationInterval);
    }, [isHovering]);

    const firstRow = [...reviews.slice(0, 5), ...reviews.slice(0, 5)];
    const secondRow = [...reviews.slice(5, 10), ...reviews.slice(5, 10)];
    const allReviews = [...reviews, ...reviews];

    const renderStars = () => {
        return Array(5).fill(0).map((_, index) => (
            <Image
                key={index}
                src="/icons/star.svg"
                alt="star"
                width={30}
                height={30}
            />
        ));
    };

    const renderReviewCard = (review: Review, index: number, rowKey: string) => (
        <div
            key={`${rowKey}-${index}`}
            className="inline-block min-w-[350px] max-w-[350px] p-6 whitespace-normal"
        >
            <div className="flex items-center mb-4">
                <div className="flex">
                    {renderStars()}
                </div>
            </div>
            <p className="text-[16px] text-[#FFFFFF99] mb-4">{review.text}</p>
            <span className="text-[16px] font-[orbitron] text-[#FFFFFF99]">{review.name}</span>
        </div>
    );

    return (
        <section className="py-16 w-full overflow-hidden" id="reviews">
            <div className="container mx-auto">
                <h2 className="text-[64px] max-lg:text-[44px] max-sm:text-[36px] font-[600] text-center mb-12 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">REVIEWS</h2>

                <div
                    className="md:hidden w-full relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div
                        ref={allRowRef}
                        className="flex gap-6 overflow-x-hidden whitespace-nowrap"
                    >
                        {allReviews.map((review, index) => renderReviewCard(review, index, 'mobile'))}
                    </div>
                </div>

                <div
                    className="max-md:hidden w-full relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }}></div>

                    <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}></div>

                    <div
                        ref={rowOneRef}
                        className="flex gap-6 mb-8 overflow-x-hidden whitespace-nowrap"
                    >
                        {firstRow.map((review, index) => renderReviewCard(review, index, 'row1'))}
                    </div>

                    {secondRow.length > 0 && (
                        <div
                            ref={rowTwoRef}
                            className="flex gap-6 pl-[175px] overflow-x-hidden whitespace-nowrap"
                        >
                            {secondRow.map((review, index) => renderReviewCard(review, index, 'row2'))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
