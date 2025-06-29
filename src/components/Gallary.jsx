import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.webp";

// Animation variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Animation variants for buttons
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

// Gallery data
const galleryImages = [
  { src: pic1, category: 'Wedding', alt: 'Wedding ceremony moment' },
  { src: pic2, category: 'Pre-Wedding', alt: 'Romantic pre-wedding shoot' },
  { src: pic3, category: 'Events', alt: 'Birthday party celebration' },
  { src: pic4, category: 'Wedding', alt: 'Bride and groom portrait' },
  { src: pic5, category: 'Pre-Wedding', alt: 'Couple in scenic location' },
  { src: pic6, category: 'Events', alt: 'Anniversary celebration' },
  { src: pic3, category: 'Wedding', alt: 'Wedding dance moment' },
  { src: pic4, category: 'Pre-Wedding', alt: 'Engagement photo session' },
  { src: pic5, category: 'Events', alt: 'Party event capture' },
  { src: pic6, category: 'Wedding', alt: 'Wedding reception scene' },
];

const Gallery = () => {
  const navigate = useNavigate();

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
          Our Gallery
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explore our collection of breathtaking moments from weddings, pre-weddings, and events, showcasing candid, posed, and aerial photography.
        </motion.p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative mb-6 break-inside-avoid"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl shadow-md object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm py-2 px-4 rounded-b-xl">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="bg-teal-700 text-white px-8 py-3 rounded-full mt-12 hover:bg-teal-900 cursor-pointer transition"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate('/contactus')}
        >
          Contact Us
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Gallery;
