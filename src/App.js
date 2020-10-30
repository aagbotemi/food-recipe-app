import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

import Loading from './components/Loading';
import Search from './components/Search';
import Recipes from './components/Recipes';

require('dotenv').config()

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [ search, setSearch ] = useState(""); // the state that handles the search for recipes
  const [ query, setQuery ] = useState("rice"); //the state that holds the search item before submitting until the search button is pressed
  const [recipes, setRecipes] = useState([]); // the state where recipes are stored

  const API_ID = "04b7cf94";
  const apiKey = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${apiKey}`
  
  useEffect(() => {
    const getRecipes = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(API_URL);
        //const data = await response.json();
        setRecipes(response.data.hits);
        //console.log(response.data.hits)
      } catch (error) {
        setIsError(true);
        //setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };

    getRecipes();
  }, [query]);

  //input the item you want to search
  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  //handles the query you submit for search
  const handleSubmit = (e) => {
    e.preventDefault();    
    setQuery(search)
    setSearch('')
  }

  if (isLoading) {
    return (
      <section>
        <header>
          <h1>Recipe App</h1>
        </header>

        <main>
          <Search handleInput={handleInput} handleSubmit={handleSubmit} />
          
          <Loading />
        </main>
      </section>
    )
  }
  
  if (isError) {
    return (
      <section>
        <header>
          <h1>Recipe App</h1>
        </header>

        <main>
          <Search handleInput={handleInput} handleSubmit={handleSubmit} />

          {isError && <div className="error">Something went wrong...</div>}
          
        </main>
      </section>
    )
  }
  return (
    <section className="App">
      <header>
        <h1>Recipe App</h1>
      </header>
      

      <Search handleInput={handleInput} handleSubmit={handleSubmit} /> 

      <main>
        <Recipes recipes={recipes} />

      </main>
    </section>
  );
}

export default App;