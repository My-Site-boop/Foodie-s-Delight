import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function Dinner() {
  return (
    <>
     <div class="container py-5">
  <h2 class="text-center mb-4">🍝 Dinner Menu</h2>
  <div class="row g-4">

    {/* <!-- Item 1--> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://www.foodfood.com/wp-content/uploads/2024/04/banner-card01.png" class="card-img-top" alt="Grilled Steak" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-drumstick-bite food-icon"></i>Grilled Steak</h5>
          <p class="card-text">Tender grilled steak with herbs & garlic butter.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>
          </div>
      <NavLink to="/"> <button class="btn btn-info w-100">Order Now</button> </NavLink>
        </div>
      </div>
    </div>

    {/* <!-- Item 2--> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://img.freepik.com/free-photo/plate-fettuccine-alfredo-with-fresh-parsley_9975-124881.jpg" class="card-img-top" alt="Creamy Pasta" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-bowl-food food-icon"></i>Creamy Pasta</h5>
          <p class="card-text">Delicious creamy Alfredo pasta with mushrooms.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>
          </div>
       <NavLink to="/">  <button class="btn btn-info w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 3--> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://www.ambitiouskitchen.com/wp-content/uploads/2021/06/How-to-Grill-Salmon-8-612x918.jpg" class="card-img-top" alt="Grilled Salmon" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-fish food-icon"></i>Grilled Salmon</h5>
          <p class="card-text">Salmon fillet grilled to perfection with lemon.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>
          </div>
       <NavLink to="/">   <button class="btn btn-info w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 4--> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/02/Matar-Paneer.jpg" class="card-img-top" alt="Paneer Curry" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-pepper-hot food-icon"></i>Paneer Curry</h5>
          <p class="card-text">Rich and spicy Indian cottage cheese curry.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
          </div>
       <NavLink to="/">   <button class="btn btn-info w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 5 --> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://wallpaperaccess.com/full/9195346.jpg" class="card-img-top" alt="Butter Naan" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-bread-slice food-icon"></i>Butter Naan</h5>
          <p class="card-text">Soft and fluffy Indian naan with melted butter.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>
          </div>
        <NavLink to="/">  <button class="btn btn-info w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

   {/* <!-- Item 6 --> */}
    <div class="col-md-4">
      <div class="card food-card">
        <img src="https://www.foodfood.com/wp-content/uploads/2024/04/banner-card04.png" class="card-img-top" alt="Gulab Jamun" />
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-ice-cream food-icon"></i>Gulab Jamun</h5>
          <p class="card-text">Sweet milk-based dumplings soaked in syrup.</p>
          <div class="star-rating mb-2">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>
          </div>
        <NavLink to="/">  <button class="btn btn-info w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

  </div>
</div> 
    </>
  )
}
