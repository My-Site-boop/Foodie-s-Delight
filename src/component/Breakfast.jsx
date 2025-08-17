import React from 'react'

export default function Breakfast() {
  return (
    <>
    <section className="py-5 bg-light" id="pizza-section">
  <div className="container">
    <h2 className="text-center mb-5">🍳 Breakfast Delights</h2>
    <div className="row g-4">

     {/* <!-- Card Example -->*/}
      <div className="col-md-4" id="fluffy-pancakes">
        <div className="card breakfast-card shadow-sm">
          <img src="https://www.shutterstock.com/image-photo/healthy-summer-breakfast-homemade-classNameic-260nw-2596098851.jpg" className="card-img-top" alt="Pancakes"/>
          <div className="card-body">
            <h5 className="card-title">Fluffy Pancakes</h5>
            <p className="card-text">With maple syrup and fresh berries.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹120</span>
              <div className="star-rating mb-2">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

    {/*  <!-- Repeat for other items -->*/}
      <div className="col-md-4" id="cheese-omelette">
        <div className="card breakfast-card shadow-sm">
          <img src="https://garlicallday.com/wp-content/uploads/cheese-egg-white-omelette-on-rectangular-plate.jpg" className="card-img-top" alt="Omelette"/>
          <div className="card-body">
            <h5 className="card-title">Cheese Omelette</h5>
            <p className="card-text">Stuffed with cheese, herbs, and mushrooms.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹90</span>
              <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card breakfast-card shadow-sm">
          <img src="https://www.somethingswanky.com/wp-content/uploads/2013/02/DSC_1200-scaled.jpg" className="card-img-top" alt="Waffles"/>
          <div className="card-body">
            <h5 className="card-title">Belgian Waffles</h5>
            <p className="card-text">Crispy waffles with cream and chocolate syrup.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹150</span>
             <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

        <div className="col-md-4">
        <div className="card breakfast-card shadow-sm">
          <img src="https://mojo.generalmills.com/api/public/content/ChFjbadKDUiMTN1MyS0_MA_webp_base.webp?v=d32ee7d3&t=191ddcab8d1c415fa10fa00a14351227" className="card-img-top" alt="Waffles"/>
          <div className="card-body">
            <h5 className="card-title">Fruit Parfait</h5>
            <p className="card-text">Yogurt, granola, and seasonal fruits.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹200</span>
              <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

        <div className="col-md-4">
        <div className="card breakfast-card shadow-sm">
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445" className="card-img-top" alt="Waffles"/>
          <div className="card-body">
            <h5 className="card-title">Avocado Toast</h5>
            <p className="card-text">Toasted sourdough with mashed avocado and chili.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹240</span>
              <div className="star-rating mb-2">
           <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

        
        <div className="col-md-4">
        <div className="card breakfast-card shadow-sm">
          <img src="https://thumbs.dreamstime.com/b/aromatic-coffee-cup-roasted-beans-dark-background-steam-rising-cozy-morning-brew-scene-surrounded-rises-s-364019638.jpg" className="card-img-top" alt="Waffles"/>
          <div className="card-body">
           <h5 className="card-title">Morning Brew</h5>
            <p className="card-text">Freshly brewed coffee or espresso to start your day.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-success">₹120</span>
              <div className="star-rating mb-2">
             <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
          </div>
            </div>
            <div className="mt-3 text-center">
              <a href="/" className="btn btn-warning w-100">Order Now</a>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  </div>
</section>  
    </>
  )
}
