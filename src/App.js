import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import NewRecipe from './components/NewRecipe';
import Recipe from "./components/Recipe";
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);  
  function getRecipes() {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(result => {
    return result.json();
    })
    .then(data => {
    console.log(data);
    setRecipes(data)
    })
  }

  function addRecipe(newRecipe) {
    setRecipes(recipes.concat([newRecipe]));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <h1 className='flex-main' className='header-main'>Retseptiraamat</h1>
          <Link className='flex-main' className='link-main' to={'/new'}>Lisa uus retsept</Link>
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/recipes/:id">
          <Recipe recipes={recipes} />
        </Route>
        <Route path='/new'>
          <NewRecipe addRecipe={addRecipe} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
