import React from "react";
import ReusableComponent from "./ReusableComponent";
import DailyScribe01 from "./assets/DailyScribe01.png";
import DailyScribe02 from "./assets/DailyScribe02.png";
import DailyScribe03 from "./assets/DailyScribe03.png";
import DailyScribe04 from "./assets/DailyScribe04.png";

function DailyScribe() {

    const data = {
        title: "Daily Scribe",
        description: "Daily Scribe is a full-stack journaling application that allows users to write, manage, and organize their daily thoughts and experiences in a secure digital journal. The application provides features such as creating, editing, and deleting journal entries, searching past entries, and filtering notes based on emotions or keywords. With secure authentication, encrypted data handling, and a clean responsive interface, Daily Scribe offers a safe and intuitive space for users to reflect on their daily lives.",
        buttonText: "Daily Scribe Project",
        buttonLink: "/fullStack/dailyScribe",
        icon: "fa-book-open",
        features: [
            "Create, edit, and delete daily journal entries",
            "Search past entries quickly",
            "Emotion-based journal filtering",
            "Secure user authentication",
            "PDF export for journal backup",
            "Encrypted storage for personal data safety",
        ],
        images: [
            DailyScribe01,
            DailyScribe02,
            DailyScribe03,
            DailyScribe04,
        ],
        imgDetails: [
            "Login Page",
            "Journal Dashboard",
            "Write New Entry",
            "Journal History View"
        ]
    };
    const techStack = {
        Frontend: ["ReactJS", "Vanilla CSS", "Bootstrap",],
        Backend: ["Java", "Spring Boot", "Hibernate"],
        Database: ["PostgreSQL"],
        Tools: ["Git", "GitHub"],
        Libraries: ["react-router-dom", "SweetAlert2", "Typewriter-effect"],
    }

    return (
        <div>
            <ReusableComponent data={data} techStack={techStack} />
        </div>
    );
}

export default DailyScribe;   