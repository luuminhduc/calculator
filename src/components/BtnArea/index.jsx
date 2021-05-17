import React from "react";

const BtnArea = ({
  setList,
  list,
  btnArr,
  handleClickBtn,
  reset,
  calculateResult,
}) => {
  return (
    <div className="btnArea">
      <div className="first_btn_arr">
        {btnArr.map((item, idx) => (
          <span
            onClick={() => handleClickBtn(item)}
            className={`${item === "DEL" && "del"}`}
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="last_btn_arr">
        <span onClick={() => reset()} className="reset_btn">
          RESET
        </span>
        <span onClick={() => calculateResult()} className="equal_btn">
          =
        </span>
      </div>
    </div>
  );
};

export default BtnArea;
