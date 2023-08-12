/* eslint-disable react/no-array-index-key, react/no-danger */
import Slider from 'react-slick';
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import SimpleFaq from '../components/Frontend/SimpleFaq';
import LatestServices from '../components/Frontend/slider/LatestServices';
import Layout from '../components/common/Layout';
import { partnerSliderOne, projectsSliderOne } from '../components/sliderProps';

const Home = () => {
  return (
    <Layout>
      <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: 'url(assets/images/hero/hero-bg-1.jpg)' }}
      >
        <div className="shape shape-one">
          <span>
            <img
              src="assets/images/hero/hero-one_shape-1.png"
              alt="Hero index"
            />
          </span>
        </div>
        {/*
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/circel.png" alt="" />
          </span>
        </div>
      */}
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              {/*= == Hero Content === */}
              <div className="hero-content text-white">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                  Bill Supply
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".7s">
                  Paga tus servicios sin preocupaciones
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior to="/sign-up">
                    <a className="main-btn btn-red">Registrate</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End Hero Section ====== */}
      {/*= ===== Start About Section ====== */}
      <section className="about-section-one pt-125 pb-70">
        <div className="shape shape-one">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="293px"
              height="849px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(250, 250, 250)"
                d="M292.858,848.283 L45.529,527.037 L183.238,230.105 L0.311,0.959 L292.858,0.959 L292.858,848.283 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*= == About Content Box === */}
              <div className="about-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">Bill Supply</span>
                  <h2>¿Quiénes Somos?</h2>
                </div>
                <p>
                  SOMOS una empresa privada, que pertenecemos a las Fintech de
                  la Rep. Dom, donde Administramos y pagamos servicios con
                  recurrencia Semanal, Quincenal y Mensual y , brindamos 30 días
                  más para que el cliente nos pague.
                </p>
                <p>
                  Paga todos los servicios que quieras a traves de nuestra
                  plataforma y obten 30 días adicionales para realizar el pago
                  sin recargos, sin mora, sin interrupción de tu servicio,
                  ¡Nosotros nos encargamos de pagar por ti!
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">Conocer más</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/*= == Quote Box One === */}
              <div className="quote-box-one ml-lg-70 mb-50">
                <h2>Somos tus aliados al pagar tus servicios.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*= ===== End About Section ====== */}
      {/*= ===== Start Features Section ====== */}
      <section className="features-section p-r z-1 pb-85">
        <div className="shape shape-one">
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*= == FEatures Image Box === */}
              <div className="features-one_img-box mb-50">
                <img
                  src="assets/images/features/img-1.jpg"
                  className="features-img-one wow fadeInDown"
                  alt="Features Image"
                />
                <img
                  src="assets/images/features/img-2.jpg"
                  className="features-img-two wow fadeInUp"
                  alt="Features Image"
                />
                <div className="quote-box-two wow fadeInLeft">
                  <h3>30+ formas de ganar dinero</h3>
                </div>
                <div className="big-logo wow fadeInRight">
                  <Link legacyBehavior to="/">
                    <a>
                      <img
                        src="assets/images/logo/big-logo-3.png"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*= == Features Content Box === */}
              <div className="features-one_content-box pl-lg-70 mb-10">
                <div className="section-title section-title-left mb-35 wow fadeInDown">
                  <span className="sub-title">Bill Supply</span>
                  <h2>¿Qué hacemos?</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {/*= == Features Item === */}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-career" />
                      </div>
                      <div className="text">
                        <h4 className="title">Ayudamos a crecer</h4>
                        <p>
                          Te ayudamos a crecer con más de 28 formas de ganar
                          dinero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*= == Features Item === */}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-support" />
                      </div>
                      <div className="text">
                        <h4 className="title">Te apoyamos</h4>
                        <p>
                          Paga tus servicios 28 días después de tu fecha de
                          corte.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*= == Features Item === */}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-global" />
                      </div>
                      <div className="text">
                        <h4 className="title">Alianzas</h4>
                        <p>
                          alianzas estratégicas con cientos de empresas externas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*= == Features Item === */}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-planning" />
                      </div>
                      <div className="text">
                        <h4 className="title">Plataforma moderna</h4>
                        <p>
                          Desde nuestra plataforma moderna centralizamos desde
                          pagar servicios, seguros hasta tiendas online
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End Features Section ====== */}

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
              {/*= == CTA Button === */}
              <div className="cta-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/sign-up">
                  <a className="main-btn btn-white">Registrate hoy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End CTA Section ====== */}

      {/*= ===== Start Service Section ====== */}
      <section className="service-section-four pt-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title">BillSupply</span>
                <h2>Nuestros Servicios</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list ml-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-credit" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Pagos recurrentes</a>
                          </Link>
                        </h3>
                        <p>
                          Paga todos los servicios que quieras a traves de
                          nuestra plataforma y obten 30 días adicionales para
                          realizar el pago sin recargos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-money-transfer" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Estafeta de pago</a>
                          </Link>
                        </h3>
                        <p>
                          Puedes registrar tu negocio como estafeta de pago en
                          Bill Supply y centralizar tus operaciones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="service-one_image-box text-center mb-20 p-r z-1 wow fadeInDown">
                <img
                  src="assets/images/service/img-7.png"
                  className="service-one-img"
                  alt="Service Image"
                />
                <div className="shape border-circle">
                  <span />
                </div>
                <div className="dot-shape dot-shape1 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape2 animate-float-y">
                  <span />
                </div>
                <div className="dot-shape dot-shape3 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape4 animate-float-y">
                  <span />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list mr-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-food" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Marketplace</a>
                          </Link>
                        </h3>
                        <p>
                          Todas tus tiendas favoritas en un solo lugar, adquiere
                          los productos de tu preferencia.
                        </p>
                        {/* link en services homepage
                        <Link legacyBehavior href="/service-details">
                          <a className="btn-link">Read More</a>
                        </Link>
                      */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>Planes de protección</a>
                          </Link>
                        </h3>
                        <p>
                          Pro renta, pro educación, pro prestamo, varios planes
                          para protegerte en tu momento más crítico.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End Service Section ====== */}

      {/*= ===== Start FAQ Section ====== */}
      <section className="faq-section mb-80 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*= == Faq Content Box === */}
              <div className="faq-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Bill Supply</span>
                  <h2>Preguntas comunes</h2>
                </div>
                <blockquote>
                  Todo lo que necesitas saber para comenzar en Bill Supply.
                </blockquote>
                <ul className="check-style-one">
                  <li>
                    Valores: Libertad, integridad, responsabilidad, justicia,
                    solidaridad, reconocimiento, tolerancia.
                  </li>
                  <li>
                    Visión: Ser una empresa pionera y líder en administración,
                    contabilidad de servicios recurrentes, donde pagamos y
                    consolidamos todas las entidadesfinancieros, empresas de
                    telecomunicaciones, Aseguradoras, Colegios, Universidades
                    Privadas y pagos de facturas recurrentes, en un solo
                    sistemasolido a nivel nacional
                  </li>
                  <li>
                    Misión: Ser la empresa protagónica en el servicio depagos de
                    toda índole entregando calidad,eficiencia y eficacia en la
                    solución de susresponsabilidades con los sectores con los
                    queposeen compromisos de pagos, honrando susobligaciones con
                    garantía de prontitud y calidadsuprema.l
                  </li>
                </ul>
                <div className="faq-button">
                  <a href="#" className="main-btn filled-btn">
                    Registrate hoy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion-one mb-50 wow fadeInRight"
                id="accordionOne"
              >
                <SimpleFaq />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End FAQ Section ====== */}

      {/*= ===== Start Partners Section ====== */}
      <section className="partners-section  pt-60 pb-60">
        <div className="container">
          <div className="section-title text-center wow fadeInDown">
            <span className="sub-title">BillSupply</span>
            <h2>Alianzas Estratégica</h2>
            <div className="pt-50" />
          </div>

          {/*= == Partner Slider === */}
          <Slider {...partnerSliderOne} className="partner-slider-one pb-100">
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-1.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-2.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-4.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-5.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*= ===== End Partners Section ====== */}
    </Layout>
  );
};
export default Home;
