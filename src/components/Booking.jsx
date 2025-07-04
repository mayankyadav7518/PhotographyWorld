import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
    const [result, setResult] = useState('');

 const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow characters and spaces for name
    if (name === "name") {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }
    // Allow only digits in phone
    else if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycby76iVMSusEUu53Zgs3Q5duW88tq2cvgIwjMA-bqlFWCXL98E_XcWUJBfU-tcRuCEW3/exec";

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("contact", formData.phone); // Map phone to contact
    formDataToSend.append("email", formData.email);
    formDataToSend.append("eventType", formData.eventType);
    formDataToSend.append("eventDate", formData.eventDate);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.result === "success") {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
        setErrors({});
      } else {
        setResult("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="booking"
      className="py-24 px-6 md:px-20 bg-teal-50 text-gray-800"
    >
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-8">
        Book Your Session
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-teal-600"
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            maxLength={10}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-teal-600"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-teal-600"
          />
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 w-full bg-white text-gray-700 focus:outline-teal-600"
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Pre-wedding">Pre-wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Party">Party</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-teal-600"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Message / Event Details"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-teal-600"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 cursor-pointer rounded-full text-lg transition w-full"
        >
          Submit Booking
        </button>

        {result && (
          <p
            className={`text-sm mt-4 ${
              result.includes("Form Submitted Successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </section>
  );
}

export default Booking;
