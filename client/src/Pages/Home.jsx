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
        showArrows="false"
        showStatus="false"
        showThumbs="false"
      >
        <Banner>
          <CarouselImg src={pattern}></CarouselImg>
          <CarouselDesc>
            find ready made patterns in a wide range of styles and sizes,
            originally drafted by pattern makers from all over the world!
          </CarouselDesc>
        </Banner>

        <Banner>
          <CarouselImg src={dressmaker}></CarouselImg>
          <CarouselDesc>
            hire skilled dressmakers to bring your fashion dreams to life!
          </CarouselDesc>
        </Banner>

        <Banner>
          <CarouselImg src={tools}></CarouselImg>
          <CarouselDesc>
            browse our catalogue of 200,000 products to meet your sewing needs.
          </CarouselDesc>
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
  padding: 1rem;
  // border: 3px solid green;
  margin-top: 5rem;
  display: flex;
  // justify-content: space-around;
  flex-direction: column;
  flex-direction: row;
`;

const CarouselDesc = styled.div`
  width: 60%;
  // height: 100%;
  padding: 0.7rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  font-size: 25px;
  font-family: 'Baloo 2';
  // border-top: 3px dashed blue;
  // border-bottom: 3px dashed blue;
  // border-left: 3px dashed blue;
  margin-right: 1rem;
  text-align: center;
  border-radius: 20px;
  padding: 2rem;

 border: 2px dashed white;
  border-radius: 0px 40px 0px; 40px 
`;

const CarouselImg = styled.img`

  // border: 3px solid red;

  outline-offset: 5px;
outline: 2px dashed white;
border-radius: 40px 0px 40px 0px;
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
