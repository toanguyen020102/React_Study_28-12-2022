import { Nav, Navbar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {
    const [userlink, setuserlink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }

            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const OnupdateActive = (title) => {
        setuserlink(title)
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="NQT" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home" className={userlink === "Home" ? "active-navbar-link bluecolor transitionNavLink" : "navbar-link"} onClick={() => OnupdateActive('Home')} >Home</Nav.Link>
                        <Nav.Link href="#Skill" className={userlink === "Skill" ? "active-navbar-link bluecolor transitionNavLink" : "navbar-link"} onClick={() => OnupdateActive('Skill')}>Skill</Nav.Link>
                        <Nav.Link href="#Project" className={userlink === "Project" ? "active-navbar-link bluecolor transitionNavLink" : "navbar-link"} onClick={() => OnupdateActive('Project')}>Project</Nav.Link>
                        <Nav.Link href="#About" className={userlink === "About" ? "active-navbar-link bluecolor transitionNavLink" : "navbar-link"} onClick={() => OnupdateActive('About')}>About</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href='#'> <img src={navicon1} alt="" /> </a>
                            <a href='#'> <img src={navicon2} alt="" /> </a>
                            <a href='#'> <img src={navicon3} alt="" /> </a>
                        </div>
                        {/* <HashLink to='#connect'>
                                <button className="vvd">
                                    <span>Let's Connect</span></button>
                            </HashLink> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}