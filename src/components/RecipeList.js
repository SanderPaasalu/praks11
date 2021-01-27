import React from 'react';
import { withRouter, Link, useParams } from "react-router-dom";

const RecipeList = (props) => {
    return (
      <div>
        <ul>
          {props.recipes.map((recipe, index) => {
            return <li className='list' key={recipe.name}><span>{recipe.name}</span><span> {recipe.duration}min</span><span> {recipe.tags[0]}</span> <span>{recipe.tags[1]}</span> <span><Link to={`/recipes/${index}`}> Vaata lähemalt</Link></span></li>
          })}
        </ul>
      </div>
    )
  }

  export default RecipeList;