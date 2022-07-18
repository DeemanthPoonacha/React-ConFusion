import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderComments({comments}) {
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
function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null) 
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments}/>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default DishDetail;