import Home from "./Components/Home/Home";
import SlideBar from "./Components/SlideBar/SlideBar";
import QAComponent from "./Components/QAComponent/QAComponent";
import Slider from './Components/Slider/Slider'
import QAList from './Components/QAList/QAList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<><SlideBar/> <Home/> <Slider/></>}/>
            <Route path="/question" element={<> <SlideBar/><Home/> <QAComponent/></>}/>
            <Route path="/history" element={<><SlideBar/> <Home/><QAList/></>}/>
          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;
