import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList } from "../components/BookList";
import { BookListSaved } from "../components/BookListSaved";


class Saved extends Component {
    state = {
        books: [],

    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.savedBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div className="mainSection">
                <Jumbotron>
                    <h1>Saved Books!</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="md-12">
                            {this.state.books.length ? (
                                <BookList>
                                    {this.state.books.map(book => (
                                        <BookListSaved
                                            key={book._id}
                                            id={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            href={book.link}
                                            description={book.description}
                                            thumbnail={!book.image ? ("https://placehold.it/300x300") : (book.image)}
                                            handleDelete={this.deleteBook}
                                        >

                                        </BookListSaved>
                                    ))}
                                </BookList>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Col>
                    </Row >
                </Container>
            </div>
        );
    }
}

export default Saved;