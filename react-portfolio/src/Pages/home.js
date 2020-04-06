import React from 'react';
import Hero from '../Components/Hero';

function HomePage(props){

    return(
        <Hero title={props.title} subtitle={props.subtitle} body={props.text}/>
    );


}

export default HomePage;