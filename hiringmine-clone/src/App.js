import Navbar from './Components/navbar/Navbar';
import ContentBody from './Components/ContentBody/ContentBody';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GetJobs, JobBox} from './Components/jobPage';
function App() {

  return (
   
     <Router>
     <Routes>
       <Route path="/" element={ <>
      <div>
        <Navbar />
      </div>
      <div>
        <ContentBody/>
      </div>
      <div>
        
      </div>
    </>} />
       <Route path="/jobs" element={<GetJobs />} />
       
     </Routes>
   </Router>
  );
}

export default App;
