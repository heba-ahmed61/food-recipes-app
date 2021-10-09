import './App.css';
import {BrowserRouter ,Switch,Route,Link} from "react-router-dom";
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Favourites from './Pages/Favourites/Favourites';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import axios from 'axios';
import {useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const API_ID = "a4429103";
  const API_KEY = "70f73cf278fae9f726f52932b4a742b3";
  const [recipes , setRecipes] = useState([]);
  const [favouritesList , setFavouritesList] = useState([]);
  const [query , setQuery] = useState ("chicken");
  
  
  
  

  



  const getRecipes = async () =>{

    const data = await axios.get (`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    
    setRecipes(data.data.hits);
    
  };
  useEffect(()=>{

    getRecipes();
    
  
  },[query ])

  const updateQuery = ( search) =>{
      
    if(search !==""  && !query.includes(search)){
      setQuery(search);
    }
    
      
    
    
  }
  
  const addToFavourite = (recipe) =>{

    favouritesList.push(recipe)
    let newSet = new Set (favouritesList)
    setFavouritesList([...newSet])
    
    
  }

  const removeFavourite = (favouriteItem) =>{

    setFavouritesList( favouritesList.filter(item => item.recipe.label !== favouriteItem.recipe.label))
  
  }
  
  




  

  return (
    <div className="app">
      <Header/>
    
      <BrowserRouter>
      
      <Navbar/>
      <Switch>

        <Route exact path = "/"><Home recipes= {recipes}/></Route>
        <Route exact path ="/search" ><Search
          recipes={recipes}
          updateQuery={updateQuery}
          addToFavourite={addToFavourite}
        
          
          /></Route>
        <Route exact path = "/favourites"><Favourites favouritesList={favouritesList} removeFavourite={removeFavourite}/></Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
