import { ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LetCore",
    description:
      "An evolving property-operations platform designed to help property managers organise properties, compliance requirements, tasks and operational workflows from one central dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
    ],
    liveUrl: "https://prop-app-gorysms-projects.vercel.app/",
    status: "Active development",
  },
  {
    title: "Inspectly",
    description:
      "A cloud-based property inspection and reporting platform for property managers and real estate professionals. Users can create properties, configure inspection templates, capture photos and notes, and generate professional PDF reports.",
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "JavaScript",
      "PDF Generation",
    ],
    liveUrl: "https://inspectly-76c1e.web.app/landing",
    status: "Beta / Live",
  },
  {
    title: "Easy Lets PMS",
    description:
      "A property management web application created to centralise essential property information and support day-to-day management processes.",
    technologies: ["React", "JavaScript", "Firebase", "Bootstrap"],
    liveUrl: "https://easyletspms.netlify.app/",
    status: "Live project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-white/95 border border-neutral-200 rounded-2xl shadow-sm p-6 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            {project.title}
          </h3>

          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
            {project.status}
          </span>
        </div>
      </div>

      <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-transparent text-neutral-900 font-medium border border-neutral-900 hover:bg-neutral-100 transition-colors"
      >
        View Live Project
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="w-full min-h-[80vh] px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-5 flex items-center justify-center gap-3">
            <FolderKanban className="w-9 h-9" />
            Selected Projects
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            These projects reflect my progression from building an initial
            property-management application to developing more focused
            property-technology products for inspections, compliance and
            operational workflows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}