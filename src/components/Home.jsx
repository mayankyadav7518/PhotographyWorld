
import { motion } from 'framer-motion';
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.webp";
import {
  FaCameraRetro,
  FaBirthdayCake,
  FaHeart,
  FaUsers,
  FaRing,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const services = [
  { icon: <FaRing size={30} className="text-red-600" />, title: "Wedding Shoot" },
  { icon: <FaHeart size={30} className="text-teal-600" />, title: "Pre-wedding Shoot" },
  { icon: <FaBirthdayCake size={30} className="text-red-600" />, title: "Anniversary" },
  { icon: <FaBirthdayCake size={30} className="text-red-600" />, title: "Birthday" },
  { icon: <FaUsers size={30} className="text-teal-600" />, title: "Parties & Events" },
  { icon: <FaCameraRetro size={30} className="text-red-600" />, title: "Custom Functions" },
];

const portfolioImages = [pic1, pic2, pic3, pic4, pic5, pic6];

// Animation variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for buttons
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

// Animation variants for images
const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

function Homepage() {

  const navigate = useNavigate();
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section with Background Video */}
      <motion.section
        className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center bg-gradient-to-r from-white via-teal-50 to-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 p-8 max-w-4xl">
          <motion.h1
            className="text-5xl font-extrabold text-teal-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where Moments Turn Into Masterpieces
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your story deserves to be told beautifully – whether it’s a wedding,
            pre-wedding, birthday, anniversary, or any celebration.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer px-6 py-3 rounded-full text-lg transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => navigate("/book")}
            >
              Book a Session
            </motion.button>
            <motion.a
              href="#portfolio"
              className="text-teal-700 border border-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer px-6 py-3 rounded-full transition"
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-teal-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Us */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-teal-700 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          We are a team of passionate photographers and creatives who specialize in capturing emotions, beauty, and energy through a lens. With years of experience in events and portraiture, we bring your vision to life – whether it's a glamorous wedding or a cozy family celebration.
        </p>
      </motion.section>

      {/* Portfolio with Alternate Image Heights */}
      <motion.section
        id="portfolio"
        className="py-16 px-6 md:px-20 bg-white flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Portfolio ${i + 1}`}
              className={`rounded-xl shadow-md object-cover w-full ${i % 2 === 0 ? "h-96" : "h-64"}`}
              variants={imageVariants}
              whileHover="hover"
            />
          ))}
        </div>
        <motion.button
          className="bg-teal-700 px-4 py-2 rounded-lg cursor-pointer text-white mt-6 hover:bg-teal-900 transition"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/portfolio")}
        >
          See more
        </motion.button>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-teal-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white border-l-4 border-teal-500 p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-4">
              “They made our wedding day extra special. Every photo is a treasure. The team is extremely professional and creative.”
            </p>
            <h4 className="text-teal-600 font-semibold">— Aditi & Rahul</h4>
          </motion.div>
          <motion.div
            className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-4">
              “From my child’s birthday to my sister’s engagement, they’ve always delivered top-quality work. Highly recommended!”
            </p>
            <h4 className="text-red-600 font-semibold">— Manish Gupta</h4>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Capture Your Special Moments</h2>
        <p className="mb-6 text-lg">Contact us today and turn your event into timeless memories.</p>
        <motion.button
          className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-900 cursor-pointer transition"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </main>
  );
}

export default Homepage;