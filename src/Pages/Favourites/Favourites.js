import React from 'react';
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
import './Favourites.css';
import 'animate.css';
import RecipeList from '.././../Components/RecipesList/RecipesList'




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


const Favourites = (props)=>{

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
        <div className = "list-favourites my-5 ">
            <div className=" container mb-5  " >
                
                    {props.favouritesList.length? (
                        <div className="row"> <h2 className="text-center" style={{color: "#444259"}}>Your Favourites Recipes</h2>
                            {props.favouritesList.map(favouriteItem=>(

                                <div className="col-lg-4 col-md-6  col-12 animate__animated animate__bounceInLeft"  >
                                    <p style={{fontWeight: "bold"}} className="mt-5 favourite-title ">
                                        {handelTitle(favouriteItem.recipe.label , 17)}</p>
                                        
                                        <Card  style={{width:"100%" }} >
                            
                                        <CardHeader 
                
                                        subheader= {`calories: ${handelCalories(favouriteItem.recipe.calories)}`}
                                            />
                                            <div className="image-container">
                                            <CardMedia className="image"
                                            component="img"
                                                height="194"
                
                                                image={favouriteItem.recipe.image}
                                                alt={favouriteItem.recipe.label}
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
                                                                {favouriteItem.recipe.ingredients.map((ingredient)=>(
                                                                <ul style={{listStyle:"none"}}>
                                                                <Typography style={{fontSize:"16px" , fontWeight:"normal"}} paragraph  >{ingredient.text}</Typography>
                                                                    </ul>

                                                                    ))}
        
                                                                </CardContent>
                                                                </Collapse>
                                                                </Card>
                                                                
                                                                <div className="remove-btn mt-3 mb-5">
                                                                    < button style={{

                                                                    }} onClick={
                                                                        ()=> props.removeFavourite(favouriteItem)
                                                                    }>Remove</button>
                                                                    </div>
                                
                                
                                </div>
                            )

                            )}
                        </div>
                    ):(<h2 className="text-center" style={{
                        color:"#444259"
                    }}>You Don't Add Any Recipe To Favourites Yet</h2>)}
                

                    
                
        
        </div>
        </div>
    )
}
export default Favourites;