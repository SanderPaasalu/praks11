import React, {useState, useEffect} from 'react';
import { withRouter, Link, useParams } from "react-router-dom";

const NewRecipe = (props) => {
    const [name, setName] = useState();
    const [time, setTime] =  useState();
    const [ingredients, setIngredients] =  useState();
    const [prep, setPrep] =  useState();
    const [tag, setTag] = useState()
    const [newRecipe, setNewRecipe] =  useState([]);

    function combineRecipe(event) {
        event.preventDefault()
        const ingred = ingredients.split(',')
        const tagi = tag.split(',') 
        setNewRecipe ({
            name: name,
            duration: time,
            ingredients: ingred,
            preparation: prep,
            tags: tagi,
        })
    
    }

    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setNewRecipe({});
        }
      }, [newRecipe, props]);

    return (
        <form>
            <Link to={'/'}>Tagasi avalehele</Link><br/>
            <label>Nimi</label><br/>
            <input type='text' id='name' name='nimi' onInput={(event) => {
                setName(event.target.value);
            }} required/><br/>
            <label>Koostisosad</label><br/>
            <input type='text' id='ingredients' name='Koostisosad' onInput={(event) => {
                setIngredients(event.target.value);
            }} required/><br/>
            <label>Valmistusaeg(min)</label><br/>
            <input type='number' id='time' name='Valmistusaeg(min)' onInput={(event) => {
                setTime(event.target.value);
            }} required/><br/>
            <label>Tagid(max 2)</label><br/>
            <input type='text' id='tag' name='Tagid' onInput={(event) => {
                setTag(event.target.value);
            }} required/><br/>
            <label>valmistamine</label><br/>
            <textarea id='' name='' onInput={(event) => {
                setPrep(event.target.value);
            }} required></textarea><br/>
            <button type='submit' onClick={combineRecipe}>Salvesta</button>
        </form>
    )
}

export default withRouter(NewRecipe);