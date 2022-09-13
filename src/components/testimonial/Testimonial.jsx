import TestimonialItem from "./TestimonialItem";
import "./testimonialStyle.css";

export const Testimonial = () => {
  const testimonialUser1 =
    " They have really brought life to our company and particularly to each of our offices.";
  const testimonialUser2 =
    "I love the hackShop plants, and the service is spectacular. The website is great !";
  const testimonialUser3 =
    "Very beautiful page as well as the plants.Delivery in time and form. I will choose them again ";
  return (
    <div className="testimonial-area section-space-top-90 section-space-bottom-95">
      <div className="container-fluid">
        <div className="testimonial-bg testimonial-bg1">
          <div className="section-title-wrap">
            <h2 className="section-title">What Say Client</h2>
            <p className="section-desc mb-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classNameical Latin literature
            </p>
          </div>
        </div>
        <div className="container custom-space">
          <div className="swiper-container testimonial-slider with-bg">
            <div className="swiper-wrapper justify-content-center">
              <TestimonialItem
                img={"../testimonial/user1.png"}
                testimonial={testimonialUser1}
                user={"Emma Twser"}
              />
              <TestimonialItem
                img={"../testimonial/user2.png"}
                testimonial={testimonialUser2}
                user={"Phoenix Baker"}
              />
              <TestimonialItem
                img={"../testimonial/user3.png"}
                testimonial={testimonialUser3}
                user={"Alice Morgan"}
              />
            </div>
            <div className="swiper-pagination without-absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
