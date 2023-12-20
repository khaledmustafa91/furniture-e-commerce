import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  const carouselProp = {
    autoPlay: false,
    showArrows: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
  };
  return (
    <>
      {/* Start Testimonial Slider */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Carousel {...carouselProp}>
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            “Donec facilisis quam ut purus rutrum lobortis.
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac
                            turpis egestas. Integer convallis volutpat dui quis
                            scelerisque.”
                          </p>
                        </blockquote>
                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src={
                                'https://res.cloudinary.com/dg7tijq2w/image/upload/v1702975891/Furniture-e-commerce/team/nahizdl9hs7d41pcv3cl.jpg'
                              }
                              alt="Maria Jones"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">
                            CEO, Co-Founder, XYZ Inc.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            “Donec facilisis quam ut purus rutrum lobortis.
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac
                            turpis egestas. Integer convallis volutpat dui quis
                            scelerisque.”
                          </p>
                        </blockquote>
                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src={
                                'https://res.cloudinary.com/dg7tijq2w/image/upload/v1702975891/Furniture-e-commerce/team/b0dfqkghv1c62wr7ommy.jpg'
                              }
                              alt="Maria Jones"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">
                            CEO, Co-Founder, XYZ Inc.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>
                            “Donec facilisis quam ut purus rutrum lobortis.
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac
                            turpis egestas. Integer convallis volutpat dui quis
                            scelerisque.”
                          </p>
                        </blockquote>
                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src={
                                'https://res.cloudinary.com/dg7tijq2w/image/upload/v1702975891/Furniture-e-commerce/team/lqg5ygu91ymcxgkel2ha.jpg'
                              }
                              alt="Maria Jones"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">
                            CEO, Co-Founder, XYZ Inc.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial Slider */}
    </>
  );
};

export default Testimonials;
