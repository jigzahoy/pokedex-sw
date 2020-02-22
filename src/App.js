import React, { useState } from 'react';

import NavBar from 'components/NavBar';
import Pokedex from 'components/Pokedex';


const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="app-body" id="App" >
      <div className="app-container">
        <NavBar setSearch={setSearch} />
        <Pokedex searchField={search} />
      </div>
    </div>
  );
}



export default App;