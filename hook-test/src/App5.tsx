import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';

interface RefProps {
  aaa: () => void;
}

const Input: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return {
        aaa() {
          inputRef.current?.focus();
        }
      }
    }, [inputRef]);

    return <div>
        <input ref={inputRef}></input>
    </div>
}

const WrappedInput = React.forwardRef(Input);

function App() {
  const ref = useRef<RefProps>(null);
 
  useEffect(()=> {
    console.log('ref', ref.current)
    ref.current?.aaa()
  }, []);

  return (
    <div className="App">
      <WrappedInput ref={ref}/>
    </div>
  );
}

export default App;
