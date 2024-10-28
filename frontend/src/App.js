import Home from "./Components/Home/Home";
import SlideBar from "./Components/SlideBar/SlideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<><SlideBar/> <Home/></>}/>
            <Route path="/question" element={<><SlideBar/> <Home/></>}/>
            <Route path="/history" element={<><SlideBar/> <Home/></>}/>
          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;
