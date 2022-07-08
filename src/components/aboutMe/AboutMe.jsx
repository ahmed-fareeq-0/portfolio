// import icons
import {AiFillLinkedin , AiFillGithub, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri'

import './aboutMe.scss';

export default function AboutMe({Color}) {
  return (
    <div className='abouteMe' id='aboute'>
    <div style={{backgroundColor:`${Color}`}} className='info'>
      <h2>ahmed fareeq</h2>
      <p>Front End developer</p>
    </div>

      <div className='content'>
        <img src='/image/se2.jpg' alt='img' />

        
        
        <div className='boxCv'>
          
          <div className='socialMedia'>
          <a href='/'><BsTelegram className='icon'/></a>
          <a href='/'><AiFillInstagram className='icon'/></a>
          <a href='/'><RiWhatsappFill className='icon'/></a>
          <a href='/'><AiFillLinkedin className='icon'/></a>
          <a href='/'><AiOutlineTwitter className='icon'/></a>
          <a href='/'><AiFillGithub className='icon'/></a>
        </div>

          <p>Programmers projects in the free software development project began in the free software development project, creating access to a lot of information</p>
          <div className='contact'>
            <button style={{backgroundColor:`${Color}`}} className='btn'>contact</button>
            <button style={{backgroundColor:`${Color}`}} className='btn'>download cv</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
