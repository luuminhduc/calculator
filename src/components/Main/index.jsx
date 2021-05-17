import React from "react";
import BtnArea from "../BtnArea";
import Header from "../Header";
import Screen from "../Screen";

const Main = ({
  themeArr,
  currentTheme,
  setCurrentTheme,
  result,
  setResult,
  setList,
  list,
  btnArr,
  handleClickBtn,
  reset,
  calculateResult,
}) => {
  return (
    <div className="main">
      <Header
        themeArr={themeArr}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <Screen result={result} list={list} setResult={setResult} />
      <BtnArea
        result={result}
        setResult={setResult}
        list={list}
        setList={setList}
        btnArr={btnArr}
        handleClickBtn={handleClickBtn}
        reset={reset}
        calculateResult={calculateResult}
      />
    </div>
  );
};

export default Main;
