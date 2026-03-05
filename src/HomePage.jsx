import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigation = useNavigate();

    return (
        <div className="body-page flex justify-center items-center flex-col">

            <div className="typewriter-home">
                <Typewriter
                    options={{
                        strings: [
                            "Welcome to ProjectPedia.",
                            "A showcase of my coding projects and experiments.",
                            "Explore Frontend and Full Stack applications I've built.",
                            "Each project reflects my learning and problem-solving journey.",
                            "Let’s turn ideas into real-world applications together!"
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 500,
                        delay: 65,
                        deleteSpeed: 5,
                    }}
                />
            </div>

            {/* <div className="flex items-center justify-center gap-6 featured-projects">

                <div className="box">
                    <h2>
                        <i className="fa-solid fa-list-check me-2"></i>
                        FlexBoard
                    </h2>
                    <p className="text-gray-600 font-bold">
                        A todo app for managing your tasks and deadlines with priority-based task
                        organization, due date reminders, and a clean, responsive UI for better
                        productivity.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/fullStack/Flexboard")}>
                        FlexBoard Project
                    </Button>
                </div>

                <div className="box">
                    <h2>
                        <i className="fa-solid fa-wallet me-2"></i>
                        Expensify
                    </h2>
                    <p className="text-gray-600 font-bold">
                        An expense tracker to keep track of your expenses with categorized spending,
                        monthly summaries, visual charts, and secure data storage for personal
                        finance management.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/fullStack/expensify")}>
                        Expensify Project
                    </Button>
                </div>

                <div className="box">
                    <h2>
                        <i className="fa-solid fa-laptop-code me-2"></i>
                        Portfolio
                    </h2>
                    <p className="text-gray-600 font-bold">
                        A portfolio website to showcase your work and skills, featuring project
                        galleries, smooth navigation, responsive design, and optimized performance
                        for all devices.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/frontend/portfolio")}>
                        Portfolio Project
                    </Button>
                </div>

            </div> */}
        </div>
    );
}

export default HomePage;