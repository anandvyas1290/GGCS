import digiShape from "../assets/home/services/digiShape.webp";
import seoShape from "../assets/home/services/seoShape.webp";
import socialShape from "../assets/home/services/socialShape.webp";
import digiMarketing from "../assets/home/services/digiMarketing.svg";
import seo from "../assets/home/services/seo.svg";
import socialMarketing from "../assets/home/services/socialMarketing.svg";
import facebook from "../assets/socialMedia/facebook.svg";
import linkedin from "../assets/socialMedia/linkedin.svg";
import instagram from "../assets/socialMedia/instagram.svg";
import twitter from "../assets/socialMedia/x-twitter.svg";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faXTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const servicesData = [
    {
        id: 0,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Search Engine Optimization",
        desc: "Unlock Your Brand's Full Potential        ",
        desc2: "Imagine your brand taking center stage in online searches. Our SEO expertise ensures exactly that. Through meticulous optimization, we pave the path for your brand to ascend search engine rankings, ushering in organic, high-quality traffic.        "
    },
    {
        id: 1,
        shape: seoShape,
        icon: seo,
        heading: "Content Strategy and Creation",
        desc: "Weaving Your Brand's Story        ",
        desc2: "Captivating stories forge emotional bonds. Our content wizards craft narratives that deeply resonate with your audience. From captivating blog posts to immersive videos and shareable graphics, we ensure your brand's voice resonates across platforms."
    },
    {
        id: 2,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Social Media Management",
        desc: "Where Conversations Flourish ",
        desc2: "Social media is more than a platform; it's a bustling community. Our social media strategists orchestrate meaningful conversations. With tailored content and timely interactions, we empower you to build a devoted community that engages, advocates, and converts."
    },
    {
        id: 3,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Pay-Per-Click (PPC) Advertising",
        desc: "Propel Your Brand Instantly ",
        desc2: "When urgency is paramount, our PPC campaigns deliver. Envision your brand appearing where potential customers are looking. Our experts optimize campaigns for maximum impact, driving targeted traffic and measurable ROI. "
    },
    {
        id: 4,
        shape: seoShape,
        icon: seo,
        heading: "Influencer Marketing",
        desc: " Elevate Your Brand with Trusted Voices        ",
        desc2: "Influence is a currency of credibility. Collaborating with influencers mirroring your brand values can propel your reach. We facilitate meaningful partnerships that harness trust and authenticity.        "
    },
    {
        id: 5,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Email Marketing Campaigns",
        desc: " Nurturing Relationships, Driving Conversions        ",
        desc2: "The inbox is a realm of exclusivity. Our personalized email campaigns nurture leads, enhance relationships, and drive conversions through strategic messaging and invaluable content."
    },
    {
        id: 6,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Website Design and Development",
        desc: "Your Digital Threshold        ",
        desc2: "Your website is your digital sanctuary – inviting and seamless. Our designers and developers craft immersive online experiences that captivate visitors and guide them towards meaningful action.        "
    },
    {
        id: 7,
        shape: seoShape,
        icon: seo,
        heading: "E-commerce Solutions",
        desc: "Elevate Your Online Storefront",
        desc2: "In the realm of e-commerce, every interaction holds value. Our e-commerce solutions optimize user journeys, amplify conversions, and ensure a shopping experience that fosters customer loyalty.        "
    },
    {
        id: 8,
        shape: socialShape,
        icon: socialMarketing,
        heading: " Analytics and Performance Tracking",
        desc: "Data-Driven Insights for Growth        ",
        desc2: "Data fuels your digital journey. Our comprehensive analytics and performance tracking yield actionable insights, enabling you to refine strategies for optimal growth."
    },
    {
        id: 9,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Reputation Management",
        desc: "Safeguarding Your Brand's Integrity",
        desc2: "Your brand's reputation is your most prized asset. Our proactive reputation management ensures your online image remains untarnished, nurturing trust and loyalty.        "
    },
    {
        id: 10,
        shape: seoShape,
        icon: seo,
        heading: " Conversion Rate Optimization (CRO)",
        desc: "Transforming Clicks into Conversions",
        desc2: "Beyond clicks, your brand deserves conversions. Our CRO strategies refine user experiences, ensuring every interaction contributes to tangible outcomes. "
    },
    {
        id: 11,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Digital Strategy Consultation",
        desc: "Your Blueprint to Triumph",
        desc2: "Embark on a strategic voyage tailored to your brand's ambitions. Our consultants analyze your goals, industry landscape, and target audience to create data-driven strategies illuminating your path to victory.        "
    },
    {
        id: 12,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Video Marketing Excellence",
        desc: "Captivating Your Audience        ",
        desc2: "In the visual era, the video holds immense power. Our video marketing crafts captivating stories that resonate with your audience, building deeper connections and engagement."
    },
    {
        id: 13,
        shape: seoShape,
        icon: seo,
        heading: " Mobile App Development",
        desc: "Your Brand, At Their Fingertips        ",
        desc2: "Embrace the mobile revolution with bespoke app experiences. Our developers create functional and engaging apps, keeping your brand accessible and interactive."
    }

];

