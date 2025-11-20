import {
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    step: "STEP 01",
    title: "Requirements Gathering",
    description: "We understand your vision, goals, and technical needs with clarity.",
  },
  {
    icon: Palette,
    step: "STEP 02",
    title: "UI/UX Design",
    description: " We design beautiful and intuitive user experiences.",
  },
  {
    icon: Code,
    step: "STEP 03",
    title: "Development",
    description: "We build robust and scalable digital solutions.",
  },
  {
    icon: TestTube,
    step: "STEP 04",
    title: "Testing & QA",
    description: "We ensure top-tier quality through rigorous testing.",
  },
  {
    icon: Rocket,
    step: "STEP 05",
    title: "Phased Deployments",
    description: "We deliver smooth and stable rollouts.",
  },
  {
    icon: Settings,
    step: "STEP 06",
    title: "Production & Support",
    description: "We provide continuous monitoring, maintenance, and improvements..",
  },
];

// CLEAN fade & slide animation
const softMotion = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export const ProcessFlow = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={softMotion}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology delivering clarity, efficiency & quality.
          </p>
        </motion.div>

        {/* 1×6 Row */}
        <div className="flex justify-between items-start gap-8 lg:scale-100 md:scale-95 sm:scale-90 scale-75 origin-top mx-auto max-w-7xl">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={softMotion}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center w-[160px] relative"
            >
              {/* Icon Circle - Gentle Zoom-in */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="w-16 h-16 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center bg-white shadow-sm mb-4"
              >
                <step.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Step Label */}
              <p className="text-primary text-sm font-semibold mb-1">
                {step.step}
              </p>

              {/* Title */}
            <h3 className="text-xl font-bold mb-2 line-clamp-1 h-[30px]">
  {step.title}
</h3>

{/* Description */}
<p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 h-[40px]">
  {step.description}
</p>

              {/* Clean Line Wipe Animation */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "80px", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 + 0.3, ease: "easeOut" }}
                  className="absolute top-8 left-[100%] h-[2px] bg-primary/20"
                />
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
