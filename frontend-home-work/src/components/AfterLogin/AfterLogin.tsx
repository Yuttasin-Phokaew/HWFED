import React from 'react'
// import { useHistory } from 'react-router-dom';
import Signin from '../Signin/Signin'
import ImageUploader from '../Signin/ImageUploader'
import './LoginStyle.css'



export default function AfterLogin() {
  
  return (
    <section id='afterlogin'>

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
              <a href='#' >
                    <div className='-profile'>
                      <div className='-photo'>
                          {/* <img src={image} alt='profile' /> */}
                      </div>
                      <div className='-icon'>
                        
                      </div>
                    </div>
              </a>
            </div>
        </div>
       
    </section>
  )
}


