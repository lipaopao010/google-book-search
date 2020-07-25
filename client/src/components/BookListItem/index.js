import React from 'react';
import { Row , Col , ListGroup , Button, Image } from 'react-bootstrap';


export default function BookListItem({ 
    _id,
    title, 
    link, 
    authors, 
    image, 
    description,
    onSave,
    onDelete
}){
    return (
        < ListGroup.Item>
            <Row>
                <Col xs = {10}>
                    <h2>{title}</h2>
                </Col>
                <Col>
                { link && <Button as ="a" href ={link} target="_blank ">View</Button>}
                { onSave && <Button onClick ={() => {
                    onSave({title,authors,description,image,link});
                    }}>Save</Button>}
                { onDelete && <Button onClick ={()=>{onDelete(_id)}} variant = "danger">Delete</Button>}
                </Col>
            </Row>
        
            <Row>
                <Col>
                <p>{authors && authors.join(' ')}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <Image src={image} alt ="book cover"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <p> {description}</p>
                </Col>
            </Row>
        </ListGroup.Item>

    )}