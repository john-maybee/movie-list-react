import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // Initial render of the count due to useEffect hook is 5 //
  useEffect(() => {
    setCount(5);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;

// Previously used code snippets: //

// {isNameShowing ? name : 'No name'}


//  const App = () => {
//  const name = 'John';

//   return (
//     <div className="App">
//       <h1>Hello, {name}!</h1>
//       {name ? (
//         <>
//           <h1>{name}</h1>
//         </>
//       ): (
//         <>
//           <h1>test</h1>
//           <h2>There is no name</h2>
//         </>
//       )}
//     </div>
//   );
// }