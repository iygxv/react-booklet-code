import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  })

  return (
    <>
    <input type="text" ref={inputRef}/>
    </>
  )
}

export default App;

// useRef 保存 dom 引用