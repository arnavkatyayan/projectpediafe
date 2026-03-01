import React from "react";
import Github from './assets/Background.jpg'
import Typewriter from "typewriter-effect";

function HomePage() {
    return (
        <div className="home-page flex justify-center items-center">

            <div className="typewriter">
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
            <div className="flex items-center justify-center gap-6 featured-projects">
                
                <div className="box">
                    <h2>FlexBoard</h2>
                    <p>A todo app for managing your tasks and deadlines.</p>
                    {/* <Button className=></Button> */}
                </div>
                <div className="box">
                    <h2>Expensify</h2>
                    <p>An expense tracker to keep track of your expenses.</p>
                </div>
                <div className="box">
                    <h2>Portfolio</h2>
                    <p>A portfolio website to showcase your work and skills.</p>
                </div>
            </div>
        
        </div>
    );
} export default HomePage;