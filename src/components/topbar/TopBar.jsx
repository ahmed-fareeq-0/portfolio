import  './styleTopBar.scss';

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <ul className='nav'>
          <li><a href="/"> Aboute Me </a></li>
          <li><a href="/"> Projects </a></li>
          <li><a href="/"> skills </a></li>
          <li><a href="/"> identities </a></li>
          <li><a href="/"> call us </a></li>
        </ul>
      </div>
    </div>
  );
}
