import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Menu extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            selectedDish : null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    renderDish(dish){
        if(dish != null){
            return(
            <div>
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.description} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardSubtitle>{dish.category}</CardSubtitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }
        else 
            return(<div></div>);
        
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className = "col-12 col-md-6 mt-5">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.description}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className = "row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;