import styled from "styled-components";
import pattern from "../assets/patterns-home.png";
import dressmaker from "../assets/dressmaker-home.png";
import tools from "../assets/tools-home.png";
import dressmakerOverlay from "../assets/dressmaker-overlay.png";
import { useRef } from "react";

function Home() {
  return (
    <HomeWrapper>
      <Banner>
        <BannerText>
        <i>where all of your sewing fantasies come to life! </i><br></br>
        
        </BannerText> <Button>get started</Button>
        <BannerImgs>
          <ImgContainer>
            <BannerImg src={dressmaker} />
            commission a designer
          </ImgContainer>
          <ImgContainer>
            <BannerImg src={tools} />
            shop products
          </ImgContainer>
          <ImgContainer>
            <BannerImg src={pattern} />
            shop patterns
          </ImgContainer>
        </BannerImgs>
      </Banner>
      {/* <Header> 🔥 HOT PATTERNS 👗</Header>
      <HotSection />
      <Header>HOT DESIGNERS 🔥💁</Header>
      <HotSection />
      <Header>HOT PRODUCTS 🔥✂️</Header>
      <HotSection />
      <Newsletter>
        Join our Newletter!
      </Newsletter> */}
      <HomeBody>hii</HomeBody>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
width: 100%
display: flex;
// flex-direction: column;
// align-items: center;

`;

const Banner = styled.div`
  // width: 90%;
  height: 700px;
  // border: 4px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
  padding: 0 5rem;
`;

const BannerText = styled.div`
  font-family: baloo 2;
  font-size: 40px;
  display: flex;
  margin: 2rem 5rem;
  justify-content: center;
  // border: 3px solid black;
`;

const BannerImgs = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 3px solid black;
`;

const ImgContainer = styled.div`
  // border: 3px solid white;
  height: 420px;
  width: 400px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
`;

const BannerImg = styled.img`
  // border: 3px solid red;
  max-height: 350px;
  max-width: 350px;
`;

const HomeBody = styled.div`
  background-color: beige;
  width: 99.1vw;
  height: 50vh;
  margin-left: -0.5rem;
`;


const Button = styled.button`
  border: 1px solid white;
  height: 30px;
  border-radius: 7px;
  background-color: #FA785B;
  font-family: Baloo 2;
  width: 100px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 2rem;
  background-image: url("https://www.transparenttextures.com/patterns/grey-jean.png");

`;