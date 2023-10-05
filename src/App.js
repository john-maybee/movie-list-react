import './App.css';

const App = () => {
  const name = 'John';

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ): (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
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