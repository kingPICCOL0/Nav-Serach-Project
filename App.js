import React from 'react';
import './App.css';

function App() {
  return (
   <>
   
   <body>
    <div class="container">
        <input id="searchbar" 
               onkeyup="search_animal()" 
               type="text" name="search"/>

        <ul id='list'>
            <li class="animals">Cat</li>
            <li class="animals">Dog</li>
            <li class="animals">Elephant</li>
            <li class="animals">Fish</li>
        </ul>
    </div>

    <script src="./src/script.js"></script>
</body>

   </>
  );
}

export default App;
