import { useState } from 'react';
// import Button from 'components/Button';
import { 
  StyledLogo,
  StyledNavLinkItem,
  StyledHeader,
  StyledButtonHeader,
} from './index.style'

export default function Navigation () {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMobileMenu = () => {
    console.log('a');
    setMenuOpened(!menuOpened)
  }
  return (
    <StyledHeader className="header">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="header__brand col col-md-2 m-md-auto">
            <StyledLogo to={'/'} title="Indigo" className="logo">Logo</StyledLogo>
          </div>
          <div className="header__mobile-menu d-md-none ml-auto">
            <button className="toggle-nav" onClick={openMobileMenu}></button>
          </div>
          <div className={`col-xl-6 px-md-0 ${menuOpened ? '' : 'd-none d-md-block'}`}>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__list-item"><StyledNavLinkItem to="shop.html">New collection</StyledNavLinkItem></li>
                <li className="main-nav__list-item"><StyledNavLinkItem to="shop.html">Catalog</StyledNavLinkItem></li>
                <li className="main-nav__list-item"><StyledNavLinkItem to="shop.html">Promotion</StyledNavLinkItem></li>
                <li className="main-nav__list-item"><StyledNavLinkItem to="shop.html">Gift card</StyledNavLinkItem></li>
              </ul>
            </nav>
          </div>

          <div className={`justify-content-center col-xl-4 ${menuOpened ? 'd-flex' : 'd-none d-md-flex'}`}>
            <ul className="header-controls d-md-flex">
              <li className="header-search">
                <StyledButtonHeader className="reveal-search button-search" size="15">
                   Search
                </StyledButtonHeader>
                <div className="search-wrapper d-none">
                  <form className="search-form">
                      <input placeholder="Search..." type="text"/>
                  </form>                
                </div>
              </li>
              <li className="header-cart">
                <StyledButtonHeader to="cart.html" title="view cart" className="button-product" size="15">
                  <span className="fa fa-shopping-cart"></span>
                  <span className="cart-count">3 Products,</span>
                  <span className="cart-amount">$780.00</span>
                </StyledButtonHeader>                
              </li>
              <li className="header-actions">
                <StyledButtonHeader title="Log out" className="button-logout" size="15"><span className="fa fa-lock"></span> Log out</StyledButtonHeader>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </StyledHeader>
  )
}