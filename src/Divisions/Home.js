import React from 'react'
import './Home.css'
import Parallax from "react-rellax"
export const Home = () => {
    return (
        <>
        <img style={{
            display: 'block',
            position: 'absolute',
            height: '50vh',
            bottom: '45vh',
            opacity: 0.7,
            animation: 'float 5s alternate-reverse infinite linear',
        }} src="https://64.media.tumblr.com/ea687b0e0df6fd316049eb10180535f4/e932fba83010b72f-86/s540x810/5fc53afc368413b3c5d9b9a90c474dd8602832ad.png" />
        <div className="home">
            <div className="homeLeft">
                <h1 className="name">
                    <Parallax speed={2}>Pratham Sharma?</Parallax>
                </h1>
                <p>
                    <Parallax speed={1}>Oh yes, he's a web developer*</Parallax>
                </p>
            </div>
            <Parallax className="homeRight" speed={-3}></Parallax>
        </div>
        </>
    )
}
