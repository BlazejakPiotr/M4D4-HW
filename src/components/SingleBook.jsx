import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const showComments = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
        },
      }
    );
    const comments = await response.json();
    return comments;
  } catch (e) {
    console.log(e);
  }
};

const SingleBook = ({ singleBook }) => (
  <Container>
    <Row>
      <Col md={4}>
        <Card style={{ width: "18rem" }} key={singleBook.asin}>
          <Card.Img
            variant="top"
            src={singleBook.img}
            onClick={() => showComments(singleBook.asin)}
          />
          <Card.Body>
            <Card.Title>{singleBook.title}</Card.Title>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <ul>
          <li>{showComments[0].author}</li>
        </ul>
      </Col>
    </Row>
  </Container>
);
export default SingleBook;
