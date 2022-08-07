import styled from "styled-components";
import ReactDOM from "react-dom";

import pattern from "./assets/pattern-home.jpeg";
import dressmaker from "./assets/dressmaker.webp";
import tools from "./assets/tools-home.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <HomeWrapper>
      <ButtonRow>
        <Button>REGISTER</Button>
        <Button>SIGN IN</Button>
      </ButtonRow>
      <HomeTitle>STITCH</HomeTitle>
      <Nav>
        <li>SHOP PATTERNS</li>
        <li>COMMISSION A DESIGNER</li>
        <li>SHOP PRODUCTS</li>
      </Nav>
      <Carousel
        width="100%"
        autoPlay="true"
        infiniteLoop="true"
        interval="5000"
      >
        <Banner>
          <PatternLeft>
            Find ready made patterns in a wide range of styles and sizes,
            originally drafted by pattern makers from all over the world!
          </PatternLeft>
          <PatternRight src={pattern}></PatternRight>
        </Banner>

        <Banner>
          <PatternLeft>
            Hire skilled dressmakers to bring your fashion dreams to life!
          </PatternLeft>
          <PatternRight src={dressmaker}></PatternRight>
        </Banner>

        <Banner>
          <PatternLeft>
            Browse our catalogue of 200,000 products to meet your sewing needs.
          </PatternLeft>
          <PatternRight src={tools}></PatternRight>
        </Banner>
      </Carousel>
      <Header> 🔥 HOT PATTERNS 👗</Header>
      <HotSection />
      <Header>HOT DESIGNERS 🔥💁</Header>
      <HotSection />
      <Header>HOT PRODUCTS 🔥✂️</Header>
      <HotSection />
      <Newsletter>
        Join our Newletter!
      </Newsletter>
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
  margin: 1rem;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonRow = styled.div`
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  // border: 3px solid black
`;

const Button = styled.button`
  border: 3px solid black;
  height: 30px;
  margin-left: 0.5rem;
  background-color: white;
  border-radius: 7px;
`;

const HomeTitle = styled.div`
  // border: 4px solid red;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Comorant;
  font-size: 80px;
  letter-spacing: 10px;
`;

const Nav = styled.div`
  border-top: 3px dashed red;
  border-bottom: 3px dashed orange;
  width: 600px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Comorant;
  font-size: 18px;
  // letter-spacing: 10px;
  padding-left: 3rem;
  padding-right: 3rem;

  li {
    cursor: pointer;
    list-style-type: none;
  }
`;

const Banner = styled.div`
  height: 500px;
  // border: 3px solid green;
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
`;

const PatternLeft = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.7rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: Comorant;
  border-top: 3px dashed blue;
  border-bottom: 3px dashed blue;
  border-left: 3px dashed blue;
  margin-right: 1rem;
  text-align: center;
  border-radius: 20px;
`;

const PatternRight = styled.img`
  // height: 100%;
  border: 3px solid red;
  border-radius: 20px;
  width: 400px;
  // border-top: 3px dashed red;
  // border-bottom: 3px dashed red;
  // border-left: 3px dashed red;
`;

const Header = styled.h1`
  font-family: Comorant;
`;

const HotSection = styled.div`
  width: 100%;
  border: 4px solid black;
  height: 300px;
`;

const Newsletter = styled.div`
margin-top: 5rem;
height: 300px;
width: 100%;
border-top: 3px solid black;
border-bottom: 3px solid black;
padding-top: 1rem;
font-family: Comorant;
font-size: 25px;
display: flex;
justify-content: center;
`;
