import { useEffect, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  FolderKanban,
  BrainCircuit,
  GraduationCap,
  Mail,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/about", icon: User, text: "About" },
  { to: "/experience", icon: Briefcase, text: "Experience" },
  { to: "/projects", icon: FolderKanban, text: "Projects" },
  { to: "/skills", icon: BrainCircuit, text: "Skills" },
  { to: "/academics", icon: GraduationCap, text: "Education" },
  { to: "/contact", icon: Mail, text: "Contact" },
];

const navVariants = {
  closed: {
    x: "100%",
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 30,
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 30,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  closed: { y: 20, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

const NavItem = memo(({ link, onNavClick, isActive }) => {
  const Icon = link.icon;

  return (
    <motion.li variants={itemVariants}>
      <Link
        to={link.to}
        onClick={onNavClick}
        className={`flex items-center gap-4 text-lg font-medium py-2 transition-colors ${
          isActive
            ? "text-neutral-900"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{link.text}</span>
      </Link>
    </motion.li>
  );
});

NavItem.displayName = "NavItem";

const SideNav = memo(({ open, onClose }) => {
  const location = useLocation();

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  const navItems = useMemo(
    () =>
      navLinks.map((link) => (
        <NavItem
          key={link.to}
          link={link}
          onNavClick={onClose}
          isActive={
            location.pathname === link.to ||
            (link.to === "/about" && location.pathname === "/")
          }
        />
      )),
    [location.pathname, onClose]
  );

  return (
    <>
      <motion.div
        initial={false}
        animate={open ? { opacity: 0.35 } : { opacity: 0 }}
        className={`fixed inset-0 bg-black z-40 min-[935px]:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={onClose}
      />

      <motion.nav
        initial={false}
        animate={open ? "open" : "closed"}
        variants={navVariants}
        className="fixed top-0 right-0 w-[270px] h-screen bg-white shadow-xl z-50 flex flex-col p-6 pt-8 min-[935px]:hidden"
        aria-label="Main navigation"
      >
        <motion.button
          variants={itemVariants}
          className="self-end text-neutral-600 hover:text-neutral-900 p-2 mb-8"
          aria-label="Close menu"
          type="button"
          onClick={onClose}
        >
          <X className="w-7 h-7" />
        </motion.button>

        <ul className="space-y-6">{navItems}</ul>
      </motion.nav>
    </>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;