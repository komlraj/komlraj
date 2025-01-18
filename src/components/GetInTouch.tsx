// const GetInTouch = () => {
//   return (
//     <section className="contact-section">
//       <div class="container">
//         <form id="contact" action="" method="post">
//           <h3>Contact Form</h3>
//           <h4>Contact us today, and get reply with in 24 hours!</h4>
//           <fieldset>
//             <input
//               placeholder="Full Name"
//               type="text"
//               tabindex="1"
//               required
//               autofocus
//             />
//           </fieldset>
//           <fieldset>
//             <input
//               placeholder="Email Address"
//               type="email"
//               tabindex="2"
//               required
//             />
//           </fieldset>
//           <fieldset>
//             <input
//               placeholder="Phone Number"
//               type="tel"
//               tabindex="3"
//               required
//             />
//           </fieldset>
//           <fieldset>
//             <input
//               placeholder="Web Site (starting with http://)"
//               id="website"
//               type="url"
//               tabindex="4"
//               required
//             />
//           </fieldset>
//           <fieldset>
//             <textarea
//               placeholder="Type your message here...."
//               tabindex="5"
//               required
//             ></textarea>
//           </fieldset>
//           <fieldset>
//             <button
//               name="submit"
//               type="submit"
//               id="contact-submit"
//               data-submit="...Sending"
//             >
//               Send now
//             </button>
//           </fieldset>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default GetInTouch;

import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send form data to email
      const { name, email, phone, message } = formData;
      const emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
      window.location.href = `mailto:13kmlraj@gmail.com?subject=Get%20in%20Touch&body=${encodeURIComponent(
        emailBody
      )}`;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <form onSubmit={handleSubmit} id="contact">
				<h3>Contact Form</h3>
				<h4>Ready to collaborate or have a project in mind? Drop me a line via the form below. Whether it's a question, feedback, or a potential opportunity, I'm all ears. Looking forward to hearing from you!</h4>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
							required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
