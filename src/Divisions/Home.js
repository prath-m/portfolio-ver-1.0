import React from 'react'
import './Home.css'
import Parallax from "react-rellax"

export const Home = () => {
    return (
        <div className="home">
            {/* <img src="" /> */}
            <div className="homeLeft">
                <h1>
                    <Parallax speed={2}>Pratham Sharma?</Parallax>
                </h1>
                <p>
                    <Parallax speed={1}>Oh yes, he's a web developer*</Parallax>
                </p>
            </div>
            <Parallax className="homeRight" speed={-3}></Parallax>
        </div>
    )
}
