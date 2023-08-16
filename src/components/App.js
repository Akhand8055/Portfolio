import './App.css';
import Navbar from './navbar';
import Card from './card';
import Description from './description';
import Skill from './skill';
import Contact from './contact';
import Footer from './footer';
import AGmovies from '../images/AGmovies.png';
import digitalNotes from '../images/digitalNotes.png';
import portfolio from '../images/Portfolio.png';

let content = "Hello I am Akhand Pratap Mall and I am currently pursuing B.Tech from ABV IIITM"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <button id='hire'>Hire Me !</button>
      <h1 className='heading' id='projects'>Projects</h1>
      <Card img={AGmovies} content={content} value="right" heading="AGmovies"/>
      <Card img={portfolio} content={content} value="left" heading="Portfolio"/>
      <Card img={digitalNotes} content={content} value="right" heading="Digital-Notes"/>
      <h1 className='heading' id='skillset'>Skills</h1>
      <Skill />
      <h1 className='heading' id='education'>Education</h1>
      <Card img={AGmovies} content={content} value="left" heading="ABV-IIITM"/>
      <Card img={AGmovies} content={content} value="right" heading="Boys' High School & College"/>
      <h1 className='heading' id='contactMe'>Contact me</h1>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
