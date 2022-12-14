import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<LandingPage/>} />
        </Routes>
      </Router>
      
    
  );
}

export default App;
