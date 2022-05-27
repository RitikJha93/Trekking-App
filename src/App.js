import './App.css';
import Home from './Pages/Home/Home';
import Adventures from './Pages/Adventures/Adventures'
import Courses from './Pages/Courses/Courses'
import Fitprep from './Pages/Fitprep/Fitprep'
import Mission from './Pages/Mission/Mission'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import Team from './Pages/Team/Team'
import Blog from './Pages/Blog/Blog'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import {React,useState} from 'react'
function App() {

  const [img,setImg] = useState('')
  const [name,setName] = useState('')
  const [height,setHeight] = useState('')
  const [duration,setDuration] = useState('')
  const [desc,setDesc] = useState('')
  const [info,setInfo] = useState('')
  const [tpimg,setTpimg] = useState('')


  const id = (name,img,height,duration,desc,info,tpimg)=>{
    setImg(img);
    setHeight(height);
    setDuration(duration);
    setName(name);
    setDesc(desc);
    setInfo(info);
    setTpimg(tpimg);

  }

  console.log(img);
  console.log(height);
  console.log(duration);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home id={id}/> } />
          <Route exact path='/adventures' element={<Adventures/>} />
          <Route exact path='/fitprep' element={<Fitprep/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/mission' element={<Mission/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          {/* <Route exact path='/pay' element={<Pay/>} /> */}
          <Route exact path='/user' element={<Profile/>} />
          <Route exact path='/info'  element={<Info img={img} height={height} duration={duration} name={name} desc={desc} info={info} tpimg={tpimg}/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
