import styled from 'styled-components'
import LinkBase from 'components/Link';
import BaseButton from 'components/Button'

import {
  color,
} from 'common.style'

export const StyledFooter = styled.footer`
  .container {
    @media (min-width: 769px) {
      padding: 100px 0;
      border-top: 1px solid #dfdfdf;
    }
  }
  .footer {
    &-column {
      padding: 40px 0;
      border-top: 1px solid #dfdfdf;
      @media (min-width: 769px) {
        padding: 0;
        border-top: 0;
      }
    }
    &__nav {
      padding-left: 0;
      margin-bottom: 0;
      &-item {
        list-style-type: none;
        padding-bottom: 24px;
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
    &__address {
        font: normal 16px/30px arial, "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
        &-line {
          margin-bottom: 30px;
        }
      }
      &__title {
        font-size: 12px;
        color: #6d6d6d;
        font-family: "novecento_sans_widedemibold";
        margin-bottom: 20px;
      }
  }
`

export const StyledFooterLink = styled(LinkBase)`
  color: ${color.grayText};
  font-size: 14px;
  text-decoration: none;
  &:before {
    content: '-';
    padding-right: 5px;
  }
`

export const StyledFooterButton = styled(BaseButton)`
  background-color: ${color.grayLogoText};
  color: ${color.white};
  font-size: 14px;
  padding: 15px 0;
  border: 0;
`
export const StyledAddress = styled.div`
  background: #f0f0f0;
  color: #9d9d9d;
  font-size: 14px;
  padding: 40px 0;
  text-align: center;
`