import React from "react";

const TestimonialItem = ({ img, testimonial, user }) => {
  console.log(testimonial);
  return (
    <div className="swiper-slide testimonial-item testimonial-item-style">
      <div className="user-info mb-3">
        <div className="user-shape-wrap">
          <div className="user-img">
            <img src={img} alt="User Image" />
          </div>
        </div>
        <div className="user-content text-charcoal">
          <h4 className="user-name mb-1">{user}</h4>
          <span className="user-occupation">Client</span>
        </div>
      </div>
      <p className="user-comment mb-6">{testimonial}</p>
    </div>
  );
};

export default TestimonialItem;
