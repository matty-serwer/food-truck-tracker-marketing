import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some top Food Trucks!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/food_truck_03.jpg'
              text='Explore the top dining areas.'
              label='Hot Spots'
              path='/about'
            />
            <CardItem
              src='images/night-donuts.jpg'
              text='Freshly-made donuts and coffee at 2am? We got you.'
              label='Best New Trucks'
              path='/about'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='images/taco_truck1.jpg'
              text='Hard to find taco legends.'
              label='Tacos'
              path='/about'
            />
            <CardItem
              src='images/beetle-juice.jpg'
              text='The Beetle Juice Cocktail Bar! Yum.'
              label='Beverages'
              path='/about'
            />
            <CardItem
              src='images/tropical.jpg'
              text='See food trucks of the world! (not supported)'
              label='Abroad'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
