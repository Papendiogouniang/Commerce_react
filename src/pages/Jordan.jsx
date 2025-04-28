import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Jordan.css'; // Assurez-vous d'importer le fichier CSS

const shoes = [
  {
    id: 1,
    name: 'Air Jordan 1',
    description: 'Classic Air Jordan 1 shoes with premium leather.',
    price: '150 000 FCFA',
    imageUrl: 'https://th.bing.com/th/id/OIP.zv2pabAJcqCKkvY5mA8FpgAAAA?w=268&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 2,
    name: 'Air Jordan 3',
    description: 'Iconic Air Jordan 3 with visible Air cushioning.',
    price: '180 000 FCFA',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.RzcK5GVmQFbMEcqqtpQYNQHaFM?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Air Jordan 11',
    description: 'Sleek Air Jordan 11 with patent leather design.',
    price: '200 000 FCFA',
    imageUrl: 'https://weartesters.com/wp-content/uploads/2014/12/Air-Jordan-11-Retro-Legend-Blue-For-The-Family-4.jpg',
  },
];

export default function Jordan() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Jordan</h1>
      <Row>
        {shoes.map((shoe) => (
          <Col key={shoe.id} md={4} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={shoe.imageUrl} 
                alt={shoe.name} 
                className="img-fluid"
                style={{
                  height: '250px', 
                  objectFit: 'cover', 
                }} 
              />
              <Card.Body>
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>{shoe.description}</Card.Text>
                <Card.Text className="text-primary fw-bold">{shoe.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
