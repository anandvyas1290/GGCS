import digiShape from "../assets/home/services/digiShape.webp";
import seoShape from "../assets/home/services/seoShape.webp";
import socialShape from "../assets/home/services/socialShape.webp";
import digiMarketing from "../assets/home/services/digiMarketing.svg";
import seo from "../assets/home/services/seo.svg";
import socialMarketing from "../assets/home/services/socialMarketing.svg";
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
