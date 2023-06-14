import styled from 'styled-components';
import BaseLink from '../Link';
import {
  color
} from '../../common.style';

export const StyledSlider = styled.div`
  --swiper-pagination-top: 80%;
  --swiper-pagination-bullet-size: 20px;
  --swiper-pagination-bullet-inactive-color: #ffffff;
  --swiper-pagination-bullet-border-radius: 0;
  --swiper-pagination-bullet-inactive-opacity: 1;
`

export const StyledButton = styled(BaseLink)`
  
  background: ${color.white};
  font-family: "novecento_sans_widemedium";
  display: table;
  margin: 10px auto 0;
  padding: 25px 60px;
  border: none;
  color: ${color.grayText};
  text-decoration: none;
  &:hover {
    background: #111;
    color: #fff;
  }
`