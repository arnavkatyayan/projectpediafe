import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FrontendProjects() {
    const navigation = useNavigate();

    return (
        <div className="body-page flex justify-center items-center flex-col">

            <div className="typewriter">
                <Typewriter
                    options={{
                        strings: [
                            "Welcome to Frontend Projects.",
                            "A showcase of my frontend projects.",
                            "Explore Frontend applications I've built.",
                            "Each project reflects my learning and problem-solving journey.",
                            "Crafting interactive and responsive user interfaces."
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
                        <i className="fa-solid fa-coins me-2"></i>
                        BillSplitter
                    </h2>
                    <p className="text-gray-600 font-bold">
                        A bill splitter app for splitting bills among friends and family with
                        easy bill splitting, group bill splitting, and a clean, responsive UI for better
                        bill splitting.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/frontend/billsplitter")}>
                        BillSplitter Project
                    </Button>
                </div>

                {/* <div className="box">
                    <h2>
                        <i className="fa-solid fa-folder-open me-2"></i>
                        ProjectPedia
                    </h2>
                    <p className="text-gray-600 font-bold">
                        A project showcase website to showcase your projects and skills, featuring
                        project galleries, smooth navigation, responsive design, and optimized
                        performance for all devices.
                    </p>
                    <Button variant="dark" onClick={() => navigation("/frontend/projectpedia")}>
                        ProjectPedia Project
                    </Button>
                </div> */}

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

            </div>
        </div>
    );
}

export default FrontendProjects;