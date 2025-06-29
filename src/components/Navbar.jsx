import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";

const menuItems = [
  { name: "Home", to: "/" },
  {
    name: "Portfolio",
    sub: [
      ["Wedding", "/portfolio?category=wedding"],
      ["Pre-Wedding", "/portfolio?category=pre-wedding"],
      ["Events", "/portfolio?category=events"],
    ],
  },
  {
    name: "Services",
    sub: [
      ["Candid Photo Shoot", "/services?category=candid-shoot"],
      ["Normal Photo Shoot", "/services?category=normal-shoot"],
      ["Drone Recording", "/services?category=drone-recording"],
      ["Photo & Video Editing", "/services?category=editing"],
      ["Album", "/services?category=album-making"],
    ],
  },
  { name: "Gallery", to: "/gallary" },
  { name: "Contact", to: "/contactus" },
];

const offers = [
  "🔥 20% Off on Wedding/Pre-Wedding Shoot",
  "📷 Book Now & Get 1 Free Edit",
  "💼 Combo Packages Starting ₹9999",
];

// Animation variants for dropdown
const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Animation variants for mobile menu
const mobileMenuVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const renderMenu = (isMobile = false) =>
    menuItems.map(({ name, to, sub }) => (
      <motion.div
        key={name}
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: isMobile ? 0 : 0.1 * menuItems.indexOf({ name, to, sub }),
          duration: 0.3,
        }}
      >
        {sub ? (
          <div>
            <button
              onClick={() => handleDropdownToggle(name)}
              className={`w-full text-left ${
                isMobile ? "px-4 py-2" : ""
              } text-gray-700 hover:text-red-600 transition`}
            >
              {name}
            </button>
            {openDropdown === name && (
              <motion.div
                className={`${
                  isMobile ? "ml-4" : "absolute left-0 mt-2 w-48"
                } bg-white shadow-md rounded-md border py-1 z-30`}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
              >
                {sub.map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => {
                      setOpenDropdown(null);
                      if (isMobile) setMobileMenuOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          <Link
            to={to}
            className={`${
              isMobile ? "block px-4 py-2" : ""
            } text-gray-700 hover:text-red-600 transition`}
            onClick={() => {
              setOpenDropdown(null);
              if (isMobile) setMobileMenuOpen(false);
            }}
          >
            {name}
          </Link>
        )}
      </motion.div>
    ));

  return (
    <nav className="bg-gray-100 border-b shadow-md fixed w-full z-20 px-4 md:px-8 py-4 flex justify-between items-center text-gray-800">
      <div className="flex items-center space-x-6 overflow-hidden">
        {/* Logo */}
        <motion.div
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-bold whitespace-nowrap cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="photography world" className="h-10 w-20" />
        </motion.div>

        {/* Scrolling Offers */}
        <div className="flex items-center space-x-4 overflow-hidden max-w-[250px] md:max-w-[400px] lg:max-w-[600px]">
          <motion.div
            className="marquee-container w-full cursor-pointer"
            onClick={() => navigate("/offers")}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="marquee-track flex">
              {offers.concat(offers).map((offer, index) => (
                <span
                  key={index}
                  className="mx-4 text-sm text-red-600 whitespace-nowrap"
                >
                  {offer}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center" ref={dropdownRef}>
        {renderMenu()}
        <motion.button
          onClick={() => navigate("/book")}
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Book Now
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          ref={dropdownRef}
          className="absolute top-16 right-4 w-64 bg-white border shadow-md rounded-md z-50 py-2 mobile-menu"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {renderMenu(true)}
          <motion.button
            onClick={() => {
              navigate("/book");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-center bg-red-600 text-white mt-2 py-2 rounded hover:bg-red-700"
            whileHover={{ scale: 1.05 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}
