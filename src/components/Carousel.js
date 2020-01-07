import React from 'react';
import arsenal1 from '../assets/images/arsenal1.png';
import arsenal2 from '../assets/images/arsenal2.png';
import arsenal3 from '../assets/images/arsenal3.png';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: arsenal1,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: arsenal2,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: arsenal3,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id,card) =>{
        let items = [...this.state.items];

        items[id].selected =  items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }

        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item=>{
            return <Card key={item.id} item={item} click={(e => this.handleCardClick(item.id, e))}></Card>
        })
    }

render(){
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;