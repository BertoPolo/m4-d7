import { Form, Button } from "react-bootstrap"

const Registration = () => {
  const registrator = () => {
    /* to allow, id pass and id passConfirm have to be === */
  }

  return (
    /* 
    Create a new Registration component on a new route /register and a new Link in the Navbar to get there.
In Registration create a controlled form with the following fields:
Name - Required, at least 2 chars
Surname - Required, at least 3 chars
Email - Required - Should be an email field
Password - Required - Should contain at least 8 chars, 1 digit, 1 letter
PasswordConfirm - Required - Should have the same value as Password

All the messages / errors should be displayed properly in the component
The submit button from the form should be enabled (=> not disabled) only when the form is validated and when every input's constraint is fulfilled.
When clicked it should display a recap of the information submitted (you can choose between dynamically mounting a piece of JSX in the same component or redirecting the user to a new route). */

    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required min=" 2" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter your Surname" required min="3" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password,at least 8 chars, 1 digit, 1 letter" id="pass" required minLength="8" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm your password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="passConfirm" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default Registration
