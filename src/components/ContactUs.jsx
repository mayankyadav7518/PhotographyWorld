import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Animation variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for form inputs and buttons
const inputVariants = {
  focus: { scale: 1.02, borderColor: "#2dd4bf", transition: { duration: 0.3 } },
};

// Animation variants for buttons
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
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
    <motion.div
      className="bg-white text-gray-800 font-sans min-h-screen"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <section className="py-20 px-6 md:px-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-teal-700 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Ready to capture your special moments? Reach out to book our wedding,
          pre-wedding, or event photography services, or inquire about editing
          and album making.
        </motion.p>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
  <div className="bg-teal-50 p-8 rounded-xl shadow-md">
    <div className="space-y-6">
      {/* Row: Name and Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
            variants={inputVariants}
            whileFocus="focus"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
            variants={inputVariants}
            whileFocus="focus"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row: Email */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
          variants={inputVariants}
          whileFocus="focus"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Row: Event Type and Date */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-gray-700 font-semibold mb-2">Event Type</label>
          <motion.select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg border ${errors.eventType ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
            variants={inputVariants}
            whileFocus="focus"
          >
            <option value="">Select an event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Pre-Wedding">Pre-Wedding</option>
            <option value="Events">Events (Birthday, Anniversary, Party)</option>
          </motion.select>
          {errors.eventType && <p className="text-red-600 text-sm mt-1">{errors.eventType}</p>}
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-gray-700 font-semibold mb-2">Event Date</label>
          <motion.input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg border ${errors.eventDate ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
            variants={inputVariants}
            whileFocus="focus"
          />
          {errors.eventDate && <p className="text-red-600 text-sm mt-1">{errors.eventDate}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-600`}
          variants={inputVariants}
          whileFocus="focus"
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <motion.button
        className="bg-red-600 text-white px-8 py-3 rounded-full w-full hover:bg-red-700 cursor-pointer transition"
        variants={buttonVariants}
        whileHover="hover"
        onClick={handleSubmit}
      >
        Send Message
      </motion.button>

      {/* Result Message */}
      {result && (
        <motion.p
          className={`text-center mt-4 ${result.includes('Success') ? 'text-teal-600' : 'text-red-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      )}
    </div>
  </div>
</div>

          {/* Contact Info and Map */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-teal-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <FaPhone className="text-teal-600" size={20} />
                  <p className="text-gray-700">+91 8090191740</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <FaEnvelope className="text-teal-600" size={20} />
                  <p className="text-gray-700">yuvrajsingh@gmail.com</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <FaMapMarkerAlt className="text-teal-600" size={20} />
                  <p className="text-gray-700">
                    Gorakhpur, Uttar Pradesh, India
                  </p>
                </motion.div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaInstagram size={24} />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaFacebook size={24} />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaYoutube size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
            <motion.div
              className="bg-gray-300 h-64 rounded-xl shadow-md flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7124.703527048384!2d83.15165514218307!3d26.76505485694173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39913bd1a7ee8537%3A0x98eb18bbb6fec2b3!2sBawandra%2C%20Uttar%20Pradesh%20273209!5e0!3m2!1sen!2sin!4v1751186239303!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
