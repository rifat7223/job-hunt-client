import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
     
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update html class directly
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Store preference
    localStorage.setItem("theme", newTheme);
  };
    return (
        <div>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

        </div>
    );
};

export default ThemeProvider;
