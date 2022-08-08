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

function App() {
  return (
    <Router>
       <ButtonRow>
        <Button>REGISTER</Button>
        <Button>SIGN IN</Button>
      </ButtonRow>
      <Nav>
      <Link to="/"  style={{textDecoration: 'none'}}>HOME</Link>
        <Link to="/Patterns"  style={{textDecoration: 'none'}}>SHOP PATTERNS</Link>
        <Link to="/Designers"  style={{textDecoration: 'none'}}>COMMISSION A DESIGNER</Link>
        <Link to="/Products"  style={{textDecoration: 'none'}}>SHOP PRODUCTS</Link>
      
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
  border-top: 3px dashed red;
  border-bottom: 3px dashed orange;
  // width: 600px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Caveat;
  font-size: 18px;
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
  border: 3px solid black;
  height: 30px;
  margin-left: 0.5rem;
  background-color: white;
  border-radius: 7px;
`;