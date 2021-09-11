import React from 'react'
import Parallax from "react-rellax"
import './MyWork.css'
import { WorkCard } from './WorkCard'
export const MyWork = () => {
    return (
        <div className="workBody">
            <Parallax speed={0.5}><h1> my work?</h1></Parallax>
            <div className='workTab'>
                <div className='workLeft'>
                    <WorkCard title='First' description='lorem hsdfaasdfasasd' link='dfgh'/>
                    <WorkCard title='Second' description='lorem hsdfaasdfasasd' link='dfgh'/>
                </div>
                <Parallax className='workRight' speed={-0.5}></Parallax>
            </div>
        </div>
    )
}
