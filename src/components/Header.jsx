import { memo } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/academics", label: "Education" },
  { to: "/contact", label: "Contact" },
];

const Header = memo(({ onHamburgerClick }) => {
  const location = useLocation();

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-white shadow-sm border-b border-neutral-200"
    >
      <Link
        to="/"
        className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-wide hover:opacity-70 transition"
      >
        Grigorios Menegas
      </Link>

      <nav className="hidden min-[935px]:flex gap-3 md:gap-5 items-center">
        {navLinks.map((link) => {
          const isActive =
            location.pathname === link.to ||
            (link.to === "/about" && location.pathname === "/");

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-md text-base font-medium transition-colors
                ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex min-[935px]:hidden items-center">
        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open menu"
          className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-neutral-100 transition"
        >
          <Menu className="w-7 h-7 text-neutral-900" />
        </button>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";

export default Header;