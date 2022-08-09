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

function App() {
  return (
    <Router>
       <ButtonRow>
        <Button>REGISTER</Button>
        
        <Button>SIGN IN</Button>
      </ButtonRow>
      <HomeTitle>stitch</HomeTitle>
      <Nav align="right">
      {/* <Link to="/"  style={{textDecoration: 'none'}}>HOME</Link> */}
        <Link to="/Patterns"  style={{textDecoration: 'none', color: 'white'}}>shop patterns</Link>
        <Link to="/Designers"  style={{textDecoration: 'none', color: 'white'}}>commission a designer</Link>
        <Link to="/Products"  style={{textDecoration: 'none', color: 'white'}}>shop products</Link>
        <Link to="#"  style={{textDecoration: 'none', color: 'white'}}><FaShoppingCart/> (6)</Link>
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


const HomeTitle = styled.div`
  // border: 4px solid red;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Caveat;
  font-size: 200px;
  letter-spacing: 10px;
  color: white;
  transform: rotate(-10deg);
`;

const Nav = styled.div`

  // border-top: 3px dashed white;
  border-bottom: 3px dashed white;
  width: 93%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Caveat;
  font-size: 30px;
  // letter-spacing: 10px;
  padding-left: 3rem;
  padding-right: 3rem;

 

  li {
    cursor: pointer;
    list-style-type: none;
  }
`;


const ButtonRow = styled.div`
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  // border: 3px solid black
  margin: 1rem 0;
`;

const Button = styled.button`
  border: none;
  height: 30px;
  // margin-left: 0.5rem;
  border-radius: 7px;
  background-color: #FA785B;
  font-family: Caveat;
  width: 100px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;