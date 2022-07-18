import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // dish:null
        };
    }
    renderComments(comments) {
        console.log(comments);
        const commentm = comments.map((c) => {
            // var d = new Date(c.date);
            // var shortMonth = d.toLocaleString('en-us', { month: 'short' });
            return (
                <li key={c.id}>
                    {/* {c.comment}<br/>-- {c.author}, {shortMonth} {d.getDate()}, {d.getFullYear()}    */}
                    {c.comment}<br/>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))} 
                </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {commentm}
                </ul>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) 
            return (
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;