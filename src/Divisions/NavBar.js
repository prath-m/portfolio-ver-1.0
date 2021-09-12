import React from 'react'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
          <div className="navBox">
              <ul>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#about'>About</a></li>
                  <li><a href='#work'>Work</a></li>
                  <li><a href='#'>Mood Board</a></li>
                  <li><a href='#social'>Social</a></li>
              </ul>
          </div>
          <div className="arrow"> {'<menu'}</div>
        </>
    )
}

