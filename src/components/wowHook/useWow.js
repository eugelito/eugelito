// useWow.js
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

const useWow = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();

    // Clean up Wow.js on component unmount
    return () => {
      wow.sync(); // Force Wow.js to synchronize and remove added elements
    };
  }, []); // Run the effect only once on component mount
};

export default useWow;
