import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Contact us"} />
      <section className="contact-page-area pt-130 rpt-100 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="row mb-130 rmb-100 align-items-center">
            <div className="col-lg-5">
              <div
                className="contact-page-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">contact us</span>
                  <h2>ready to contact us</h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-envelope-open" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <h6>
                        <a href="mailto:info@empalifeusa.com">
                          info@empalifeusa.com
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Phone Nº</span>
                      <h6>
                        <a href="callto:+178627080083">+1 (786) 270-800083</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="contact-page-form">
                <h3>Send Us Message</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          <div
            className="our-location"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </WellFoodLayout>
  );
};
export default page;
