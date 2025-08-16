import React from 'react'

export default function Footer() {
   
  return (
    <>
      <section className="py-5 text-white" style={{ backgroundColor: "#343a40ff" }}>
  <div className="container" >
    <h2 className="text-center mb-4 text-warning">🌟 Our Specialties</h2>
    <div className="row text-center">

      <div className="col-md-4 mb-4">
        <h4>Farm Fresh Ingredients</h4>
        <p>We use only the freshest local ingredients to create every dish.</p>
      </div>

      <div className="col-md-4 mb-4">
        <h4>Expert Chefs</h4>
        <p>Our world-className chefs blend tradition with innovation.</p>
      </div>

      <div className="col-md-4 mb-4">
        <h4>Fast Delivery</h4>
        <p>Order online and get your food delivered hot and fresh in no time.</p>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
