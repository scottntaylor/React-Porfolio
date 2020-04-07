import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';

function HomePage(props){

    return(
        <div>
        <Hero title={props.title} subtitle={props.subtitle} body={props.text}/>
        <Carousel/>
        </div>
        );


}

export default HomePage;