import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Icon1 from '../../images/IsseLogo1.png';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavIcon
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              <NavIcon src={Icon1}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='skill'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='project'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='github'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Github
                </NavLinks>
              </NavItem>
              <NavItem >
                <NavLinks>
                  <NavBtn onClick={toggleHome} to='/contact'>
                    Contact Me 
                  </NavBtn>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Navbar;
