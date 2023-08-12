import { Link } from 'react-router-dom';

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => (
  <footer className="footer-default footer-dark text-white p-r z-1">
    <div className="shape shape-one">
      <span />
    </div>
    <div className="shape shape-two">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="650px"
          height="242px"
        >
          <path
            fillRule="evenodd"
            opacity="0.02"
            fill="rgb(255, 255, 255)"
            d="M0.521,241.495 L246.454,37.867 L473.773,151.244 L649.198,0.638 L649.198,241.495 L0.521,241.495 Z"
          />
        </svg>
      </span>
    </div>
    <div className="container">
      {/*= == Footer Widget === */}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Bill Supply</h4>
              <div className="footer-content">
                <p>
                  SOMOS una empresa privada, que pertenecemos a las Fintech de
                  la Rep. Dom, donde Administramos y pagamos servicios con
                  recurrencia Semanal, Quincenal y Mensual y , brindamos 30 días
                  más para que el cliente nos pague.
                </p>
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
                      <i className="fab fa-linkedin-in" />
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
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Servicios</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Pagos recurrentes</a>
                  </li>
                  <li>
                    <a href="#">Marketplace</a>
                  </li>
                  <li>
                    <a href="#">Estafeta de pago</a>
                  </li>
                  <li>
                    <a href="#">Planes de protección</a>
                  </li>
                  <li>
                    <a href="#">Ofertas educativas</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <h5 className="title">Oficina principal</h5>
                <div className="contact-info-box d-flex mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>
                      Plaza Langumas, Vista Linda, Santiago de los 30
                      Caballeros. Rep. Dom.
                    </p>
                  </div>
                </div>
                <h5 className="title">RNC</h5>
                <div className="contact-info-box d-flex mb-40">
                  <div className="icon">
                    <i className="far fa-address-card" />
                  </div>
                  <div className="text">
                    <p>1-31-97594-1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-widget-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo/footer-logo-1.png" alt="" />
                    </a>
                  </Link>
                </div>
                <h5 className="title">Correo Electrónico</h5>
                <div className="contact-info-box d-flex mb-20">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:Billsupply.rd@gmail.com">
                        Billsupply.rd@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*= == Footer Copyright === */}
      <div className="footer-copyright border-top-white-op-1">
        <div className="row">
          <div className="col-lg-8" />
          <div className="col-lg-4">
            <div className="footer-text float-lg-right wow fadeInRight">
              <p>
                <i className="fa fa-copyright" /> Bill Supply S.R.L. All rights
                reserved. Dev by <a href="https://walderfranco.com">WF</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
