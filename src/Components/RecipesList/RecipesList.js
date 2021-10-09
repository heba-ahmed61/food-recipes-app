import React  from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './RecipesList.css';





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));




const RecipesList = ({ recipe  , addToFavourite }) =>{
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    const handelTitle = (string , n)=>{

        return string?.length > n ? string.substr(0 , n-1)+"..." : string
    }
    const handelCalories =(number  )=>{
        
        return Math.round(number)
    }



    


    

    return(
    
        
        

        <div className="recipe-list pb-5"  style={{margin : "0 auto"  }} >
            
            
            <p style={{fontWeight: "bold"}} className="mt-5 ">{handelTitle(recipe.recipe.label , 17)}</p>
            
            <Card sx={{ maxWidth: "100%" , margin :"30px 0"  }}>
        
                <CardHeader 
                
                subheader= {`calories: ${handelCalories(recipe.recipe.calories)}`}
                    />
                    <div className="image-container">
                    <CardMedia className="image"
                        component="img"
                        height="194"
                
                        image={recipe.recipe.image}
                            alt={recipe.recipe.label}
                                />
                            
                        </div>
                        <CardActions disableSpacing>
                        <h5>ingredients : </h5>
    
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                            >
                        <ExpandMoreIcon />
                        </ExpandMore>
                        </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        {recipe.recipe.ingredients.map((ingredient)=>(
                            <ul style={{listStyle:"none"}}>
                                <Typography style={{fontSize:"16px" , fontWeight:"normal"}} paragraph  >{ingredient.text}</Typography>
                                </ul>

                                ))}
        
                            </CardContent>
                        </Collapse>
                        </Card>  

                    
                    <div className="details">
                        <div className="more-details">
                        <button onClick={()=>{ window.open(recipe.recipe.url)}}  >More Details</button>
                        </div>
                        
                        <div className="favourites">
                        < button onClick={()=> addToFavourite(recipe)}  >Favourite</button>
                        </div>

                        
                        
                        
                        

                        </div>

                        </div>

                

                        
            
                    
                        
    
    
        
    
            
        
                
    
                        
            
    )                
}
export default RecipesList;