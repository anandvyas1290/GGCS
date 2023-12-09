// import digiShape from "../assets/home/services/digiShape.webp";
// import seoShape from "../assets/home/services/seoShape.webp";
// import socialShape from "../assets/home/services/socialShape.webp";

import { smFB, smlinkedin, smInsta, smX } from "./assets";
import { list1, list2, list3 } from "./assets";
import { business1, business2, business3 } from "./assets";
import {
    seo,
    smm,
    ppc,
    webDev,
    analytics,
    onlineReputation,
    chatBot,
    contentWriting,
    cro,
    emailMarketing,
    influencerMarketing,
    localSEO,
    affiliateMarketing,
    videoMarketing,
    mobileMarketing,
} from "./assets";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const servicesData = [
    {
        id: 1,
        heading: "Search Engine Optimization (SEO)",
        icon: seo,
        list: [
            "On-Page Optimization",
            "Off-Page Optimization",
            "Keyword Research",
        ],
    },
    {
        id: 2,
        heading: "Social Media Marketing (SMM)",
        icon: smm,
        list: [
            "Social Media Strategy",
            "Content Creation",
            "Social Advertising",
        ],
    },
    {
        id: 3,
        heading: "Content Marketing",
        icon: contentWriting,
        list: ["Blogging", "Infographics", "Video Content"],
    },
    {
        id: 4,
        heading: "Email Marketing",
        icon: emailMarketing,
        list: ["Campaign Management", "Automation", "Email Analytics"],
    },
    {
        id: 5,
        heading: "Pay-Per-Click (PPC) Advertising",
        icon: ppc,
        list: ["Google Ads", "Social Media Ads", "Display Advertising"],
    },
    {
        id: 6,
        heading: "Web Design and Development",
        icon: webDev,
        list: [
            "Responsive Design",
            "User Experience (UX) Optimization",
            "E-commerce Solutions",
        ],
    },
    {
        id: 7,
        heading: "Analytics and Data Analysis",
        icon: analytics,
        list: ["Performance Tracking", "Data Interpretation", "Reporting"],
    },
    {
        id: 8,
        heading: "Influencer Marketing",
        icon: influencerMarketing,
        list: [
            "Influencer Marketing",
            "Collaboration Management",
            "Performance Measurement",
        ],
    },
    {
        id: 9,
        heading: "Online Reputation Management (ORM)",
        icon: onlineReputation,
        list: ["Brand Monitoring", "Review Management", "Crisis Response"],
    },
    {
        id: 10,
        heading: "Mobile Marketing",
        icon: mobileMarketing,
        list: [
            "Mobile App Advertising",
            "SMS Marketing",
            "Location-Based Marketing",
        ],
    },
    {
        id: 11,
        heading: "Affiliate Marketing:",
        icon: affiliateMarketing,
        list: [
            "Partner Recruitment",
            "Commission Management",
            "Performance Tracking",
        ],
    },
    {
        id: 12,
        heading: "Conversion Rate Optimization (CRO)",
        icon: cro,
        list: ["A/B Testing", "Landing Page Optimization", "Video Advertising"],
    },
    {
        id: 13,
        heading: "Video Marketing",
        icon: videoMarketing,
        list: ["Video Production", "YouTube Optimization", "Video Advertising"],
    },
    {
        id: 14,
        heading: "Local Search Marketing",
        icon: localSEO,
        list: [
            "Local SEO",
            "Google My Business Optimization",
            "Location-Based Targeting",
        ],
    },
    {
        id: 15,
        heading: "Chatbot Integration",
        icon: chatBot,
        list: [
            "Chatbot Development",
            "Customer Support Automation",
            "User Engagement",
        ],
    },
];

export const serviceSocial = [
    {
        id: 1,
        icon: faFacebook,
        iconColor: "#1877F2",
        label: "Follow us on Facebook for Small Business Updates",
        class: "fb-hover",
        link: "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/",
    },
    {
        id: 2,
        icon: faInstagram,
        iconColor: "#FE005F",
        label: "Follow us on Instagram for Small Business Inspiration",
        class: "instagram-hover",
        link: "https://www.instagram.com/ggconsultancyservice/",
    },
    {
        id: 3,
        icon: faLinkedin,
        iconColor: "#0077B5",
        label: " Follow us on LinkedIn for Small Business Updates",
        class: "linkedin-hover",
        link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/",
    },
    // {
    //     id: 3,
    //     icon: faPinterest,
    //     iconColor: "#FE005F",
    //     label: " Get our Newsletter for Small Business Tips & News",
    //     class: "pinterest-hover",
    //     link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/"
    // },
    {
        id: 4,
        icon: faXTwitter,
        iconColor: "#000000",
        label: "Follow us on X(Twitter) for Small Business Updates",
        class: "twitter-hover",
        link: "https://twitter.com/ggconsultancy",
    },
];

