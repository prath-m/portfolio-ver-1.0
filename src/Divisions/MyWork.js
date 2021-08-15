import React from 'react'
import Parallax from "react-rellax"
import './MyWork.css'
import {MediaCard} from './MediaCard'

export const MyWork = () => {
    return (
        <div className="WorkBody">
            <Parallax speed={0.5}><h1> my work?</h1></Parallax>

            <div className="workTab">
                <Parallax speed={-0.5}><h2>2021</h2></Parallax>
                <Parallax speed={-0.52}>
                    <MediaCard 
                    name="Gandhi" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>
                <Parallax speed={-0.55}>
                    <MediaCard 
                    name="Water and AI" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>
                <Parallax speed={-0.5}>
                    <MediaCard 
                    name="Gandhi" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>       
            </div>

            <div className="workTab">
                <Parallax speed={-0.5}><h2>2020</h2></Parallax>
                <Parallax speed={-0.52}>
                    <MediaCard 
                    name="Gandhi" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>
                <Parallax speed={-0.55}>
                    <MediaCard 
                    name="Water and AI" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>
                <Parallax speed={-0.5}>
                    <MediaCard 
                    name="Gandhi" 
                    url="" 
                    descreption="loremsdbsdffdfg"
                    />
                </Parallax>                
            </div>
        </div>
    )
}
