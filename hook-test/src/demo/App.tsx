import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  // useState 传入函数时一般是用于复杂计算的, 但是不支持异步
  const [count, setCount] = useState(() => {
    const a = 10;
    const b = 30
    return a + b
  })
  const add = () => {
    setNum(num + 1);
  }
  const add2 = () => {
    setCount(count + 10);
  }
  return (
    <>
    <div>{num}</div>
    <button onClick={add}>num增加 + 1</button>
     <hr />
    <div>{count}</div>
    <button onClick={add2}>count增加 + 10</button>
    </>
  )
}

export default App;

// react 是支持 <> 空标签的
// useState()  可以传值 也可传函数, 但是传函数是不支持异步的