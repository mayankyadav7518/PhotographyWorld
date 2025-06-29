
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

// Animation variants for footer
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function Footer() {
  return (
    <motion.footer
      className="bg-teal-700 text-white px-6 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">DreamLens Photography</h3>
          <p className="text-sm text-teal-100">
            Award-winning photography for weddings, events, prewedding shoots, and more. We turn your moments into lasting memories.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-teal-100 text-sm">
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/gallary" className="hover:text-white">Gallary</Link></li>
            <li><Link to="/contactus" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/offers" className="hover:text-white">Grab an Offer</Link></li>
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
          <div className="space-y-2 text-sm text-teal-100">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91-9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span>contact@dreamlens.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <motion.a
              href="#"
              className="text-white hover:text-red-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-red-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebookF size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        className="border-t border-teal-500 mt-8 pt-4 text-center text-sm text-teal-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="block mb-2">
          ♦ Over 1,000+ Campaigns ♦ 98% Client Satisfaction ♦ Trusted Since 2010 ♦
        </span>
        <span>© {new Date().getFullYear()} DreamLens Photography. All Rights Reserved.</span>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;