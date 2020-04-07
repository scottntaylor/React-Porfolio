import React from 'react';
import headshot from '../assets/images/Headshot.png';
import rainier from '../assets/images/Paradise.png';
// import headshot from '../assets/Headshot.jpg';

class Carousel extends React.Component{
     constructor(props){
         super(props)
         this.state = {
            items: [
                {
                    id:0,
                    title: 'title',
                    subtitle: 'subtitle',
                    imgsrc: headshot,
                    link: 'link',
                    selected: false
                },
                {
                    id:1,
                    title: 'title1',
                    subtitle: 'subtitle1',
                    imgsrc: rainier,
                    link: 'link1',
                    selected: false
                },
                // {
                //     id:2,
                //     title: 'title2',
                //     subtitle: 'subtitle2',
                //     imgsrc: images,
                //     link: 'link2',
                //     selected: false
                // },
            ]
         }
     }
     handleCardClick = (id, card) => {
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
            return <Card item={item} onClick={e => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

     render (){
         return (
             <p>carousel works!</p>
         );
     }
}  

export default Carousel;