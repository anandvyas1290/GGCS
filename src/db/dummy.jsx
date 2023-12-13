// import digiShape from "../assets/home/services/digiShape.webp";
// import seoShape from "../assets/home/services/seoShape.webp";
// import socialShape from "../assets/home/services/socialShape.webp";

import {
    smFB,
    smlinkedin,
    smInsta,
    smX,
    ContentCreation,
    CCM,
    Post,
} from "./assets";
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
    flyer,
    instagram,
    newsletter,
    thumbnail,
    website,
    facebook,
} from "./assets";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Organic } from "./assets";
import {
    onPageSeo,
    offPageSeo,
    keywordResearch,
    blog,
    collaboration,
    crisis,
    ecommerce,
    influencersMarketing,
    infographics,
    interpretation,
    locationAds,
    mobileAds,
    performance,
    performanceTrack,
    reporting,
    responsiveDesign,
    review,
    smsAds,
    UX,
    videoMaking,
} from "./assets";

export const navMenu = [
    { id: 1, label: "About", slug: "/about" },
    { id: 2, label: "Why GGCS", slug: "/why-ggcs" },
    { id: 3, label: "Services", slug: "/services" },
    { id: 4, label: "Training", slug: "/training" },
    // { id: 4, label: "Team", slug: "/team" },
    { id: 5, label: "Gallery", slug: "/gallery" },
];
export const servicesData = [
    {
        id: 1,
        heading: "Search Engine Optimization (SEO)",
        icon: seo,
        slug: "seo",
        list: [
            {
                subHeading: "On-Page Optimization",
                icon: onPageSeo,
                description:
                    "Elevate your online presence with meticulous On-Page Optimization, ensuring your web pages rank higher and attract organic traffic. This strategic approach by our experts not only boosts visibility but also establishes credibility, fostering trust among potential customers.",
            },
            {
                subHeading: "Off-Page Optimization",
                icon: offPageSeo,
                description:
                    "Through Off-Page Optimization, we build authoritative backlinks, enhancing your website's credibility with search engines and instilling confidence in your audience. The result? Improved search rankings and a reputation as an industry leader.",
            },
            {
                subHeading: "Keyword Research",
                icon: keywordResearch,
                description:
                    "Our Keyword Research ensures your content aligns seamlessly with user searches, driving targeted traffic. The benefit? A stronger online presence, increased brand recognition, and higher trust levels among your audience.",
            },
        ],
    },
    {
        id: 2,
        heading: "Social Media Marketing (SMM)",
        icon: smm,
        slug: "social-media-marketing",
        list: [
            {
                subHeading: "Social Media Strategy",
                icon: "",
                description:
                    "Craft a strategic Social Media Strategy with us to align every effort with your business objectives. This not only establishes a consistent online presence but also builds brand loyalty and customer trust.",
            },
            {
                subHeading: "Content Creation",
                icon: "",
                description:
                    "Engage your audience effectively with our compelling Content Creation. By telling your brand story visually, we not only spark conversations but also increase sharing, broadening your reach and solidifying your brand identity.",
            },
            {
                subHeading: "Social Advertising",
                icon: "",
                description:
                    "Leverage the power of Social Advertising to amplify your brand's reach. Our targeted paid campaigns not only boost brand awareness but also result in a higher likelihood of conversion, maximizing your return on investment.",
            },
        ],
    },
    {
        id: 3,
        heading: "Content Marketing",
        icon: contentWriting,
        slug: "content-marketing",
        list: [
            {
                subHeading: "Blogging",
                icon: blog,
                description:
                    "Establish your brand as an industry authority through our informative and captivating Blogging services. This not only attracts and educates your audience but also enhances your SEO efforts, driving organic traffic.",
            },
            {
                subHeading: "Infographics",
                icon: infographics,
                description:
                    "With visually appealing Infographics, your brand messages become easily shareable and digestible. This not only boosts engagement, and enhances visibility, but also strengthens your brand identity.",
            },
            {
                subHeading: "Video Content",
                icon: videoMaking,
                description:
                    "Our Video Content not only effectively communicates your brand message but also captivates your audience, fostering deeper connections and increasing the likelihood of conversions.",
            },
        ],
    },
    {
        id: 4,
        heading: "Email Marketing",
        icon: emailMarketing,
        slug: "email-marketing",
        list: [
            {
                subHeading: "Campaign Management",
                description:
                    "Implement strategic Campaign Management with us to keep your audience engaged and informed. This not only builds a loyal customer base but also increases the potential for repeat business.",
            },
            {
                subHeading: "Automation",
                description:
                    "Our Automation services deliver personalized content based on user behavior, saving time and enhancing the overall customer experience. The result? Improved customer loyalty and satisfaction.",
            },
            {
                subHeading: "Email Analytics",
                description:
                    "Analyze and optimize your campaigns with our Email Analytics. This not only ensures your messages resonate with your audience but also provides actionable insights for continuous improvement",
            },
        ],
    },
    {
        id: 5,
        heading: "Pay-Per-Click (PPC) Advertising",
        icon: ppc,
        slug: "ppc",
        list: [
            {
                subHeading: "Google Ads",
                description: `Maximize your brand's visibility with our strategic management of Google Ads. This not only
            drives targeted traffic but also ensures efficient budget utilization, maximizing your return on
            advertising investment.
            `,
            },
            {
                subHeading: "Social Media Ads",
                description: `Craft and monitor paid Social Media Ads with us, leveraging platforms like Facebook and
                Instagram to boost brand awareness. The result? Increased visibility, lead generation, and
                conversions.`,
            },
            {
                subHeading: "Display Advertising",
                description: `Enhance brand visibility with visually appealing Display Advertising on relevant websites. This
                not only drives traffic but also increases brand recognition and consideration among your target
                audience.
                `,
            },
        ],
    },
    {
        id: 6,
        heading: "Web Design and Development",
        icon: webDev,
        slug: "web-design-development",
        list: [
            {
                subHeading: "Responsive Design",
                icon: responsiveDesign,
                description: `Ensure a seamless user experience across devices with our commitment to Responsive Design. This not only reduces bounce rates but also enhances your brand's professionalism and accessibility.`,
            },
            {
                subHeading: "User Experience (UX) Optimization",
                icon: UX,
                description: `Optimize the overall user journey with our User Experience (UX) Optimization. This not only keeps visitors engaged but also increases the likelihood of conversions, contributing to positive brand perception.`,
            },
            {
                subHeading: "E-commerce Solutions",
                icon: ecommerce,
                description: `Develop and optimize e-commerce platforms with us, streamlining the online shopping experience. The result? Increased customer satisfaction and maximized conversion rates.`,
            },
        ],
    },
    {
        id: 7,
        heading: "Analytics and Data Analysis",
        icon: analytics,
        slug: "#",
        list: [
            {
                subHeading: "Performance Tracking",
                icon: performanceTrack,
                description: ``,
            },
            {
                subHeading: "Data Interpretation",
                icon: interpretation,
                description: ``,
            },
            {
                subHeading: "Reporting",
                icon: reporting,
                description: ``,
            },
        ],
    },
    {
        id: 8,
        heading: "Influencer Marketing",
        icon: influencerMarketing,
        slug: "#",
        list: [
            {
                subHeading: "Influencer Marketing",
                icon: influencersMarketing,
                description: ``,
            },
            {
                subHeading: "Collaboration Management",
                icon: collaboration,
                description: ``,
            },
            {
                subHeading: "Performance Measurement",
                icon: performanceTrack,
                description: ``,
            },
        ],
    },
    {
        id: 9,
        heading: "Online Reputation Management (ORM)",
        icon: onlineReputation,
        slug: "#",
        list: [
            {
                subHeading: "Performance Measurement",
                description: ``,
            },
            {
                subHeading: "Performance Measurement",
                description: ``,
            },
            {
                subHeading: "Performance Measurement",
                description: ``,
            },
            // "Brand Monitoring",
            // "Review Management",
            // "Crisis Response",
        ],
    },
    {
        id: 10,
        heading: "Mobile Marketing",
        icon: mobileMarketing,
        slug: "#",
        list: [
            {
                subHeading: "Mobile App Advertising",
                icon: mobileAds,
                description: ``,
            },
            {
                subHeading: "SMS Marketing",
                icon: smsAds,
                description: ``,
            },
            {
                subHeading: "Location-Based Marketing",
                icon: locationAds,
                description: ``,
            },
        ],
    },
    {
        id: 11,
        heading: "Affiliate Marketing:",
        icon: affiliateMarketing,
        slug: "#",
        list: [
            {
                subHeading: "Partner Recruitment",
                icon: "",
                description: ``,
            },
            {
                subHeading: "Commission Management",
                icon: "",
                description: ``,
            },
            {
                subHeading: "Performance Tracking",
                icon: performanceTrack,
                description: ``,
            },
        ],
    },
    {
        id: 12,
        heading: "Conversion Rate Optimization (CRO)",
        icon: cro,
        slug: "#",
        list: [
            {
                subHeading: "A/B Testing",
                description: ``,
            },
            {
                subHeading: "Landing Page Optimization",
                description: ``,
            },
            {
                subHeading: "Video Advertising",
                description: ``,
            },
        ],
    },
    {
        id: 13,
        heading: "Video Marketing",
        icon: videoMarketing,
        slug: "#",
        list: [
            {
                subHeading: "Video Production",
                description: ``,
            },
            {
                subHeading: "YouTube Optimization",
                description: ``,
            },
            {
                subHeading: "Video Advertising",
                description: ``,
            },
        ],
    },
    {
        id: 14,
        heading: "Local Search Marketing",
        icon: localSEO,
        slug: "#",
        list: [
            {
                subHeading: "Local SEO",
                icon: localSEO,
                description: ``,
            },
            {
                subHeading: "Google My Business Optimization",
                icon: "",
                description: ``,
            },
            {
                subHeading: "Location-Based Targeting",
                icon: "",
                description: ``,
            },
        ],
    },
    {
        id: 15,
        heading: "Chatbot Integration",
        icon: chatBot,
        slug: "#",
        list: [
            {
                subHeading: "Chatbot Development",
                description: ``,
            },
            {
                subHeading: "Customer Support Automation",
                description: ``,
            },
            {
                subHeading: "User Engagement",
                description: ``,
            },
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

//footer menu
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
        slug: "seo",
    },
    {
        label: "Social Media Marketing",
        slug: "social-media-marketing",
    },
    {
        label: "Content Marketing",
        slug: "content-marketing",
    },
    {
        label: "Inbound and Outbound Marketing",
        slug: "io-marketing",
    },
    {
        label: "Add-On Services",
        slug: "add-on-services",
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

export const galleryData = [
    { id: 1, platform: "Flyer", image: flyer },
    { id: 2, platform: "Instagram", image: instagram },
    { id: 3, platform: "Newsletter", image: newsletter },
    { id: 4, platform: "Thumbnail", image: thumbnail },
    { id: 5, platform: "Website", image: website },
    { id: 6, platform: "Facebook", image: facebook },
];

export const uposDetails = {
    title: "GGCS Go To Package For UPOS",
    subTitle: "Get Flat Commission Discount With Add-On Cashback",
    list: [
        {
            label: "Organic Traffic on Social Media Handles ",
            icon: Organic,
        },
        {
            label: "Creative Posts, Videos,PromotionVideos,Promotion ",
            icon: Post,
        },
        {
            label: "Content Creation Guide by GGCS",
            icon: CCM,
        },
        {
            label: "Cross-Channel Promotion ",
            icon: ContentCreation,
        },
    ],
    label: "Exclusive Discounted Price",
    price: "Rs.999/- + GST*",
};

export const addresses = [
    {
        id: 1,
        title: "Ahmedabad Office",
        address:
            "Global Garner Sales Services Limited 5th floor,Grand Emporio, Motera Stadium Road, Ahmedabad,Gujarat 380005",
    },
    {
        id: 2,
        title: "Bengaluru Office",
        address:
            "4th floor, SAKET CALLIPOLIS, Sarjapur - Marathahalli Rd, near Wipro, Rainbow Drive,Bengaluru, Karnataka 560035",
    },
];

export const privacyPolicy = {
    title: 'Privacy Policy',
    slug: "privacy-policy",
    desc: "Welcome to the Privacy Policy of Global Garner Consultancy Services (GGCS). This document articulates our commitment to safeguarding your privacy and outlines the procedures for collecting, utilizing, and securing your information. Please carefully review this policy to comprehend our practices.",
    list: [
        {
            id: 1,
            title: ' Information Collection',
            info: "We collect information to enhance our services, which may include:",
            data: [
                {
                    content: "Personal Information: Your name, contact details, job title, and affiliations are gathered through registrations, newsletter subscriptions, and service usage."
                }
                , {
                    content: "Financial Information: For transactions, we collect financial data (e.g., credit card information) securely, without retention on our servers."
                },
                {
                    content: "Technical Information: We automatically collect technical details (IP addresses, browser specifications, device information) to optimize website functionality."
                }
            ]
        },
        {
            id: 2,
            title: 'Purpose of Information Use:            ',
            info: "We use your information for:            ",
            data: [
                {
                    content: "Service Fulfillment: Personal information is used to respond to inquiries, provide customer support, and fulfill service requests."
                }
                , {
                    content: "Marketing and Promotions: With your explicit consent, we send marketing communications and promotional content about our products, services, and industry insights."
                },
                {
                    content: "Analytics and Enhancement: Non-personal information is analyzed to understand user behavior, preferences, and trends, allowing continuous refinement of our website and services.                    "
                }
            ]
        },
        {
            id: 3,
            title: 'Information Sharing and Disclosure: ',
            info: "We may share your information:",
            data: [
                {
                    content: "Third-Party Service Providers: Collaboration with providers enhances service delivery and functionality."
                }
                , {
                    content: "Legal Compliance: Information may be disclosed to comply with applicable laws, regulations, or legal procedures.                    "
                },
                {
                    content: "Business Transfers: In mergers, acquisitions, or asset sales, your information may be transferred to the acquiring entity.                    "
                }
            ]
        },
        {
            id: 4,
            title: 'Cookies and Tracking Technologies: ',
            info: "We use cookies and similar technologies: ",
            data: [
                {
                    content: "Cookies: These help gather insights into browsing behavior, preferences, and session data for a more personalized user experience.                    "
                }
                , {
                    content: "Opt-Out: You can manage cookie preferences through browser settings, though disabling cookies may impact certain website functionalities."
                }
            ]
        },
        {
            id: 5,
            title: 'Data Security:',
            info: "We implement security measures to protect your information:            ",
            data: [
                {
                    content: "Security Protocols: Industry-standard measures prevent unauthorized access, disclosure, alteration, and destruction. "
                },
                {
                    content: "Encryption: Sensitive data, including financial information, is encrypted for secure transmission and storage."
                }
            ]
        },
        {
            id: 6,
            title: 'Your Rights:',
            info: "You have rights regarding your personal information:",
            data: [
                {
                    content: "Access and Correction: Contact us to access and correct your personal information.                    "
                },
                {
                    content: "Opt-Out: Unsubscribe from marketing communications by following the instructions in our emails or contacting us directly."
                }
            ]
        },
        {
            id: 7,
            title: `Children's Privacy:            `,
            info: "",
            data: [
                {
                    content: "Our services are not intended for individuals under the age of 16. We do not knowingly collect or process personal information from minors without parental consent."
                }
            ]
        },
        {
            id: 8,
            title: 'Changes to the Privacy Policy:            ',
            info: "",
            data: [
                {
                    content: "We reserve the right to update this Privacy Policy periodically. Material changes will be communicated through our website.                    "
                }
            ]
        },
        {
            id: 9,
            title: 'Contact Information:',
            info: `For inquiries or concerns about our Privacy Policy, contact us at contact@ggcs.com.            `,
            data: [
                // {
                //     content: ""
                // }
                // , {
                //     content: ""
                // },
                // {
                //     content: ""
                // }
            ]
        }
    ]
}

export const disclaimer = {
    title: "Disclaimer",
    desc: `Welcome to the Global Garner Consultancy Services Digital Marketing website ("Website"). By accessing and using this Website, you agree to comply with and be bound by the following disclaimer. Please read the disclaimer carefully before using our services.`,
    list: [
        {
            id: 1,
            title: 'Accuracy of Information:            ',
            info: "Global Garner Consultancy Services strives to provide accurate and up-to-date information on this Website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. Users are advised to independently verify the information before relying on it.            ",
        },
        {
            id: 2,
            title: 'No Professional Advice:',
            info: "The content on this Website is for informational purposes only and should not be construed as professional advice. Global Garner Consultancy Services is not responsible for any decisions made based on the information provided on the Website. Users are encouraged to seek professional advice relevant to their specific circumstances.",
        },
        {
            id: 3,
            title: 'Third-Party Links:',
            info: " This GGCS website may contain links to third-party websites. Global Garner Consultancy Services has no control over the content, accuracy, or availability of these external sites and is not responsible for any damages or losses arising from the use of such links. The inclusion of any third-party link does not imply endorsement by Global Garner Consultancy Services.",
        },
        {
            id: 4,
            title: 'Limitation of Liability:            ',
            info: "GGCS, its affiliates, partners, employees, or agents will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website. This includes but is not limited to loss or damage to data, profits, or business interruption.",
        },
        {
            id: 5,
            title: 'Changes and Modifications:            ',
            info: "Global Garner Consultancy Services reserves the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice. We do not guarantee that the Website will be error-free or uninterrupted.",
        },
        {
            id: 6,
            title: 'Privacy and Security:',
            info: "While Global Garner Consultancy Services takes reasonable measures to protect user data, we cannot guarantee the security of information transmitted over the Internet. Users are encouraged to review our Privacy Policy for details on data collection, storage, and usage practices.            ",
        },
        {
            id: 7,
            title: 'Acceptance of Terms:            ',
            info: "By using this Website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. Global Garner Consultancy Services reserves the right to update or change these terms at any time without notice.            ",
        },
    ],
    descp1: "If you have any questions or concerns about this disclaimer, please contact us at contact@ggcs.com.",
    updated: "This Disclaimer was Last updated on December 10, 2023.    "
}

export const termsAndConditions = {
    title: "Terms And Conditions    ",
    desc: "These Terms and Conditions were Last updated on December 12, 2023.",
    list: [
        {
            id: 1,
            title: 'Acceptance of Terms',
            info: `By accessing or using the services provided by Global Garner Consultancy Services ("GGCS"), you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.            `,
        },
        {
            id: 2,
            title: 'Services',
            info: "GGCS offers digital marketing services, including but not limited to, social media management, search engine optimization, content creation, online advertising, and website development. The specifics of the services provided will be outlined in a separate agreement between GGCS and the client.            ",
        },
        {
            id: 3,
            title: 'Client Responsibilities',
            info: "Clients must provide accurate and timely information necessary for the delivery of services. GGCS is not responsible for any delays or deficiencies in service resulting from incomplete or inaccurate client-provided information.            ",
        },
        {
            id: 4,
            title: 'Payments and Fees',
            info: "Clients agree to pay GGCS the fees specified in the service agreement. Payment terms, including due dates and acceptable forms of payment, will be outlined in the agreement. Failure to make timely payments may result in the suspension or termination of services.            ",
        },
        {
            id: 5,
            title: 'Confidentiality',
            info: "Both GGCS and the client agree to keep confidential any proprietary or sensitive information disclosed during the course of the engagement. This includes but is not limited to business strategies, marketing plans, and financial information.",
        },
        {
            id: 6,
            title: 'Intellectual Property',
            info: "All intellectual property developed or provided by GGCS in the course of providing services, including but not limited to content, designs, and software, shall remain the property of GGCS unless otherwise agreed upon in writing.",
        },
        {
            id: 7,
            title: 'Termination',
            info: "Either party may terminate the service agreement with written notice if the other party breaches a material term of the agreement. GGCS reserves the right to terminate services immediately if the client engages in any illegal or unethical activities.",
        },
        {
            id: 8,
            title: 'Limitation of Liability',
            info: "GGCS shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the services provided. GGCS's total liability shall be limited to the amount paid by the client for the specific services in question.            ",
        },
        {
            id: 9,
            title: 'Governing Law',
            info: "These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
        },
        {
            id: 10,
            title: 'Changes to Terms and Conditions',
            info: "GGCS reserves the right to update or modify these terms and conditions at any time without prior notice. Clients are encouraged to review the terms regularly. Continued use of GGCS services after any such changes constitutes acceptance of the updated terms.            ",
        },
    ],
    note: "By using GGCS services, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, contact@ggcs.com.    "
}


export const GGCSPolicy = [
    {
        label: "Privacy Policy",
        slug: "privacy-policy"
    },
    {
        label: "Terms And Conditions",
        slug: "terms-conditions"
    },
    {
        label: "Disclaimer",
        slug: "disclaimer"
    }
]




// export const GGCSPolicy = [{
//     title: 'Privacy Policy',
//     slug: "privacy-policy",
//     desc: "Welcome to the Privacy Policy of Global Garner Consultancy Services (GGCS). This document articulates our commitment to safeguarding your privacy and outlines the procedures for collecting, utilizing, and securing your information. Please carefully review this policy to comprehend our practices.",
//     list: [
//         {
//             id: 1,
//             title: ' Information Collection',
//             info: "We collect information to enhance our services, which may include:",
//             data: [
//                 {
//                     content: "Personal Information: Your name, contact details, job title, and affiliations are gathered through registrations, newsletter subscriptions, and service usage."
//                 }
//                 , {
//                     content: "Financial Information: For transactions, we collect financial data (e.g., credit card information) securely, without retention on our servers."
//                 },
//                 {
//                     content: "Technical Information: We automatically collect technical details (IP addresses, browser specifications, device information) to optimize website functionality."
//                 }
//             ]
//         },
//         {
//             id: 2,
//             title: 'Purpose of Information Use:            ',
//             info: "We use your information for:            ",
//             data: [
//                 {
//                     content: "Service Fulfillment: Personal information is used to respond to inquiries, provide customer support, and fulfill service requests."
//                 }
//                 , {
//                     content: "Marketing and Promotions: With your explicit consent, we send marketing communications and promotional content about our products, services, and industry insights."
//                 },
//                 {
//                     content: "Analytics and Enhancement: Non-personal information is analyzed to understand user behavior, preferences, and trends, allowing continuous refinement of our website and services.                    "
//                 }
//             ]
//         },
//         {
//             id: 3,
//             title: 'Information Sharing and Disclosure: ',
//             info: "We may share your information:",
//             data: [
//                 {
//                     content: "Third-Party Service Providers: Collaboration with providers enhances service delivery and functionality."
//                 }
//                 , {
//                     content: "Legal Compliance: Information may be disclosed to comply with applicable laws, regulations, or legal procedures.                    "
//                 },
//                 {
//                     content: "Business Transfers: In mergers, acquisitions, or asset sales, your information may be transferred to the acquiring entity.                    "
//                 }
//             ]
//         },
//         {
//             id: 4,
//             title: 'Cookies and Tracking Technologies: ',
//             info: "We use cookies and similar technologies: ",
//             data: [
//                 {
//                     content: "Cookies: These help gather insights into browsing behavior, preferences, and session data for a more personalized user experience.                    "
//                 }
//                 , {
//                     content: "Opt-Out: You can manage cookie preferences through browser settings, though disabling cookies may impact certain website functionalities."
//                 }
//             ]
//         },
//         {
//             id: 5,
//             title: 'Data Security:',
//             info: "We implement security measures to protect your information:            ",
//             data: [
//                 {
//                     content: "Security Protocols: Industry-standard measures prevent unauthorized access, disclosure, alteration, and destruction. "
//                 },
//                 {
//                     content: "Encryption: Sensitive data, including financial information, is encrypted for secure transmission and storage."
//                 }
//             ]
//         },
//         {
//             id: 6,
//             title: 'Your Rights:',
//             info: "You have rights regarding your personal information:",
//             data: [
//                 {
//                     content: "Access and Correction: Contact us to access and correct your personal information.                    "
//                 },
//                 {
//                     content: "Opt-Out: Unsubscribe from marketing communications by following the instructions in our emails or contacting us directly."
//                 }
//             ]
//         },
//         {
//             id: 7,
//             title: `Children's Privacy:            `,
//             info: "",
//             data: [
//                 {
//                     content: "Our services are not intended for individuals under the age of 16. We do not knowingly collect or process personal information from minors without parental consent."
//                 }
//             ]
//         },
//         {
//             id: 8,
//             title: 'Changes to the Privacy Policy:            ',
//             info: "",
//             data: [
//                 {
//                     content: "We reserve the right to update this Privacy Policy periodically. Material changes will be communicated through our website.                    "
//                 }
//             ]
//         },
//         {
//             id: 9,
//             title: 'Contact Information:',
//             info: "For inquiries or concerns about our Privacy Policy, contact us at contact@ggcs.com.            ",
//             data: [
//                 {
//                     content: ""
//                 }
//                 , {
//                     content: ""
//                 },
//                 {
//                     content: ""
//                 }
//             ]
//         }
//     ]
// }, {
//     title: "Disclaimer",
//     slug: "disclaimer",
//     desc: `Welcome to the Global Garner Consultancy Services Digital Marketing website ("Website"). By accessing and using this Website, you agree to comply with and be bound by the following disclaimer. Please read the disclaimer carefully before using our services.`,
//     list: [
//         {
//             id: 1,
//             title: 'Accuracy of Information:            ',
//             info: "Global Garner Consultancy Services strives to provide accurate and up-to-date information on this Website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. Users are advised to independently verify the information before relying on it.            ",
//         },
//         {
//             id: 2,
//             title: 'No Professional Advice:',
//             info: "The content on this Website is for informational purposes only and should not be construed as professional advice. Global Garner Consultancy Services is not responsible for any decisions made based on the information provided on the Website. Users are encouraged to seek professional advice relevant to their specific circumstances.",
//         },
//         {
//             id: 3,
//             title: 'Third-Party Links',
//             info: " This GGCS website may contain links to third-party websites. Global Garner Consultancy Services has no control over the content, accuracy, or availability of these external sites and is not responsible for any damages or losses arising from the use of such links. The inclusion of any third-party link does not imply endorsement by Global Garner Consultancy Services.",
//         },
//         {
//             id: 4,
//             title: 'Limitation of Liability:            ',
//             info: "GGCS, its affiliates, partners, employees, or agents will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website. This includes but is not limited to loss or damage to data, profits, or business interruption.",
//         },
//         {
//             id: 5,
//             title: 'Changes and Modifications:            ',
//             info: "Global Garner Consultancy Services reserves the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice. We do not guarantee that the Website will be error-free or uninterrupted.",
//         },
//         {
//             id: 6,
//             title: 'Privacy and Security:',
//             info: "While Global Garner Consultancy Services takes reasonable measures to protect user data, we cannot guarantee the security of information transmitted over the Internet. Users are encouraged to review our Privacy Policy for details on data collection, storage, and usage practices.            ",
//         },
//         {
//             id: 7,
//             title: 'Acceptance of Terms:            ',
//             info: "By using this Website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. Global Garner Consultancy Services reserves the right to update or change these terms at any time without notice.            ",
//         },
//     ],
//     descp1: "If you have any questions or concerns about this disclaimer, please contact us at contact@ggcs.com.",
//     updated: "This Disclaimer was Last updated on December 10, 2023.    "
// }, {
//     title: "Terms And Conditions",
//     desc: "These Terms and Conditions were Last updated on December 12, 2023.",
//     list: [
//         {
//             id: 1,
//             title: 'Acceptance of Terms',
//             info: `By accessing or using the services provided by Global Garner Consultancy Services ("GGCS"), you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.            `,
//         },
//         {
//             id: 2,
//             title: 'Services',
//             info: "GGCS offers digital marketing services, including but not limited to, social media management, search engine optimization, content creation, online advertising, and website development. The specifics of the services provided will be outlined in a separate agreement between GGCS and the client.            ",
//         },
//         {
//             id: 3,
//             title: 'Client Responsibilities',
//             info: "Clients must provide accurate and timely information necessary for the delivery of services. GGCS is not responsible for any delays or deficiencies in service resulting from incomplete or inaccurate client-provided information.            ",
//         },
//         {
//             id: 4,
//             title: 'Payments and Fees',
//             info: "Clients agree to pay GGCS the fees specified in the service agreement. Payment terms, including due dates and acceptable forms of payment, will be outlined in the agreement. Failure to make timely payments may result in the suspension or termination of services.            ",
//         },
//         {
//             id: 5,
//             title: 'Confidentiality',
//             info: "Both GGCS and the client agree to keep confidential any proprietary or sensitive information disclosed during the course of the engagement. This includes but is not limited to business strategies, marketing plans, and financial information.",
//         },
//         {
//             id: 6,
//             title: 'Intellectual Property',
//             info: "All intellectual property developed or provided by GGCS in the course of providing services, including but not limited to content, designs, and software, shall remain the property of GGCS unless otherwise agreed upon in writing.",
//         },
//         {
//             id: 7,
//             title: 'Termination',
//             info: "Either party may terminate the service agreement with written notice if the other party breaches a material term of the agreement. GGCS reserves the right to terminate services immediately if the client engages in any illegal or unethical activities.",
//         },
//         {
//             id: 8,
//             title: 'Limitation of Liability',
//             info: "GGCS shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the services provided. GGCS's total liability shall be limited to the amount paid by the client for the specific services in question.            ",
//         },
//         {
//             id: 9,
//             title: 'Governing Law',
//             info: "These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
//         },
//         {
//             id: 10,
//             title: 'Changes to Terms and Conditions',
//             info: "GGCS reserves the right to update or modify these terms and conditions at any time without prior notice. Clients are encouraged to review the terms regularly. Continued use of GGCS services after any such changes constitutes acceptance of the updated terms.            ",
//         },
//     ],
//     note: "By using GGCS services, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, contact@ggcs.com.    "
// }]