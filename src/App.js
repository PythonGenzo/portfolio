import './App.css';
import ButtonAppBar from './AppBar';
import DrawerAppBar from './menu';

function App() {
  return (
    
    <div className="App">
     <DrawerAppBar/>
    {/* <ButtonAppBar/> */}

    <Home/>
    <Projects/>
    <About/>
    <Contact/>
    </div>
    

  );
}

function Home() {

  return(
    <div>This is home</div>
  );
}

function Projects() {

  return(
    <div>This is project</div>
  );
}

function About() {

  return(
    <div>This is About</div>
  );
}

function Contact() {

  return(
    <div>This is Contact</div>
  )
}

export default App;
