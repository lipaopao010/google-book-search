import React from 'react';
import { Form, Button } from 'react-bootstrap';


export default function SearchInput(props) {
    return(
<Form onSubmit ={props.onSearch}>
  <Form.Group controlId="booktitle">
    <Form.Label>Book</Form.Label>
    <Form.Control 
    value = {props.search}
     placeholder="Book Title" 
     onChange={evt =>props.onSearchChange(evt.target.value)}
        />
  </Form.Group>
  <Button variant="primary" type="submit">
    Search
  </Button>
</Form>
    )
}
