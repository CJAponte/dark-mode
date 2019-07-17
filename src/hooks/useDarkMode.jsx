import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("isDarkModeEnabled");

  useEffect(() => {
    darkMode
      ? document.body.classList.add("darkmode")
      : document.body.classList.remove("darkmode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;