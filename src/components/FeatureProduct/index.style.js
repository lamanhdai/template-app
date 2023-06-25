import styled from 'styled-components';
import BaseLink from 'components/Link';

export const StyledFeatureProduct = styled.div`
  .feature-product__media {
    overflow: hidden;
    text-align: center;
  }

  .feature-product__media img {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }

  .feature-product__media img:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .feature-product__desc {
    padding: 20px 0;
  }

  .feature-product__desc h2 {
    color: #6d6d6d;
    font-family: "novecento_sans_widedemibold";
    font-size: 15px;
    text-align: center;
  }

  .feature-product__desc h2 a {
    display: block;
    position: relative;
    text-decoration: none;
  }

  .feature-product__desc h2 a hr {
    color: #ccc;
    position: absolute;
    right: 0;
    left: 0;
    top: -8px;
    display: block;
    height: 1px;
    opacity: 1;
  }

  .feature-product__desc h2 span {
    color: #9d9c9c;
    display: block;
    font-family: "novecento_sans_widemedium";
    z-index: 1;
  }

  .feature-product__desc h2 span.feature-product__meta {
    background: #fff;
    font-size: 12px;
    display: table;
    margin: auto;
    padding: 0 10px;
    position: relative;
  }

  .feature-product__desc h2 span.feature-product__title {
    color: #6d6d6d;
    padding: 15px 0;
  }

  .feature-product__desc h2 span.feature-product__price {
    font-size: 14px;
  }

  .feature-product__media>a {
    display: block;
    overflow: hidden;
  }

  .feature-product__media>a img {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }

  .feature-product__media>a img:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
`

export const StyledProductLink = styled(BaseLink)`
`