import './App.css';
import Home from './Pages/Home/Home';
import Adventures from './Pages/Adventures/Adventures'
import Courses from './Pages/Courses/Courses'
import Fitprep from './Pages/Fitprep/Fitprep'
import Mission from './Pages/Mission/Mission'
import Team from './Pages/Team/Team'
import Blog from './Pages/Blog/Blog'
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/adventures' element={<Adventures/>} />
          <Route exact path='/fitprep' element={<Fitprep/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/mission' element={<Mission/>} />
          <Route exact path='/team' element={<Team/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
