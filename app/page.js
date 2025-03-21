"use client";
import OfferCard from "@/components/OfferCard";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Image from "next/image";
import Link from "next/link";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa";
import BlogArea from "@/components/BlogArea";

const page = () => {
  return (
    <WellFoodLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content text-white"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-35">
                  <Image
                    src="/assets/images/hero/emp-icon.png"
                    alt="empanada Icon"
                    width={24}
                    height={24}
                    className="mr-2 inline-block"
                  />{" "}
                  Industrial Empanadas
                </span>
                <h1>EMPALIFE</h1>
                <p>
                  Premium ready-to-bake empanadas, perfect for restaurants,
                  frozen food distributors, and supermarkets.
                </p>
                <Link href="contact" className="theme-btn">
                  CONTACT US <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-images rmt-60">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                <div className="price">
                  <img src="assets/images/hero/price.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-100 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="about-image-part mb-150 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="food-review">
                  <span className="text">Very good food</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <img src="assets/images/about/about.jpg" alt="About" />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
                  }}
                >
                  <span className="for-border" />
                  <span className="text">
                    quality <br />
                    food
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Why Choose Empalife?</span>
                  <h2>A Unique Business Opportunity</h2>
                </div>
                <p>
                  Empalife empanadas are not only a high-quality product but
                  also an excellent business opportunity, backed by the growing
                  interest in Argentine culture in the United States, driven by
                  Lionel Messi's influence. Additionally, with the upcoming FIFA
                  World Cup, this product has the potential to establish itself
                  in a specific and highly sought-after market.
                </p>
                <p>
                  To ensure our clients achieve success, we provide a
                  comprehensive marketing service at no cost to their business.
                </p>
                <div className="about-btn-author pt-5 mb-45">
                  <Link href="marketing" className="theme-btn style-two">
                    Discover our comprehensive service{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality" />
                      </div>
                      <h5>Best Quality Food</h5>
                      <p>
                        We have internationally recognized quality
                        certifications.
                      </p>
                      <Link href="certifications" className="read-more">
                        Discover our certifications{" "}
                        <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <h5>Experience our Chefs</h5>
                      <p>Our recipes are crafted by expert chefs.</p>
                      <Link href="menu-burger" className="read-more">
                        Discover our varieties{" "}
                        <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* About Us Area end */}

      <section
        className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/offer-dot-bg.png)",
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left">empalife</span>
          <span className="marquee-inner left">empalife</span>
          <span className="marquee-inner left">empalife</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="offer-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Product Details</h2>
                <h3>
                  Minimum Order: 1 pallet <span>(3,960 empanadas).</span>
                </h3>
                <p>Size: Approximately 5 inches (13 cm) in diameter.</p>
                <p>Weight: Approximately 3 ounces (85 g) per empanada.</p>
                <p>Condition: All empanadas are fully cooked and frozen.</p>
                <p>
                  Flavor Marking: Each empanada has a distinctive mark
                  reflecting its unique flavor.
                </p>
                <p>
                  Dough: Made with traditional criolla dough for an authentic
                  experience.
                </p>
                <p>
                  Order Customization: The pallet can include a mixed selection
                  of flavors chosen by the customer.
                </p>
                <Link href="shop" className="theme-btn">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/offer-img.png"
                  alt="Offer Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Area end */}
      {/* Offer Area start */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">empanadas king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">Incredible Flavors</span>
                <h2>Our Varieties</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-6 z-3"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Breakfast Bacon</h5>
                    <p>Eegg, cheese, and crispy bacon</p>
                  </div>
                  <div className="price">
                    <span>1</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Humita</h5>
                    <p>Corn, pumpkin, mozzarella cheese, spices</p>
                  </div>
                  <div className="price">
                    <span>2</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>traditional beef</h5>
                    <p>Ground beef, onion, beef broth, spices</p>
                  </div>
                  <div className="price">
                    <span>3</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>creamy spinach & artichoke</h5>
                    <p>Spinach, cream cheese, artichoke, heavy cream, spices</p>
                  </div>
                  <div className="price">
                    <span>4</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 z-2"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken</h5>
                    <p>
                      Chicken, onion, bell pepper, tomato sauce, chicken broth,
                      spices
                    </p>
                  </div>
                  <div className="price">
                    <span>5</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>ham & cheese</h5>
                    <p>Mozzarella cheese, cooked ham, onion, half & half</p>
                  </div>
                  <div className="price">
                    <span>6</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Cheese & Onion</h5>
                    <p>Mozzarella cheese, onion, spices</p>
                  </div>
                  <div className="price">
                    <span>7</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Knife-Cut Beef</h5>
                    <p>
                      Knife-cut beef, onion, green onion, beef broth, spices
                    </p>
                  </div>
                  <div className="price">
                    <span>8</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Offer Card Area start */}
      <OfferCard />
      {/* Offer Card Area end */}

      {/* Why choose Us Area start */}
      <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
        <span className="marquee-wrap style-two">
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">
                    Want to Start a Business?
                  </span>
                  <h2>Open Your Own Empalife Store</h2>
                </div>
                <p>
                  Take advantage of the high profitability of our products and
                  join the Empalife family! Enjoy exclusive pricing, promotions,
                  and benefits, while we support you every step of the way to
                  ensure your business success.
                </p>
                <p>
                  Seamless Expansion: No prior experience needed—we guide you
                  through every step of the process.
                </p>
                <p>
                  Guaranteed Stock & Optimized Logistics: Receive your products
                  on time with our efficient distribution solutions.
                </p>
                <p>
                  Ongoing Training: Learn sales strategies and customer
                  retention techniques to maximize your earnings.
                </p>
                <p>
                  <span>
                    🔥 Be part of the gastronomic revolution and take empanadas
                    to the next level in your city!
                  </span>
                </p>
                <div className="about-btn-author mb-60">
                  <Link href="about" className="theme-btn">
                    Contact Us & Get Started Now!{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <IoStorefrontOutline />
                    </div>
                    <h4>Business Ready to Go</h4>
                    <p>
                      We provide furniture and signage so you can start selling
                      immediately.
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <FaBullhorn />
                    </div>
                    <h4> Marketing Support</h4>
                    <p>
                      We create your online ordering website and provide social
                      media content to boost your business.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item mt-30 rmt-0">
                    <div className="icon">
                      <MdSupportAgent />
                    </div>
                    <h4>Professional Support</h4>
                    <p>
                      You’ll have a direct support line to help you resolve any
                      issues.
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <LuChartNoAxesCombined />
                    </div>
                    <h4>Reports & Analytics</h4>
                    <p>
                      We provide personalized market analysis to help you make
                      better business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/pizza.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Why choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Argentine Food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious food</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-white text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">customer feedback</span>
                <h2>what have lot’s off happy customer explore feedback</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* <BlogArea />*/}
    </WellFoodLayout>
  );
};
export default page;
