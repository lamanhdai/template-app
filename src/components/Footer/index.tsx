import {
  StyledFooter,
  StyledFooterLink,
  StyledFooterButton
} from './index.style';
import BaseInput from 'components/Input'

export default function Footer () {
  return (
    <StyledFooter className="footer">
      <div className="container-xl d-md-flex">
        <div className="footer-column col-md-3">
          <div className="footer__title">ADDRESS</div>
          <div className="footer__address">
            <p className="footer__address-line">COMPANY LLC</p>
            <p className="footer__address-line">946 Park Ave<br/>New York, NY 10021</p>
            <p className="mb-0">office@indigo.com<br/>(445) 932 459 934</p>
          </div>
        </div>
        <div className="footer-column col-md-3">
          <div className="footer__title">CUSTOMER SERVICE</div>
          <ul className="footer__nav">
            <li className="footer__nav-item"><StyledFooterLink to={'/'}>About us</StyledFooterLink></li>
            <li className="footer__nav-item"><StyledFooterLink to={'/'}>Help center</StyledFooterLink></li>
            <li className="footer__nav-item"><StyledFooterLink to={'/'}>Delivery</StyledFooterLink></li>
            <li className="footer__nav-item"><StyledFooterLink to={'/'}>Payment</StyledFooterLink></li>
          </ul>
        </div>
        <div className="footer-column col-md-6">
          <div className="footer__title">FOLLOW US</div>
          <form noValidate>
            <div className="row mx-0">
              <div className="col-8 px-0">
                <BaseInput type='email' placeholder='Enter your email ...' />
              </div>
              <div className="col-4 px-0">
                <StyledFooterButton>SUBSCRIBE</StyledFooterButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledFooter>
  )
}