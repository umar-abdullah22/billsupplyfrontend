import Newsletter from '../components/Frontend/Newsletter';
import PageBanner from '../components/Frontend/PageBanner';
import Layout from '../components/common/Layout';

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Contacta con nosotros" />
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*= == Information Image Box === */}
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/contact/img-1.jpg"
                  alt="Contact Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*= == Information Content Box === */}
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Ponte en contacto</span>
                  <h2>Nos encantaría escucharte</h2>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Oficina principal</h3>
                    <p>
                      Plaza Langumas, Vista Linda, Santiago de los 30
                      Caballeros. Rep. Dom.
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Correo electrónico</h3>
                    <p>
                      <a href="mailto:Billsupply.rd@gmail.com">
                        Billsupply.rd@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Escríbenos por WhatsApp</h3>
                    <p>
                      <a href="tel:+18094147328">809-414-7328</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*= ===== End Contact Information Section ====== */}
    </Layout>
  );
};
export default Contact;
