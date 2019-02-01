import React from "react";
import Thumbnail from "./Thumbnail";
import Button from './Button';
import { Container, Row, Col } from "./Grid";

export function BookList({ children }) {
    return <ul className="list-group mt-4">{children}</ul>;
}


export function BookListItem({
    id,
    thumbnail,
    title,
    description,
    href,
    authors,
    handleSave
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <h5>{authors}</h5>
                        <p> Description: {description}</p>
                        <Button>
                            <a rel="noreferrer noopener" target="_blank" href={href}>
                                Go to Book!
            </a>
                        </Button>
                        <Button onClick={() => handleSave(id, title, authors, description, thumbnail, href)}>
                            Save!
                        </Button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
