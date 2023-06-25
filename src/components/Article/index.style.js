import styled from 'styled-components';

export const StyleArticle=styled.div`
  .grid-item-media{
    overflow: hidden;
  }
  .grid-item-desc {
    padding: 20px 0;
  }

  .grid-item-desc h2 {
    margin: 0 0 20px 0;
  }

  .grid-item-desc h2 a {
    display: block;
  }

  .grid-item-desc h2 a span {
    display: block;
    line-height: 100%;
  }

  .grid-item-desc h2 a .grid-item-meta {
    color: #9d9c9c;
    font-family: "novecento_sans_widemedium";
    font-size: 12px;
  }

  .grid-item-desc h2 a .grid-item-title {
    color: #6d6d6d;
    font-family: "novecento_sans_widedemibold";
    font-size: 12px;
    padding: 10px 0 0 0;
  }

  p {
    color: #6d6d6d;
    font-size: 14px;
    line-height: 21px;
  }
  a img {
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      transition: all 0.5s linear;
  }
  a img:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
`