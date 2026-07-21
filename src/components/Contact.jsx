import React, { memo } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


// --- Main Contact Component ---
function ContactComponent() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-xl"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-foreground">
              <span className="inline-flex items-center justify-center gap-3">
                {/* THE FIX: Applying a responsive 'top' utility for perfect alignment */}
                <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-primary drop-shadow-sm flex-shrink-0 relative top-px sm:top-0.5" />
                <span>Contact</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Whether you want to discuss a project, ask a question, or just say hello, I’d love to hear from you. Email me directly and let’s connect!
            </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:gr.menegas@gmail.com"
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium hover:underline transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            gr.menegas@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);