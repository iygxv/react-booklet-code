import { memo, useCallback, useEffect, useMemo, useState } from "react";

interface BbbProps {
  count: number;
  callback: () => void;
}
function Bbb(props: BbbProps) {
  console.log("bbb render");
  return <h2>{props.count}</h2>;
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件。
const MemoBbb = memo(Bbb);

function App() {
  const [, setNum] = useState(1);
  const [count, setCount] = useState(2);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount(Math.random());
    }, 2000);
  }, []);


  const bbbCallback = useCallback(() => {
    console.log("bbb callback");
  }, [])

  const count2 = useMemo(() => {
    return count * 2
  }, [count])

  return (
    <div>
      <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
    </div>
  );
}

export default App;

// memo 是防止 props 没变时的重新渲染
// useMemo 和 useCallback 是防止 props 的不必要变化。