export const serviceSocial = [
    {
        id: 1,
        icon: faFacebook,
        iconColor: "#1877F2",
        label: "Follow us on Facebook for Small Business Updates",
        class: "fb-hover",
        link: "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/"
    },
    {
        id: 2,
        icon: faInstagram,
        iconColor: "#FE005F",
        label: "Follow us on Instagram for Small Business Inspiration",
        class: "instagram-hover",
        link: "https://www.instagram.com/ggconsultancyservice/"
    },
    {
        id: 3,
        icon: faLinkedin,
        iconColor: "#0077B5",
        label: " Follow us on LinkedIn for Small Business Updates",
        class: "linkedin-hover",
        link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/"
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
        link: "https://twitter.com/ggconsultancy"
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
                label: "20 Creatives per month"
            },
            {
                label: "2 Dedicated Videos"
            },
            {
                label: "4 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 50,000"
            },
            {
                label: "1 Motion Graphics"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Monthly status Meetings"
            }
        ]

    },
    {
        title: "Gold",
        price: "Rs. 71,000",
        desc: "Social Media Handles (Plan, Create, Manage)",
        description: [
            {
                label: "30 Creatives per month"
            },
            {
                label: "4 Dedicated Videos"
            },
            {
                label: "6 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 1,00,000"
            },
            {
                label: "2 Motion Graphics"
            },
            {
                label: "1 Promotional Ad"
            },
            { label: "1 App Store Optimization Services" },
            {
                label: "1 Flipkart and Amazon Promotions"
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Monthly status Meetings"
            }
        ]

    },
    {
        title: "Platinum",
        price: "Rs. 1,05,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "40 Creatives per month"
            },
            {
                label: "6 Dedicated Videos",
                time: "(30-60 Sec)"
            },
            {
                label: "8 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 2,00,000"
            },
            {
                label: "3 Motion Graphics"
            },
            {
                label: "2 Promotional Ad"
            },
            { label: "2 App Store Optimization Services" },
            {
                label: "2 Flipkart and Amazon Promotions"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings "
            }
        ]

    },
    {
        title: "Platinum Premium",
        price: "Rs. 1,16,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "50 Creatives per month"
            },
            {
                label: "8 Dedicated Videos",
                time: "(30-60 Sec)"
            },
            {
                label: "10 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 3,00,000"
            },
            {
                label: "4 Motion Graphics"
            },
            {
                label: "3 Promotional Ad"
            },
            { label: "3 App Store Optimization Services" },
            {
                label: "3Flipkart and Amazon Promotions"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "1 Data Behavioural Report"
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings "
            }
        ]

    },

]

// Why GGCS desc

export const whyGGCS = {
    title: "Why GGCS is Your Ultimate Choice",
    desc: [
        {
            label: 'Data-Driven Precision: Informed decisions are the cornerstone of our strategy. Our methodologies are grounded in comprehensive data analysis, ensuring that every move we make contributes significantly to your online triumph.'
        },
        {
            label: "Tailored Strategies: We recognize that each business is distinct. That's why we craft customized strategies that align with your unique requirements, never settling for one-size-fits-all solutions."
        },
        {
            label: "Transparent Partnership: Open and honest communication defines our approach. Expect regular updates and detailed reports on your campaign's progress, fostering a transparent and trustworthy partnership.            "
        },
        {
            label: "Comprehensive Services: From SEO and content marketing to social media management and paid advertising, GGCS offers a comprehensive array of services to cover all aspects of your digital footprint. "
        },
        {
            label: "Comprehensive Services: From SEO and content marketing to social media management and paid advertising, GGCS offers a comprehensive array of services to cover all aspects of your digital footprint.  "
        }
    ]
}

// social media link 
export const socialMedias = [
    { icon: facebook, name: "facebook", link: "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/" },
    { icon: twitter, name: "twitter", link: "https://twitter.com/ggconsultancy" },
    { icon: linkedin, name: "linkedin", link: "https://www.linkedin.com/in/global-garner-consultancy-services-49b40529a/" },
    { icon: instagram, name: "instagram", link: "https://www.instagram.com/ggconsultancyservice/" },
];

//footer menu service
export const menuService = [
    {
        label: "Home",
        link: "#"
    },
    {
        label: "About Us",
        link: "about"
    },
    {
        label: "Services",
        link: "services"
    },
    {
        label: "Why GGCS",
        link: 'why-ggcs'
    },
    {
        label: "Contact Us",
        link: "contact"
    }
]
// footer service 
export const services = [
    {
        label: "SEO (Search Engine Optimization)"
    },
    {
        label: "Social Media Marketing"
    },
    {
        label: "Search Engine Marketing"
    },
    {
        label: "Inbound and Outbound Marketing"
    },
    {
        label: 'Add-On Services'
    }
]
