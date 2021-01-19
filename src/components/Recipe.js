import React from 'react';
import { withRouter, Link, useParams } from "react-router-dom";

const Recipe = (props) => {
    const id = useParams().id;
    return (
      <div className='flex'>
        <Link to={'/'}>Tagasi avalehele</Link>
        <h2>{props.recipes[id].name}</h2>
        <p>{props.recipes[id].duration} min</p>
        <ul>
          {props.recipes[id].ingredients.map((ingredients, index) => {
          return <li key={ingredients}>{ingredients}</li>;
          })}
        </ul>
        <p>{props.recipes[id].preparation}</p>
        <p>Tags:{props.recipes[id].tags.map((tags, index) => {
          return <li className='tag-list' key={tags}>{tags}</li>;
        })}</p>
      </div>
    )
  }
  export default Recipe;