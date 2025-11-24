import {
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

// Card animation
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      easing: "ease-out",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Icon animation
const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      easing: "ease-out",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.25,
      easing: "ease-out",
      stiffness: 300,
      damping: 15,
    },
  },
};

const steps = [
  { icon: ClipboardList, step: "STEP 01", title: "Requirements Gathering", desc: "We understand your vision clearly." },
  { icon: Palette, step: "STEP 02", title: "UI/UX Design", desc: "We design intuitive user experiences." },
  { icon: Code, step: "STEP 03", title: "Development Process", desc: "We build scalable digital solutions." },
  { icon: TestTube, step: "STEP 04", title: "Testing & Analysis", desc: "We ensure everything works perfectly." },
  { icon: Rocket, step: "STEP 05", title: "Phased Deployments", desc: "We deliver smooth and stable rollouts." },
  { icon: Settings, step: "STEP 06", title: "Production & Support", desc: "We maintain and monitor continuously." },
];

export const ProcessFlow = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Development Process</h2>
          <p className="text-lg text-muted-foreground">
            A clear six-step workflow to deliver quality results.
          </p>
        </div>

        {/* Grid Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-6 
            gap-8 
            max-w-6xl 
            mx-auto
          "
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="
                relative 
                group 
                p-6 
                bg-white 
                border 
                border-gray-200 
                rounded-3xl 
                shadow-md 
                hover:shadow-xl 
                transition-all
                text-center
              "
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                className="
                  w-16 
                  h-16 
                  mx-auto 
                  flex 
                  items-center 
                  justify-center 
                  rounded-2xl 
                  bg-primary/10 
                  text-primary 
                  shadow-sm 
                  mb-4
                "
              >
                <s.icon className="w-8 h-8" />
              </motion.div>

              <p className="text-primary text-sm font-semibold">{s.step}</p>

              <h3 className="text-lg font-bold mt-1 leading-tight h-12 flex items-center justify-center">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed h-12">
                {s.desc}
              </p>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="
                    hidden 
                    lg:block 
                    absolute 
                    top-10 
                    -right-[70px] 
                    h-[2px] 
                    bg-primary/20
                  "
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
