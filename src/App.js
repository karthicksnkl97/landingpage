import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './home';
import Products from './products';
import Contact from './contact';
import About from './about';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import "./media.css"

function Navbar(){
  const location = useLocation();
  return(
    <div className='navbar' >
      <div className='logo'>
        <div>
        <h4>Lakshmi group of companies</h4>
        </div>
     <div>
      <p>(Wire nails and allied products)</p>
      </div>
      </div>
      <div>
    <nav>
      <ul>
        <li>
      <NavLink className={"lists"} onChange={location.pathname === "/" ? "active" : ""} to={"/"}>Home</NavLink>
      </li>
      <li>
      <NavLink className={"lists"} onChange={location.pathname === "/products" ? "active" : ""} to={"/products"}>Products</NavLink>
      </li>
      <li>
      <NavLink className={"lists"} onChange={location.pathname === "/contact" ? "active" : ""} to={"contact"}>Contact us</NavLink>
      </li>
      <li>
      <NavLink className={"lists"} onChange={location.pathname === "/about" ? "active" : ""} to={"about"}>About</NavLink>
      </li>
      </ul>
    </nav>
    </div>
    </div>
  )
}
function VerticalBar(){
  const location = useLocation();
  return(
    <div className='verticalbar'>
      <nav>
        <NavLink className={"vertical-nav"} onChange={location.pathname === "/" ? "active" : ""} to={"/"}>
        <HomeIcon className='icon' />
        </NavLink>
        <NavLink className={"vertical-nav"} onChange={location.pathname === "/products" ? "active" : ""} to={"/products"}>
          <Inventory2Icon  className='icon' />
        </NavLink>
        <NavLink className={"vertical-nav"} onChange={location.pathname === "/contact" ? "active" : ""} to={"/contact"}>
          <CallIcon  className='icon' />
        </NavLink>
        <NavLink className={"vertical-nav"} onChange={location.pathname === "/about" ? "active" : ""} to={"/about"}>
          <InfoIcon  className='icon' />
        </NavLink>
      </nav>
    </div>
  )
}

function App() {
  return (
    <>
   <BrowserRouter>
    <Navbar />
    <VerticalBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
