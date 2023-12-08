import digiShape from "../assets/home/services/digiShape.webp";
import seoShape from "../assets/home/services/seoShape.webp";
import socialShape from "../assets/home/services/socialShape.webp";
import digiMarketing from "../assets/home/services/digiMarketing.svg";
import seo from "../assets/home/services/seo.svg";
import socialMarketing from "../assets/home/services/socialMarketing.svg";
import { smFB, smlinkedin, smInsta, smX } from "./assets";
import { list1, list2, list3 } from "./assets";
import { business1, business2, business3 } from "./assets";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const servicesData = [
    {
        id: 0,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Search Engine Optimization",
        list: ["On-Page Optimization", "Off-Page Optimization", "Keyword Research"],
        desc: "Unlock Your Brand's Full Potential        ",
        desc2: "Imagine your brand taking center stage in online searches. Our SEO expertise ensures exactly that. Through meticulous optimization, we pave the path for your brand to ascend search engine rankings, ushering in organic, high-quality traffic.        ",
    },
    {
        id: 1,
        shape: seoShape,
        icon: seo,
        heading: "Content Strategy and Creation",
        list: ["Blogging", "Infographics", "Video Content"],
        desc: "Weaving Your Brand's Story        ",
        desc2: "Captivating stories forge emotional bonds. Our content wizards craft narratives that deeply resonate with your audience. From captivating blog posts to immersive videos and shareable graphics, we ensure your brand's voice resonates across platforms.",
    },
    {
        id: 2,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Social Media Management",
        list: ["Social Media Strategy", "Content Creation", "Social Advertising"],
        desc: "Where Conversations Flourish ",
        desc2: "Social media is more than a platform; it's a bustling community. Our social media strategists orchestrate meaningful conversations. With tailored content and timely interactions, we empower you to build a devoted community that engages, advocates, and converts.",
    },
    {
        id: 3,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Pay-Per-Click (PPC) Advertising",
        list: ["Google Ads", "Social Media Ads", "Display Advertising"],
        desc: "Propel Your Brand Instantly ",
        desc2: "When urgency is paramount, our PPC campaigns deliver. Envision your brand appearing where potential customers are looking. Our experts optimize campaigns for maximum impact, driving targeted traffic and measurable ROI. ",
    },
    {
        id: 4,
        shape: seoShape,
        icon: seo,
        heading: "Influencer Marketing",
        list: ["Influencer Marketing", "Collaboration Management", "Performance Measurement"],
        desc: " Elevate Your Brand with Trusted Voices        ",
        desc2: "Influence is a currency of credibility. Collaborating with influencers mirroring your brand values can propel your reach. We facilitate meaningful partnerships that harness trust and authenticity.        ",
    },
    {
        id: 5,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Email Marketing Campaigns",
        list: ["Campaign Management", "Automation", "Email Analytics"],
        desc: " Nurturing Relationships, Driving Conversions        ",
        desc2: "The inbox is a realm of exclusivity. Our personalized email campaigns nurture leads, enhance relationships, and drive conversions through strategic messaging and invaluable content.",
    },
    {
        id: 6,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Website Design and Development",
        list: ["Responsive Design", "Use Experience (UX) Optimization", "E-commerce Solutions"],
        desc: "Your Digital Threshold        ",
        desc2: "Your website is your digital sanctuary – inviting and seamless. Our designers and developers craft immersive online experiences that captivate visitors and guide them towards meaningful action.        ",
    },
    // {
    //     id: 7,
    //     shape: seoShape,
    //     icon: seo,
    //     heading: "E-commerce Solutions",
    //     list: ["Performance"],
    //     desc: "Elevate Your Online Storefront",
    //     desc2: "In the realm of e-commerce, every interaction holds value. Our e-commerce solutions optimize user journeys, amplify conversions, and ensure a shopping experience that fosters customer loyalty.        ",
    // },
    {
        id: 8,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Analytics and Performance Tracking",
        list: ["Performance Tracking", "Data Interpretation", "Reporting"],
        desc: "Data-Driven Insights for Growth        ",
        desc2: "Data fuels your digital journey. Our comprehensive analytics and performance tracking yield actionable insights, enabling you to refine strategies for optimal growth.",
    },
    // {
    //     id: 9,
    //     shape: digiShape,
    //     icon: digiMarketing,
    //     heading: "Reputation Management",
    //     desc: "Safeguarding Your Brand's Integrity",
    //     desc2: "Your brand's reputation is your most prized asset. Our proactive reputation management ensures your online image remains untarnished, nurturing trust and loyalty.        ",
    // },
    {
        id: 10,
        shape: seoShape,
        icon: seo,
        heading: " Conversion Rate Optimization (CRO)",
        list: ["A/B Testing", "Landing Page Optimization", "Video Advertising"],
        desc: "Transforming Clicks into Conversions",
        desc2: "Beyond clicks, your brand deserves conversions. Our CRO strategies refine user experiences, ensuring every interaction contributes to tangible outcomes. ",
    },
    // {
    //     id: 11,
    //     shape: socialShape,
    //     icon: socialMarketing,
    //     heading: "Digital Strategy Consultation",
    //     desc: "Your Blueprint to Triumph",
    //     desc2: "Embark on a strategic voyage tailored to your brand's ambitions. Our consultants analyze your goals, industry landscape, and target audience to create data-driven strategies illuminating your path to victory.        ",
    // },
    {
        id: 12,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Video Marketing ",
        list: ["Video Production", "YouTube Optimization", "Video Advertising"],
        desc: "Captivating Your Audience        ",
        desc2: "In the visual era, the video holds immense power. Our video marketing crafts captivating stories that resonate with your audience, building deeper connections and engagement.",
    },
    // {
    //     id: 13,
    //     shape: seoShape,
    //     icon: seo,
    //     heading: " Mobile App Development",
    //     list: ["Mobile App Advertising", "SMS Marketing", "Location-Based Marketing"],
    //     desc: "Your Brand, At Their Fingertips        ",
    //     desc2: "Embrace the mobile revolution with bespoke app experiences. Our developers create functional and engaging apps, keeping your brand accessible and interactive.",
    // },
    {
        id: 13,
        heading: "Affiliate Marketing:",
        icon: seo,
        list: ["Partner Recruitment", "Commission Management", "Performance Tracking"]
    },
    {
        id: 14,
        heading: "Local Search Marketing",
        icon: seo,
        list: ["Local SEO", "Google My Business Optimization", "Location-Based Targeting"]
    },
    {
        id: 15,
        shape: seoShape,
        icon: seo,
        heading: "Chatbot Integration",
        list: ["Chatbot Integration", "Customer Support Automation", "User Engagement"],
        desc: "Your Brand, At Their Fingertips        ",
        desc2: "Embrace the mobile revolution with bespoke app experiences. Our developers create functional and engaging apps, keeping your brand accessible and interactive.",
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
