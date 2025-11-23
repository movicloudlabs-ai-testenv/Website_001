import { useState } from "react";
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
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Palette,
    step: "STEP 02",
    title: "UI/UX Design",
    description: "We design beautiful and intuitive user experiences.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Code,
    step: "STEP 03",
    title: "Development",
    description: "We build robust and scalable digital solutions.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: TestTube,
    step: "STEP 04",
    title: "Testing & QA",
    description: "We ensure top-tier quality through rigorous testing.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Rocket,
    step: "STEP 05",
    title: "Phased Deployments",
    description: "We deliver smooth and stable rollouts.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Settings,
    step: "STEP 06",
    title: "Production & Support",
    description: "We provide continuous monitoring.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
  },
];

export const ProcessFlow = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
          Development Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`p-8 rounded-3xl shadow-lg border bg-white hover:shadow-2xl cursor-pointer`}
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${step.color}`}
              >
                <step.icon className="w-10 h-10" />
              </div>

              <p className="text-sm font-bold mb-2 text-slate-600">{step.step}</p>

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
