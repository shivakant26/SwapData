
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import PageNotFound from './Component/PageNotFound';
import About from './Component/About';
import Swap from './Component/Swap';
import State from './Component/State';
function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/swap" element={<Swap/>}/>
         <Route path="/state" element={<State/>}/>
         <Route path="*" exact element={<PageNotFound/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
