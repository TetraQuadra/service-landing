import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import Script from "next/script";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "N&B Cleaning",
    "image": "https://nbcleaning.com/hero-image.png",
    "description": "Professional window cleaning, gutter cleaning, and fascia cleaning services. Experience crystal clear results with our reliable services.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "UK"
    },
    "telephone": "+07774974895",
    "email": "2024windowcleaning@gmail.com",
    "priceRange": "££",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
        "https://facebook.com/nbcleaning",
        "https://instagram.com/nbcleaning"
    ]
};

export const metadata: Metadata = {
    title: "Auto Repairs",
    description: "Fast, precise repairs done with care — so you can skip the stress and get back on the road",
    keywords: "auto repairs, auto repair, auto service, auto maintenance, auto parts, auto maintenance shop, auto repair shop, auto repair service, auto repair shop near me, auto repair shop in my area",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Script
                    id="structured-data-script"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className="antialiased w-full">
                <Header />
                {children}
                <Header />

                {/* Google Analytics */}
                {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XN0S2P1G4N" strategy="beforeInteractive" />
                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16909240887" strategy="beforeInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XN0S2P1G4N');
                    gtag('config', 'AW-16909240887');
                    `}
                </Script> */}
            </body>
        </html>
    );
}
