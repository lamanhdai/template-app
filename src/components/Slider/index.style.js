import styled from 'styled-components';
import BaseLink from '../Link';
import {
  color
} from '../../common.style';

export const StyledSlider = styled.div`
  position: relative;
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
  .btn {
    margin-top: 20px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
  }
  .fader {
    overflow: hidden;
    padding-bottom: 20px;
    @media (min-width: 768px) {
      padding-bottom: 0;
    }
  }

  .fader__slide {
    float: left;
    position: relative;
    z-index: 1;
    opacity: 0;
    margin-right: -100%;
    width: 100%;
  }
  .dots {
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (min-width: 992px) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .dot {
    width: 12px;
    height: 20px;
    background-color: #fff;
    margin: 5px;
    border: 4px solid #444;
    &.active {
      background-color: #444;
      border: 4px solid #444;
      @media (min-width: 992px) {
        border: 4px solid #fff;
      }
    }
    @media (min-width: 992px) {
      border: 4px solid #fff;
    }
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
    padding: 15px;
    font-size: 14px;
  }
  @media (min-width: 992px) {
    padding: 25px 60px;
  }
`