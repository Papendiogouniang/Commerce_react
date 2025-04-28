import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Boutique.css'; // Importation du fichier CSS pour appliquer les styles

// Liste des produits
const products = [
  {
    id: 1,
    name: 'Galaxy S21',
    description: 'Samsung smartphone with amazing features',
    price: '10 000 FCFA',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.I8jT8oDfOsYhcCIo5dMknQHaE7?rs=1&pid=ImgDetMain',
    alt: 'Samsung Galaxy S21',
  },
  {
    id: 2,
    name: 'iPhone 12',
    description: 'The latest iPhone with exceptional performance',
    price: '20 000 FCFA',
    imageUrl: 'https://regmedia.co.uk/2020/11/06/iphone12mini.jpg',
    alt: 'iPhone 12',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    description: 'Reliable and luxurious car for your daily ride',
    price: '30 000 FCFA',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.B7b6a1Yn8exR3BjyHl1keQHaE8?rs=1&pid=ImgDetMain',
    alt: 'Toyota Camry',
  },
];

export default function Boutique() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Boutique</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.alt}
                  className="img-fluid"
                  style={{
                    objectFit: 'cover',
                    height: '250px',
                  }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-primary fw-bold">{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
