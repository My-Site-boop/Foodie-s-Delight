import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function Lunch() {
  return (
    <>
     
<div className="container py-5">
  <h2 className="text-center mb-4">🍱 Lunch Menu</h2>
  <div className="row g-4">

    {/* <!-- Item 1 --> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://i.pinimg.com/originals/b6/51/c4/b651c473c595f728118644568221637e.jpg" className="card-img-top" alt="Burger" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-hamburger food-icon"></i>Cheese Burger</h5>
          <p className="card-text">Juicy burger with cheese, lettuce & sauces.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
         <NavLink to="/"><button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 2--> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://www.zorabian.com/wp-content/uploads/2022/12/Homemade-Pepperoni-Pizza-1.jpg" className="card-img-top" alt="Pizza" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-pizza-slice food-icon"></i>Pepperoni Pizza</h5>
          <p className="card-text">classNameic pizza loaded with pepperoni & cheese.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
          </div>
        <NavLink to="/">  <button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 3--> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://static.vecteezy.com/system/resources/previews/030/632/756/non_2x/asian-noodles-image-hd-free-photo.jpg" className="card-img-top" alt="Noodles" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-utensils food-icon"></i>Spicy Noodles</h5>
          <p className="card-text">Asian-style noodles with veggies and tofu.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
         <NavLink to="/"> <button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 4 --> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/shutterstock_1955049547-1681812472912.jpg" className="card-img-top" alt="Salad" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-leaf food-icon"></i>Fresh Salad</h5>
          <p className="card-text">Healthy greens with vinaigrette and seeds.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
         <NavLink to="/"> <button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

    {/* <!-- Item 5 --> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://images6.alphacoders.com/902/thumb-1920-902919.jpg" className="card-img-top" alt="Sandwich" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-bread-slice food-icon"></i>Club Sandwich</h5>
          <p className="card-text">Grilled sandwich with cheese, veggies & sauces.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
          </div>
         <NavLink to="/"> <button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

   {/* <!-- Item 6 --> */}
    <div className="col-md-4">
      <div className="card food-card">
        <img src="https://pics.craiyon.com/2023-07-08/b33f3ecbb22249eb828b3b83baeeada4.webp" className="card-img-top" alt="Biryani" />
        <div className="card-body">
          <h5 className="card-title"><i className="fas fa-bowl-rice food-icon"></i>Chicken Biryani</h5>
          <p className="card-text">Aromatic rice with chicken & Indian spices.</p>
          <div className="star-rating mb-2">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
          </div>
        <NavLink to="/">  <button className="btn btn-danger w-100">Order Now</button></NavLink> 
        </div>
      </div>
    </div>

  </div>
</div> 
    </>
  )
}
