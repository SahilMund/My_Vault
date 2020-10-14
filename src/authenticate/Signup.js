import React, {  useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup} = useAuth()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password);
    signup(email, password)
      .then((user) => {
        setError("");
        setLoading(true);
        history.push("/");
      })
      .catch((err) => {
        setError("Failed to create an account");
      });

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body className="card__body">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignup}>
            <Form.Group id="email" className="form__group">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  value={email}
                        onChange={(e)=>setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password" className="form__group">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"   value={password}
                        onChange={(e)=>setPassword(e.target.value)} required />
            </Form.Group>
          
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
}
