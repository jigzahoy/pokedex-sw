import React from 'react';

const NavBar = ({ setSearch }) => {
  const handleSearch = (event) => {
    const { value } = event.target;
    if (value.length >= 1) {
      setSearch(value);
    } else {
      setSearch('');
    }

  }

  return (
    <div id="navbar-container">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <input type="text" name="poke-search" id="poke-search" placeholder="Search Pokémon" onChange={handleSearch} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar;
