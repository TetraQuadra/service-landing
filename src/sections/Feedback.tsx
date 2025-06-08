"use client";

import { useState } from "react";

interface FormStatus {
    submitted: boolean;
    submitting: boolean;
    info: {
        error: boolean;
        msg: string | null;
    };
}

interface FormInputs {
    name: string;
    rating: number;
    message: string;
    date: string;
}

const Feedback = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState<FormInputs>({
        name: "",
        rating: 0,
        message: "",
        date: new Date().toISOString().split('T')[0]
    });

    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                name: "",
                rating: 0,
                message: "",
                date: new Date().toISOString().split('T')[0]
            });
        } else {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));

        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleRatingChange = (rating: number) => {
        setInputs((prev) => ({
            ...prev,
            rating: rating
        }));
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        const formData = new FormData();
        const updatedInputs = {
            ...inputs,
            date: new Date().toISOString().split('T')[0]
        };

        Object.entries(updatedInputs).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        fetch("https://formspree.io/f/xzzgdljo", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    handleServerResponse(true, "Thank you for your feedback!");
                } else {
                    response.json().then((json: { error?: string }) => {
                        handleServerResponse(false, json.error || "An error occurred. Please try again.");
                    });
                }
            })
            .catch(() => {
                handleServerResponse(false, "An error occurred. Please try again.");
            });
    };

    return (
        <section className="w-full py-16 ">
            <div className="mx-auto container px-2 max-lg:max-w-[600px]">
                <h2 className="text-[40px] font-[500] text-center mb-8 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">Leave a feedback</h2>

                {formStatus.submitted ? (
                    <div className="text-center p-6  max-w-[600px] mx-auto">
                        <h3 className="text-[24px] font-medium bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent mb-2">Thank you!</h3>
                        <p className="text-[16px]">Your feedback has been successfully sent.</p>
                    </div>
                ) : (
                    <form className="flex flex-col gap-6 px-4 max-w-[600px] mx-auto" onSubmit={handleOnSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[16px] font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputs.name}
                                onChange={handleOnChange}
                                className="border-[2px] border-[#ADADAD] p-3 focus:outline-none focus:border-white font-['Orbitron']"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] font-medium">Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleRatingChange(star)}
                                        className="focus:outline-none"
                                        aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                                    >
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 24 24"
                                            fill={star <= inputs.rating ? "#fff" : "none"}
                                            stroke={star <= inputs.rating ? "#fff" : "#ADADAD"}
                                            strokeWidth="2"
                                            className="hover:scale-110 transition-transform"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <input type="hidden" name="rating" value={inputs.rating} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[16px] font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={inputs.message}
                                onChange={handleOnChange}
                                rows={5}
                                className="border-[2px] border-[#ADADAD] p-3 focus:outline-none focus:border-white resize-none"
                                placeholder="Write your feedback..."
                                required
                            ></textarea>
                        </div>

                        <input type="hidden" name="date" value={inputs.date} />

                        <button
                            type="submit"
                            className="px-[50px] py-5 flex items-center justify-center gap-3 transition-all duration-300 border-2 font-[Orbitron] text-[20px] max-sm:px-[20px] max-sm:py-[14px] max-sm:text-[16px] border-white bg-transparent fill-white text-white hover:bg-white hover:text-black cursor-pointer"
                            disabled={formStatus.submitting}
                        >
                            {formStatus.submitting ? (
                                "Sending..."
                            ) : (
                                "Send feedback"
                            )}
                        </button>

                        {formStatus.info.error && (
                            <div className="text-red-500 text-center mt-2">
                                {formStatus.info.msg}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    )
}

export default Feedback;
