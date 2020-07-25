import React , { useState, useEffect } from "react";
import axios from "axios";
import API from '../utils/API';

import { Row, Col } from "react-bootstrap";
import BookList from '../components/Booklist';



export default function Saved() {
   
    const [books, setBooks] = useState([]);
    const onDelete = API.deleteBook;
    function getBooks(){
        axios.get("/api/books")
        .then(res=>

            setBooks(
            
                (res.data).map(
                    (book) =>(
                        {
                ...book,
                onDelete}))
        ))
        .catch(err => console.log(err))
    }

        
    

    useEffect(() => {
        
        getBooks()
        
    }, [])

    
    
    // how to render the saved books from the database?

    
    return(
        <>
            <Row>
                <Col>
            <BookList
                books={books}
                />
                </Col>
            </Row>
        </>
    )
}

