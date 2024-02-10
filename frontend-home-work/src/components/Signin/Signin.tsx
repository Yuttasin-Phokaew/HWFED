import React from 'react'
import './SigninStyle.css'

export default function Signin() {
  return (
    <section id='signin'>
        <div className='-sign-box'>
            <div className='-sign-content'>
                <div className='-sign-image'>
                    <img src='https://via.placeholder.com/64x64' alt='profile' />
                </div>

                <div className='-sign-input'>

                    <div className='-sign-item -item1'>
                        <p>Email</p>
                        {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}
                        <input type='' placeholder='Enter your email'/>
                    </div>
                    <div className='-sign-item -item2'>
                        <p>Password</p>
                        <input type='' placeholder='Enter your password'/>
                    </div>
                    <div className='-sign-item -item3'>
                        <p>Confirmed Password</p>
                        <input type='' placeholder='Enter your password'/>
                    </div><hr/>

                    <h1>Information</h1>

                    <div className='-sign-item -item4'>
                        <p>Company Name</p>
                        <input type='' placeholder='Enter company name'/>
                    </div>
                    <div className='-sign-item -item5'>
                        <p>Tax ID</p>
                        <input type='' placeholder='Enter Tax ID'/>
                    </div>
                    <div className='-sign-item -item6'>
                        <p>Full Name</p>
                        <input type='' placeholder='Enter full name'/>
                    </div>

                    <div className='-sign-item -item7'>
                        <p>Country</p>
                        <select className="-Thailand" id="Thailand" ><option value="Thailand">Thailand</option></select>
                    </div>
                    <div className='-sign-item -item8'>
                        <p>Phone Number</p>
                        <div className='-phone-number'>
                            <select className="-phone" id="phone" ><option value="-66">+66</option></select>
                            <input type='' placeholder='Enter phone number'/>
                        </div>

                    </div>
                    <div className='-sign-item -item9'>
                        <p>Website</p>
                        <input type='' placeholder='Enter website'/>
                    </div>

                    <div className='-sign-item -item10'>
                        <p>Address</p>
                        <input type='' placeholder='Enter Address'/>
                    </div>

                    <div className='-sign-item -item11'>
                        <p>State/Province</p>
                        <input type='' placeholder='Choose Province'/>
                    </div>
                    <div className='-sign-item -item12'>
                        <p>Sub-District</p>
                        <input type='' placeholder='Choose District'/>
                    </div>
                    
                    <div className='-sign-item -item13'>
                        <p>City/District</p>
                        <input type='' placeholder='Choose District'/>
                    </div>
                    <div className='-sign-item -item14'>
                        <p>Zip Code</p>
                        <input type='' placeholder='Choose Zip Code'/>
                    </div>

                </div>
                <div className='-sign-btn'>
                    <button className='-cancel'>Cancal</button>
                    <button className='-submit'>Submit</button>
                </div>
            </div>
        </div>
    </section>
  )
}
