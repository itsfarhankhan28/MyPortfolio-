import './App.css';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Herosection heading1="Hello" heading2="I am Farhan Khan"
      para1="A passionate and motivated web" para2="developer . I am dedicated to creating"
      para3="user friendly , visually appealing and" para4="responsive website."/>
    </>
  );
}

export default App;
