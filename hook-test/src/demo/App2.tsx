import { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState(0);
  const add = () => {
    setNum(num + 1);
  }
  useEffect(() => {
    console.log('useEffect');

    const timer = setInterval(() => {
      console.log(num);
    }, 1000);
    return () => {
      console.log('clean up')
      clearInterval(timer);
    }

  }, [num]);
  return (
    <>
    <div>{num}</div>
    <button onClick={add}>增加</button>
    </>
  )
}

export default App;

// useEffect 副作用函数, 每次执行函数，额外执行了一些逻辑
// useEffect 的第二个参数，是一个数组，当数组中的值发生变化时，才会执行副作用函数
// 如果我们传一个空数组，那么 useEffect 只会执行一次
// 如果不穿第二个参数，那么 useEffect 每次都会执行
// 如果在 useEffect 里如果跑了一个定时器, 依赖变了,再次执行 useEffect,  又跑了一个useEffect, 可以在返回值中写一个函数 清楚当前定时器