import React from "react";

function TestimonialCard({ image, clientName, description }) {
  return (
    <div class="testimonial_content">
      <div class="testimonial_data">
        <div class="testimonial_header">
          <img src={image} alt="" class="testimonial_img" />
          <div>
            <h3 class="testimonial_name">{clientName}</h3>
            <span class="testimonial_client">Client</span>
          </div>
          <div className="testimonial_star">
            <i class="uil uil-favorite testimonial_icon-star "></i>
            <i class="uil uil-favorite testimonial_icon-star "></i>
            <i class="uil uil-favorite testimonial_icon-star "></i>
            <i class="uil uil-favorite testimonial_icon-star "></i>
            <i class="uil uil-favorite testimonial_icon-star "></i>
          </div>
        </div>
      </div>
      <p class="testimonial_description">{description}</p>
    </div>
  );
}

export default TestimonialCard;
