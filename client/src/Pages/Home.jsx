import styled from "styled-components";
import pattern from "../assets/patterns-home.jpeg";
import dressmaker from "../assets/dressmaker-home.jpg";
import tools from "../assets/tools-home.jpeg";
import {useRef} from 'react'
import {Navigation, EffectFade} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';



function Home() {
  return (
    <HomeWrapper>
<Swiper
modules={[Navigation, EffectFade]}
navigation
effect
speed={800}
slidesPerView={1}
loop
styles={MySwiper}
>
  <SwiperSlide
  styles={SwiperSlide}>
    <img src={tools}/>
  </SwiperSlide>
  <SwiperSlide
  styles={SwiperSlide}>
    <img src={dressmaker}/>
  </SwiperSlide>
  <SwiperSlide
  styles={SwiperSlide}>
    <img src={pattern}/>
  </SwiperSlide>
  </Swiper>
      {/* <Header> 🔥 HOT PATTERNS 👗</Header>
      <HotSection />
      <Header>HOT DESIGNERS 🔥💁</Header>
      <HotSection />
      <Header>HOT PRODUCTS 🔥✂️</Header>
      <HotSection />
      <Newsletter>
        Join our Newletter!
      </Newsletter> */}
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`

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



// const Header = styled.h1`
//   font-family: Caveat;
// `;

// const HotSection = styled.div`
//   width: 100%;
//   border: 4px solid black;
//   height: 300px;
// `;

// const Newsletter = styled.div`
// margin-top: 5rem;
// height: 250px;
// width: 100%;
// border-top: 3px solid black;
// border-bottom: 3px solid black;
// padding-top: 1rem;
// font-family: Caveat;
// font-size: 25px;
// display: flex;
// justify-content: center;
// `;


const MySwiper = {

}

const SwiperSlide = {

}