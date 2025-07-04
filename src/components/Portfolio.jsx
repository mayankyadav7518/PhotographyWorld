import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.webp";
import pic7 from "../assets/aman_page-0029.jpg";
import pic8 from "../assets/aman_page-0030.jpg";
import pic9 from "../assets/aman_page-0031.jpg";
import pic10 from "../assets/aman_page-0032.jpg";
import pic11 from "../assets/aman_page-0036.jpg";
import pic12 from "../assets/RAP_1973.jpg";
import pic13 from "../assets/RAP_1978.jpg";

// Animation variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for images
const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Animation variants for buttons
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

// Portfolio data
const portfolioData = {
  wedding: {
    title: "Wedding Photography",
    description: "Timeless captures of your special day, from heartfelt vows to joyous celebrations, crafted to preserve every moment.",
    images: [pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic1, pic3, pic4, pic5, pic6],
  },
  'pre-wedding': {
    title: "Pre-Wedding Photography",
    description: "Romantic and creative engagement shoots that tell your love story with stunning visuals and heartfelt emotions.",
    images: [pic12, pic7, pic9, pic10, pic11, pic12, pic13, pic3, pic4, pic5, pic6, pic1],
  },
  events: {
    title: "Events Photography",
    description: "Vibrant photography for parties, birthdays, and anniversaries, capturing the energy and joy of your celebrations.",
    images: [pic9, pic7, pic8, pic10, pic11, pic12, pic13, pic5, pic6, pic1, pic3, pic4],
  },
};


// Main Portfolio Page

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PortfolioMain = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const selectedCategory = query.get("category");

  const selectedData = portfolioData[selectedCategory];

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
          {selectedCategory ? selectedData.title : "Our Portfolio"}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {selectedCategory
            ? selectedData.description
            : "Discover our captivating photography for weddings, pre-wedding shoots, and events, preserving your special moments with artistry."}
        </motion.p>

{selectedCategory && (
          <motion.button
            className="mb-8 bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/portfolio")}
          >
            ← Back to Portfolio
          </motion.button>
        )}

        {selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedData.images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`${selectedData.title} ${i + 1}`}
                className={`rounded-xl shadow-md object-cover w-full ${i % 2 === 0 ? 'h-96' : 'h-64'}`}
                variants={imageVariants}
                whileHover="hover"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(portfolioData).map((category, index) => (
              <motion.div
                key={category}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Link to={`/portfolio?category=${category}`}>
                  <img
                    src={portfolioData[category].images[0]}
                    alt={portfolioData[category].title}
                    className="w-full h-96 object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-xl font-semibold hover:text-teal-400 transition">
                      {portfolioData[category].title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <motion.button
          className="bg-teal-700 text-white px-8 py-3 rounded-full mt-12 hover:bg-teal-900 transition cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/book")}
        >
          Book a Session
        </motion.button>
      </section>
    </motion.div>
  );
};

// Portfolio Routes
const Portfolio = () => (
  <Routes>
    <Route path="/" element={<PortfolioMain />} />
  </Routes>
);

export default Portfolio;