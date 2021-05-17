import React from "react";

const Screen = ({ list, result }) => {
  return (
    <div className="screen">
      <div className="operation">
        {list.length > 0 &&
          list?.map((item, idx) => <span key={idx}>{item}</span>)}
      </div>
      <div className="result">{result && result}</div>
    </div>
  );
};

export default Screen;
