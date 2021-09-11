import React from 'react'

export const WorkCard = ({title, description, link}) => {
    return (
        <div className='workCard'>
            <h2 style={{fontWeight:'600'}}>{title}</h2>
            <div>{description}</div>
            <a href="">{link}</a>
        </div>
    )
}