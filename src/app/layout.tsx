import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import Script from "next/script";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "YuriyFix",
    "image": "https://yuriyfix.uk/logo.png",
    "url": "https://yuriyfix.uk",
    "telephone": "+44-7918-450051",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 1 Bure Valley Close",
        "addressLocality": "Buxton",
        "addressRegion": "Norfolk",
        "postalCode": "NR10 5AF",
        "addressCountry": "GB"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.7557",
        "longitude": "1.3074"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.facebook.com/yuriyfix",
        "https://www.instagram.com/yuriyfix"
    ],
    "priceRange": "££",
    "areaServed": "Norwich",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Auto Repair Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Engine Diagnostics",
                    "description": "Comprehensive engine diagnostics using modern computer tools"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Engine Repair",
                    "description": "Complete engine repair and maintenance services"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "MOT Preparation",
                    "description": "Professional MOT preparation and testing services"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Suspension Repair",
                    "description": "Expert suspension repair and maintenance"
                }
            }
        ]
    }
};

export const metadata: Metadata = {
    title: 'YuriyFix - Professional Car Repair Services in Norwich',
    description: 'Expert car repair and maintenance services in Norwich. Specializing in engine diagnostics, repairs, MOT preparation, suspension work, and comprehensive vehicle maintenance. Professional service with modern equipment.',
    keywords: 'car repair Norwich, engine diagnostics, engine repair, MOT preparation, suspension repair, transmission repair, computer diagnostics, oil change, cooling system repair, vehicle maintenance Norwich',
    openGraph: {
        title: 'YuriyFix - Professional Car Repair Services in Norwich',
        description: 'Expert car repair and maintenance services in Norwich. Specializing in engine diagnostics, repairs, MOT preparation, suspension work, and comprehensive vehicle maintenance.',
        url: 'https://yuriyfix.uk',
        siteName: 'YuriyFix',
        locale: 'en_GB',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://yuriyfix.uk',
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
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className={inter.className}>
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
