import styled from "styled-components";
import pattern from "../assets/patterns-home.png";
import dressmaker from "../assets/dressmaker-home.png";
import tools from "../assets/tools-home.png";
import { Link } from "react-router-dom";
import Designers from "../Pages/Designers.jsx";
import Products from "../Pages/Products.jsx";
import Patterns from "../Pages/Patterns.jsx";

function Home() {
  return (
    <HomeWrapper>
      <Banner>
        <BannerText>
        <i>where all of your sewing fantasies come to life! </i><br></br>
        
        </BannerText> <Button>create an account</Button>
        <BannerImgs>
        <Link to="/Designers"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer>
            <BannerImg src={dressmaker} />
            commission a designer
          </ImgContainer></Link>
          <Link to="/Products"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer>
            <BannerImg src={tools} />
            shop products
          </ImgContainer></Link>
          <Link to="/Patterns"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer>
            <BannerImg src={pattern} />
            shop patterns
          </ImgContainer></Link>
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
  font-family: caveat;
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
  margin-bottom: 1rem;
`;

const HomeBody = styled.div`
  background-color: beige;
  width: 99.1vw;
  height: 50vh;
  margin-left: -0.5rem;
`;


const Button = styled.button`
  border: 1px solid white;
  height: 40px;
  border-radius: 7px;
  background-color: #FA785B;
  font-family: Baloo 2;
  width: 160px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 2rem;
  background-image: url("https://www.transparenttextures.com/patterns/grey-jean.png");
  margin-left: 1rem;
  margin-top: 0.7rem;
`;