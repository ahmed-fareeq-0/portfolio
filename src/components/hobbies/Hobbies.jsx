import  './styleHobbies.scss';



// import icon 
import {AiFillCamera} from 'react-icons/ai';
import {ImBook} from 'react-icons/im';
import {GiArtilleryShell} from "react-icons/gi";
import {IoIosColorPalette} from 'react-icons/io';


const Hobbies = () => {



  return (
    <div className='hobbies'>
      <h2 className='title'>Hobbies</h2>

        <div className='wrapper'>
            <div className='card'>
            <p>هناك الكثير من الهوايات التي أفضل أن أتسلى بها أثناء فترة فراغي وسأذكر بعضاً منها</p>

            <div className='icons'>
                <ul>

                    <li><IoIosColorPalette className='icon' /> Drawing</li>
                    <li><GiArtilleryShell className='icon' /> Author</li>
                    <li><ImBook className='icon' /> Reading</li>
                    <li><AiFillCamera className='icon' /> Photography</li>
                    

                </ul>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Hobbies;
