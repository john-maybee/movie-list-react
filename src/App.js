import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: Maybee</h2>
      <h2>Age: 30</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name={'John'}/>
      <Person />
      <Person />
      <Person />
      <Person />
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