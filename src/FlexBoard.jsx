import React from "react";
import ReusableComponent from "./ReusableComponent";
import FlexBoard01 from "./assets/Expensify2025-01.png";
import FlexBoard02 from "./assets/Expensify2025-02.png";
import FlexBoard03 from "./assets/Expensify2025-03.png";
//import FlexBoard04 from "./assets/Expensify2025-04.png";

function FlexBoard() {

    const data = {
        title: "FlexBoard",
        description: "FlexBoard is a full-stack todo application designed to help users manage their tasks and deadlines efficiently. It allows users to add, edit, and delete tasks, view monthly summaries, and analyze spending patterns through interactive charts. The application ensures secure data storage and provides an intuitive, responsive interface for seamless personal finance management.",
        buttonText: "FlexBoard Project",
        buttonLink: "/fullStack/flexboard",

        features: [
            "Add, edit, and delete tasks",
            "Categorize tasks for better tracking",
            "Monthly and yearly task summaries",
            "Interactive charts for task analysis",
            "Secure user authentication and data storage",
            "Responsive design for mobile and desktop",
            "Search and filter tasks by category or date"
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
        ]
    };
    const techStack = {
        Frontend: ["ReactJS", "Vanilla CSS", "Bootstrap"],
        Backend: ["Python", "Flask", "SQLAlchemy", "Pandas"],
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