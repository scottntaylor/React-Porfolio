import React from 'react';
import Card from '../Components/Card';
import headshot from '../assets/images/Headshot.png';
// import trees from '../assets/images/Trees.png';
import rainier from '../assets/images/Paradise.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
     constructor(props){
         super(props)
         this.state = {
            items: [
                {
                    id:0,
                    title: 'Scott Taylor',
                    subtitle: 'Headshot',
                    imgSrc: headshot,
                    link: 'link',
                    selected: false
                },
                {
                    id:1,
                    title: 'Valley',
                    subtitle: 'Paradise - Mt. Rainier',
                    imgSrc: rainier,
                    link: 'link1',
                    selected: false
                },
                // {
                //     id:2,
                //     title: 'title2',
                //     subtitle: 'subtitle2',
                //     imgSrc: images,
                //     link: 'link2',
                //     selected: false
                // },
            ]
         }
     }
     handleCardClick = (id, card) => {
         console.log(id);
         let items = [...this.state.items]

         items[id].selected = items[id].selected ? false : true
     
        items.forEach(item =>{
            if (item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items 
        })
        }

    makeItems = (items ) =>  {
        return items.map(item =>{
            return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

     render (){
         return (
             <Container fluid={true}>
                 <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                 </Row>
             </Container>
           
         );
     }
}  

export default Carousel;