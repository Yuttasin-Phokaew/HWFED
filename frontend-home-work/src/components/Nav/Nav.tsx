import React from 'react'
import './NavStyle.css'

export default function Nav() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
      
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
  return (
    <section id='nav'>

        <div className='-brand'>
          <div className='-ham'>
            <img src='https://via.placeholder.com/64x64' alt='' />
          </div>
        </div>

        <div className='-center'>
          <div className='-home'>
                <h1>Home</h1>
          </div>
        </div>

        <div className='-profile'>
            <div className='-profile-box'>
                    <button className='-sing'>Sing in</button>
            </div>
        </div>
    </section>
  )
}