import React from 'react'
import './NavStyle.css';
// import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <section id='nav'>

        <div className='-brand'>
          <div className='-ham'>
            <a href="/">
            <img  src='https://via.placeholder.com/64x64' alt='' />
            </a>
          </div>
        </div>

        <div className='-center'>
          <div className='-home'>
                <h1>Home</h1>
          </div>
        </div>

        <div className='-profile'>
            <div className='-profile-box'>
              <a href='/Signin'>
                    <button className='-sign'>Sign in</button>
              </a>
            </div>
        </div>
    </section>
  )
}