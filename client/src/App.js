import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register'
import Cart from './Pages/Cart.jsx'
import Confirmation from './Pages/Confirmation.jsx'
import Error from './Pages/Error.jsx'



function App() {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/Confirmation" element={<Confirmation/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
    </Router>
  );
}

export default App;

