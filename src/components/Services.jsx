

// import { Routes, Route, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaCameraRetro, FaUsers, FaVideo, FaEdit, FaBook } from 'react-icons/fa';
// import candid from "../assets/candid.jpg";
// import normal from "../assets/normal.jpg";
// import drone from "../assets/drone.jpg";
// import editing from "../assets/editing.webp";
// import album from "../assets/album.jpg";

// // Animation variants for section reveals
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// // Animation variants for cards
// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// };

// // Animation variants for buttons
// const buttonVariants = {
//   hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
// };

// // Services data
// const servicesData = {
//   'candid-shoot': {
//     title: 'Candid Photo Shoot',
//     icon: <FaCameraRetro size={40} className="text-teal-600" />,
//     description: 'Capture the magic of unscripted moments with our candid photography. Perfect for weddings, pre-weddings, and events, we freeze genuine emotions, laughter, and love in every frame.',
//     details: [
//       'Spontaneous and natural photography',
//       'Ideal for weddings, pre-weddings, and events',
//       'High-resolution images with professional editing',
//       'Customizable packages for your special day',
//     ],
//     image: candid,
//   },
//   'normal-shoot': {
//     title: 'Normal Photo Shoot',
//     icon: <FaUsers size={40} className="text-red-600" />,
//     description: 'Our traditional photo shoots deliver beautifully posed portraits and group shots. Perfect for formal wedding ceremonies, anniversaries, or family gatherings, we ensure every moment is elegantly captured.',
//     details: [
//       'Professionally posed portraits and group photos',
//       'Suitable for formal events and ceremonies',
//       'High-quality lighting and composition',
//       'Tailored sessions for your vision',
//     ],
//     image: normal,
//   },
//   'drone-recording': {
//     title: 'Drone Recording',
//     icon: <FaVideo size={40} className="text-teal-600" />,
//     description: 'Elevate your event with breathtaking aerial photography and videography. Our drone recordings capture stunning perspectives of weddings and events, adding a cinematic touch to your memories.',
//     details: [
//       'Aerial photography and videography',
//       'Cinematic footage for weddings and events',
//       'High-definition drone captures',
//       'Expert pilots and professional editing',
//     ],
//     image: drone,
//   },
//   'editing': {
//     title: 'Video and Photo Editing',
//     icon: <FaEdit size={40} className="text-red-600" />,
//     description: 'Transform your raw footage and photos into polished masterpieces with our professional editing services. We enhance colors, perfect lighting, and create cinematic videos for your special moments.',
//     details: [
//       'Professional color grading and retouching',
//       'Cinematic video editing with music and effects',
//       'Custom edits for weddings and events',
//       'Fast turnaround with high-quality results',
//     ],
//     image: editing,
//   },
//   'album-making': {
//     title: 'Album Making',
//     icon: <FaBook size={40} className="text-teal-600" />,
//     description: 'Preserve your memories in beautifully designed photo albums. Our custom albums are crafted with care, turning your wedding or event photos into timeless keepsakes.',
//     details: [
//       'Custom-designed, high-quality photo albums',
//       'Personalized layouts and themes',
//       'Premium materials for durability',
//       'Perfect for weddings, anniversaries, and events',
//     ],
//     image: album,
//   },
// };

// // Services Subpage Component
// const ServicesSubpage = ({ category }) => {
//   const { title, icon, description, details, image } = servicesData[category];

//   return (
//     <motion.div
//       className="bg-white text-gray-800 font-sans min-h-screen"
//       initial="hidden"
//       animate="visible"
//       variants={sectionVariants}
//     >
//       <section className="py-20 px-6 md:px-20">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-teal-700 mb-6 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           {description}
//         </motion.p>
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <motion.img
//             src={image}
//             alt={title}
//             className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//           />
//           <div className="w-full md:w-1/2">
//             <ul className="space-y-4 text-gray-700">
//               {details.map((detail, index) => (
//                 <motion.li
//                   key={index}
//                   className="flex items-center gap-2"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
//                 >
//                   <span className="text-red-600">•</span> {detail}
//                 </motion.li>
//               ))}
//             </ul>
//             <motion.button
//               className="bg-red-600 text-white px-8 py-3 rounded-full mt-8 hover:bg-red-700 transition"
//               variants={buttonVariants}
//               whileHover="hover"
//               onClick={() => window.location.href = '/contact'}
//             >
//               Book This Service
//             </motion.button>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// // Main Services Page
// const ServicesMain = () => (
//   <motion.div
//     className="bg-white text-gray-800 font-sans min-h-screen"
//     initial="hidden"
//     animate="visible"
//     variants={sectionVariants}
//   >
//     <section className="py-20 px-6 md:px-20 text-center">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-teal-700 mb-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         Our Services
//       </motion.h1>
//       <motion.p
//         className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         From candid captures to custom albums, our services are designed to make your weddings, pre-weddings, and events unforgettable with stunning visuals and cinematic storytelling.
//       </motion.p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {Object.keys(servicesData).map((category, index) => (
//           <motion.div
//             key={category}
//             className="bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ delay: index * 0.2 }}
//           >
//             <div className="flex justify-center mb-4">{servicesData[category].icon}</div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicesData[category].title}</h3>
//             <p className="text-gray-700 mb-4">{servicesData[category].description}</p>
//             <Link
//               to={`/services/${category}`}
//               className="text-teal-700 hover:text-teal-900 font-semibold"
//             >
//               Learn More →
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//       <motion.button
//         className="bg-teal-700 text-white px-8 py-3 rounded-full mt-12 hover:bg-teal-900 transition"
//         variants={buttonVariants}
//         whileHover="hover"
//         onClick={() => window.location.href = '/contact'}
//       >
//         Contact Us
//       </motion.button>
//     </section>
//   </motion.div>
// );

