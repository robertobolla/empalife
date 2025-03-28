"use client";
import { wellfoodUtility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Sidebar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone_number: "-", // opcional si no se solicita
          subject: "Consulta desde formulario lateral",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        document.querySelector("body").classList.remove("side-content-visible");
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div
        className="form-back-drop"
        onClick={() =>
          document
            .querySelector("body")
            .classList.remove("side-content-visible")
        }
      />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div
            className="cross-icon"
            onClick={() =>
              document
                .querySelector("body")
                .classList.remove("side-content-visible")
            }
          >
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="theme-btn style-two"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit now"}
                </button>
              </div>
              {success && (
                <p style={{ color: "green" }}>Message sent successfully!</p>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link href="https://www.facebook.com/profile.php?id=61574131498680&locale=es_LA">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="https://www.instagram.com/empalifeusa/">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-block d-xl-none">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      toggle ? "show" : ""
                    }`}
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <Link href="marketing">Marketing</Link>
                      </li>
                      <li>
                        <Link href="certifications">Certifications</Link>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="header-number">
                <i className="far fa-phone" />
                Call : <a href="callto:+19297828394">+1 (929) 782-8394</a>
              </div>

              {/* Menu Button */}
              <div className="menu-btns">
                <Link href="contact" className="theme-btn">
                  Book now <i className="far fa-arrow-alt-right" />
                </Link>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button
                    className="bg-transparent"
                    onClick={() =>
                      document
                        .querySelector("body")
                        .classList.add("side-content-visible")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  );
};

const Header = () => {
  useEffect(() => {
    wellfoodUtility.fixedHeader();
  }, []);

  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-none d-xl-block">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <Link href="marketing">Marketing</Link>
                      </li>
                      {/*  <li className="dropdown">
                        <a href="blog">blog</a>
                      </li>*/}
                      <li>
                        <Link href="certifications">Certifications</Link>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="header-number">
                <i className="far fa-phone" />
                Call : <a href="callto:+19297828394">+1 (929) 782-8394</a>
              </div>

              {/* Menu Button */}
              <div className="menu-btns">
                <Link href="contact" className="theme-btn">
                  Book now <i className="far fa-arrow-alt-right" />
                </Link>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button
                    className="bg-transparent"
                    onClick={() =>
                      document
                        .querySelector("body")
                        .classList.add("side-content-visible")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};
export default Header;
