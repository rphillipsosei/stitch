import styled from 'styled-components'

function App() {
  return (
    <HomeTitle> 
      STITCH
    </HomeTitle>
  );
}

export default App;


const HomeTitle = styled.div`
border: 4px solid red;
height: 300px;
width: 99.6vw;
display: flex;
justify-content: center;
align-items: center;
font-family: Comorant;
font-size: 80px;
letter-spacing: 10px;
`