import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FullStackProjects() {
    const navigation = useNavigate();

    return (
        <div className="body-page flex justify-center items-center flex-col">

            <div className="typewriter">
                <Typewriter
                    options={{
                        strings: [
                            "Welcome to Full Stack Projects.",
                            "A showcase of my full stack projects and experiments.",
                            "Explore Full Stack applications I've built.",
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 500,
                        delay: 65,
                        deleteSpeed: 5,
                    }}
                />
            </div>

            <div className="flex items-center justify-center gap-6 featured-projects">

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
                        <i className="fa-solid fa-book-open me-2"></i>
                        DailyScribe
                    </h2>
                    <p className="text-gray-600 font-bold">
                        A daily journal app for writing and organizing your daily thoughts and
                        experiences with features like date-based organization, secure data storage,
                        and a clean, responsive UI for better journaling.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/fullStack/dailyscribe")}>
                        DailyScribe Project
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default FullStackProjects;