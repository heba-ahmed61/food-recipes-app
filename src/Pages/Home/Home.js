import React from 'react';
import ShowCase from '../../Components/ShowCase/ShowCase';
import './Home.css';
import {latestRecipes} from '../../../src/LatestRecipes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay]);


const Home = ()=>{
    

    return(
        
        <div className="home ">
            <ShowCase/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="popular-info mb-5">
                            <h2>Latest added recipes</h2>
                            <p>we always offer best popular recipes and fresh food </p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 mb-5">
                
                    <Swiper autoplay = {{
                        
                        delay:500
                    }} disableOnInteraction ={false}
                    
                    
                    breakpoints={{


                        280:{
                            width:280,
                            slidesPerView:1,
                            spaceBetween:30
                            
                            

                        },
                        576:{
                            width:576,
                            slidesPerView:2.3,
                            spaceBetween: 150,
                            
                        },
                        768:{
                            width:768,
                            slidesPerView:3,
                            spaceBetween:150
                        },
                        992:{
                            width: 992,
                            slidesPerView:3.5,
                            spaceBetween:100

                        },
                    1000:{
                            width:1000,
                            slidesPerView:3.7,
                            spaceBetween:200
                        

                        },
                    }}

                    >
                { latestRecipes && latestRecipes.map (recipe => (
                <SwiperSlide data-swiper-autoplay="2000">
                    <div className="recipe-image">
                        <img src = {recipe.image}/>
                    </div>
                </SwiperSlide>))}
    
        
                    </Swiper>
                    

                    </div>
                </div>

                
            </div>

            <div className="categories ">
                <div className="lay-out"></div>
                <div className="categories-desc ">
                    < h3 className ="text-center text-white ">
                        All Food Categories Are Here
                        Search For Your Favourite Category
                    </h3>
                
                </div>
                

            </div>
        
            <div className="popular-recipes">
                <div className="container">
                    <h2>Most Popular Recipes</h2>
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="popular-recipe-image">
                                <img style={{width:"100%", maxHeight:"300px"}}
                                src = "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Vegan-chai-hot-chocolate-a410f49.jpg"/>
                                <p className="my-3">Vegan chai hot chocolate</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="popular-recipe-image">
                                <img style={{width:"100%", maxHeight:"300px"}}
                                src = "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Rice-pudding-e008fc9.jpg"/>
                                <p className="my-3">Classic rice pudding</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="popular-recipe-image" >
                                <img style={{width:"100%", maxHeight:"300px"}}
                                src = "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Fruity-flapjack-cookies-173ad8f.jpg"/>
                                <p className="my-3">Fruity flapjack cookies</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="popular-recipe-image">
                                <img style={{width:"100%", maxHeight:"300px"}}
                                src = "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Harira-0ad84c9.jpg"/>
                                <p className="my-3">Harira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            
        </div>
    )
}
export default Home;