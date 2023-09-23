import './App.css';
import React from 'react';
// import { createRef , Component} from 'react';
// import Aboutme from './Components/Aboutme';
// import Contactform from './Components/Contactform';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ProjectOne from './Components/ProjectOne';
import ProjectTwo from './Components/ProjectTwo';
import MySkills from './Components/MySkills';
// import Aboutmecontent from './Components/Aboutmecontent';
import Blogs from './Components/Blogs';
import BlogsContent from './Components/BlogsContent';
import ProjectThree from './Components/ProjectThree';
import ProjectFourth from './Components/ProjectFourth';
import ProjectFive from './Components/ProjectFive';
import Aboutme from './Components/Aboutme';
import Aboutmecontent from './Components/Aboutmecontent';
// import { ScrollerMotion } from 'scroller-motion';
// import SmoothScroll from './Components/SmoothScroll';

function App() {

  const projectref = React.createRef()
  const herosectionref = React.createRef()

  return (
    <>
      <div>
      <Navbar/>
      </div>
      <Herosection ref={herosectionref} heading1="Hello" heading2="I am Farhan Khan"
      para1="A passionate and motivated web" para2="developer . I am dedicated to creating"
      para3="user friendly , visually appealing and" para4="responsive website."/>
      <Projects ref={projectref}/>
      <div className='overflow-hidden'>
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <ProjectFourth/>
      <ProjectFive/>
      </div>
      <MySkills/>
      <div className='relative'>
      <Skills/>
      </div>
      <Blogs/>
      <BlogsContent/>
      <Aboutme/>
      <Aboutmecontent/>
    </>
  );
}

export default App;
