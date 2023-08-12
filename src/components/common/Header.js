import { Link } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import useWindowSize from '../useWindowSize';
import { stickyNav } from '../utils';
import MobileMenu from './MobileMenu';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = ({ header, singleMenus }) => {
  useEffect(() => {
    stickyNav({ singleMenus });
  }, []);
  const { width } = useWindowSize();
  useEffect(() => {
    const headers = document.querySelectorAll('.header-navigation');
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add('breakpoint-on');
      } else {
        header.classList.remove('breakpoint-on');
      }
      // toggle
      const toggleBtn = header.getElementsByClassName('navbar-toggler')[0];
      const overlay = header.getElementsByClassName('nav-overlay')[0];
      const menu = header.getElementsByClassName('nav-menu')[0];
      toggleBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        menu.classList.add('menu-on');
      });
      overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        menu.classList.remove('menu-on');
      });
    });
  }, [width]);

  switch (header) {
    case 1:
      return <DefaultHeader singleMenus={singleMenus} />;
    case 2:
      return <DefaultHeader singleMenus={singleMenus} />;
    case 3:
      return <DefaultHeader singleMenus={singleMenus} />;
    case 4:
      return <DefaultHeader singleMenus={singleMenus} />;
    case 5:
      return <DefaultHeader singleMenus={singleMenus} />;
    default:
      return <DefaultHeader singleMenus={singleMenus} />;
  }
};
export default Header;

const DefaultHeader = ({ singleMenus }) => (
  <header className="header-area transparent-header">
    {/*= == Header Top-bar === */}
    {/* <div className="topbar-one bg-color-one">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            <div className="top-left">
              <span className="text">
                <i className="far fa-envelope" /> Correo :{" "}
                <span>
                  <a href="mailto:Billsupply.rd@gmail.com">Billsupply.rd@gmail.com</a>
                </span>
              </span>
              <span className="text">
                <i className="far fa-clock" /> Horario Laboral :
                <span>Lunes - Viernes, 08am - 07pm</span>
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="top-right float-lg-right">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/*= == Header Navigation === */}
    <div className="header-navigation navigation-one navigation-white">
      <div className="nav-overlay" />
      <div className="container-fluid">
        {/*= == Primary Menu === */}
        <div className="primary-menu">
          {/*= == Site Branding === */}
          <div className="site-branding">
            <Link legacyBehavior to="/">
              <a className="brand-logo default-logo">
                <img
                  src="assets/images/logo/billsupply logo horizontal.webp"
                  alt="Site Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior to="/">
              <a className="brand-logo default-sticky-logo">
                <img
                  src="assets/images/logo/billsupply logo horizontal.webp"
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          {/*= == Nav Inner Menu === */}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*= == Mobile Logo === */}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior to="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/billsupply logo horizontal.webp"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*= == Main Menu === */}
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <>
                  <Menus />
                  <MobileMenu />
                </>
              )}

              {/*= == Navbar Menu Button === */}
              <div className="menu-button pt-30">
                <Link legacyBehavior to="/sign-in">
                  <a className="main-btn btn-red">Acceder</a>
                </Link>
              </div>
            </div>
            {/*= == Nav right Item === */}
            <div className="nav-right-item d-flex align-items-center">
              {/*= == Header Top-bar 
              <div className="call-button">
                <span>
                  <i className="fas fa-headset" />
                  <a href="tel:+180065323">809-000-0000</a>
                </span>
              </div>
            === */}
              <div className="menu-button">
                <Link legacyBehavior to="/sign-in">
                  <a className="main-btn btn-red">Acceder</a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header3 = ({ singleMenus }) => (
  <header className="header-area transparent-header">
    {/*= == Header Navigation === */}
    <div className="header-navigation navigation-two navigation-white">
      <div className="nav-overlay" />
      <div className="container-fluid">
        {/*= == Primary Menu === */}
        <div className="primary-menu">
          {/*= == Site Branding === */}
          <div className="site-branding">
            <Link legacyBehavior to="/">
              <a className="brand-logo">
                <img
                  src="assets/images/logo/billsupply logo horizontal.webp"
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          {/*= == Nav Inner Menu === */}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*= == Mobile Logo === */}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior to="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/billsupply logo horizontal.webp"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <>
                  <Menus />
                  <MobileMenu />
                </>
              )}
              <div className="menu-button pt-30">
                <Link legacyBehavior to="/sign-in">
                  <a className="main-btn btn-blue">Acceder</a>
                </Link>
              </div>
            </div>
            {/*= == Nav right item === */}
            <div className="nav-right-item d-flex align-items-center">
              <div className="sign-in-button">
                <Link legacyBehavior to="/sign-up">
                  <a className="btn-link">Registrarse</a>
                </Link>
              </div>
              <div className="menu-button">
                <Link legacyBehavior to="/sign-in">
                  <a className="main-btn btn-blue">Acceder</a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Menus = () => (
  <>
    <nav className="main-menu d-none d-xl-block">
      <ul>
        {/* <li className="menu-item has-children">
          <a to={"/"} className="active">
            Portada
          </a>
        </li> */}
        <li className="menu-item">
          <Link legacyBehavior to="/about">
            Nosotros
          </Link>
        </li>
        {/* <li className="menu-item has-children">
          <a href="#">Servicios</a> */}
        {/* 
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="services">
                servicio 1
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="service-details">
                servicio 2
              </Link>
            </li>
          </ul>
        */}
        {/* </li> */}
        <li className="menu-item has-children">
          <a href="#">Marketplace</a>
          <div className="sub-menu mega-menu">
            <ul className="mega-menu-item">
              <li>
                <Link legacyBehavior to="#">
                  Pagos recurrentes
                </Link>
              </li>
              <li>
                <Link legacyBehavior to="#">
                  Servicios pospagos
                </Link>
              </li>
              <li>
                <Link legacyBehavior to="#">
                  Ecommerce
                </Link>
              </li>
            </ul>
            <ul className="mega-menu-item">
              <li>
                <Link legacyBehavior to="#">
                  Servicio prepago
                </Link>
              </li>
              <li>
                <Link legacyBehavior to="#">
                  Educacion
                </Link>
              </li>
              <li>
                <Link legacyBehavior to="#">
                  Estafeta
                </Link>
              </li>
            </ul>
          </div>
          {/* <ul >
            <li>
              <Link legacyBehavior href="team">
                Our Team
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="team-details">
                Team Details
              </Link>
            </li>
          </ul> */}
        </li>
        {/* <li className="menu-item has-children">
        <Link legacyBehavior href="sign-up">
                    Registrate
                  </Link>
          
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="career">
                Career
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="job-details">
                Job Details
              </Link>
            </li>
            <li className="has-children">
              <a href="#">Project</a>
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="project-3-column">
                    Project 3 Column
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="project-masonry">
                    Project Masonry
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="project-details">
                    Project Details
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="products">
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="testimonial">
                Testimonial
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faqs">
                Faqs
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="error-404">
                Page 404
              </Link>
            </li>
            <li className="has-children">
              <a href="#">User Pages</a>
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="sign-in">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="sign-up">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
       
        </li> */}
        {/*
        <li className="menu-item has-children">
          <a href="#">Blog</a>
          
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="blog-listing">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
        </li>
      */}

        <li className="menu-item">
          <Link legacyBehavior to="/contact">
            Ayuda
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

const SingleMenu = ({ menus }) => {
  return (
    <>
      <nav className="main-menu">
        <ul>
          {menus.map((menu, i) => (
            <li className="menu-item" key={i}>
              <a href={`#${menu.href}`} className="page-scroll nav-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
