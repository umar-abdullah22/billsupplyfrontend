import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import React, { lazy, Suspense } from 'react';
import Newsletter from '../components/Frontend/Newsletter';
import PageBanner from '../components/Frontend/PageBanner';
import Layout from '../components/common/Layout';
import {
  partnerSliderOne,
  teamSliderOne,
  testimonialSliderThree,
} from '../components/sliderProps';

const Counter = lazy(() => import('../components/Frontend/Counter'));

const About = () => {
  return (
    <Layout>
      <PageBanner pageName="Nosotros" />
      {/*= ===== End Breadcrumb Section ====== */}
      {/*= ===== Start About Section  ====== */}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*= == About Content Box === */}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Bill Supply</span>
                  <h2>
                    Servicios multiples para IBO, emprendedores y empresas{' '}
                  </h2>
                </div>
                <p>
                  SOMOS una empresa privada, que pertenecemos a las Fintech de
                  la Rep. Dom, donde Administramos y pagamos servicios con
                  recurrencia Semanal, Quincenal y Mensual y , brindamos 30 días
                  más para que el cliente nos pague.
                </p>
                <ul className="check-style-one mb-30">
                  <li>
                    Dirección: Plaza Langumas, Vista Linda, Santiago de los 30
                    Caballeros
                  </li>
                  <li>RNC 1-31-97594-1</li>
                  <li>Tel: 809-414-7328</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              {/*= == About Image Box === */}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="assets/images/about/about-3.webp" alt="" />
                  <div className="play-box">
                    <a
                      href="https://www.youtube.com/watch?v=Y9NFvrUYVDU"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="quote-box-four text-white">
                  <h3>Paga tus facturas y genera ingresos</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End About Section ====== */}

      {/*= ===== Start CTA Section ====== */}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: 'url(assets/images/bg/cta-bg-1.jpg)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*= == Common Heading === */}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>¿Listo para unirte a BillSupply?</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*= == Team Button === */}
              <div className="team-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/team">
                  <a className="main-btn btn-white">Registrate hoy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End CTA Section ====== */}

      {/*= ===== Start History Section ====== */}
      <section className="history-section pt-125 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*= == Common Heading === */}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Bill Supply</span>
                <h2>Más sobre nosotros</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/*= == History Timeline === */}
              <div className="history-timeline">
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-1.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">Misión</h4>
                    <p>
                      Ser la empresa creadora de oportunidades de que cualquier
                      persona pueda pagar todos sus servicios primarios y
                      secundarios, con las ganancias que generen atreves de las
                      28 fuentes de ingresos de Bill Supply. ingresos extra.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-2.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">Visión</h4>
                    <p>
                      Ser una empresa pionera y líder en administración,
                      contabilidad de servicios recurrentes, donde pagamos y
                      consolidamos entidades financieras, telecomunicaciones,
                      Aseguradoras, Colegios, Universidades Privadas y pagos de
                      facturas recurrentes.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/gallery/history-3.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">Valores</h4>
                    <p>
                      Libertad, integridad, responsabilidad, justicia,
                      solidaridad, reconocimiento, tolerancia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
