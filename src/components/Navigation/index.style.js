import styled from 'styled-components';

import LinkBase from 'components/Link';
import Button from 'components/Button';
import {
  color,
  iconLookup,
} from 'common.style'

export const StyledLogo = styled(LinkBase)`
  color: ${color.grayLogoText};
  display: block;
  font-family: "novecento_sans_widedemibold";
  font-size: 21px;
  letter-spacing: 5px;
  line-height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 4px;
  text-decoration: none;
  &:hover {
    color: ${color.grayLogoText};
  }
`

export const StyledNavLinkItem = styled(LinkBase)`
  color: ${color.grayText};
  font-size: 12px;
  font-family: "novecento_sans_widedemibold";
  text-decoration: none;
  display: block;
  &:hover {
    color: currentColor;
  }
`

export const StyledHeader = styled.div`
  padding-top: 15px;
  @media (min-width: 768px) {
    padding-top: 35px;
    padding-bottom: 50px;
  }
  .header {
    &__brand {
      padding-top: 15px;
      padding-bottom: 15px;
      @media (min-width: 768px) {
        text-align: center;
      }
      @media (min-width: 1200px) {
        text-align: left;
      }
    }
    &__mobile-menu {
      display: flex;
      width: auto;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &-controls {
      list-style: none;
      padding-left: 0;
      text-align: center;
      @media (min-width: 1200px) {
        margin-bottom: 0;
      }
    }
    &-search,
    &-cart,
    &-actions {
      @media (min-width: 768px) {
        padding-right: 3px;
      }
    }
  }
  .row {
    align-items: center;
  }
  .toggle-nav {
    background-image: url(${iconLookup.barIcon});
    width: 20px;
    height: 20px;
    background-size: contain;
    display: inline-block;
    outline: none;
    border: 0;
  }
  .main-nav {
    border-top: 1px solid #dfdfdf;
    @media (min-width: 768px) {
      margin-bottom: 20px;
      border-bottom: 1px solid #dfdfdf;
    }
    @media (min-width: 1200px) {
      border-top: 0;
      border-bottom: 0;
      margin-bottom: 0;
    }
    &__list {
      list-style: none;
      padding-left: 0;
      @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        margin-bottom: 0;
      }
      @media (min-width: 1200px) {
        justify-content: flex-start;
      }
      &-item {
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #dfdfdf;
        @media (min-width: 768px) {
          padding-right: 40px;
          border-bottom: 0;
        }
      }
    }
  }
`

export const StyledButtonHeader = styled(Button)`
  display: inline-flex;
  align-items: center;
  background: #f0f0f0;
  color: #9d9c9c;
  padding: 7px 14px;
  line-height: 100%;
  font-size: 11px;
  border: 0;
  margin-bottom: 5px;
  &.button-search {
    &::before {
      content: "";
      display: block;
      background-image: url(${iconLookup.searchIcon || ''});
      background-repeat: no-repeat;
      width: ${({size}) => size || 0}px;
      height: ${({size}) => size || 0}px;
      padding-right: 20px;
    }
    &:hover {
      background: #6e6e6e;
      color: #fff;
      &::before {
        background-image: url(${iconLookup.searchIconWhite || ''});
      }
    }
  }
  &.button-logout {
    &::before {
      content: "";
      display: block;
      background-image: url(${iconLookup.lockIcon || ''});
      background-repeat: no-repeat;
      width: ${({size}) => size || 0}px;
      height: ${({size}) => size || 0}px;
      padding-right: 20px;
    }
    &:hover {
      background: #6e6e6e;
      color: #fff;
      &::before {
        background-image: url(${iconLookup.lockIconWhite || ''});
      }
    }
  }
  &.button-product {
    &::before {
      content: "";
      display: block;
      background-image: url(${iconLookup.cartIcon || ''});
      background-repeat: no-repeat;
      width: ${({size}) => size || 0}px;
      height: ${({size}) => size || 0}px;
      padding-right: 20px;
    }
    &:hover {
      background: #6e6e6e;
      color: #fff;
      &::before {
        background-image: url(${iconLookup.cartIconWhite || ''});
      }
    }
  }
`