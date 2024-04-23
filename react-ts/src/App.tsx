interface AaaProps {
  name: string;
  content: React.ReactNode;
}

// function Aaa(props: AaaProps) {
//   return <div>aaa, {props.name} {props.content}</div>
// }

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return <div>aaa, {props.name} {props.content}</div>
}

function App() {
  return <div>
    <Aaa name="guang" content={<button>xxxx</button>}></Aaa>
  </div>
}

export default App;
