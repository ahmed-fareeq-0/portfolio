import './App.scss';
import TopBar from './components/topbar/TopBar';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Skills from './components/skills/skills.jsx'

function App() {
  return (
    <div className="app">
      <TopBar/>

        <div className="sections">
          <AboutMe />
          <Skills />
        </div>
    </div>
  );
}

export default App;
