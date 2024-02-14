import React, { useState } from 'react';
import { useNavigate  } from 'react-router';
import './SigninStyle.css'
import ImageUploader from './ImageUploader'
import Nav from '../Nav/Nav'

// export default function Signin() {

    // const loginForm = document.getElementById("file-input , email");
    // console.log(FileReader)

    // const [email, setEmail] = useState('');

    // const handleEmailChange = (e) => {
    //   setEmail(e.target.value);
    // };
  
    // const handleSubmit = () => {
    //   // ทำอะไรกับข้อมูลที่ได้รับ เช่น ส่งไปที่ API, นำไปแสดงผล, ฯลฯ
    //   console.log('Email:', email);
  
    //   // ตัวอย่างการนำไปหน้าถัดไป (ให้ทำการนำไปใช้ตามที่คุณต้องการ)
    //   // เช่น: history.push('/nextPage');
    //   history.push('/afterlogin', { email });
    // };

    const Signin: React.FC = () => {
        const [email, setEmail] = useState('');
        const navigate = useNavigate ();
      
        const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        };
      
        const handleSubmit = () => {
          // ทำอะไรกับข้อมูล email ที่ได้รับ เช่น ส่งไปที่ API, นำไปแสดงผล, ฯลฯ
          console.log('Email:', email);
      
          // ตัวอย่างการนำไปหน้าถัดไป (ให้ทำการนำไปใช้ตามที่คุณต้องการ)
          // เช่น: history.push('/nextPage', { email });
          history.push('/afterlogin', { email });
        };

  return (

    <section id='signin'>
    <Nav />
        <div className='-sign-box'>
            <div className='-sign-content'>
                <div className='-sign-image'>
                    <ImageUploader />
                </div>

                <div className='-sign-input'>

                    <div className='-sign-item -item1'>
                        <p>Email</p>
                        <input type='text' id='email' placeholder='Enter your email' value={email} onChange={handleEmailChange}/>
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
                    <a href='/afterlogin'>
                    <button className='-submit' type='text' onClick={handleSubmit}>Submit</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};
export default Signin;