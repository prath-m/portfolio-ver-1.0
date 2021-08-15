import React from 'react'
import './About.css'
import Parallax from "react-rellax"

export const About = () => {
    
    return (
        <div className="about">
            <Parallax className="aboutLeft"></Parallax>
            <div className="aboutRight">
                <h1>
                    <Parallax>about me?</Parallax>
                </h1>
                <Parallax>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat unde commodi, voluptatum impedit deserunt, error similique nostrum vel temporibus repellendus soluta asperiores ullam vero pariatur velit fuga ipsum ducimus.</Parallax>
            </div>
        </div>
    )
}
