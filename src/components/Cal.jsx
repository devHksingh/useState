import { useState } from "react";
import "./Cal.style.css";
const Cal = () => {
  const [data, setData] = useState({
    firstValue: "",

    operation: "",
    result: "",
  });
  const handleNumber = (e) => {
    console.log(e);
    const { value } = e.target;
    setData((num) => {
      return { ...num, result: data.result + value };
    });
  };

  const handleDelete = () => {
    const currentValue = data.result;
    const arr = currentValue.split("");
    console.log(arr);

    const newValueArr = arr.pop();
    console.log(newValueArr);
    const newValue = arr.join("");
    console.log(newValue);

    setData((prevData) => {
      return { ...prevData, result: newValue };
    });
  };

  const handleOprator = (e) => {
    const { value } = e.target;
    setData({ firstValue: data.result, operation: value, result: "" });
  };
  const handleResult = () => {
    const a = Number(data.firstValue);
    const b = Number(data.result);
    let c = 0;
    switch (data.operation) {
      case "+":
        c = a + b;
        console.log(c);

        break;
      case "-":
        c = a - b;
        break;
      case "*":
        c = a * b;
        break;
      case "/":
        c = a / b;
        break;
    }
    setData({ firstValue: "", operation: "", result: c });
  };
  const handleRest =()=>{
    setData({firstValue:"",operation:"",result:""})
  }

  return (
    <div className="">
      <h1>Calculator</h1>
      <div className="container">
        <input type="text" value={data.result} readOnly id="display-result"/>

        <div className="key-container">
          <input
            type="button"
            value={7}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={8}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={9}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={4}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={5}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={6}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={1}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={2}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={3}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={0}
            onClick={handleNumber}
            className="calNum"
          />
          <input
            type="button"
            value={'.'}
            onClick={handleNumber}
            className="calNum"
          />
          <input type="button" value={"/"} onClick={handleOprator} />
          <input type="button" value={"*"} onClick={handleOprator} />
          <input type="button" value={"-"} onClick={handleOprator} />
          <input type="button" value={"+"} onClick={handleOprator} />
          <input type="button" value={"RESET"} onClick={handleRest}/>
          <input type="button" value={"="} onClick={handleResult} />
          <input type="button" value={"DEL"} onClick={handleDelete} />
        </div>
        <div className="operation-key-container">
          
          
        </div>
        <div className="other-key-container">
          
        </div>
      </div>
    </div>
  );
};

export default Cal;
