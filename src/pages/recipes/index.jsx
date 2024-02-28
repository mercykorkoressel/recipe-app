import { Container, TextField, Grid, } from "@mui/material";
import RecipeItem from "../../components/recipe-item"
import { useState, useEffect } from "react";
import noRecipes from "../../asserts/images/undraw_no_data_re_kwbl.svg"
import loading from "../../asserts/images/infinite-spinner.svg"


export default function Recipes() {
    //  const [searchItem, setSearchItems]=useState("");
    const [recipes, setRecipes] = useState([]);
    const [searchItems, setSearchItem] = useState("");
    const [ loading ,setLoading]=useState(false)

    const searchRecipes = () => {

        setLoading(true);
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPONACULAR_API_KEY)
        url.searchParams.append('query', searchItems)
        //fetch recipes
        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                //update the recipes state
                setRecipes(data.results);
                // console.log(data);
            })
            .catch((error) => {
             console.log(error);
            })
            .finally(() =>setLoading(false))

    };
    useEffect(searchRecipes, []);

    return (
        <>
            <Container sx={{ my: '2rem' }}>
                <TextField color="warning" fullWidth
                    id="outlined-basic"
                    label="Enter a keyword to search recipes and hit Enter"
                    variant="outlined"
                    onChange={(event) => setSearchItem(event.target.value)}
                    onKeyDown={event => event.key === 'Enter' && searchRecipes()} />

                <Grid sx={{ mt: '2rem' }} container spacing={3}>
                    { loading?   <Container>
                            <img sx={{ display:'flex'  ,justifycontent:'center'}}
                            src={loading} />
                        </Container>: recipes.length > 0 ? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />) : (
                        <Container>
                            <img sx={{ display:'flex',justifycontent:'center'}}
                            src={noRecipes}  width={"25%"}/>
                        </Container>
                    )
                    }
                </Grid>
            </Container>

        </>
    );
}
// { 