const Headline = ({ mb = "105" }) => {
  return (
    <div className={`headline-area mb-${mb} rmb-85 rel z-1`}>
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
  );
};
export default Headline;
