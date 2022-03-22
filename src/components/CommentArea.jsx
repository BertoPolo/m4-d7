import { useState,useEffect } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

const CommentArea =()=> {

  state = {
    comments: [], // comments will go here
    isLoading: false,
    isError: false,
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      })

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          this.setState({ comments: comments, isLoading: false, isError: false })
        } else {
          console.log("error")
          this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }
  }

  
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }}

export default CommentArea
