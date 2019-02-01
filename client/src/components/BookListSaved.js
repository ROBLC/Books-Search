import React from "react";
import Thumbnail from "./Thumbnail";
import Button from './Button';
import { Container, Row, Col } from "./Grid";




export function BookListSaved({
    id,
    thumbnail,
    title,
    description,
    href,
    authors,
    handleDelete
}) {
    return (
        <li className="list-group-item m-1">
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
                        <Button onClick={() => handleDelete(id)}>
                            Delete Book!
                        </Button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}