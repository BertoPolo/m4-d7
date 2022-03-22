// import React from 'react'
import { Card } from "react-bootstrap"
// import CommentArea from './CommentArea'

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  // state = {
  //     selected: false
  // }

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                } */}
    </>
  )
}

export default SingleBook
