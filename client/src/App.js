import styled from 'styled-components'

function App() {
  return (
    <HomeWrapper>
    <HomeTitle> 
      STITCH
    </HomeTitle>
    <Nav>
<li>SHOP PATTERNS</li>
<li>COMMISSION A DESIGNER</li>
<li>SHOP PRODUCTS</li>
    </Nav>
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
margin: 1rem;
`

const HomeTitle = styled.div`
// border: 4px solid red;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
font-family: Comorant;
font-size: 80px;
letter-spacing: 10px;
`

const Nav = styled.div`
border-top: 3px solid black;
border-bottom: 3px solid black;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
font-family: Comorant;
font-size: 18px;
// letter-spacing: 10px;
padding-left: 3rem;
padding-right: 3rem;

li  {
  cursor: pointer;
 list-style-type: none;
}
`