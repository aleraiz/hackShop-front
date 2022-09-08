import TestimonialItem from "./TestimonialItem";
import "./testimonialStyle.css";

export const Testimonial = () => {
  return (
    <div className="testimonial-area section-space-top-90 section-space-bottom-95">
      <div className="container-fluid">
        <div className="testimonial-bg testimonial-bg1">
          <div className="section-title-wrap">
            <h2 className="section-title">What Say Client</h2>
            <p className="section-desc mb-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature
            </p>
          </div>
        </div>
        <div className="container custom-space">
          <div className="swiper-container testimonial-slider with-bg">
            <div className="swiper-wrapper justify-content-center">
              <TestimonialItem img={"../testimonial/user1.png"} />
              <TestimonialItem img={"../testimonial/user2.png"} />
              <TestimonialItem img={"../testimonial/user3.png"} />
            </div>

            <div className="swiper-pagination without-absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
