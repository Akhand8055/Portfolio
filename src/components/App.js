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
import bhs from '../images/bhsLogo.png';
import iiitm from '../images/iiitmLogo.jpg';
import vid from "../images/vid.mp4"


let content = "A MERN web app with full fledged authentication on which users can vote movies in a contest which runs for 24 hours everyday. Users can search for movies, watch trailer, see the movies nominated by them and also the leaderboard for current contest. After every 24 hours, a new contest begins with a new leaderboard."

function App() {
  return (
    <div className="App">
      <div>
        <video id="background-video" autoPlay loop muted >
          <source src={vid} type="video/mp4" />
        </video>
        <Navbar />
        <Description />
        <button id='hire'>Hire Me !</button>
      </div>
      <h1 className='heading' id='projects'>Projects</h1>
      <Card img={AGmovies} content={content} value="right" heading="AGmovies" orientation="horizontal" />
      <Card img={portfolio} content={content} value="left" heading="Portfolio" orientation="horizontal" />
      <Card img={digitalNotes} content={content} value="right" heading="Digital-Notes" orientation="horizontal" />
      <h1 className='heading' id='skillset'>Skills</h1>
      <Skill />
      <h1 className='heading' id='education'>Education</h1>
      <Card img={iiitm} content={content} value="left" heading="ABV-IIITM" orientation="vertical" />
      <Card img={bhs} content={content} value="right" heading="Boys' High School & College" orientation="vertical" />
      <h1 className='heading' id='contactMe'>Contact me</h1>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
