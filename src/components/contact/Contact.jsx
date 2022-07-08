import './styleContact.scss';

import { ImLocation } from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Contact = ({Color}) => {
    return (
        <div className='Contact' id='contact'>



            <div className='wrapper'>

                <div className='boxLeft'>
                    <div>
                        <div className='item'>
                            <ImLocation className='icon' style={{color: `${Color}`}}/>
                            <h3>Addrese</h3>
                            <p>Iraq, Karbala</p>
                        </div>

                        <div className='item'>
                            <FaPhoneAlt className='icon' style={{color: `${Color}`}}/>
                            <h3>Phone</h3>
                            <p>07715503646</p>
                        </div>

                        <div className='item'>
                            <MdEmail className='icon' style={{color: `${Color}`}}/>
                            <h3>Email</h3>
                            <p>ahmed.fareeq.0@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='boxRight'>
                    <form>

                        <h2 style={{color: `${Color}`}}>Send us a message</h2>
                        <p>if you have any work from me, you can send me message from here . it is my pleasure to help you . </p>
                        <input className='fixed' type="text" placeholder='Enter Your Name' />
                        <input className='fixed' type="text" placeholder='Enter Topic' />
                        <input className='fixed' type="number" placeholder='Enter Phone Number' />
                        <textarea className='fixed' name="comment" form="usrform" placeholder='Enter Text Massege'></textarea>
                        <button style={{backgroundColor: `${Color}`}} >Send Now</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Contact;
