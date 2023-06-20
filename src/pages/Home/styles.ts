import { keyframes, styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const backgroundSlideAnimation = keyframes`
  0% {
    background-position: 50% 50%;
    background-size: 200% 200%;
  }
  50% {
    background-position: 0% 100%;
    background-size: 150% 150%;
  }
  100% {
    background-position: 50% 50%;
    background-size: 200% 200%;
  }
`;

export const Hero = styled.section`
  height: calc(100vh - 5rem);
`;

export const Slider = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const Slides = styled(SwiperSlide)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: white;

  h3 {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    padding: 5rem;
    object-fit: contain;
  }
`;

export const SlideDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, white, white, #febd69);
  background-size: 200% 200% !important;
  animation: ${backgroundSlideAnimation} 19s ease-in-out infinite alternate both;
`;

export const ProductTitle = styled.h3`
  text-align: right;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const COT = styled.button`
  all: unset;
  background-color: #2773ff;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 5px;
  cursor: pointer;
`;
