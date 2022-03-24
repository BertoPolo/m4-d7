import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const Registration = () => {
  const [name, setName] = useState("")
  const [surName, setSurName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(0)
  const [password2, setPassword2] = useState(0)

  const navigate = useNavigate()

  const formRegistrator = (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert("broooo mismatched your password, try it again!")
    } else {
      alert("let's g000 enjoy our shop!")
      navigate("/BookList")
    }
  }

  return (
    /* 
All the messages / errors should be displayed properly in the component
The submit button from the form should be enabled (=> not disabled) only when the form is validated and when every input's constraint is fulfilled.
When clicked it should display a recap of the information submitted (you can choose between dynamically mounting a piece of JSX in the same component or redirecting the user to a new route). */

    <Form onSubmit={() => formRegistrator()}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required min="2" onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter your Surname" required min="3" onChange={(e) => setSurName(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="At least 8 chars, 1 digit, 1 letter"
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm your password</Form.Label>
        <Form.Control type="password" placeholder="Have to be the same as before" onChange={(e) => setPassword2(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default Registration
