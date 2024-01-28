import { useContext } from 'react';
import { SimpleContext } from '../store/simple-context';


const SimpleComponent = () => {
  const { text, setText } = useContext(SimpleContext);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  );
}

export default SimpleComponent;