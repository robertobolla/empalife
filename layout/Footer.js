import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  return <DefaultFooter />;
};
export default Footer;

const DefaultFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("✅ You have been subscribed successfully!");
        setEmail(""); // Limpiar input
      } else {
        setMessage("❌ Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Error: Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer
      className="main-footer bgc-black rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/footer-bg.png)",
      }}
    >
      <div className="footer-top py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-white text-center mb-35">
                <span className="sub-title mb-10">join our newsletter</span>
                <h2>subscribe follow our newsletter to get more updates</h2>
              </div>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <label htmlFor="news-email">
                  <i className="fas fa-envelope" />
                </label>
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="theme-btn" type="submit" disabled={loading}>
                  {loading ? "Subscribing..." : "Subscribe"}{" "}
                  <i className="far fa-arrow-alt-right" />
                </button>
              </form>
              {message && (
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-4 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={0}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  We bring authentic flavor and quality to your business with
                  ready-to-serve products that will impress your customers and a
                  service that drives your growth.
                </p>
                <div className="social-style-one mt-15">
                  <Link href="contact">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-5 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={0}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Pages</h5>
                </div>
                <ul className="">
                  <li>
                    <Link href="marketing">Marketing</Link>
                  </li>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="certifications">Certifications</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row justify-content-between">
                <div
                  className="col-xl-6 col-lg-5 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="footer-widget footer-contact">
                    <div className="footer-title">
                      <h5>contact us</h5>
                    </div>
                    <ul>
                      <li>
                        <a href="mailto:info@empalifeusa.com">
                          <u>info@empalifeusa.com</u>
                        </a>
                      </li>
                      <li>
                        <a href="callto:+(1)9297828394">+1 (929) 782-8394</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-5 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="footer-widget opening-hour">
                    <div className="footer-title">
                      <h5>Have any questions?</h5>
                    </div>
                    <div className="any-question mt-20">
                      <a href="contact" className="theme-btn style-two">
                        let’s talk us <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2025 <Link href="/">Empalife</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
      </div>
      <div className="footer-shapes">
        <div className="shape one">
          <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="assets/images/shapes/tomato.png" alt="Shape" />
        </div>
        <div className="shape three">
          <img src="assets/images/shapes/pizza-two.png" alt="Shape" />
        </div>
      </div>
    </footer>
  );
};
