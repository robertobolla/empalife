import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Empalife Marketing"} />
      {/* Chef Details Area start */}
      <section className="chef-details-area pt-130 rpt-100 pb-75 rpb-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-4 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-image-part mb-55">
                <img
                  src="assets/images/chefs/chef-details.png"
                  alt="marketing"
                />
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-content-part mb-55">
                <div className="section-title mb-30 rmb-5">
                  <h2 className="title-h2">Comprehensive Marketing Service</h2>
                  <span className="designations">
                    Boost Your Business with Empalife
                  </span>
                </div>
                <p>
                  At Empalife, we don’t just offer a high-quality product; we
                  provide a complete marketing strategy to help your business
                  grow sustainably. We understand that effective selling
                  requires more than just a good product—you need visibility,
                  customer loyalty, and tools to attract clients.
                </p>
                That’s why, when you purchase a monthly pallet, we offer you a
                free marketing service designed to increase your sales and
                enhance your market presence.
                <p></p>
                <h4 className="mt-55 rmt-5">Follow</h4>
                <div className="social-style-one mt-15 rmt-5">
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
              className="col-xl-3 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-skill-part mb-55">
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-happiness" />
                  </div>
                  <div className="content">
                    <span className="counter-title">Gain More Clients</span>
                  </div>
                </div>
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-medal" />
                  </div>
                  <div className="content">
                    <span className="counter-title">
                      Make Your Business Stand Out
                    </span>
                  </div>
                </div>
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-rate" />
                  </div>
                  <div className="content">
                    <span className="counter-title">Increase Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chef Details Area end */}
      {/* Features Two area start */}
      <div className="feature-two-area  rpb-100">
        <div className="container-fluid">
          <div className="row no-gap">
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature1.png" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Custom Website</h3>
                <p>
                  Your business will have a sales-optimized website where
                  customers can explore products, place orders, and contact you
                  easily.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Professional design tailored to your brand identity.</li>
                  <li>
                    Online ordering system with integrated payment options.
                  </li>
                  <li>SEO optimization to attract organic traffic.</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 offset-xl-4">
              <div
                className="feature-two-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature2.png" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content "
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Community Manager for Social Media</h3>
                <p>
                  Social media is key to attracting and retaining customers.
                  That’s why we assign you a Community Manager to handle your
                  online presence.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Professional posts with engaging images and videos.</li>
                  <li>
                    Interaction with followers to build trust and engagement.
                  </li>
                  <li>
                    Content strategies to increase your business’s visibility.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature4.png" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>In-Store Advertising with Digital Screens</h3>
                <p>
                  We install a promotional screen in your business featuring
                  engaging content to boost sales.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>
                    Special offers, combos, and promotions to attract customers.
                  </li>
                  <li>Dynamic visual content that grabs attention.</li>
                  <li>Constant updates with new advertisements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-two-area  pb-130 rpb-100">
        <div className="container-fluid">
          <div className="row no-gap">
            <div className="col-xl-4 col-lg-6 offset-xl-4">
              <div
                className="feature-two-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature3.png" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Reports & Performance Analysis</h3>
                <p>We don’t just provide tools—we also measure their impact.</p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>
                    Reports with website traffic and social media statistics.
                  </li>
                  <li>Conversion analysis and optimization recommendations.</li>
                  <li>Use of Google Analytics and advanced tracking tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Two area end */}
      {/* Skills Area start */}
      <section className="skills-area pb-65 rpb-35 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="skill-section-image text-lg-end mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/skills.png" alt="Skills" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="skill-area-content mb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">We Are Professionals</span>
                  <h2>Empalife, Your Strategic Sales Partner</h2>
                </div>
                <p>
                  While you focus on delivering an exceptional product, we take
                  care of the marketing to bring more customers to your business
                  every day.
                </p>
                <p>
                  Order your first pallet and activate your growth strategy
                  today!
                </p>
                <Link href="contact" className="theme-btn">
                  Contact us <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area end */}
      {/* Booking Table Area end */}
    </WellFoodLayout>
  );
};
export default page;
