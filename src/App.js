
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import AddRecipe from "./pages/add-recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <Recipes/>},
  {path:"/recipes", element: <Recipes/>},
  // the path below will open the recipe depending on the card that was clicked based on their id
  {path:"/recipes/:id", element: <Recipe/>},
  {path:"/add-recipe", element: <AddRecipe/>}

]);

function App() {
  return (
    <>

     <RouterProvider router={router}/>
    </>
  );

}

export default App;
