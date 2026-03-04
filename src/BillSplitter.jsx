import React from "react";
import ReusableComponent from "./ReusableComponent";
import BillSplitter01 from "./assets/PaySplit01.png";
import BillSplitter02 from "./assets/PaySplit02.png";


function BillSplitter() {

    const data = {
        title: "BillSplitter",
        description: "BillSplitter is a full-stack bill splitting application designed to help users split bills efficiently. It allows users to add, edit, and delete bills, view monthly summaries, and analyze spending patterns through interactive charts. The application ensures secure data storage and provides an intuitive, responsive interface for seamless personal finance management.",
        buttonText: "BillSplitter Project",
        buttonLink: "/fullStack/billSplitter",

        features: [
            "Simple Application to create and split bills",
            "Fully responsive UI",
            "Deployed on Vercel",
            "Inclusion of custom tips as well"
        ],
        images: [
            BillSplitter01,
            BillSplitter02,
        ],
        imgDetails: [
            "Initial Load of the Application",
            "Spliting the Bill"
        ]
    };
    const techStack = {
        Frontend: ["ReactJS", "Vanilla CSS", "Bootstrap"],
        Tools: ["Git", "GitHub", "Vercel"],
    }

    return (
        <div>
            <ReusableComponent data={data} techStack={techStack} />
        </div>
    );
}

export default BillSplitter;   