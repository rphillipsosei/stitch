import styled from "styled-components";
import pattern from "../assets/patterns-home.jpeg";
import dressmaker from "../assets/dressmaker-home.jpg";
import tools from "../assets/tools-home.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <HomeWrapper>
 <TitleBanner>
    

      <Carousel
        width="100%"
        autoPlay="true"
        infiniteLoop="true"
        interval="5000"
      >
        <Banner>
          <PatternRight src={pattern}></PatternRight>
          <PatternLeft>
            Find ready made patterns in a wide range of styles and sizes,
            originally drafted by pattern makers from all over the world!
          </PatternLeft>
        </Banner>

        <Banner>
          <PatternRight src={dressmaker}></PatternRight>
          <PatternLeft>
            Hire skilled dressmakers to bring your fashion dreams to life!
          </PatternLeft>
        </Banner>

        <Banner>
          <PatternRight src={tools}></PatternRight>
          <PatternLeft>
            Browse our catalogue of 200,000 products to meet your sewing needs.
          </PatternLeft>
        </Banner>
      </Carousel>
      </TitleBanner>
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

export default Home;

const HomeWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBanner = styled.div`
display: flex;
width: 70%;
height: 600px;
// justify-content: center;
// border: 3px solid blue;
flex-direction: column;
// align-items: center;
// justify-content: center;
`




const Banner = styled.div`
  height: 490px;
  // border: 3px solid green;
  margin-top: 5rem;
  display: flex;
  // justify-content: space-around;
  flex-direction: column;
  flex-direction: row;
`;

const PatternLeft = styled.div`
  width: 100%;
  // height: 100%;
  padding: 0.7rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  font-size: 25px;
  font-family: Caveat;
  // border-top: 3px dashed blue;
  // border-bottom: 3px dashed blue;
  // border-left: 3px dashed blue;
  margin-right: 1rem;
  text-align: center;
  border-radius: 20px;
  padding: 2rem;
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
  font-family: Caveat;
`;

const HotSection = styled.div`
  width: 100%;
  border: 4px solid black;
  height: 300px;
`;

const Newsletter = styled.div`
margin-top: 5rem;
height: 250px;
width: 100%;
border-top: 3px solid black;
border-bottom: 3px solid black;
padding-top: 1rem;
font-family: Caveat;
font-size: 25px;
display: flex;
justify-content: center;
`;
