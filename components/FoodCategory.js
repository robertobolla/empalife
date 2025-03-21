import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="food-category-area pb-90 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">popular food category</span>
              <h2>Certifications</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              {/*<div className="icon">
                <i className="flaticon-recommended-food" />
              </div>*/}
              <div className="content">
                <h4 className="title">SQF (Safe Quality Food)</h4>
                <p>
                  The SQF certification is a global food safety standard
                  recognized by the Global Food Safety Initiative (GFSI). It
                  guarantees that food products are produced, processed, and
                  handled under strict quality and hygiene controls.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Meets international food safety standards.</li>
                  <li>
                    Enables distribution in major supermarkets and food chains.
                  </li>
                  <li>
                    Reinforces consumer confidence in product quality and
                    safety.
                  </li>
                </ul>
                <div className="button-center">
                  <Link href="contact" className="theme-btn">
                    Descargá SQF <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              {/*<div className="icon">
                <i className="flaticon-recommended-food" />
              </div>*/}
              <div className="content">
                <h4 className="title"> FDA (Food and Drug Administration)</h4>
                <p>
                  The FDA is the U.S. government agency responsible for
                  regulating food, drugs, beverages, supplements, and
                  health-related products. To sell food products in the U.S.,
                  companies must fully comply with its strict regulations.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>
                    Certifies that our empanadas comply with U.S. food safety
                    regulations.
                  </li>
                  <li>
                    Facilitates entry into major food distributors and
                    supermarket chains.
                  </li>
                  <li>
                    Prevents legal issues related to non-compliance with
                    regulations.
                  </li>
                </ul>
                <div className="button-center">
                  <Link href="contact" className="theme-btn">
                    Descargá FDA <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              {/*<div className="icon">
                <i className="flaticon-recommended-food" />
              </div>*/}
              <div className="content">
                <h4 className="title">FSP (Florida State Permits)</h4>
                <p>
                  In addition to federal regulations, each U.S. state has its
                  own requirements for food production and sales. Empalife holds
                  all necessary state permits in Florida, allowing us to operate
                  and distribute in this key market.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>
                    Full compliance with state-level food production and sales
                    regulations.
                  </li>
                  <li>
                    Allows distribution in supermarkets, restaurants, and local
                    food suppliers.
                  </li>
                  <li>
                    Facilitates expansion into other states with similar
                    requirements.
                  </li>
                </ul>
                <div className="button-center">
                  <Link href="contact" className="theme-btn">
                    Descargá FSP <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-90">
          With these certifications, Empalife not only offers premium empanadas
          but also provides security, confidence, and profitable business
          opportunities for distributors and entrepreneurs.
        </p>
      </div>
      <div className="button-center">
        <Link href="contact" className="theme-btn">
          Contact Us <i className="far fa-arrow-alt-right" />
        </Link>
      </div>
    </section>
  );
};
export default FoodCategory;
