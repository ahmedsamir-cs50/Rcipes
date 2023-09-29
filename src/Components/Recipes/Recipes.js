import axios from "axios";
import React, { useState } from "react";
import {RecipeItem} from "./RecipeItem";
import './Recipe.css'
const Recipes = () => {
  const [search, setSearch] = useState();
  const [data,setData]=useState()
  const HandleSubmit =async (e) => {
    e.preventDefault();
try{
   await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((r) => {
        setData(r.meals);
      });
    } catch (e) {console.log(e);}
  };
  return (
    <div style={{minHeight:"80vh"}}>
      <h3 className="text-center mt-5">Find Your Recipe</h3>
      <form className="form">
        <input
          type="text"
          placeholder="Search Here..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={HandleSubmit}>
          Search
        </button>
      </form>
      <div className="container d-flex flex-row justify-content-evenly flex-wrap">
        
                   {   
                  
                    data?  
                         (data.map((res)=>{
                             return(
                            <RecipeItem data={res}/>)} 
                     
                    )): (<p className="notSearch">Not found</p>)
                   
                   }
                </div>
    </div>
  );
};

export default Recipes;
