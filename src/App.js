import './App.scss';
import TopBar from './components/topbar/TopBar';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Works from './components/works/Works.jsx'

function App() {
  return (
    <div className="app">
      <TopBar/>

        <div className="sections">
          <AboutMe />
          <Works />
        </div>
    </div>
  );
}

export default App;
