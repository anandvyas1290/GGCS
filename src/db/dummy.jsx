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
} from "@fortawesome/free-brands-svg-icons";
export const servicesData = [
    {
        id: 0,
        shape: digiShape,
        icon: digiMarketing,
        heading: "Search Engine Optimization",
        desc: "Unlock Your Brand's Full Potential        ",
    },
    {
        id: 1,
        shape: seoShape,
        icon: seo,
        heading: "Content Strategy and Creation",
        desc: "Weaving Your Brand's Story        ",
    },
    {
        id: 2,
        shape: socialShape,
        icon: socialMarketing,
        heading: "Social Media Management",
        desc: "Where Conversations Flourish ",
    },
];

export const serviceSocial = [
    {
        id: 1,
        icon: faFacebook,
        iconColor: "#1877F2",
        label: "Follow us on Facebook for Small Business Updates",
        class: "fb-hover",
    },
    {
        id: 2,
        icon: faInstagram,
        iconColor: "#FE005F",
        label: "Follow us on Instagram for Small Business Inspiration",
        class: "instagram-hover",
    },
    {
        id: 3,
        icon: faPinterest,
        iconColor: "#FE005F",
        label: " Get our Newsletter for Small Business Tips & News",
        class: "pinterest-hover",
    },
    {
        id: 4,
        icon: faXTwitter,
        iconColor: "#000000",
        label: "Follow us on X(Twitter) for Small Business Updates",
        class: "twitter-hover",
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
    { icon: twitter, name: "twitter", link: "#" },
    { icon: linkedin, name: "linkedin", link: "#" },
    { icon: instagram, name: "instagram", link: "#" },
];
