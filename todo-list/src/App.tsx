import React, { useState } from "react";
import { Button, Input } from "antd";
import "./App.css";

interface listProp {
 lists: Array<{ name: string }>;
 onDelete: (index: number) => void;
}

function List(props: listProp) {
  const { lists, onDelete } = props;
  return <>
  {
    lists.map((item, index) => {
      return <li key={index}>{item.name} <span onClick={() => onDelete(index)}>❌</span></li>
    })
  }
  </>
}

function App() {
  const [value, setValue] = useState('');
  const [lists, setLists] = useState([
    { name: "吃饭" },
    { name: "睡觉" },
    { name: "打豆豆" },
  ])
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const handleAddList = () => {
    if(value === '') return;
    setLists([...lists, { name: value} ]);
    setValue('');
  }
  const handleDelete = (index: number) => {
    const filterLists = lists.filter((item, i) => {
      return index !== i;
    })
    setLists(filterLists)
  }
  return (
    <div className="App">
      <div className="todo-list-box">
        <Input placeholder="todo-list..." value={value} onChange={inputChange}/>
        <Button type="primary" onClick={handleAddList}>添加</Button>
      </div>
      <br />
      <ul>
        <List lists={lists} onDelete={handleDelete} />
      </ul>
    </div>
  );
}

export default App;
