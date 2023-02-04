import React from "react";
import Product from "./Product";
import './Home.css'


function Home(){
    return(
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg" alt="Create a lived-in, modern look Shop now"></img>
        
        <div className="home__row">
        <Product  id ="12321" title="The lean startup" price = {11.87} rating ={4} image="https://m.media-amazon.com/images/G/40/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405931308_.png" />
            
        </div>
        <div className="home__row">
        <Product  id ="12321" title="The lean startup" price = {11.87} rating ={4} image="https://m.media-amazon.com/images/G/40/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405931308_.png" />
            
        </div>
        <div className="home__row">
        <Product  id ="12321" title="The lean startup" price = {11.87} rating ={4} image="https://m.media-amazon.com/images/G/40/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405931308_.png" />
            
        </div>



        </div>
    )
}
export default Home