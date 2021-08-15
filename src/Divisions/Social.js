import React from 'react'
import './Social.css'
import Parallax from 'react-rellax'
import github from './github.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import discord from './discord.png'

const parallaxOverride = {
    // transform:"translate3d(0,0,0)"
};

export const Social = () => {
    return (
        <div className="socialBody">
            <Parallax speed={-0.5}>
                <h1 className="socialHeader" >
                    wanna contact me?
                </h1>
            </Parallax>
            
            <Parallax className="socialIconBox" speed={-0.6}>
                <img src={github} className="socialIcons" alt="github" tooltip="github" />
                <img src={linkedin} className="socialIcons" alt="linkedin" />
                <img src={instagram} className="socialIcons" alt="instagram" />
                <img src={discord} className="socialIcons" alt="discord" />
            </Parallax>
        </div>
    )
}