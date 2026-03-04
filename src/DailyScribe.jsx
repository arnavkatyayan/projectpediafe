import React from "react";
import ReusableComponent from "./ReusableComponent";
import DailyScribe01 from "./assets/DailyScribe01.png";
import DailyScribe02 from "./assets/DailyScribe02.png";
import DailyScribe03 from "./assets/DailyScribe03.png";
import DailyScribe04 from "./assets/DailyScribe04.png";

function DailyScribe() {

    const data = {
        title: "Expensify",
        description: "Expensify is a full-stack expense tracking application designed to help users manage their finances efficiently. It allows users to record and categorize expenses, view monthly summaries, and analyze spending patterns through interactive charts. The application ensures secure data storage and provides an intuitive, responsive interface for seamless personal finance management.",
        buttonText: "Expensify Project",
        buttonLink: "/fullStack/expensify",

        features: [
            "Add, edit, and delete expenses",
            "Categorize expenses for better tracking",
            "Monthly and yearly expense summaries",
            "Interactive charts for spending analysis",
            "Secure user authentication and data storage",
            "Responsive design for mobile and desktop",
            "Search and filter expenses by category or date"
        ],
        images: [
            DailyScribe01,
            DailyScribe02,
            DailyScribe03,
            DailyScribe04,
        ],
        imgDetails: [
            "Login Page",
            "Project Dashboard",
            "Income Dashboard",
            "Expense Dashboard"
        ]
    };
    const techStack = {
        Frontend: ["ReactJS", "Vanilla CSS", "Bootstrap", "Tailwind CSS"],
        Backend: ["Java", "Spring Boot", "Hibernate", "Python", "Pandas"],
        Database: ["PostgreSQL"],
        Tools: ["Git", "GitHub"],
        Libraries: ["react-charts", "react-router-dom", "SweetAlert2"],
    }

    return (
        <div>
            <ReusableComponent data={data} techStack={techStack} />
        </div>
    );
}

export default DailyScribe;   