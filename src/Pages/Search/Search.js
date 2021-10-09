import React , {useEffect, useState} from 'react';
import RecipesList from '../../Components/RecipesList/RecipesList';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Search = (props)=>{

    const [search , setSearch] = useState("")

    const  updateSearch = (e) =>{

    
        setSearch(e.target.value)
    }

    

    return(
        <div className="recipes">
            <div className="container">

            <Paper 
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "88%" , margin :"50px auto 30px" }}
    >
    
        <InputBase
        type="text" 
        value={search}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Recipe Search... "
        inputProps={{ 'aria-label': 'Recipe search... ' }}
        onChange = {updateSearch}
        />
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick= {()=>props.updateQuery(search)}  />
        
        </IconButton>
    
    </Paper>

            
                <div className="row pb-5">
                    {props.recipes?.map(recipe =>(
                        <div className="col-lg-4 col-md-6 col-12">
                            <RecipesList addToFavourite={props.addToFavourite} recipe = {recipe} />
                        </div>
                    ))}
                </div>
                
            </div>
            
        </div>
    )

}
export default Search;