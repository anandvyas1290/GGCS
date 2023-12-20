import newsOrg1 from "../../assets/otherServices/packages/newsOrg1.jpg";
import newsOrg2 from "../../assets/otherServices/packages/newsOrg2.jpg";
import influencer1 from "../../assets/otherServices/packages/influencer1.jpg";
import influencer2 from "../../assets/otherServices/packages/influencer2.jpg";

import {
    emailMarketing,
    website,
    socialMediaHandle,
    security,
    googleAds,
    policy,
    gst,
    pvtRegistration,
    channelReport,
    dbBackup,
    support,
    logoDesign,
    certificate,
    personalBranding,
    portfolioWebsite,
    creatives,
} from "../../db/assets";

export const packages = [
    {
        id: 1,
        title: "News Organization",
        slug: "news-organization",
        coverImg: newsOrg1,
        mainImg: newsOrg2,
        mainBg: "bg-gradient-to-r from-[#c33764] to-[#1d2671]",
        features: [
            {
                label: "Logo & Banner",
                icon: logoDesign,
            },
            { label: "Website", icon: website },
            {
                label: "Social Media Handle",
                icon: socialMediaHandle,
            },
            {
                label: "Policy",
                icon: policy,
            },
            { label: "GST", icon: gst },
            {
                label: "Adsense Approval",
                icon: googleAds,
            },
            {
                label: "PVT Registration",
                icon: pvtRegistration,
            },
            {
                label: "Professional Email",
                icon: emailMarketing,
            },
            {
                label: "Channel Report",
                icon: channelReport,
            },
            {
                label: "Security",
                icon: security,
            },
            {
                label: "Database Backup",
                icon: dbBackup,
            },
            {
                label: "24X7 Support",
                icon: support,
            },

            { label: "Additional Certificate", icon: certificate },
        ],
    },
    {
        id: 2,
        title: "Influencer",
        slug: "influencer",
        coverImg: influencer1,
        mainImg: influencer2,
        mainBg: "bg-gradient-to-r from-[#c33764] to-[#1d2671]",
        features: [
            { label: "Social Media Handle", icon: socialMediaHandle },
            { label: "Logo", icon: logoDesign },
            { label: "Personal Branding", icon: personalBranding },
            { label: "Security for social handles", icon: security },
            { label: "Policy Manage", icon: policy },
            { label: "Creative for 1 year", icon: creatives },
            { label: "Portfolio Website", icon: portfolioWebsite },
        ],
    },
];
