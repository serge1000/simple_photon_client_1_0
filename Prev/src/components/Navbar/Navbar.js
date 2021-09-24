import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { auth } from '../../firebase/firebase.utils';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar( {currentUser} ) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#33393d' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              Simple Photon Client v1.0
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Product
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Pricing
                </NavLinks>
              </NavItem>
              <NavItem>              
                <NavLinks to='/gallery' onClick={closeMobileMenu}>
                  Gallery 
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/faq' onClick={closeMobileMenu}>
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>              
                <NavLinks to='/support' onClick={closeMobileMenu}>
                  Support 
                </NavLinks>
              </NavItem>
              { currentUser ? (
                    <NavItem>
                    <NavLinks to='/' onClick={() => { auth.signOut(); closeMobileMenu();}}> 
                    Log Out
                    </NavLinks>
                  </NavItem> 
                ) : (
                  <>
                    <NavItem>
                      <NavLinks to='/sign-up' onClick={closeMobileMenu}> 
                      Log In
                      </NavLinks>
                    </NavItem>                            
                    <NavItemBtn>
                      {button ? (
                        <NavBtnLink to='/sign-up'>
                          <Button primary>SIGN UP FOR FREE</Button>
                        </NavBtnLink>
                      ) : (
                        <NavBtnLink to='/sign-up'>
                          <Button onClick={closeMobileMenu} fontBig primary>
                          SIGN UP FOR FREE
                          </Button>
                        </NavBtnLink>
                      )}
                    </NavItemBtn>
                  </>
                )
              }
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
