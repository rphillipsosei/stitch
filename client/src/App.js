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
        <Nav align="right">
<Links>
      {/* <Link to="/"  style={{textDecoration: 'none'}}>HOME</Link> */}
        <Link to="/Patterns"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>shop patterns</Link>
        <Link to="/Designers"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>commission a designer</Link>
        <Link to="/Products"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>shop products</Link>
        {/* <Link to="#"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}><FaShoppingCart/> (6)</Link> */}
      </Links><HomeTitle>stitch</HomeTitle>
     
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


const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Caveat;
  font-size: 70px;
  letter-spacing: 10px;
  color: white;
  position: relative;
  right: 5%
`;

const Nav = styled.div`
margin-top: 2rem;
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
`;