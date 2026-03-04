import React from "react";
import Expensify01 from "./assets/Expensify2025-01.png";
import Logo from './assets/Logo.jpg'
import Slider from "react-slick";
import { useState } from "react";
import { Button } from "react-bootstrap";
function ReusableComponent(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const imageArr = props.data.images;
    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % imageArr.length);
    };
    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + imageArr.length) % imageArr.length);
    };
    return (
        <div className="flex flex-col gap-6 p-6 items-center justify-center reusable-page">
            <div className="project-description">
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
                <ul>
                    {props.data.features.map((feature, index) => (
                        <li key={index} className="font-bold text-gray-600">{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="tech-stack">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

                    <li className="border rounded-lg p-4">
                        <h2 className="font-bold text-gray-700 mb-2">Frontend</h2>
                        <ul>
                            {props.techStack.Frontend.map((feature, index) => (
                                <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </li>

                    <li className="border rounded-lg p-4">
                        <h2 className="font-bold text-gray-700 mb-2">Backend</h2>
                        <ul>
                            {props.techStack.Backend && props.techStack.Backend.length > 0 ? (
                                props.techStack.Backend.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))
                            ) : (
                                <li className="text-gray-600">No Backend</li>
                            )}
                        </ul>
                    </li>

                    <li className="border rounded-lg p-4">
                        <h2 className="font-bold text-gray-700 mb-2">Database</h2>
                        <ul>
                            {props.techStack.Database && props.techStack.Database.length > 0 ? (
                                props.techStack.Database.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))
                            ) : (
                                <li className="text-gray-600">No Database</li>
                            )}
                        </ul>
                    </li>

                    <li className="border rounded-lg p-4">
                        <h2 className="font-bold text-gray-700 mb-2">Tools</h2>
                        <ul>
                            {props.techStack.Tools && props.techStack.Tools.length > 0 ? (
                                props.techStack.Tools.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))
                            ) : (
                                <li className="text-gray-600">No Tools</li>
                            )}
                        </ul>
                    </li>

                    <li className="border rounded-lg p-4">
                        <h2 className="font-bold text-gray-700 mb-2">Libraries</h2>
                        <ul>
                            {props.techStack.Libraries && props.techStack.Libraries.length > 0 ? (
                                props.techStack.Libraries.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))
                            ) : (
                                <li className="text-gray-600">No Libraries</li>
                            )}
                        </ul>
                    </li>

                </ul>
            </div>

            <div className="project-images">
                <img src={imageArr[currentImage]} alt="Project" className="image-dimensions" />
                <p className="text-center font-bold text-gray-200 text-2xl mt-2">({props.data.imgDetails[currentImage]})</p>
                <div className="flex gap-5 justify-center items-center button-dimensions">
                    <Button onClick={handlePrev} variant="dark">Prev</Button>
                    <Button onClick={handleNext} variant="dark">Next</Button>
                </div>

            </div>
        </div>
    );
}

export default ReusableComponent;