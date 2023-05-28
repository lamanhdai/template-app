import styled from 'styled-components'
import LinkBase from 'components/Link';
import BaseButton from 'components/Button'

import {
  color,
} from 'common.style'

export const StyledFooter = styled.footer`
  padding: 0 15px;
  @media (min-width: 769px) {
    padding: 100px 15px;
    border-top: 1px solid #dfdfdf;
  }
  .footer-column {
    padding: 40px 0;
    border-top: 1px solid #dfdfdf;
    @media (min-width: 769px) {
      padding: 0;
      border-top: 0;
    }
  }
`

export const StyledFooterTitle = styled.div`
  font-size: 12px;
  color: #6d6d6d;
  font-family: "novecento_sans_widedemibold";
  margin-bottom: 16px;
`

export const StyleAddress = styled.div`
  font: normal 16px arial, "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif
`

export const StyledFooterNavItem = styled.li`
  padding-bottom: 24px;
`

export const StyledFooterLink = styled(LinkBase)`
  color: ${color.grayText};
  font-size: 14px;
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
