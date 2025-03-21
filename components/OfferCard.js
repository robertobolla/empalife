const OfferCard = () => {
  return (
    <div className="offer-card-area">
      <div className="row no-gap row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
        <div
          className="col"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/food/food1.png" alt="Food" />
            </div>
            <span className="title">calidad</span>
            <div className="bg-text">
              <span>calidad</span> <span>calidad</span> <span>calidad</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">-10%</div>
            <div className="image">
              <img src="assets/images/food/food1.png" alt="Food" />
            </div>
            <span className="title">únicas</span>
            <div className="bg-text">
              <span>únicas</span> <span>únicas</span> <span>únicas</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/food/food1.png" alt="Food" />
            </div>
            <span className="title">sabor</span>
            <div className="bg-text">
              <span>sabor</span> <span>sabor</span> <span>sabor</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">-15%</div>
            <div className="image">
              <img src="assets/images/food/food1.png" alt="Food" />
            </div>
            <span className="title">variedad</span>
            <div className="bg-text">
              <span>variedad</span> <span>variedad</span> <span>variedad</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/food/food1.png" alt="Food" />
            </div>
            <span className="title">textura</span>
            <div className="bg-text">
              <span>textura</span> <span>textura</span> <span>textura</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;
