import mobileDev from "../../../assets/training/courses/mobileDev.jpg";
import fullStack from "../../../assets/training/courses/fullStack.jpg";
import backendDev from "../../../assets/training/courses/backendDev.jpg";
import testingAutomation from "../../../assets/training/courses/testing.jpg";
import dataAnalytics from "../../../assets/training/courses/dataAnalytics.jpg";

import feature1 from "../../../assets/training/details/feature1.svg";
import feature2 from "../../../assets/training/details/feature2.svg";
import feature3 from "../../../assets/training/details/feature3.svg";
import feature4 from "../../../assets/training/details/feature4.svg";

import pc from "../../../assets/training/courses/computer-icon.svg";
import VideoIcon from "../../../assets/training/courses/video_icon.svg";
import CircleIcon from "../../../assets/training/courses/circle-icon.svg";
import AccountSuccess from "../../../assets/training/courses/user-icon.svg";

import id from "../../../assets/training/courses/id-card.svg";
import oneplus from "../../../assets/training/courses/one-plus.png";
import account from "../../../assets/training/courses/account.webp";
import internet from "../../../assets/training/courses/internet.svg";
import qualification from "../../../assets/training/courses/qualification.png";
import communication from "../../../assets/training/courses/communication.png";

export const courses = [
    {
        id: 1,
        name: "Full Stack Web Development",
        desc: "Become job-ready in 24 weeks",
        icon: fullStack,
        cardBg: "bg-course1",
        slug: "full-stack-development",
        features: "Full Stack Developer, Software Engineer & much more.",
        details: {
            bannerBg: "bg-purple1",
            heading: "Become a Full Stack Web Developer",
            desc: "Become a job-ready Full-Stack Web Developer in 24 weeks.",
        },
    },
    {
        id: 2,
        name: "Backend Development",
        desc: "Become job-ready in 24 weeks",
        icon: backendDev,
        cardBg: "bg-course2",
        slug: "backend-development",
        features: "Backend Web Developer, API developer & much more.",
        details: {
            bannerBg: "bg-skin1",
            heading: "Become a Backend Web Developer",
            desc: "Become a job-ready Backend Web Developer in 24 weeks.",
        },
    },

    {
        id: 3,
        name: "Data Analytics",
        desc: "Become job-ready in 24 weeks",
        icon: dataAnalytics,
        cardBg: "bg-course3",
        slug: "data-analytics",
        features:
            "Data Engineer, Data Analyst, Machine Learning Engineer & much more.",
        details: {
            bannerBg: "bg-blue2",
            heading: "Become a Data Analyst",
            desc: "Become a job-ready data analyst in 24 weeks.",
        },
    },
    {
        id: 4,
        name: "Mobile Development",
        desc: "Become job-ready in 24 weeks",
        icon: mobileDev,
        cardBg: "bg-course4",
        slug: "mobile-development",
        features: "Mobile App Developer & much more.",
        details: {
            bannerBg: "bg-green1",
            heading: "Become a Mobile Developer",
            desc: "Become a job-ready Mobile Developer in 24 weeks.",
        },
    },
    {
        id: 5,
        name: "Software Testing & Automation",
        desc: "Become job-ready in 24 weeks",
        icon: testingAutomation,
        cardBg: "bg-course5",
        slug: "software-testing-automation",
        features: "QA Tester, Automation Engineer & much more.",
        details: {
            bannerBg: "bg-blue3",
            heading: "Become a Software Testing & Automation Engineer",
            desc: "Become a job-ready Software Testing & Automation Engineer in 24 weeks.",
        },
    },
];

export const features = [
    { id: 1, icon: feature1, label: "100+ Students Currently Enrolled" },
    { id: 2, icon: feature2, label: "40+ hiring partners" },
    { id: 3, icon: feature3, label: "5 LPA Average Salary" },
    { id: 4, icon: feature4, label: "20 LPA Highest Salary" },
];

export const admissionProcess = {
    title: "Admission Process for Full Stack Web Development Program",
    process: [
        {
            id: 1,
            icon: AccountSuccess,
            title: "Inquiry",
        },
        { id: 2, icon: pc, title: "Choose a course" },
        { id: 3, icon: CircleIcon, title: "Complete Documentation" },
        { id: 4, icon: VideoIcon, title: "You are ready to join the batch" },
    ],
};

export const faq = {
    title: "Frequently asked questions",
    list: [
        {
            id: 1,
            que: "What is the medium of instruction?",
            ans: "The medium of instruction at GGCS is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.",
        },
        {
            id: 2,
            que: "Do you offer loaner laptops for prospective students?",
            ans: "Not at the moment.",
        },
    ],
};

export const minCriteria = {
    title: "Minimum criteria for full stack web development Program",
    desc: "You should meet the following requirements to be eligible for this course.",
    list: [
        {
            id: 1,
            icon: qualification,
            title: "Qualification",
            desc: "Graduation (Any Stream)",
        },
        { id: 2, icon: account, title: "Age", desc: "20+ age" },
        { id: 3, icon: id, title: "ID", desc: "Valid Aadhaar Card" },
        {
            id: 4,
            icon: internet,
            title: "Internet",
            desc: "A desktop or laptop with an uninterrupted service connection.",
        },
        {
            id: 5,
            icon: communication,
            title: "Communication Skills",
            desc: "Basic English - speaking, reading and writing",
        },
        { id: 6, icon: oneplus, title: "Address Proof", desc: "" },
    ],
};

export const ourAlumni = {
    title: "Hear From Our Alumni",
    list: [
        {
            id: 1,
            color: "#9d789b",
            image: "",
            name: "Developer 1",
            desc: "Even after graduating with a CS degree l had doubts about my technical skills before joining GGCS. But with their intensive program, GGCS School helped me to improve",
            logo: "",
        },
        {
            id: 2,
            color: "#7a81a8",
            image: "",
            name: "Developer 2",
            desc: "Even after graduating with a CS degree l had doubts about my technical skills before joining GGCS. But with their intensive program, GGCS School helped me to improve",
            logo: "",
        },
        {
            id: 3,
            color: "#6d5b98",
            image: "",
            name: "Developer 3",
            desc: "Even after graduating with a CS degree l had doubts about my technical skills before joining GGCS. But with their intensive program, GGCS School helped me to improve",
            logo: "",
        },
    ],
};
