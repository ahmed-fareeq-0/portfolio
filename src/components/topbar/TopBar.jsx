import  './styleTopBar.scss';



export default function TopBar({Color}) {
  return (
    <div style={{backgroundColor:`${Color}`}} className='topbar'>
      <div className='wrapper'>
        <ul className='nav'>
          <li><a href="/"> Aboute </a></li>
          <li><a href="/"> Projects </a></li>
          <li><a href="/"> Skills </a></li>
          <li><a href="/"> Hobbies </a></li>
          <li><a href="/"> Contact </a></li>
        </ul>
      </div>
    </div>
  );
}
