import React, { useState } from "react";
import Main from "../Main";

const Container = () => {
  const themeArr = [1, 2, 3];
  const [currentTheme, setCurrentTheme] = useState(1);

  const [result, setResult] = useState(null);
  const [list, setList] = useState([]);
  const btnArr = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];

  const operatorArr = ["+", "-", "/", "x", "."];
  const errorOperatorArr = ["/", "x"];
  const basicOperator = ["+", "-"];

  const handleClickBtn = (key) => {
    if (key === "DEL") {
      handleDel();
    } else {
      setList([...list, key]);
    }
  };

  const handleDel = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  const reset = () => {
    setList([]);
  };

  const hasInValidOperator = () => {
    let result = false;
    for (let i = 0; i < list.length; i++) {
      if (
        operatorArr.includes(list[i]) &&
        errorOperatorArr.includes(list[i + 1])
      ) {
        result = true;
        break;
      }
      if (list[i] === "." && list[i + 1] === ".") {
        result = true;
        break;
      }
      if (list[i] === "." && typeof list[i - 1] !== "number") {
        result = true;
        break;
      }
    }
    return result;
  };

  const divideBy0 = () => {
    let result = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === "/" && list[i + 1] === 0) {
        result = true;
        break;
      }
    }
    return result;
  };

  const calculateResult = () => {
    if (list.length > 0) {
      if (operatorArr.includes(list[list.length - 1]) || hasInValidOperator()) {
        setResult("Wrong syntax");
      } else if (divideBy0()) {
        setResult("Can not divde by 0");
      } else {
        for (let i = 0; i < list.length; i++) {
          while (
            !operatorArr.includes(list[i]) &&
            i < list.length - 1 &&
            !operatorArr.includes(list[i + 1]) &&
            list[i + 1] !== "."
          ) {
            const temNum = +(list[i].toString() + list[i + 1].toString());
            list.splice(i, 2, temNum);
          }

          //  2 dau lien tiep
          while (
            operatorArr.includes(list[i]) &&
            operatorArr.includes(list[i + 1])
          ) {
            if (list[i] === list[i + 1]) {
              if (list[i] === "-") {
                list.splice(i, 2, "+");
              } else {
                list.splice(i, 1);
              }
            } else {
              list.splice(i, 2, "-");
            }
          }
          // So thap phan
          // while (list[i] === ".") {
          //   let num;
          //   if (typeof list[i - 1] === "number") {
          //     num = +(list[i - 1] + "." + list[i + 1]);
          //   }

          //   list.splice(i - 1, 3, num);
          // }

          while (
            list[i] === "." &&
            typeof list[i - 1] === "number" &&
            typeof list[i + 1] === "number"
          ) {
            const num = +(list[i - 1] + "." + list[i + 1]);
            list.splice(i - 1, 3, num);
          }

          // dau truoc so
          while (
            !operatorArr.includes(list[i]) &&
            basicOperator.includes(list[i - 1]) &&
            typeof list[i - 2] !== "number"
          ) {
            if (list[i - 1] === "-") {
              list.splice(i - 1, 2, -list[i]);
            } else {
              list.splice(i - 1, 1);
            }
          }
        }
        console.log(list);
        // Nhan chia
        for (let i = 0; i < list.length; i++) {
          while (errorOperatorArr.includes(list[i])) {
            let num;
            if (list[i] === "x") {
              num = list[i - 1] * list[i + 1];
            } else {
              num = list[i - 1] / list[i + 1];
            }
            list.splice(i - 1, 3, num);
          }
        }
        // Cong tru
        while (list.length > 1) {
          let number;
          let first = list[0];
          let second = list[2];
          switch (list[1]) {
            case "-":
              number = first - second;
              break;
            default:
              number = first + second;
          }
          list.splice(0, 3, number);
        }
        setResult(list[0]);
      }
    }
  };

  return (
    <div className={`container theme_${currentTheme}`}>
      <Main
        themeArr={themeArr}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        result={result}
        setResult={setResult}
        list={list}
        btnArr={btnArr}
        setList={setList}
        handleClickBtn={handleClickBtn}
        reset={reset}
        calculateResult={calculateResult}
      />
    </div>
  );
};

export default Container;
