import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {
  const APP_ID = "a62ab136";
  const APP_KEY = "eeed80e1cfd4418606ddaeb8b57085dd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line 
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input value={search} className="search-bar" type="text" onChange={updateSearch} />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>

    </div>
  );

}



export default App;
