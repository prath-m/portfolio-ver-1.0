import React from 'react'
import './Social.css'
import Parallax from 'react-rellax'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import instagram from './img/instagram.png'
import discord from './img/discord.png'

export const Social = () => {
    return (
        <div style={{minHeight:'100vh',position:'relative',overflow:'hidden'}}>
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
        <img style={{
                display: 'block',
                position: 'absolute',
                height: '70vh',
                bottom: '-30px',
                right: '10px',
                animation: 'float 4s alternate-reverse infinite linear',
            }} src="https://64.media.tumblr.com/e5a5b6ffd839309f46196a167b9ba2c0/e932fba83010b72f-8b/s500x750/891bd572f85d91c6c5495a7af9b424041a3c47d7.png" />
        </div>
    )
}