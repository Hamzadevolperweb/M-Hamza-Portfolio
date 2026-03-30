"use client";

import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { aboutData, bestPracticesData } from "@/utils/data/aboutData";
import { personalData } from "@/utils/data/personalData";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 " id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 "
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="text-white mb-5">
              <CardTitle className="text-3xl font-bold">About Me</CardTitle>
            </div>
            <div className="text-white">
              <ul className="space-y-4 text-lg leading-relaxed">
                {aboutData.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
                <li>
                  <span>
                    <span className="font-semibold">Location:</span>{" "}
                    {personalData.address}
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-200">
                  Availability
                </p>
                <div className="flex flex-wrap gap-2">
                  {personalData.availability.map((item) => (
                    <Badge
                      key={item}
                      className="bg-purple-500/20 text-purple-100 hover:bg-purple-500/30"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-200">
                  Best Practices
                </p>
                <div className="flex flex-wrap gap-2">
                  {bestPracticesData.map((item) => (
                    <Badge
                      key={item}
                      className="bg-white/10 text-white hover:bg-white/20"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl bg-gradient-to-r to-pink-500 from-violet-600">
            <motion.img
              src={personalData.profile}
              alt="About Me"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
