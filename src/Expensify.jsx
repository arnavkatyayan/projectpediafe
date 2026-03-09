import React from "react";
import ReusableComponent from "./ReusableComponent";
import Expensify01 from "./assets/Expensify2025-01.png";
import Expensify02 from "./assets/Expensify2025-02.png";
import Expensify03 from "./assets/Expensify2025-03.png";
import Expensify04 from "./assets/Expensify2025-04.png";

function Expensify() {

    const data = {
        title: "Expensify",
        description: "Expensify is a full-stack expense tracking application designed to help users manage their finances efficiently. It allows users to record and categorize expenses, view monthly summaries, and analyze spending patterns through interactive charts. The application ensures secure data storage and provides an intuitive, responsive interface for seamless personal finance management.",
        buttonText: "Expensify Project",
        buttonLink: "/fullStack/expensify",
        icon: "fa-money-bill-wave",
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
            Expensify01,
            Expensify02,
            Expensify03,
            Expensify04,
        ],
        imgDetails: [
            "Login Page",
            "Project Dashboard",
            "Income Dashboard",
            "Expense Dashboard"
        ],
        githubLink: "https://github.com/arnavkatyayan/Expensify2025",
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

export default Expensify;   