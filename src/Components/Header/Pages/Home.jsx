import React, { useContext } from "react";

import Banner from "../../Banner";
import { useLoaderData } from "react-router";
import JobCard from "../../JobCard";
import { ThemeContext } from "../../../Context/ThemeProvider";

const Home = () => {
  const data = useLoaderData();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <Banner />

      <div className="grid grid-cols-3 gap-11 p-4">
        {data.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
