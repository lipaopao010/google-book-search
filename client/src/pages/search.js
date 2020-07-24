import React , {useState} from "react";

import { Row, Col } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import BookList from '../components/Booklist';

import API from '../utils/API';


export default function Search() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const onSave =API.saveBook;
    

    const onSearch = async (evt) =>{
        evt.preventDefault();
        const results = await API.searchBooks(search);
        const books = results.items.map((book) =>({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            onSave,
        }));

        setBooks(books)
    }

    
    return(
        <>
            <Row>
                <Col>
                <SearchInput
                search = {search}
                onSearchChange ={setSearch}
                onSearch = {onSearch}
                />
                </Col>
            </Row>
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