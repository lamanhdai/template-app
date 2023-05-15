import styled from 'styled-components';

import LinkBase from 'components/Link';
import Button from 'components/Button';
import {
  color,
  iconLookup,
} from 'common.style'

export const StyledLogo = styled(LinkBase)`
  color: ${color.gray};
  display: block;
  font-family: "novecento_sans_widedemibold";
  font-size: 21px;
  letter-spacing: 5px;
  line-height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 4px;
`

export const StyledNavItem = styled.li`
  padding-right: 40px;
`

export const StyledNavLinkItem = styled(LinkBase)`
  color: ${color.grayLink};
  font-size: 12px;
  font-family: "novecento_sans_widedemibold";
`

export const StyledNav = styled.nav`
  padding: 30px 15px 5px;
  @media (min-width: 769px) {
    padding: 55px 15px;
  }
`

export const StyledButtonSearch = styled(Button)`
  display: inline-flex;
  align-items: center;
  background: #f0f0f0;
  color: #9d9c9c;
  padding: 7px 14px;
  line-height: 100%;
  margin-right: 3px;
  font-size: 11px;
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
`

export const StyledButtonLogout = styled(Button)`
  display: inline-flex;
  align-items: center;
  background: #f0f0f0;
  color: #9d9c9c;
  padding: 7px 14px;
  line-height: 100%;
  margin-right: 3px;
  font-size: 11px;
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
`