import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGift, FaCamera, FaVideo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 }
  }
};

const Offers = () => {
  const navigate = useNavigate();

  const individualOffers = [
    {
      title: "20% Off on Pre-Wedding Shoots",
      description: "Book your romantic moments now and enjoy 20% off on all pre-wedding shoots scheduled this month.",
      icon: <FaCamera className="text-teal-600 text-4xl" />,
    },
    {
      title: "Free Album with Wedding Photography",
      description: "Get a premium photo album absolutely free when you book our wedding photography service.",
      icon: <FaGift className="text-red-500 text-4xl" />,
    },
    {
      title: "15% Off on Event Photography",
      description: "Whether it's a birthday, anniversary, or party — enjoy discounted rates for all event bookings.",
      icon: <FaCheckCircle className="text-green-600 text-4xl" />,
    },
  ];

  const comboOffers = [
    {
      title: "Wedding + Pre-Wedding Combo",
      description: "Book both services together and save up to 30%. Includes candid, traditional, and album creation.",
    },
    {
      title: "Photography + Drone Videography",
      description: "Get a cinematic edge! Book both services together and get 25% off plus free highlight video.",
    },
    {
      title: "Complete Wedding Package",
      description: "Photography, Videography, Drone Coverage, Editing & Album – All in one discounted package.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-800 font-sans px-6 md:px-20 py-24"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.h1 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-6">
        Special Offers & Combo Packs
      </motion.h1>
      <motion.p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Celebrate your special occasions with our exclusive discounts and bundled packages, crafted to offer the best value without compromising on quality.
      </motion.p>

      {/* Individual Offers */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6">🔥 Individual Offers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {individualOffers.map((offer, index) => (
            <motion.div
              key={index}
              className="p-6 bg-teal-50 rounded-xl shadow-md hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {offer.icon}
                <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
              </div>
              <p className="text-gray-700">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Combo Offers */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-red-600 mb-6">🎁 Combo Pack Offers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {comboOffers.map((combo, index) => (
            <motion.div
              key={index}
              className="p-6 bg-red-50 rounded-xl shadow-md hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4">
                <FaVideo className="text-red-500 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{combo.title}</h3>
              <p className="text-gray-700">{combo.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <motion.button
          className="bg-teal-700 text-white px-10 py-4 cursor-pointer rounded-full text-lg font-medium hover:bg-teal-800 transition"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/book")}
        >
          Book an Offer Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Offers;
