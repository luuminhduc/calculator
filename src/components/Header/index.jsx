import React from "react";
import Toggle from "../Toggle";

const Header = ({ themeArr, currentTheme, setCurrentTheme }) => {
  return (
    <div className="header">
      <h5>Calculator</h5>
      <div className="header_action">
        <p>Theme</p>
        <Toggle
          themeArr={themeArr}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </div>
    </div>
  );
};

export default Header;
