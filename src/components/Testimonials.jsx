import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
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
          <div className="testimonial-avatar"></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar"></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar"></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-avatar"></div>
          <div className="testimonial-content">
            <div className="testimonial-name">John Doe</div>
            <div className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
