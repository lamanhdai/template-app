import { useState } from 'react';
import Button from 'components/Button';
import { 
  StyledLogo,
  StyledNavItem,
  StyledNavLinkItem,
  StyledNav,
  StyledButtonHeader,
  StyledMainNav,
} from './index.style'

export default function Navigation () {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMobileMenu = () => {
    console.log('a');
    setMenuOpened(!menuOpened)
  }
  return (
    <StyledNav className="bg-white">
      <div className="container flex flex-wrap items-center md:justify-center">
        <StyledLogo url="https://flowbite.com/" className="flex items-center logo">
          <span className="self-center whitespace-nowrap">Logo</span>
        </StyledLogo>
        <div className="flex md:order-2 ml-auto">          
          <Button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" onClick={openMobileMenu}>
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </Button>
        </div>
        <div className={`main-nav items-center justify-between md:flex md:justify-center md:order-1 w-full lg:w-auto ${!menuOpened ? 'hidden' : ''}`}>
          {/* <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div> */}
          <StyledMainNav className="flex flex-col md:flex-row">
            <StyledNavItem>
              <StyledNavLinkItem url="#" className="block" aria-current="page">Home</StyledNavLinkItem>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLinkItem url="#" className="block" aria-current="page">Menu 1</StyledNavLinkItem>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLinkItem url="#" className="block" aria-current="page">Menu 2</StyledNavLinkItem>
            </StyledNavItem>
          </StyledMainNav>
        </div>
        <div className={`text-center md:flex md:order-2 w-full md:w-auto ${!menuOpened ? 'hidden' : ''}`}>
          <ul className="button-nav">
            <li className="button-nav__item">
              <StyledButtonHeader className="button-search" size={15}>SEARCH</StyledButtonHeader>
            </li>
            <li className="button-nav__item">
              <StyledButtonHeader className="button-product" size={15}>3 Products, $34</StyledButtonHeader>
            </li>
            <li className="button-nav__item">
              <StyledButtonHeader className="button-logout" size={15}>LOG OUT</StyledButtonHeader>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  )
}