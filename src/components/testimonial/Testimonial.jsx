import "./testimonialStyle.css";
import "react-multi-carousel/lib/styles.css";
import TestimonialItem from "./TestimonialItem";
import Carousel from "react-multi-carousel";

export const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const testimonialUser1 =
    " They have really brought life to our company and particularly to each of our offices.";
  const testimonialUser2 =
    "I love the hackShop plants, and the service is spectacular. The website is great!";
  const testimonialUser3 =
    "Very beautiful page as well as the plants.Delivery in time and form. I will choose them again";

  return (
    <div className="testimonial-area section-space-top-90 section-space-bottom-95">
      <div className="container-fluid">
        <div className="testimonial-bg testimonial-bg1">
          <div className="section-title-wrap">
            <h2 className="section-title">Client reviews</h2>
            <p className="section-desc mb-0">
              Some reviews from our clients, taking into account each of your comments to improve!
            </p>
          </div>
        </div>
        <div className="container custom-space">
          <div className="swiper-container testimonial-slider with-bg ">
            <Carousel responsive={responsive} infinite={true} draggable={false}>
              <div className="testimonailCarousel">
                <TestimonialItem
                  img={"../testimonial/user1.png"}
                  testimonial={testimonialUser1}
                  user={"Emma Twser"}
                />
              </div>
              <div className="testimonailCarousel">
                <TestimonialItem
                  img={"../testimonial/user2.png"}
                  testimonial={testimonialUser2}
                  user={"Phoenix Baker"}
                />
              </div>
              <div className="testimonailCarousel">
                <TestimonialItem
                  img={"../testimonial/user3.png"}
                  testimonial={testimonialUser3}
                  user={"Alice Morgan"}
                />
              </div>
            </Carousel>
            <div className="swiper-pagination without-absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
