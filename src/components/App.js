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
import vid from "../images/vid.mp4";

let content1 = "A fully responsive MERN stack web application with full fledged authentication and authorization using JSON Web Token. Here users can vote movies in a contest which runs 24 hrs everyday. Users can search for movies, watch trailer, see the movies nominated by them and also the leaderboard for current contest. After every 24 hours, a new contest begins with a new leaderboard."
let content2 = "A fully responsive React based website which consists of only frontend portion. This is a Portfolio website which I use to demonstrate my Projects, Skills and Education. This website can be useful for the recruiters to look into my hard work and get a glimpse about me."
let content3 = "A fully responsive web application based on only HTML, CSS and JavaScript. This is a Notes Keeping Web application where users can Sign in to write down their notes. Users can create, edit and delete notes according to their choice. I have used jsonwebtoken for authentication and authorization, I have also used bcrypt.js to encrypt the passwords stored in our database."
let content4 = "Currently I am a student at Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior. I am pursuing B.Tech in Information Technology and my graduation year is 2025. Here, I have studied some of the core subjects of Information Technology such as - Operating System, DBMS, Computer Networks and Object Oriented Programming."
let content5 = "I have completed my Secondary and Senior Secondary education from Boys' High School and College, Prayagraj. This school is affiliated to ICSE and ISC Board. Here I achieved excellence in Academics with securing 93% in class X Board Exams and 89.6% in class XII Board Exams. I also participated in many sports and extra curricular activities such as Badminton, Swimming, Elocutions, Creative Writing Competitions and many more."

function App() {
  window.addEventListener("scroll",()=>{

    let project=document.getElementById("projects").getBoundingClientRect();
    let skills=document.getElementById("skillset").getBoundingClientRect();
    let education=document.getElementById("education").getBoundingClientRect();
    let about=document.getElementById("contactMe").getBoundingClientRect();
    let footer=document.getElementById("footer").getBoundingClientRect();
    let bookmark=document.getElementById("bookmark").getBoundingClientRect();

    let navPro=document.getElementById("navPro");
    let navEdu=document.getElementById("navEdu");
    let navAbout=document.getElementById("navAbout");
    let navSkill=document.getElementById("navSkill");

    if(education.top<0){
      if(bookmark.top<50){
        navAbout.classList.add("bold")
        navEdu.classList.remove("bold");
        navSkill.classList.remove("bold");
        navPro.classList.remove("bold");
      }else{
        navEdu.classList.add("bold");
        navSkill.classList.remove("bold");
        navPro.classList.remove("bold");
        navAbout.classList.remove("bold");
      }
    }else if(skills.top<0){
      navSkill.classList.add("bold");
      navPro.classList.remove("bold");
      navAbout.classList.remove("bold");
      navEdu.classList.remove("bold");
    }else if(project.top<0){
      navPro.classList.add("bold");
      navAbout.classList.remove("bold");
      navEdu.classList.remove("bold");
      navSkill.classList.remove("bold");
    }else{
      navPro.classList.remove("bold");
      navAbout.classList.remove("bold");
      navEdu.classList.remove("bold");
      navSkill.classList.remove("bold");
    }
    // console.log(footer.top);
  })
  


  return (
    <div className="App">
      <div>
        <video id="background-video" autoPlay loop muted >
          <source src={vid} type="video/mp4" />
        </video>
        <Navbar />
        <Description />
        <a href = "mailto: akhandmall8055@gmail.com"><button id='hire'>Hire Me !</button></a>
      </div>
      <h1 className='heading' id='projects'>Projects</h1>
      <Card img={AGmovies} content={content1} value="right" heading="AGmovies" orientation="horizontal" live="Live" repo="Repo" liveLink="https://agmovies.netlify.app/" repoLink="https://github.com/Akhand8055/AGmovie_frontend.git"/>
      <Card img={portfolio} content={content2} value="left" heading="Portfolio" orientation="horizontal" live="Live" repo="Repo" liveLink="" repoLink="https://github.com/Akhand8055/Portfolio.git"/>
      <Card img={digitalNotes} content={content3} value="right" heading="Digital-Notes" orientation="horizontal" live="Live" repo="Repo" liveLink="https://digital-notes.onrender.com/" repoLink="https://github.com/Akhand8055/Digital-Notes.git"/>
      <h1 className='heading' id='skillset'>Skills</h1>
      <Skill />
      <h1 className='heading' id='education'>Education</h1>
      <Card img={iiitm} content={content4} value="left" heading="ABV-IIITM" orientation="vertical" live="Visit" repo="" liveLink="https://www.iiitm.ac.in/index.php/en/" repoLink=""/>
      <Card img={bhs} content={content5} value="right" heading="Boys' High School & College" orientation="vertical" live="Visit" repo="" liveLink="https://boyshighschool.com/" repoLink=""/>
      <div id='bookmark'></div>
      <h1 className='heading' id='contactMe'>About me</h1>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
