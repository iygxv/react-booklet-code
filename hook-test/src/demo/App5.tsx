import React from "react";
import { createContext, useContext } from "react";
const countContext = createContext(0);


function Ccc() {
  const count = useContext(countContext);
  return (
    <h2>context的值为: {count}</h2>
  )
}


function Bbb() {
  const count = useContext(countContext);
  return (
    <div>
      { count }
      <Ccc></Ccc>
    </div>
  )
}

function App() {

  return (
    <div>
      <countContext.Provider value={66666}>
        <Bbb></Bbb>
      </countContext.Provider>
    </div>
  )
}

export default App;

// useContext 跨任意层组件传递数据