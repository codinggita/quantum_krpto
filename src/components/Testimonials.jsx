import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const avatarImage = {
    backgroundImage:
      "url(https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <div className="testimonial-title">TESTIMONIALS</div>
        <div className="testimonial-subtitle">
          Read What Others <br /> Have To Say
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="testimonial-card">
          <div className="testimonial-avatar" style={avatarImage}></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar" style={avatarImage}></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar" style={avatarImage}></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar" style={avatarImage}></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
