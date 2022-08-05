import styled from 'styled-components'
import ReactDOM from 'react-dom';

import pattern from './assets/pattern-home.jpeg'
import dressmaker from './assets/dressmaker.webp'
import tools from './assets/tools-home.jpeg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <Carousel autoPlay="true" infiniteLoop="true" interval="5000">
    <Banner>
<PatternLeft>
  Find ready made patterns in a wide range of styles and sizes, originally drafted by pattern makers from all over the world!
</PatternLeft>
<PatternRight src={pattern}></PatternRight>
    </Banner>

    <Banner>
      <PatternRight src={dressmaker}></PatternRight>
<PatternLeft>
  Hire skilled dressmakers to bring your fashion dreams to life!
</PatternLeft>

    </Banner>

    <Banner>
<PatternLeft>
  Browse our catalogue of 200,000 products to meet your sewing needs.
</PatternLeft>
<PatternRight src={tools}></PatternRight>
    </Banner>
    </Carousel>
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

const Banner = styled.div`
height: 500px;
border: 3px solid green;
margin-top: 5rem;
display: flex;
justify-content: space-around
`

const PatternLeft = styled.div`
width: 50%;
height: 100%;
padding-left: 2rem;
display: flex;
// justify-content: center;
align-items: center;
font-size: 45px;
font-family: Comorant;
border: 3px solid blue;
text-align: center;
`

const PatternRight = styled.img`
height: 100%;
// border: 3px solid red;
border-radius: 20px;
`



const sliderData = [
  {image:"{pattern}",
  description: "Find ready made patterns in a wide range of styles and sizes, originally drafted by pattern makers from all over the world!"
},
{image:"{dressmaker}",
description: "Hire skilled dressmakers to bring your fashion dreams to life!"
},
{image:"{tools}",
description: "Browse our catalogue of 200,000 products to meet your sewing needs."
},
]