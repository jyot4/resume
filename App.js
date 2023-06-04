// import logo from './logo.svg';
import './App.css';
import Background from './images/background.jpg'
import Resume from './images/resume-craft-logo.png'
// import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
// import DemoComponent from './DemoComponent';
import{Route, Switch } from 'react-router-dom'
import About from './About';
  


function App() {
  return (
    <>
      <div className=" container" >
        <div className="App">
          <img src={Resume} />
          <header>Resume-craft

          </header>
          <h3>The Resume that gets the job(Done)</h3>
          <p className='para'>Standing-out,Professional,Recruiter-approved. Ready in mintues with our step by step builder</p>
          <button>Create My Resume</button>


          {/* <footer className="Footer"> */}
          <div className="contact-info">
            <p >
             contact us :- 0808-184-0354</p>
          </div>
          {/* </footer> */}
        </div>

        <div className="Background-image">
          <img src={Background} />
        </div>
      </div>
      {/* <About/ */}
    </>
    // <DemoComponent />

  );
}

export default App;
