import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../asserts/images/infinite-spinner.svg"
import Recipes from "../recipes";

const getRecipe = (...args) => {
    // prepare url
    const url = new URL(...args);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPONACULAR_API_KEY);
    //fetch and return data
    return fetch(url).then(response => response.json());
}


export default function Recipe() {

    const { id } = useParams();
    const { data :recipe, isLoading } = useSWR(`https://api.spoonacular.com/recipes/${id}/information`, getRecipe);
    // console.log(data, isLoading);

    return (
        <>
 {isLoading?<img src={spinner}/>:(

<Container>
<h1>
       {recipe.title}
   </h1>
   
   <div dangerouslySetInnerHTML={{__html : recipe.summary}}  />
</Container>
  
 )}
  </>
    )
}