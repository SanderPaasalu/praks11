import React from 'react';
import { withRouter, Link, useParams } from "react-router-dom";

const RecipeList = (props) => {
    return (
      <div>
        <ul>
          {props.recipes.map((recipe, index) => {
            return <li className='list' key={recipe.name}>{recipe.name} {recipe.duration} {recipe.tags[0]} {recipe.tags[1]} <Link to={`/recipes/${index}`}> Vaata lähemalt</Link></li>
          })}
        </ul>
      </div>
    )
  }

  export default RecipeList;