import styled from "styled-components";
import pattern from "../assets/patterns-home.png";
import dressmaker from "../assets/dressmaker-home.png";
import tools from "../assets/tools-home.png";
import {useRef} from 'react'





function Home() {
  return (
    <HomeWrapper>
      <Banner>
<BannerText>
  a place where all of your sewing fantasies come to life! <br></br>  browse amongst hundreds of designers to create your vision, peruse our thousands of sewing-related products, and find sewing patterns that speak to your personal style!
</BannerText>
        <BannerImgs>
<BannerImg src={dressmaker}/>
<BannerImg src={tools}/>
<BannerImg src={pattern}/>
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
      <HomeBody>
        hii
      </HomeBody>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
width: 100%
display: flex;
flex-direction: column;
align-items: center;

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
padding-left: 5rem;
padding-right: 5rem;
`  




const BannerText = styled.div`
font-family: Baloo 2;
font-size: 30px;
display: flex;
margin-top: 2rem;
justify-content: center;
wrap: wrap;

`

const BannerImgs = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
// border: 3px solid  black;
`
const BannerImg = styled.img`
scale: 70%;
// outline: 3px solid white;
// border: 3px solid white;
outline-offset: 15px;
// border-style: double;
`

const HomeBody = styled.div`
background-color: beige;
width: 100%;
height: 50vh;
`