//pricing data
export const Price = [
    {
        title: "Silver",
        price: "Rs. 45,000",
        desc: "Social Media Handles (Plan, Create, Manage)",
        description: [
            {
                label: "20 Creatives per month",
            },
            {
                label: "2 Dedicated Videos",
            },
            {
                label: "4 Generic Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "Reach 50,000",
            },
            {
                label: "1 Motion Graphics",
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)",
            },
            {
                label: "Data Behavioural Report",
            },
            {
                label: "Monthly status Meetings",
            },
        ],
    },
    {
        title: "Gold",
        price: "Rs. 71,000",
        desc: "Social Media Handles (Plan, Create, Manage)",
        description: [
            {
                label: "30 Creatives per month",
            },
            {
                label: "4 Dedicated Videos",
            },
            {
                label: "6 Generic Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "Reach 1,00,000",
            },
            {
                label: "2 Motion Graphics",
            },
            {
                label: "1 Promotional Ad",
            },
            { label: "1 App Store Optimization Services" },
            {
                label: "1 Flipkart and Amazon Promotions",
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)",
            },
            {
                label: "Data Behavioural Report",
            },
            {
                label: "Monthly status Meetings",
            },
        ],
    },
    {
        title: "Platinum",
        price: "Rs. 1,05,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "40 Creatives per month",
            },
            {
                label: "6 Dedicated Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "8 Generic Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "Reach 2,00,000",
            },
            {
                label: "3 Motion Graphics",
            },
            {
                label: "2 Promotional Ad",
            },
            { label: "2 App Store Optimization Services" },
            {
                label: "2 Flipkart and Amazon Promotions",
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)",
            },
            {
                label: "Data Behavioural Report",
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings ",
            },
        ],
    },
    {
        title: "Platinum Premium",
        price: "Rs. 1,16,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "50 Creatives per month",
            },
            {
                label: "8 Dedicated Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "10 Generic Videos",
                time: "(30-60 Sec)",
            },
            {
                label: "Reach 3,00,000",
            },
            {
                label: "4 Motion Graphics",
            },
            {
                label: "3 Promotional Ad",
            },
            { label: "3 App Store Optimization Services" },
            {
                label: "3Flipkart and Amazon Promotions",
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)",
            },
            {
                label: "1 Data Behavioural Report",
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings ",
            },
        ],
    },
];

// Why ggcs desc
export const whyGGCSData = {
    title: "Why GGCS is Your Ultimate Choice",
    desc: [
        {
            label: "Data-Driven Precision: Informed decisions are the cornerstone of our strategy. Our methodologies are grounded in comprehensive data analysis, ensuring that every move we make contributes significantly to your online triumph.",
            bg: "bg-[#4c49ea]",
        },
        {
            label: "Tailored Strategies: We recognize that each business is distinct. That's why we craft customized strategies that align with your unique requirements, never settling for one-size-fits-all solutions.",
            bg: "bg-[#3ecd5e]",
        },
        {
            label: "Transparent Partnership: Open and honest communication defines our approach. Expect regular updates and detailed reports on your campaign's progress, fostering a transparent and trustworthy partnership.",
            bg: "bg-[#e44002]",
        },
        {
            label: "Comprehensive Services: From SEO and content marketing to social media management and paid advertising, GGCS offers a comprehensive array of services to cover all aspects of your digital footprint.",
            bg: "bg-[#952aff]",
        },
        {
            label: "Comprehensive Services: From SEO and content marketing to social media management and paid advertising, GGCS offers a comprehensive array of services to cover all aspects of your digital footprint.",
            bg: "bg-[#cd3e94]",
        },
    ],
};

// social media link
export const socialMedias = [
    {
        icon: smFB,
        name: "facebook",
        link: "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/",
    },
    {
        icon: smX,
        name: "twitter",
        link: "https://twitter.com/ggconsultancy",
    },
    {
        icon: smlinkedin,
        name: "linkedin",
        link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/",
    },
    {
        icon: smInsta,
        name: "instagram",
        link: "https://www.instagram.com/ggconsultancyservice/",
    },
];

//footer menu service
export const menuService = [
    {
        label: "Home",
        link: "#",
    },
    {
        label: "About Us",
        link: "about",
    },
    {
        label: "Services",
        link: "services",
    },
    {
        label: "Why GGCS",
        link: "why-ggcs",
    },
    {
        label: "Contact Us",
        link: "contact",
    },
];
// footer service
export const services = [
    {
        label: "SEO (Search Engine Optimization)",
    },
    {
        label: "Social Media Marketing",
    },
    {
        label: "Search Engine Marketing",
    },
    {
        label: "Inbound and Outbound Marketing",
    },
    {
        label: "Add-On Services",
    },
];

//pricing
export const pricingServices = [
    {
        id: 1,
        label: "Digital Marketing",
        value: "digital_marketing",
        disabled: true,
    },
    { id: 2, label: "Social Media", value: "social_media", disabled: false },
    { id: 3, label: "IT Services", value: "it_services", disabled: true },
];

//service page
export const processData = [
    {
        id: 1,
        icon: list1,
        label: "Precision Forged by Data",
        desc: "Our strategy thrives on informed decisions. We base our methodologies on comprehensive data analysis, ensuring each step we take propels your online conquest.",
    },
    {
        id: 2,
        icon: list2,
        label: "Tailored Triumph",
        desc: " We recognize the distinct DNA of each business. Hence, we craft personalized strategies that align with your unique prerequisites, avoiding generic solutions.        ",
    },
    {
        id: 3,
        icon: list3,
        label: "Transparency Forged in Trust",
        desc: "Open communication is our cornerstone. Expect regular updates and detailed reports on your campaign's progress, cultivating a transparent and trustworthy partnership.",
    },
    {
        id: 4,
        icon: list1,
        label: "Holistic Services",
        desc: " From harnessing SEO prowess and mastering content alchemy to conducting social media symphonies and weaving paid advertising wizardry, GGCS unfurls a holistic digital repertoire.",
    },
    {
        id: 5,
        icon: list2,
        label: "Endorsed Excellence",
        desc: "Our achievements speak volumes. GGCS has empowered numerous clients, catalyzing substantial advancements in online prominence, engagement, and conversions.",
    },
];

export const businessData = [
    {
        heading: "Growing your business",
        desc: "With GGCS, you get everything you need for a fast website",
        image: business1,
    },
    {
        heading: "Speed Optimization",
        desc: "With GGCS, you get everything you need for a fast website",
        image: business2,
    },
    {
        heading: "Testing Capabilities",
        desc: "With GGCS, you get everything you need for a fast website",
        image: business3,
    },
];
