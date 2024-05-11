import { useEffect, useState } from 'react';
import {useMountedState} from 'react-use';

const App = () => {
  // useMountedState 可以用来获取组件是否 mount 到 dom
    const isMounted = useMountedState();
    const [,setNum ] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum(1);
        }, 1000);
    });

    return <div>{ isMounted() ? 'mounted' : 'pending' }</div>
};

export default App;
