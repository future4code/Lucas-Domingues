import react from "react"
import {AddRecipesPage} from "./pages/AddRecipesPage/AddRecipesPage"
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage/RecipeDetailPage";
import { RecipeListPage } from "./pages/RecipesListPage/RecipeListPage";
import { SingUpPage } from "./pages/SingUpPage/SingUpPage";
  const  App =()=> {
  return (
    <div>
       <AddRecipesPage/>
       <LoginPage/>
       <RecipeDetailPage/>
       <RecipeListPage/>
       <SingUpPage/>
    </div>
  );
}
export default App;


