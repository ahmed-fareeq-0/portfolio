import './App.scss';
import TopBar from './components/topbar/TopBar';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Skills from './components/skills/skills.jsx'
import Projects from './components/projects/Projects';
import Hobbies from './components/hobbies/Hobbies';
import Contact from './components/contact/Contact';
import { useState } from 'react'


function App() {

  // ------------------------------------------------

  const [Color, setColor] = useState("#2196F3");

   setTimeout(() => {

     if (Color === "#2196F3") {
       setColor("#673AB7")
     } else if (Color === "#673AB7") {
       setColor("#49332b")
     } else {
       setColor("#2196F3")
     }

   }, 10000);

  // ---------------------------------------------------

  return (
    <div className="app">
      <TopBar Color={Color} />

      <div className="sections">
        <AboutMe Color={Color} />
        <Skills Color={Color} />
        <Projects Color={Color} />
        <Hobbies Color={Color} />
        <Contact Color={Color} />
      </div>
    </div>
  );
}

export default App;
