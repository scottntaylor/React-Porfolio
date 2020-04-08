import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <h1>Hello! </h1>
               <p> My name is Scott Taylor and I am a web developer currently enrolled in the University of
                    Washington
                    Coding Bootcamp. 
                    </p>
                    <p>Prior to my enrollment in the UW Coding Bootcamp, I earned a Bachelor of Arts degree in
                    Communication with an emphasis on advertising from Washington State University. After graduation, I
                    returned
                    back to Seattle where I worked for a small business (Eastside Audio Video) in Bellevue as a Sales
                    Associate
                    and their Assistant Marketing Director.
                    </p>
                    <p> Following my time with Eastside Audio Video, I have been working
                    for
                    a Seattle based clothing company, Cutter & Buck. At Cutter & Buck I have worked in sales and account
                    management within our wholesale divisions, specifically with golf, team, and specialty retail accounts.
    
                    </p>
            </Content>
        </div>
    );


}

export default AboutPage;