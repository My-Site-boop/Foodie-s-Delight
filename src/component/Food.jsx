import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Food() {
  return (
    <>
     {/* <!-- Carousel --> */}
<div id="foodCarousel" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <NavLink to="/break"> <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87" height="400px" className="d-block w-100" alt="Pizza" /> </NavLink>
      <div className="carousel-caption">
         <h3>Sweet Desserts</h3>
        <p>Treat yourself with something sweet today!</p>
      </div>
    </div>
    <div className="carousel-item">
   <NavLink to="/lunch">   <img src="https://static.vecteezy.com/system/resources/previews/017/624/197/large_2x/menu-with-delicious-juicy-burger-and-fries-with-sauce-on-a-plate-photo.jpg" height="400px" className="d-block w-100" alt="Burger" /> </NavLink>
      <div className="carousel-caption">
        <h3>Juicy Burgers</h3>
        <p>Made with 100% veg and fresh buns.</p>
      </div>
    </div>
    <div className="carousel-item">
    <NavLink to="/lunch" > <img src="https://www.shutterstock.com/image-photo/taking-piece-tasty-pizza-wooden-600nw-2490120675.jpg" height="400px" className="d-block w-100" alt="Dessert" /></NavLink>
      <div className="carousel-caption">
        <h3>Delicious Pizza</h3>
        <p>Fresh from the oven with premium toppings.</p>
     
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

{/*<!-- Food Items Section -->*/}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">🍔 Featured Dishes</h2>
    <div className="row g-4">

      <div className="col-md-4" id="section-1">
        <div className="card food-card shadow-sm">
            <NavLink to="/lunch">  <img src="https://www.foodfood.com/wp-content/uploads/2024/04/banner-card02.png" className="card-img-top" alt="Pasta"/> </NavLink>
          <div className="card-body">
            <h5 className="card-title">Delicious Pizza</h5>
            <p className="card-text">Fresh from the oven with premium toppings and overloaded cheese.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card food-card shadow-sm">
            <NavLink to="/lunch">   <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022" className="card-img-top" alt="Sushi"/></NavLink>
          <div className="card-body">
            <h5 className="card-title">Sushi Platter</h5>
            <p className="card-text">Fresh and traditional Japanese sushi experience.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card food-card shadow-sm">
            <NavLink to="/dinner">   <img src="https://www.foodfood.com/wp-content/uploads/2024/04/banner-card01.png" className="card-img-top" alt="Steak"/> </NavLink>
          <div className="card-body">
            <h5 className="card-title">Grilled Steak</h5>
            <p className="card-text">Juicy ribeye steak grilled to perfection with garlic butter.</p>
          </div>
        </div>
      </div>

    </div>
      <br/>
      
   <div className="row g-4">

      <div className="col-md-4">
        <div className="card food-card shadow-sm">
            <NavLink to="/dinner">   <img src="https://img.freepik.com/free-photo/plate-fettuccine-alfredo-with-fresh-parsley_9975-124881.jpg" className="card-img-top" alt="Pasta"/> </NavLink>
          <div className="card-body">
            <h5 className="card-title">Creamy Alfredo Pasta</h5>
            <p className="card-text">Rich and creamy white sauce with herbs and parmesan.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
       <div className="card food-card shadow-sm">
          <NavLink to="/dinner"> <img src="https://www.foodfood.com/wp-content/uploads/2024/04/banner-card04.png" className="card-img-top" alt="Sushi"/></NavLink>
          <div className="card-body">
            <h5 className="card-title">Sweet Desserts</h5>
            <p className="card-text">Treat yourself with something sweet today!</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
         <div className="card food-card shadow-sm">
        <NavLink to="/dinner">  <img src="https://hips.hearstapps.com/hmg-prod/images/summer-dinner-recipes-mediterranean-chicken-6838cbef9d151.png?crop=1xw:1xh;center,top&resize=980:*" className="card-img-top" alt="Steak"/> </NavLink>
          <div className="card-body">
            <h5 className="card-title">Main Meal</h5>
            <p className="card-text">In some cultures,"dinner" may refer to a midday meal, especially on special occasions.</p>
          </div>
        </div>
      </div>

    </div>      
      
  </div>
</section>
    </>
  )
}
