import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { ThemeContext } from "../../../Context/ThemeProvider";
import Banner from "../../Banner";
import JobCard from "../../JobCard";
import TopJobCatagories from "../../TopJobCatagories";
import AboutPlatform from "../../AboutPlatform";

const Home = () => {
  const data = useLoaderData();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Theme Toggle Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <Banner />

      <div
        style={{
          display: "grid",
          gap: "16px",
          padding: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {data.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      <TopJobCatagories />
      <AboutPlatform />
    </div>
  );
};

export default Home;
