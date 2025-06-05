import Link from 'next/link';
import React from 'react';

const CONTACTS = {
    address: 'Unit 1 Bure Valley Close Lamas Norwich NR10 5AF',
    whatsapp: '+44 7918 450051',
    phone: '+44 7918 450051',
    facebook: 'https://facebook.com/',
};

const ContactsSection: React.FC = () => {
    return (
        <section className="w-full min-h-[500px] py-12 px-2 bg-black flex flex-col items-center justify-center" id="contacts">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
                <div className="flex-1 flex flex-col justify-center text-white font-['Orbitron'] max-w-xl max-md:items-center max-md:text-center">
                    <h2 className="text-[48px] font-bold mb-8 tracking-wider bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">CONTACTS</h2>

                    <div className="mb-8">
                        <div className="text-[28px] font-semibold mb-2 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">Adress:</div>
                        <div className="text-[18px] font-light">{CONTACTS.address}</div>
                    </div>

                    <div className="mb-8">
                        <div className="text-[28px] font-semibold mb-2 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">WhatsApp</div>
                        <div className="text-[20px] font-light">{CONTACTS.whatsapp}</div>
                    </div>

                    <div className="mb-8">
                        <div className="text-[28px] font-semibold mb-2 bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">Phone call</div>
                        <Link href={`tel:${CONTACTS.phone}`} className="text-[20px] font-light">{CONTACTS.phone}</Link>
                    </div>

                    <a
                        href={CONTACTS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-[28px] font-semibold text-[#7EB6FF] underline hover:text-blue-400 transition-colors"
                    >
                        Facebook
                    </a>
                </div>

                <div className="flex-1 flex items-center justify-center min-h-[350px]">
                    <div className="w-full h-[400px] max-w-[500px] rounded-lg overflow-hidden border-2 border-white shadow-lg">
                        <iframe
                            title="Bure Auto Centre Map"
                            src="https://www.google.com/maps?q=Unit+1+Bure+Valley+Close+Lamas+Norwich+NR10+5AF&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection; 