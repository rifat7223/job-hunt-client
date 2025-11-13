import { Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
const Banner = () => {
    return (
        
       <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-purple-50 via-white to-purple-100 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300 rounded-full blur-3xl opacity-40"
      />

      {/* Top Badge */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-red-600 font-semibold rounded-full shadow-sm mb-6"
      >
        <Briefcase className="text-[#6A38C2]" size={20} />
        No.1 Job Hunt Website
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-bold text-gray-800 leading-tight"
      >
        Search, Apply & <br />
        Get Your{" "}
        <span className="text-[##6A38C2] bg-linear-to-r from-[#6A38C2] to-purple-600 bg-clip-text text-transparent">
          Dream Job
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-gray-600 mt-5 max-w-2xl"
      >
        Start your hunt for the best, life-changing career opportunities from
        here in your selected areas — find trusted employers and get hired
        quickly.
      </motion.p>

     

      {/* Trust Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center gap-6 mt-10 text-gray-700"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-green-500" />
          <p>1000+ Verified Employers</p>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-blue-500" />
          <p>Secure & Reliable Platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="text-purple-500" />
          <p>Over 10,000 Jobs Posted</p>
        </div>
      </motion.div>
    </section>
    );
};

export default Banner;