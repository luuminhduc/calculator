import React from "react";

const Toggle = ({ themeArr, currentTheme, setCurrentTheme }) => {
  return (
    <div className="toggle">
      <div className="theme_number">
        {themeArr.map((el, i) => (
          <span onClick={() => setCurrentTheme(el)} key={i}>
            {el}
          </span>
        ))}
      </div>
      <div className="theme_circle_container">
        {themeArr.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentTheme(item)}
            className={`theme_circle ${item === currentTheme ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
