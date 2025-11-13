import React from 'react';
import { motion } from "framer-motion";
const categories = [
  {
    name: "Web Development",
    image: "https://i.ibb.co/9rb0y1H/webdev.jpg",
  },
  {
    name: "Graphic Design",
    image: "https://i.ibb.co/j5HyhjR/graphicdesign.jpg",
  },
  {
    name: "Digital Marketing",
    image: "https://i.ibb.co/1LvN88y/digitalmarketing.jpg",
  },
];

const TopJobCatagories = () => {
    return (
        <div>
              <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-purple-100 dark:from-[#1e1b2e] dark:to-[#2a2443] text-center px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
      >
        Top <span className="text-[#6A38C2]">Categories</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
      >
        Discover the most popular job categories on our platform and start
        exploring new opportunities today.
      </motion.p>

      {/* Categories Grid (3 cards) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Category Name */}
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
        </div>
    );
};

export default TopJobCatagories;