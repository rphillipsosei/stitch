import { useState } from 'react'
import styled from "styled-components";
import patterns from "../assets/patterns.webp";
import dressmaker from "../assets/dressmaker.webp";
import products from "../assets/products.webp";
import dressmakerOverlay from "../assets/dressmaker-overlay.jpg";
import patternsOverlay from "../assets/patterns-overlay.jpg";
import productsOverlay from "../assets/products-overlay.jpg";
import { Link } from "react-router-dom";
import Designers from "../Pages/Designers.jsx";
import Products from "../Pages/Products.jsx";
import Patterns from "../Pages/Patterns.jsx";

function Home() {

  const [mouseOver, setMouseOver] = useState(false)


  const handleMouseOver = () => {
    setMouseOver(true)
  }

  const handleMouseLeave = () => {
    setMouseOver(!mouseOver)
  }

  return (
    <HomeWrapper>
      <Banner>
        <BannerText>
        <i>...where all of your sewing fantasies come to life! </i>
 
        </BannerText> 
        <BannerImgs>

 <Link to="/Patterns"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {mouseOver? <BannerImg src={patternsOverlay}/> : <BannerImg src={patterns}/>}
        
          </ImgContainer></Link>

        <Link to="/Designers"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {mouseOver? <BannerImg src={dressmakerOverlay}/> : <BannerImg src={dressmaker}/>}
     
          </ImgContainer></Link>


          <Link to="/Products"  style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>
          <ImgContainer onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {mouseOver? <BannerImg src={productsOverlay}/> : <BannerImg src={[products]}/>}
   
          </ImgContainer></Link>

          
         
        </BannerImgs>
      </Banner>
   
      <HomeBody>
   <Header> 🔥 HOT PATTERNS 👗</Header>
      <HotSection />
      <Header>HOT DESIGNERS 🔥💁</Header>
      <HotSection />
      <Header>HOT PRODUCTS 🔥✂️</Header>
      <HotSection />
      <Newsletter>
        Join our Newletter!
      </Newsletter>

      </HomeBody>
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
  margin: 0rem 5rem;
  // margin-bottom: 5rem;
  justify-content: center;
  // border: 3px solid black;
  align-items: center;
  flex-direction: column;
    margin-bottom: 7rem;
  // p {
  //   font-family: 'Baloo 2';
  //   font-size: 20px;

  // }
`;

const BannerImgs = styled.div`
  width: 90%;
  height: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 3px solid black;
  
`;

const ImgContainer = styled.div`
  // border: 3px solid white;
  // height: 100%;
  width: 400px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  border-radius: 180px;
`;



const BannerImg = styled.img`
  border: 3px solid white;
  border-radius: 180px;
  max-height: 350px;
  max-width: 350px;
  margin-bottom: 1rem;
  outline: 3px solid white;
  outline-offset: 20px;
`;

const HomeBody = styled.div`
  background-color: beige;
  width: 99.1vw;
  // height: 50vh;
  margin-left: -0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;


const HotSection = styled.div`
border: 3px solid black;
height: 400px;
width: 90%;
margin-bottom: 4rem;
`
const Header = styled.div`
color: black;
font-family: 'Baloo 2';
font-size: 25px;

`

const Newsletter = styled.div`
color: black;
font-family: 'Baloo 2';
`
