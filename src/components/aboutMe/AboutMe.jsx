// import icons
import {AiFillLinkedin , AiFillGithub, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri'

import './aboutMe.scss';

export default function AboutMe({Color}) {
  return (
    <div className='abouteMe'>
    <div style={{backgroundColor:`${Color}`}} className='info'>
      <h2>ahmed fareeq</h2>
      <p>Front End developer</p>
    </div>

      <div className='content'>
        <img src='/image/se2.jpg' alt='img' />

        
        
        <div className='boxCv'>
          
          <div className='socialMedia'>
          <a href='/'><BsTelegram color={Color} className='icon'/></a>
          <a href='/'><AiFillInstagram color={Color} className='icon'/></a>
          <a href='/'><RiWhatsappFill color={Color} className='icon'/></a>
          <a href='/'><AiFillLinkedin color={Color} className='icon'/></a>
          <a href='/'><AiOutlineTwitter color={Color} className='icon'/></a>
          <a href='/'><AiFillGithub color={Color} className='icon'/></a>
        </div>

          <p>بدأت كمطور واجهة امامية حالماً في تحقيق الكثير في عالم التكنولوجيا وهندسة البرمجيات ومن ثم قمت بالتعاون مع اصدقاء مبرمجين لتطوير مواقع الويب ساهمت في كسبنا انا والأصدقاء الكثير من المعلومات ثم انضممت الى مجتمع مبرمجين العرب وكان التحدي البرمجة لمدة 365 يوم بدون توقف او انقطاع</p>
          <div className='contact'>
            <button style={{backgroundColor:`${Color}`}} className='btn'>contact</button>
            <button style={{backgroundColor:`${Color}`}} className='btn'>download cv</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
