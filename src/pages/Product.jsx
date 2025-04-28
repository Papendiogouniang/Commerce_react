// Importation des modules nécessaires depuis React, Bootstrap et React Router
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Tableau des produits (mêmes données que dans Boutique)
const products = [
  {
    id: 1,
    name: 'Galaxy S21',
    description: 'Samsung smartphone with amazing features',
    price: '10 000 FCFA',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.I8jT8oDfOsYhcCIo5dMknQHaE7?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'iPhone 12',
    description: 'The latest iPhone with exceptional performance',
    price: '20 000 FCFA',
    imageUrl: 'https://regmedia.co.uk/2020/11/06/iphone12mini.jpg',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    description: 'Reliable and luxurious car for your daily ride',
    price: '30 000 FCFA',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.B7b6a1Yn8exR3BjyHl1keQHaE8?rs=1&pid=ImgDetMain',
  },
];

export default function Product() {
  // Récupération de l'ID du produit depuis l'URL grâce à React Router
  const { id } = useParams();

  // Recherche du produit correspondant dans le tableau grâce à son ID
  const product = products.find((p) => p.id === parseInt(id));

  // Si aucun produit ne correspond, on affiche un message d'erreur
  if (!product) {
    return <div className="text-center mt-5">Produit non trouvé</div>;
  }

  // Affichage des détails du produit sélectionné
  return (
    <Container className="py-5"> {/* Conteneur avec un padding vertical */}
      <Row className="align-items-center"> {/* Ligne avec alignement vertical centré */}
        {/* Colonne gauche pour l'image */}
        <Col md={6}>
          <Card.Img
            variant="top"
            src={product.imageUrl}
            alt={product.name}
            style={{ borderRadius: '1rem' }} // Coins arrondis
          />
        </Col>

        {/* Colonne droite pour les infos du produit */}
        <Col md={6}>
          <h2 className="fw-bold mb-3">{product.name}</h2> {/* Nom du produit en gras */}
          <p className="text-muted">{product.description}</p> {/* Description en texte gris */}
          <h3 className="text-primary mb-4">{product.price}</h3> {/* Prix en bleu */}
          <Button variant="primary" size="lg">Ajouter au panier</Button> {/* Bouton action */}
        </Col>
      </Row>
    </Container>
  );
}
