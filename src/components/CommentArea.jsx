import { useState, useEffect, useRef } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

const CommentArea = ({ asin }) => {
  /* state = {
    comments: [], // comments will go here
    isLoading: false,
    isError: false,
  } */
  const [comments, setComments] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [isError, setIsError] = useState(false)

  /* componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      }) */

  const prevAsinRef = useRef()
  useEffect(() => {
    prevAsinRef.current = asin
  }, [asin])

  useEffect(() => {
    if (prevAsinRef !== asin) {
      setIsLoading(true)
      fetcher()
    }
  }, [])

  const fetcher = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg",
        },
      })
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log("error")
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
