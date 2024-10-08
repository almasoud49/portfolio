
"use client";

import { motion } from 'framer-motion';
import AboutMe from '@/components/about/AboutMe';

const AboutMePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="container mx-auto"
    >
      <AboutMe />
    </motion.div>
  );
};

export default AboutMePage;
