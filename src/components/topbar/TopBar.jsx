import  './styleTopBar.scss';



export default function TopBar({Color}) {
  return (
    <div style={{backgroundColor:`${Color}`}} className='topbar'>
      <div className='wrapper'>
        <ul className='nav'>
          <li><a href="#aboute"> Aboute </a></li>
          <li><a href="#skills"> Skills </a></li>
          <li><a href="#projects"> Projects </a></li>
          <li><a href="#hobbies"> Hobbies </a></li>
          <li><a href="#contact"> Contact </a></li>
        </ul>
      </div>
    </div>
  );
}
