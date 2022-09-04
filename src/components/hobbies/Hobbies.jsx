import  './styleHobbies.scss';



// import icon 
import {AiFillCamera} from 'react-icons/ai';
import {ImBook} from 'react-icons/im';
import {GiArtilleryShell} from "react-icons/gi";
import {IoIosColorPalette} from 'react-icons/io';


const Hobbies = ({Color}) => {



  return (
    <div className='hobbies' id='hobbies'>
      <h2 className='title'>Hobbies</h2>

        <div className='wrapper'>
            <div className='card'>
            <p>I have many hobbies, I will mention some of them</p>

            <div className='icons'>
                <ul>

                    <li><IoIosColorPalette className='icon' style={{color: `${Color}`}} /> Drawing</li>
                    <li><GiArtilleryShell className='icon' style={{color: `${Color}`}} /> Author</li>
                    <li><ImBook className='icon' style={{color: `${Color}`}} /> Reading</li>
                    <li><AiFillCamera className='icon' style={{color: `${Color}`}} /> Photography</li>
                    

                </ul>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Hobbies;
