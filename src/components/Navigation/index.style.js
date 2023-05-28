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

export const StyledNavItem = styled.li`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  @media (min-width: 769px) {
    padding-right: 40px;
    padding-top: 0;
    padding-bottom: 0;
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
  .header {
    &__brand {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &__mobile-menu {
      width: auto;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &-controls {
      list-style: none;
      padding-left: 0;
      text-align: center;
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
  }
  .main-nav {
    border-top: 1px solid #dfdfdf;
    @media (min-width: 769px) {
      margin-bottom: 20px;
      border-bottom: 1px solid #dfdfdf;
    }
    @media (min-width: 991px) {
      border-top: 0;
      border-bottom: 0;
    }
    &__list {
      list-style: none;
      padding-left: 0;
    }
  }

  /* .button-nav {
    display: inline-block;
    @media (min-width: 769px) {
      display: flex;
    }
    &__item {
      margin-right: 3px;
      margin-bottom: 5px;
      @media (min-width: 769px) {
        margin-bottom: 0;
      }
    }
  } */
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

export const StyledMainNav = styled.ul`
  @media (min-width: 991px) {
    margin-left: 80px;
  }
`