import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '700px', width: '100%', borderRadius: '20px' }}>
        <h2 className="text-center mb-3">Contact Sales</h2>
        <p className="text-center text-muted mb-4">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Your first name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Your last name" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="123-456-7890" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your message..." />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check
              type="checkbox"
              label={
                <>
                  By selecting this, you agree to our{' '}
                  <a href="/privacy-policy" className="text-primary text-decoration-underline">
                    privacy policy
                  </a>.
                </>
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 rounded-pill">
            Let's Talk
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
