import React, { useState, memo } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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


// --- Status Message Component (Unchanged) ---
const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;

  const variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
    >
      <CheckCircle2 className="w-4 h-4" />
      {message}
    </motion.div>
  );
};


// --- Main Contact Component ---
function ContactComponent() {
  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name, email, message } = Object.fromEntries(formData.entries());

    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailtoUrl = `mailto:gr.menegas@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setFormState({
      status: "success",
      message: "Opening your email client — please send the message from there.",
    });
    e.target.reset();
    setTimeout(() => setFormState({ status: "idle", message: "" }), 5000);
  };

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
                Whether you want to discuss a project, ask a question, or just say hello, I’d love to hear from you. Fill out the form below or email me directly. Let’s connect!
            </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:gr.menegas@gmail.com"
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
            gr.menegas@gmail.com
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={formContainerVariants}
          className="w-full p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-2xl shadow space-y-4"
        >
          <AnimatePresence>
            <motion.div key={formState.status} variants={itemVariants} layout>
              <StatusMessage status={formState.status} message={formState.message} />
            </motion.div>
          </AnimatePresence>
          
          <motion.div variants={itemVariants}>
            <Input type="text" name="name" placeholder="Your Name" required className="text-foreground" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input type="email" name="email" placeholder="Your Email" required className="text-foreground" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea rows={4} name="message" placeholder="Your Message" required className="resize-y text-foreground" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200">
              Send Message <Send className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);