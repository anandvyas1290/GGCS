import fullStack from "../../../assets/training/courses/fullStack.jpg";
import backendDev from "../../../assets/training/courses/backendDev.jpg";
import dataAnalytics from "../../../assets/training/courses/dataAnalytics.jpg";
import mobileDev from "../../../assets/training/courses/mobileDev.jpg";
import testingAutomation from "../../../assets/training/courses/testing.jpg";

import feature1 from "../../../assets/training/details/feature1.svg";
import feature2 from "../../../assets/training/details/feature2.svg";
import feature3 from "../../../assets/training/details/feature3.svg";
import feature4 from "../../../assets/training/details/feature4.svg";

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
    { id: 1, icon: feature1, label: "6000+ Students Currently Enrolled" },
    { id: 2, icon: feature2, label: "4000+ hiring partners" },
    { id: 3, icon: feature3, label: "6.9 LPA Average Salary" },
    { id: 4, icon: feature4, label: "36 LPA Highest Salary" },
];
