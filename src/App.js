import './App.css';
import Grid from './Components/Grid.js';

let problems = []; //Format: [<Problem>, <Answer>, <Image (optional)>]
for (let i = 0; i < 9; i++) {
    problems.push([i,i]); // Replace with actual problem content
}
problems[2] = [2, 2, "https://picsum.photos/200/300"]; // Example image problem


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid n={3} content={problems}/>
      </header>
    </div>
  );
}

export default App;
