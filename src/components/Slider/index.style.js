import styled from 'styled-components';
import BaseLink from '../Link';
import {
  color
} from '../../common.style';

export const StyledSlider = styled.div`
    --swiper-pagination-bullet-border-radius: 0;
    --swiper-pagination-bullet-inactive-color: #444;
    --swiper-pagination-bullet-size: 20px;
  @media (min-width: 768px) {
    --swiper-pagination-top: 80%;
    --swiper-pagination-bullet-inactive-color: #ffffff;
    --swiper-pagination-bullet-inactive-opacity: 1;
  }
  .slider__text {
    color: ${color.grayText};
    @media (min-width: 768px) {
      color: ${color.white};
    }
  }
  .slider__product {
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 60px;
    }
  }
  .columns {
    @media (min-width: 768px) {
      position: absolute;
      top: 65%;
      transform: translate(0 ,-65%);
    }
  }
  .swiper-pagination {
    @media (min-width: 768px) {
      top: 85%;
    }
  }
  .btn {
    margin-top: 20px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
  }
  .swiper-wrapper {
    padding-bottom: 60px;
  }
`

export const StyledButton = styled(BaseLink)`
  background: #444;
  font-family: "novecento_sans_widemedium";
  display: table;
  margin: 10px auto 0;
  padding: 5px 10px;
  border: none;
  color: ${color.white};
  text-decoration: none;
  &:hover {
    background: #111;
    color: #fff;
  }
  @media (min-width: 768px) {
    background: ${color.white};
    color: #444;
    padding: 25px 60px;
    font-size: 14px;
  }
`