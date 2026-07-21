import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/GorysM",
    icon: Github,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/grigorios-menegas-733581167/",
    icon: Linkedin,
    title: "LinkedIn",
  },
  {
    href: "mailto:gr.menegas@gmail.com",
    icon: Mail,
    title: "Email",
  },
];

const tags = [
  "React",
  "JavaScript",
  "Next.js",
  "Firebase",
  "Supabase",
  "Python",
  "Property Technology",
  "Product Development",
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-full max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-neutral-900" />
            <span className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
              Software Engineer & Product Builder
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 text-neutral-900">
            Hi, I&apos;m Grigorios Menegas.
          </h1>

          <div className="flex items-center gap-2 text-neutral-600 mb-5">
            <GraduationCap className="w-5 h-5" />
            <span>
              BSc Software Engineering, University of Westminster
            </span>
          </div>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-5">
            I am a London-based Software Engineering graduate and product builder
            focused on creating practical web applications with React and modern
            cloud technologies.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
            Alongside my technical background, I bring more than seven years of
            professional experience across property management, block management,
            project delivery and customer service. This combination allows me to
            understand real operational challenges, communicate effectively with
            stakeholders and translate business requirements into practical software
            solutions. My recent work includes applications built with React,
            JavaScript, Firebase, Supabase and cloud platforms including Microsoft
            Azure, with a particular focus on property technology and operational
            workflow improvement.
        </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 border border-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, icon: Icon, title }) => {
              const isMailto = href.startsWith("mailto:");
              return (
                <a
                  key={title}
                  href={href}
                  {...(!isMailto && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-label={title}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:scale-105 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}

            <a
              href="/projects"
              className="inline-flex items-center px-5 h-11 rounded-xl bg-white text-neutral-900 font-medium border border-neutral-900 hover:bg-neutral-100 transition"
            >
              View Projects
            </a>

            <a
              href="/experience"
              className="inline-flex items-center px-5 h-11 rounded-xl border border-neutral-300 bg-white text-neutral-700 font-medium hover:bg-neutral-100 transition"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}