import React from "react";
import { useEffect, useRef } from "react";


const Aaa: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  
  return (
    <>
      <input type="password" ref={ref}/>
    </>
  )
}

const WrappedAaa = React.forwardRef(Aaa);

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  }, [])

  return (
    <>
    <WrappedAaa ref={inputRef} />
    </>
  )
}

export default App;

// 想把 ref 从子组件传递到父组件
// forwardRef