import React from 'react'
import './About.css'
import Parallax from "react-rellax"

export const About = () => {
    
    return (
        <div style={{minHeight:'100vh', position:'relative'}}>
            <img style={{
                display: 'block',
                position: 'absolute',
                height: '50vh',
                bottom: '45vh',
                right: '10px',
                opacity: 0.6,
                filter: 'grayscale(80%)',
                animation: 'float 5s alternate-reverse infinite linear',
            }} src="https://64.media.tumblr.com/e24f352506dd8c4ba733b504529b577e/8d64d3752fff5bed-f6/s640x960/3725668f71f7ea2748279a48aafd532aec00e108.png" />
            <div className="about">
                <Parallax className="aboutLeft"></Parallax>
                <Parallax className="aboutRight" speed={-3}>

                    <h1 id="aboutH1">about me?</h1>
                    <div id="aboutP">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat unde commodi, voluptatum impedit deserunt, error similique nostrum vel temporibus repellendus soluta asperiores ullam vero pariatur velit fuga ipsum ducimus.
                    </div>
                </Parallax>
            </div>
        </div>
    )
}
