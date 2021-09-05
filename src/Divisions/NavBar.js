import React from 'react'
import './NavBar.css'
export const NavBar = () => {
    return (
        <>
          <div className="navBox">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Work</li>
                  <li>Mood Board</li>
                  <li>Social</li>
              </ul>
          </div>
          <div className="arrow"> {'<menu'}</div>
        </>
    )
}

