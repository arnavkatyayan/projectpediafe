import React from "react";
import ReusableComponent from "./ReusableComponent";
import Portfolio01 from "./assets/Portfolio01.png";
import Portfolio02 from "./assets/Portfolio02.png";
import Portfolio03 from "./assets/Portfolio03.png";
import Portfolio04 from "./assets/Portfolio04.png";


function Portfolio() {

    const data = {
        title: "Portfolio (Arnav Katyayan)",
        description:
            "This is a personal portfolio website designed to showcase my projects, skills, and professional journey. It highlights my frontend and full-stack work with detailed project descriptions, tech stacks, and visuals. The portfolio provides a clean, responsive, and user-friendly interface to help recruiters and visitors understand my capabilities easily.",

        buttonText: "Portfolio Project",
        buttonLink: "/fullStack/portfolio",
        icon: "fa-user",

        features: [
            "Showcases frontend and full-stack projects",
            "Detailed project descriptions with tech stack",
            "Responsive design for all screen sizes",
            "Interactive UI with smooth navigation",
            "Light Mode and Dark Mode functionality for sleek UI",
            "Data Structures Section",
            "About, Skills, and Contact sections",
        ],

        images: [
            Portfolio01,
            Portfolio02,
            Portfolio03,
            Portfolio04,
        ],

        imgDetails: [
            "Home Page",
            "Data structures & Algorithms Section",
            "Projects Section",
            "Contact Section with dark mode",
        ],
        githubLink: "https://github.com/arnavkatyayan/visualresumearnavk2025",
    };

    const techStack = {
        Frontend: ["ReactJS", "Bootstrap", "Vanilla CSS"],
        Tools: ["Git", "GitHub"],
        Libraries: ["Typewriter-effect", "SweetAlert2", "React-switch"],
    };

    return (
        <div>
            <ReusableComponent data={data} techStack={techStack} />
        </div>
    );
}

export default Portfolio;   