import React, { useState } from "react";

function ReusableComponent(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const imageArr = props.data?.images || [];
    const hasImages = imageArr.length > 0;

    const handleNext = () => {
        if (!hasImages) return;
        setCurrentImage((prev) => (prev + 1) % imageArr.length);
    };

    const handlePrev = () => {
        if (!hasImages) return;
        setCurrentImage((prev) => (prev - 1 + imageArr.length) % imageArr.length);
    };

    // Helper for stack badges
    const renderTechStackPills = (category, items, icon) => {
        if (!items || items.length === 0) return null;
        return (
            <div className="flex flex-col mb-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <i className={`fa-solid ${icon}`}></i>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <span key={index} className="px-3.5 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
            {/* Main Card */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Left Column: Details */}
                    <div className="p-8 md:p-12 lg:col-span-2 flex flex-col justify-center">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl w-16 h-16 mb-6 shadow-inner">
                            {/* Workaround for gradient text icon */}
                            <span className="text-3xl text-indigo-600 dark:text-indigo-400">
                                <i className={`fa-solid ${props.data?.icon || 'fa-code'}`}></i>
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
                            {props.data?.title}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {props.data?.description}
                        </p>

                        <div className="mb-10 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200/60 dark:border-gray-700/50">
                            <h3 className="font-bold text-xl mb-5 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                <i className="fa-solid fa-star text-yellow-500"></i> Key Features
                            </h3>
                            <ul className="space-y-4">
                                {props.data?.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <i className="fa-solid fa-circle-check text-green-500 mt-1 flex-shrink-0 text-lg"></i>
                                        <span className="leading-relaxed font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <a
                                href={props.data?.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                            >
                                <i className="fa-brands fa-github text-2xl group-hover:rotate-12 transition-transform"></i>
                                View Source on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Stack */}
                    <div className="bg-gray-50 dark:bg-gray-800/30 p-8 md:p-12 lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-200/50 dark:border-gray-700/50">
                        {/* Image Carousel */}
                        {hasImages && (
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col">
                                <div className="flex items-center justify-center p-4">
                                    <img
                                        src={imageArr[currentImage]}
                                        alt={`Screenshot of ${props.data?.title}`}
                                        style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", borderRadius: "12px" }}
                                        className="shadow-sm transition-opacity duration-300"
                                    />
                                </div>

                                <div className="bg-gray-900 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800">
                                    <p className="text-gray-200 font-medium text-sm sm:text-base truncate w-full sm:max-w-[50%] flex items-center justify-center sm:justify-start">
                                        <i className="fa-regular fa-image mr-2 text-indigo-400"></i>
                                        {props.data?.imgDetails && props.data.imgDetails[currentImage]}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={handlePrev}
                                            className="px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-black transition-colors flex items-center gap-2 text-sm font-semibold shadow-sm"
                                        >
                                            <i className="fa-solid fa-chevron-left"></i> Prev
                                        </button>
                                        <div className="flex gap-1.5 px-2">
                                            {imageArr.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-4 bg-indigo-500' : 'w-2 bg-gray-600'}`}
                                                ></div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={handleNext}
                                            className="px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-black transition-colors flex items-center gap-2 text-sm font-semibold shadow-sm"
                                        >
                                            Next <i className="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tech Stack Area */}
                        <div>
                            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                <span className="text-indigo-500">
                                    <i className="fa-solid fa-layer-group border-2 border-indigo-500 p-2 rounded-lg text-xl"></i>
                                </span>
                                Technologies Used
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                {renderTechStackPills("Frontend", props.techStack?.Frontend, "fa-file-code")}
                                {renderTechStackPills("Backend", props.techStack?.Backend, "fa-server")}
                                {renderTechStackPills("Database", props.techStack?.Database, "fa-database")}
                                {renderTechStackPills("Tools", props.techStack?.Tools, "fa-screwdriver-wrench")}
                                {renderTechStackPills("Libraries", props.techStack?.Libraries, "fa-book-bookmark")}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReusableComponent;