import styled from 'styled-components';
import BaseLink from 'components/Link';

export const StyledCollectionLink=styled(BaseLink)`
  a {
    display: block;
    overflow: hidden;
  }

  img {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }

  img:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .collection-desc {
    position: absolute;
    top: 37%;
    right: 15px;
    color: #fff;
    text-align: center;
    left: 15px;
    padding: 0 20px;
  }

  .collection-desc h2 {
    font-family: "novecento_sans_widebook";
    font-size: 30px;
    position: relative;
  }

  .collection-desc h2:after {
    background: #fff;
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    margin: 30px auto;
  }

  .collection-desc h3 {
    font-family: "novecento_sans_widemedium";
    font-size: 18px;
  }
`