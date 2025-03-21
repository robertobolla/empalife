"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="row mt-30 gap-20">
        <div className="col-sm-6 pb-20">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6 pb-20">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6 pb-20">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6 pb-20">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-12 pb-20">
          <textarea
            name="message"
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className="col-sm-12">
          <button type="submit" className="theme-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}{" "}
            <i className="far fa-arrow-alt-right" />
          </button>
          {success && (
            <p style={{ color: "green" }}>Message sent successfully!</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
