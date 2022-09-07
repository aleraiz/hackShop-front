import React from "react";

const TestimonialItem = ({ img }) => {
  return (
    <div className="swiper-slide testimonial-item testimonial-item-style">
      <div className="user-info mb-3">
        <div className="user-shape-wrap">
          <div className="user-img">
            <img src={img} alt="User Image" />
          </div>
        </div>
        <div className="user-content text-charcoal">
          <h4 className="user-name mb-1">Phoenix Baker</h4>
          <span className="user-occupation">Client</span>
        </div>
      </div>
      <p className="user-comment mb-6">
        Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo
        incididunt ut labore et dolore. magna
      </p>
    </div>
  );
};

export default TestimonialItem;
