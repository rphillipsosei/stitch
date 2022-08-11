import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart.jsx";
import Confirmation from "./Pages/Confirmation.jsx";
import Error from "./Pages/Error.jsx";
import Designers from "./Pages/Designers.jsx";
import Products from "./Pages/Products.jsx";
import Patterns from "./Pages/Patterns.jsx";
import {FaShoppingCart} from 'react-icons/fa'
import StitchLogo from './assets/stitch-logo.png'

function App() {
  return (
    <Router>
        <Nav align="right">
<Links>
      {/* <Link to="/"  style={{textDecoration: 'none'}}>HOME</Link> */}
        <Link to="/#"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>about</Link>
        <Link to="/#"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>contact developer</Link>
        <Link to="/#"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>faqs</Link>
        {/* <Link to="#"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}><FaShoppingCart/> (6)</Link> */}
      </Links>
      <Link to="/"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
      <Logo src={StitchLogo}/>
     </Link>
       <ButtonRow>
        <Button>register</Button>
        
        <Button>sign in</Button>
      </ButtonRow>
       </Nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Patterns" element={<Patterns />} />
        <Route path="/Designers" element={<Designers />} />
        <Route path="/Products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;




const Nav = styled.div`
padding: 0 5rem;
margin-top: 3rem;
  // border-bottom: 3px solid white;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Baloo 2';
  font-size: 16px;


  li {
    cursor: pointer;
    list-style-type: none;
  }
`;

const Logo = styled.img`
scale: 70%;
margin-left: -12rem;
 `

 const Links = styled.div`
  width: 25%;
  // border: 4px solid green;
  display: flex;
  justify-content: space-between;
`

const ButtonRow = styled.div`
  // width: 90vw;
  display: flex;
  // justify-content: flex-end;
  // border: 3px solid black
  margin: 1rem 0;
`;

const Button = styled.button`
  border: 1px solid white;
  height: 30px;
  margin-left: 0.5rem;
  border-radius: 7px;
  background-color: #FA785B;
  font-family: Baloo 2;
  width: 100px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  background-image: url("https://www.transparenttextures.com/patterns/grey-jean.png");

`;