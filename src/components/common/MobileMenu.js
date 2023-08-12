import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [multiMenu, setMultiMenu] = useState('');
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? '' : value);
  const activeLi = (value) =>
    value === activeMenu ? { display: 'block' } : { display: 'none' };
  const multiMenuSet = (value) =>
    setMultiMenu(multiMenu === value ? '' : value);
  const multiMenuActiveLi = (value) =>
    value === multiMenu ? { display: 'block' } : { display: 'none' };
  return (
    <>
      <nav className="main-menu d-block d-xl-none mobile-menu">
        <ul>
          {/* <li className="menu-item has-children">
            <a href="#">Portada</a>
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
              <i className="far fa-angle-down" />
            </span>
          </li> */}
          <li className="menu-item">
            <Link legacyBehavior to="/about">
              Nosotros
            </Link>
          </li>
          {/* <li className="menu-item has-children">
            <a href="#">Servicios</a>
            
            <ul className="sub-menu" style={activeLi("services")}>
              <li>
                <Link legacyBehavior href="services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="service-details">
                  Service Details
                </Link>
              </li>
            </ul>
         
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("services")}
            >
              <i className="far fa-angle-down" />
            </span>
          </li> */}
          <li className="menu-item has-children">
            <a href="#">Marketplace</a>

            <ul className="sub-menu" style={activeLi('team')}>
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

            <span className="dd-trigger" onClick={() => activeMenuSet('team')}>
              <i className="far fa-angle-down" />
            </span>
          </li>
          {/* <li className="menu-item has-children">
            <Link legacyBehavior href="sign-up">
            REGISTRATE
                  </Link>
            <span className="dd-trigger" onClick={() => activeMenuSet("pages")}>
              <i className="far fa-angle-down" />
            </span>
          </li> */}
          {/* 
          <li className="menu-item has-children">
            <a href="#">News</a>
            <ul className="sub-menu" style={activeLi("blog")}>
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
            <span className="dd-trigger" onClick={() => activeMenuSet("blog")}>
              <i className="far fa-angle-down" />
            </span>
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
};
export default MobileMenu;