// // Services Routes
// const Services = () => (
//   <Routes>
//     <Route path="/" element={<ServicesMain />} />
//     <Route path="/candid-shoot" element={<ServicesSubpage category="candid-shoot" />} />
//     <Route path="/normal-shoot" element={<ServicesSubpage category="normal-shoot" />} />
//     <Route path="/drone-recording" element={<ServicesSubpage category="drone-recording" />} />
//     <Route path="/editing" element={<ServicesSubpage category="editing" />} />
//     <Route path="/album-making" element={<ServicesSubpage category="album-making" />} />
//   </Routes>
// );

// export default Services;







import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaUsers, FaVideo, FaEdit, FaBook } from 'react-icons/fa';
import candid from "../assets/candid.jpg";
import normal from "../assets/normal.jpg";
import drone from "../assets/drone.jpg";
import editing from "../assets/editing.webp";
import album from "../assets/album.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const servicesData = {
  'candid-shoot': {
    title: 'Candid Photo Shoot',
    icon: <FaCameraRetro size={40} className="text-teal-600" />,
    description: 'Capture the magic of unscripted moments with our candid photography.',
    details: [
      'Spontaneous and natural photography',
      'Ideal for weddings, pre-weddings, and events',
      'High-resolution images with professional editing',
      'Customizable packages for your special day',
    ],
    image: candid,
  },
  'normal-shoot': {
    title: 'Normal Photo Shoot',
    icon: <FaUsers size={40} className="text-red-600" />,
    description: 'Our traditional photo shoots deliver beautifully posed portraits.',
    details: [
      'Professionally posed portraits and group photos',
      'Suitable for formal events and ceremonies',
      'High-quality lighting and composition',
      'Tailored sessions for your vision',
    ],
    image: normal,
  },
  'drone-recording': {
    title: 'Drone Recording',
    icon: <FaVideo size={40} className="text-teal-600" />,
    description: 'Elevate your event with breathtaking aerial photography and videography.',
    details: [
      'Aerial photography and videography',
      'Cinematic footage for weddings and events',
      'High-definition drone captures',
      'Expert pilots and professional editing',
    ],
    image: drone,
  },
  'editing': {
    title: 'Video and Photo Editing',
    icon: <FaEdit size={40} className="text-red-600" />,
    description: 'Transform your raw footage and photos into polished masterpieces.',
    details: [
      'Professional color grading and retouching',
      'Cinematic video editing with music and effects',
      'Custom edits for weddings and events',
      'Fast turnaround with high-quality results',
    ],
    image: editing,
  },
  'album-making': {
    title: 'Album Making',
    icon: <FaBook size={40} className="text-teal-600" />,
    description: 'Preserve your memories in beautifully designed photo albums.',
    details: [
      'Custom-designed, high-quality photo albums',
      'Personalized layouts and themes',
      'Premium materials for durability',
      'Perfect for weddings, anniversaries, and events',
    ],
    image: album,
  },
};

const useQuery = () => new URLSearchParams(useLocation().search);

const Services = () => {
  const query = useQuery();
  const selectedCategory = query.get("category");
  const navigate = useNavigate();
  const selectedData = servicesData[selectedCategory];

  return (
    <motion.div
      className="bg-white text-gray-800 font-sans min-h-screen"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-teal-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {selectedCategory ? selectedData.title : "Our Services"}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {selectedCategory
            ? selectedData.description
            : "From candid captures to custom albums, our services are designed to make your weddings, pre-weddings, and events unforgettable with stunning visuals and cinematic storytelling."}
        </motion.p>

        {selectedCategory && (
          <motion.button
            className="mb-8 bg-gray-200 text-gray-800 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/services")}
          >
            ← Back to All Services
          </motion.button>
        )}

        {selectedCategory ? (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.img
              src={selectedData.image}
              alt={selectedData.title}
              className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
            <div className="w-full md:w-1/2 text-left">
              <ul className="space-y-4 text-gray-700">
                {selectedData.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-red-600">•</span> {detail}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="bg-red-600 text-white px-8 py-3 rounded-full mt-8 hover:bg-red-700 transition cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => navigate("/book")}
              >
                Book This Service
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(servicesData).map((category, index) => (
              <motion.div
                key={category}
                className="bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{servicesData[category].icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {servicesData[category].title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {servicesData[category].description}
                </p>
                <button
                  className="text-teal-700 hover:text-teal-900 font-semibold cursor-pointer"
                  onClick={() => navigate(`/services?category=${category}`)}
                >
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        )}

        <motion.button
          className="bg-teal-700 text-white px-8 py-3 rounded-full mt-12 hover:bg-teal-900 transition cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Services;
