import './App.css';
import Grid from './Components/Grid.js';
import React, { useState } from 'react';
import ProblemWindow from './Components/ProblemWindow.js';

let problems = []; //Format: [<Problem>, <Answer>, <Image (optional)>]
for (let i = 0; i < 9; i++) {
    problems.push(["Find x",i]); // Replace with actual problem content
}
problems[2] = ["Find y", 2, "https://picsum.photos/200/300"]; // Example image problem


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuContent, setMenuContent] = useState([]);
  return (
    <div className="App">
      <header className={showMenu ? "App-header blurred" : "App-header"}>
        <Grid 
        content={problems} 
        setShowMenu={setShowMenu} 
        menuContent={setMenuContent}/>
      </header>
      <ProblemWindow 
        menuContent={menuContent} 
        setShowMenu={setShowMenu}
        showMenu={showMenu} 
        />
    </div>
  );
}

export default App;
