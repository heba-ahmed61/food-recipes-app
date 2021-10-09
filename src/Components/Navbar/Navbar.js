import React, {  useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory ,withRouter } from 'react-router-dom';



const Navbar = ()=>{
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(()=>{
        if(value===0)history.push("/")
        else if (value===1)history.push("/search")
        else if(value===2) history.push("/favourites") 

        
        },[value , history])


    return(
        
        <Box sx={{ width: "100%" , position:"fixed" , bottom:"0" , zIndex:"3" }} >
        <BottomNavigation style={{backgroundColor: "#444259"  }}  
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Home" style={{color:"white"}}  icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" style ={{color:"white"}}  icon={<SearchIcon />} />
        <BottomNavigationAction label="Favourites" style ={{color:"white"}} icon={<FavoriteIcon />}  />
        </BottomNavigation>
    </Box>
        
    )
}
export default Navbar;