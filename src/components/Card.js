import React from 'react';
import CardInfo from '../components/CardInfo';

class Card extends React.Component{
    render(){
        return(
        <div className="d-inline-block g-card" onClick={(e)=>{this.props.click(this.props.item)}}>
           <img className="g-card-image" src={this.props.item.imgSrc} alt={this.props.item.imgSrc}></img>
            {this.props.item.selected && <CardInfo title={this.props.item.title} subTitle={this.props.item.subTitle} link={this.props.item.link}></CardInfo>}
            
        </div>
        );
    }
}

export default Card;