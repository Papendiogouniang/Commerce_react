import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Apropos() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">À propos</h1>
      <Row className="align-items-center">
        {/* Texte à gauche */}
        <Col md={6}>
          <p className="fs-5">
            <strong>JOLOF Commerce to the world</strong><br />
            Nous sommes une entreprise innovante qui vise à connecter les clients avec les meilleurs produits du marché. Grâce à notre plateforme moderne, intuitive et sécurisée, vous pouvez découvrir, acheter et profiter de produits de qualité, partout dans le monde.
          </p>
        </Col>

        {/* Image à droite */}
        <Col md={6}>
          <Image 
            src="https://tse1.mm.bing.net/th/id/OIP.XG5XBhhdighqgKP6Vq4SwwHaEK?w=1365&h=768&rs=1&pid=ImgDetMain" 
            alt="About us" 
            fluid 
            rounded 
          />
        </Col>
      </Row>
    </Container>
  );
}
