"use client";

import { useState } from "react";
import CustomSelect from '../components/CustomSelect';

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
    phone: string;
    vehicle: string;
    service: string;
    message: string;
}

interface FormErrors {
    email: string | null;
    phone: string | null;
}

const ContactUs = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState<FormInputs>({
        name: "",
        phone: "",
        vehicle: "",
        service: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({
        email: null,
        phone: null
    });

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^[0-9\+\(\)\s\-]+$/;
        return phoneRegex.test(phone);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const validatePhoneUK = (phone: string): boolean => {
        // const phoneRegex = /^(?:\+44\s?|0)(?:\d\s?){10}$/;
        // return phoneRegex.test(phone);
        // TODO: Remove this
        return true;
    };

    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                name: "",
                phone: "",
                vehicle: "",
                service: "",
                message: ""
            });
        } else {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            if (value !== '' && !validatePhone(value)) {
                return;
            }
        }

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === 'email' || name === 'phone') {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }

        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleCustomSelectChange = (value: string) => {
        setInputs((prev) => ({
            ...prev,
            service: value
        }));
        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // TODO: Remove this
        return handleServerResponse(true, "Thank you for your request!");


        e.preventDefault();

        let hasErrors = false;
        const newErrors: FormErrors = { email: null, phone: null };

        if (inputs.phone.trim() === '') {
            newErrors.phone = "Please enter a valid phone number";
            hasErrors = true;
        }

        if (!validatePhoneUK(inputs.phone)) {
            newErrors.phone = "Please enter a valid UK phone number";
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        setFormStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        const formData = new FormData();
        Object.entries(inputs).forEach(([key, value]) => {
            formData.append(key, value);
        });

        fetch("https://formspree.io/f/", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    handleServerResponse(true, "Thank you for your request!");
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
        <section className="py-16 px-2 w-full" id="contact">

            <div className="container mx-auto flex gap-16">
                <div className="max-w-[600px] w-full mx-auto">
                    <h2 className="text-[40px] font-[500] text-center mb-8 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">BOOK NOW</h2>
                    {formStatus.submitted ? (
                        <div className="text-center p-6">
                            <h3 className="text-[24px] font-medium bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent mb-2">Thank you!</h3>
                            <p className="text-[16px]">Your request has been sent successfully. We will contact you soon.</p>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-6 px-4" onSubmit={handleOnSubmit}>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleOnChange}
                                    className="border-[2px] border-[#ADADAD] p-3 focus:outline-none focus:border-white  font-['Orbitron']"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={inputs.phone}
                                    onChange={handleOnChange}
                                    className={`border-[2px] ${errors.phone ? 'border-red-500' : 'border-[#ADADAD]'} p-3 focus:outline-none focus:border-white  font-['Orbitron']`}
                                    placeholder="Phone number"
                                    required
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    id="vehicle"
                                    name="vehicle"
                                    value={inputs.vehicle}
                                    onChange={handleOnChange}
                                    className="border-[2px] border-[#ADADAD] p-3 focus:outline-none focus:border-white  font-['Orbitron']"
                                    placeholder="Your vehicle"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <CustomSelect
                                    value={inputs.service}
                                    onChange={handleCustomSelectChange}
                                    options={[
                                        { value: 'Engine repair', label: 'Engine repair' },
                                        { value: 'Prepare to MOT', label: 'Prepare to MOT' },
                                        { value: 'Suspension repair', label: 'Suspension repair' },
                                        { value: 'Regular service', label: 'Regular service' },
                                        { value: 'Other', label: 'Other' },
                                    ]}
                                    placeholder="Choose a service"
                                    name="service"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={inputs.message}
                                    onChange={handleOnChange}
                                    rows={5}
                                    className="border-[2px] border-[#ADADAD] p-3 focus:outline-none focus:border-white resize-none"
                                    placeholder="Write a comment"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-[50px] py-5 flex items-center justify-center gap-3 transition-all duration-300 border-2 font-[Orbitron] text-[20px] max-sm:px-[20px] max-sm:py-[14px] max-sm:text-[16px] border-white bg-transparent fill-white text-white hover:bg-white hover:text-black cursor-pointer"
                                disabled={formStatus.submitting}
                            >
                                {formStatus.submitting ? "Sending..." : "BOOK NOW"}
                            </button>

                            {formStatus.info.error && (
                                <div className="text-red-500 text-center mt-2">
                                    {formStatus.info.msg}
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
