import React from 'react'
import Parallax from "react-rellax"
import './MyWork.css'
import { WorkCard } from './WorkCard'
export const MyWork = () => {
    return (
        <div id='work' className="workBody">
            <Parallax speed={0.5}><h1> my work?</h1></Parallax>
            <div className='workTab'>
                <div className='workLeft'>
                    <WorkCard title='First' description='lorem hsdfaasdfasasd' link='dfgh'/>
                    <WorkCard title='Second' description='lorem hsdfaasdfasasd' link='dfgh'/>
                    <WorkCard title='Third' description='lorem hsdfaasdfasasd' link='dfgh'/>                    <WorkCard title='Fourth' description='lorem hsdfaasdfasasd' link='dfgh'/>                    <WorkCard title='Fifth' description='lorem hsdfaasdfasasd' link='dfgh'/>                    <WorkCard title='Sixth' description='lorem hsdfaasdfasasd' link='dfgh'/>
                </div>
                <Parallax className='workRight' speed={-0.5}></Parallax>
            </div>
            <Parallax speed={-0.3}>
            <img style={{
                display: 'block',
                position: 'absolute',
                width: '70%',
                bottom: '0',
                left: '0',
                filter: 'grayscale(80%)',
                zIndex: 1,
                opacity: 0.7,
                // animation: 'float 4s alternate-reverse infinite linear',
            }} src="https://64.media.tumblr.com/cb013e738343a263879b37a83e328e9f/7c805ccca840b64e-10/s1280x1920/a2131006cf09c2d1609e90e7f77b4b2170c89e06.png" />
            </Parallax>
        </div>
    )
}
