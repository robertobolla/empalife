"use client";
import Link from "next/link";

const BlogArea = () => {
  {
    /* Blog Area start */
  }
  return (
    <section className="blog-area pt-100 rpt-70 pb-90 rpb-60 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">Latest News &amp; blog</span>
              <h2>Stay updated with all the latest news.</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div
              className="blog-item"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                <ul className="blog-meta">
                  <li>
                    <a href="#">Quality Food</a>
                  </li>
                  <li>
                    <a href="#">March 25, 2024</a>
                  </li>
                  <li>
                    <a href="#">comments (5)</a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h4>
                  <Link href="blog-details">Noticia numero 1</Link>
                </h4>
                <p>
                  Restaurant where culinary excellence meets hospitality in
                  every dish we serve settled in the heart
                </p>
                <Link href="blog-details" className="read-more">
                  Read more <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="blog-item"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                <ul className="blog-meta">
                  <li>
                    <a href="#">Quality Food</a>
                  </li>
                  <li>
                    <a href="#">March 25, 2024</a>
                  </li>
                  <li>
                    <a href="#">comments (5)</a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h4>
                  <Link href="blog-details">Noticia numero 2</Link>
                </h4>
                <p>
                  Restaurant where culinary excellence meets hospitality in
                  every dish we serve settled in the heart
                </p>
                <Link href="blog-details" className="read-more">
                  Read more <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="blog-item"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                <ul className="blog-meta">
                  <li>
                    <a href="#">Quality Food</a>
                  </li>
                  <li>
                    <a href="#">March 25, 2024</a>
                  </li>
                  <li>
                    <a href="#">comments (5)</a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h4>
                  <Link href="blog-details">Noticia numero 3</Link>
                </h4>
                <p>
                  Restaurant where culinary excellence meets hospitality in
                  every dish we serve settled in the heart
                </p>
                <Link href="blog-details" className="read-more">
                  Read more <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* Blog Area end */
}

export default BlogArea;
