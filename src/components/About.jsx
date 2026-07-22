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
              Software Engineer
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
            Software Engineering graduate and product minded developer with more than
            seven years of experience across property management, project delivery and
            customer facing operations. Experienced in developing practical web
            applications using React, JavaScript, TypeScript, Next.js, Firebase and
            Supabase, with growing exposure to Microsoft Azure, authentication, cloud
            deployment and DevOps workflows.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
            Particularly strong at understanding operational challenges, translating
            business requirements into practical and user friendly software solutions,
            and communicating effectively with both technical and non technical
            stakeholders. Now seeking to develop deeper experience in cloud
            technologies, backend development and DevOps within a collaborative software
            engineering team.
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