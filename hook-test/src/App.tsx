import { useState } from "react";

function App() {
  // const [num, setNum] = useState(1);
  // 只能写一些同步的计算逻辑，不支持异步
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  });

  return (
    // <div onClick={() => setNum(num + 1)}>{num}</div>
    // 可以直接传新的值，或者传一个函数，返回新的值，这个函数的参数是上一次的 state
    <div onClick={() => setNum((prevNum) => prevNum + 5)}>{num}</div>
  );
}

export default App;
