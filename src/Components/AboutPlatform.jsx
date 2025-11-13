import { motion } from "framer-motion";
import { Users, Briefcase, ShieldCheck } from "lucide-react";

const AboutPlatform = () => {
  return (
    <section className="py-20 bg-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        About <span className="text-[#6A38C2]">JobHuntX</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
      >
        <strong>JobHuntX</strong> is a modern job marketplace platform built to
        connect talented individuals with trusted employers across industries.
        We focus on reliability, transparency, and fast hiring — empowering job
        seekers to find meaningful careers while helping companies grow with the
        right people.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-10 mt-10"
      >
        <div className="flex flex-col items-center text-gray-700">
          <Users className="text-[#6A38C2]" size={36} />
          <h3 className="font-semibold mt-2">10k+ Active Users</h3>
          <p className="text-sm text-gray-500">Growing community of professionals</p>
        </div>

        <div className="flex flex-col items-center text-gray-700">
          <Briefcase className="text-[#6A38C2]" size={36} />
          <h3 className="font-semibold mt-2">5k+ Job Listings</h3>
          <p className="text-sm text-gray-500">New opportunities added daily</p>
        </div>

        <div className="flex flex-col items-center text-gray-700">
          <ShieldCheck className="text-[#6A38C2]" size={36} />
          <h3 className="font-semibold mt-2">Trusted Employers</h3>
          <p className="text-sm text-gray-500">Verified and reliable companies</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPlatform;
