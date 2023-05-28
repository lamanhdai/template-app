import {
  StyledFooter,
  StyledFooterTitle,
  StyleAddress,
  StyledFooterLink,
  StyledFooterNavItem,
  StyledFooterButton
} from './index.style';
import BaseInput from 'components/Input'

export default function Footer () {
  return (
    <StyledFooter className="container md:flex">
      <div className="footer-column basis-1/4">
        <StyledFooterTitle>ADDRESS</StyledFooterTitle>
        <StyleAddress>
          <p className="mb-4">COMPANY LLC</p>
          <p className="mb-4">946 Park Ave<br/>New York, NY 10021</p>
          <p>office@indigo.com<br/>(445) 932 459 934</p>
        </StyleAddress>
      </div>
      <div className="footer-column basis-1/4">
        <StyledFooterTitle>CUSTOMER SERVICE</StyledFooterTitle>
        <ul>
          <StyledFooterNavItem><StyledFooterLink to={'/'}>About us</StyledFooterLink></StyledFooterNavItem>
          <StyledFooterNavItem><StyledFooterLink to={'/'}>Help center</StyledFooterLink></StyledFooterNavItem>
          <StyledFooterNavItem><StyledFooterLink to={'/'}>Delivery</StyledFooterLink></StyledFooterNavItem>
          <StyledFooterNavItem><StyledFooterLink to={'/'}>Payment</StyledFooterLink></StyledFooterNavItem>
        </ul>
      </div>
      <div className="footer-column basis-2/4">
        <StyledFooterTitle>FOLLOW US</StyledFooterTitle>
        <form noValidate>
          <div className="flex">
            <div className="basis-2/3">
              <BaseInput type='email' placeholder='Enter your email ...' />
            </div>
            <div className="basis-1/3">
              <StyledFooterButton>SUBSCRIBE</StyledFooterButton>
            </div>
          </div>
        </form>
      </div>
    </StyledFooter>
  )
}