
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/Aboutme/About';
import Es from './components/Experienceandskills/Es';

function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      

     <div>
       <Home />
     </div>
     <div>
       <About />
     </div>
     <div>
       <Es />
     </div>
    </div>
    
  );
}

export default App;
