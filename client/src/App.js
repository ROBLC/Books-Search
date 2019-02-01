import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Jumbotron from './components/Jumbotron';
import Input from './components/Input';
import Button from './components/Button';
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";



class App extends Component {
  state = {
    books: [],
    bookSearch: "",

  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch).then(res => {
      console.log(res.data)
      this.setState({ books: res.data })
    }
    ).catch(err => console.log(err));
  };

  handleSaveSubmit = (id, title, authors, description, image, link) => {
    API.saveBook({
      bookId: id,
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    }).then(
      res => {
        if (res.status === 200) {
          alert("Saved: " + res.data.title);
        }
      },
    )
      .catch(err => {
        if (err.response.data.code === 11000) {
          alert("Book already saved!!")
        }
        console.log(err)

      });

  }

  render() {
    return (
      <div >
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Books"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col size="xs-12">
                {!this.state.books.length ? (
                  <h1 className="text-center">No Books to Display</h1>
                ) : (
                    <BookList>
                      {this.state.books.map(book => {
                        return (
                          <BookListItem
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            href={book.volumeInfo.infoLink}
                            description={book.volumeInfo.description}
                            thumbnail={!book.volumeInfo.imageLinks ? ("https://placehold.it/300x300") : (book.volumeInfo.imageLinks.thumbnail)}
                            handleSave={this.handleSaveSubmit}
                          />
                        );
                      })}
                    </BookList>
                  )}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
