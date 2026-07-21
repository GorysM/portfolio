import React, { memo, useMemo } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Child Component ---
const ExperienceCard = memo(({ role }) => {
  const { title, company, location, period, current, points } = role;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {company} · {location}
          </p>
        </div>
        <span
          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
            current
              ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white"
              : "bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"
          }`}
        >
          {period}
        </span>
      </div>
      <ul className="list-disc ml-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
});
ExperienceCard.displayName = "ExperienceCard";

// --- Static Data ---
const EXPERIENCE_DATA = [
  {
    title: "Property Manager",
    company: "Ellune Property",
    location: "London, UK",
    period: "2025 – Present",
    current: true,
    points: [
      "Provide comprehensive support across lettings, property management, inspections, Airbnb management and day-to-day operations.",
      "Coordinate maintenance works and liaise with tenants, landlords, contractors and clients.",
      "Conduct property condition checks and reports, and support accounts administration and invoice processing.",
      "Handle urgent operational issues while maintaining high standards of customer service.",
    ],
  },
  {
    title: "Block Manager",
    company: "Stapleton Long",
    location: "London, UK",
    period: "2024 – 2025",
    current: false,
    points: [
      "Delivered comprehensive property management services for residential blocks across London.",
      "Oversaw daily operations and conducted regular site inspections, ensuring compliance with health and safety regulations.",
      "Managed service charge budgets and coordinated major works projects with contractors and residents.",
      "Organised AGMs, prepared performance reports and handled insurance claims and sale/transfer documentation.",
    ],
  },
  {
    title: "Project Manager",
    company: "Ellune Construction",
    location: "London, UK",
    period: "2023 – 2024",
    current: false,
    points: [
      "Led project teams to deliver construction projects on time and within budget.",
      "Proactively resolved stakeholder conflicts, reducing project delays by 15% and increasing client satisfaction by 20%.",
      "Established clear team expectations and timelines, ensuring 100% on-time project delivery.",
      "Enhanced operational efficiency by 10% through effective project performance metrics management.",
    ],
  },
  {
    title: "Property Manager",
    company: "Ellune Property",
    location: "London, UK",
    period: "2018 – 2023",
    current: false,
    points: [
      "Managed a portfolio of residential properties, maintaining 100% accuracy in tenant occupancy records.",
      "Negotiated lease agreements, aligning rents with market trends and increasing rental income by 10%.",
      "Reduced tenant complaints by 25% and improved retention rates by 12% through proactive maintenance and strong relationships.",
      "Orchestrated large-scale maintenance projects and streamlined move-in/move-out processes, reducing vacancy periods by 10%.",
    ],
  },
  {
    title: "Real Estate Assistant",
    company: "Ellune Property",
    location: "London, UK",
    period: "2017 – 2018",
    current: false,
    points: [
      "Provided exceptional customer service, handling sensitive matters with confidentiality and professionalism.",
      "Conducted property research and assisted in preparing closing statements, purchase agreements and escrow instructions.",
      "Managed telephone communications, ensuring efficient information dissemination and message handling.",
    ],
  },
];

// --- Main Experience Component ---
const ExperienceComponent = memo(function Experience() {
  const experienceCards = useMemo(
    () =>
      EXPERIENCE_DATA.map((role, index) => (
        <ExperienceCard key={`${role.title}-${role.period}-${index}`} role={role} />
      )),
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <Briefcase className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Seven years managing real estate operations, projects and client
            relationships in London &mdash; the operational grounding now driving
            my transition into software engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-3xl flex flex-col gap-6"
        >
          {experienceCards}
        </motion.div>
      </motion.div>
    </div>
  );
});

ExperienceComponent.displayName = "Experience";

export default ExperienceComponent;
