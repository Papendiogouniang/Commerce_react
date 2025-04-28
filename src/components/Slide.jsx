import React from 'react';
import { Carousel } from 'react-bootstrap';

// Tableau contenant les données des slides
const slides = [
  {
    id: 1,
    imageUrl: 'https://images.solecollector.com/images/fl_lossy,q_auto/c_crop,h_1192,w_1896,x_49,y_500/rrqrbh4kt9dxqshglbex/nike-sb-air-jordan-4-pine-green-dr5415-103-medial',
    alt: 'Air Jordan 4 Pine Green',
    title: 'Air Jordan 4 Pine Green',
    description: 'Une édition exclusive de la célèbre basket Jordan.',
  },
  {
    id: 2,
    imageUrl: 'https://ulaanbaatar.mn/files/mn/photos/ovmuxld5adi/63510d928c81e851e4148c1d.jpg',
    alt: 'Marché traditionnel',
    title: 'Marché traditionnel',
    description: 'Plongez dans l’ambiance des marchés africains.',
  },
  {
    id: 3,
    imageUrl: 'https://images.inkl.com/s3/article/lead_image/21869078/tesla-model-a-render.jpg',
    alt: 'Tesla Model A',
    title: 'Tesla Model A',
    description: 'La future voiture électrique du futur.',
  },
];

// Composant Slide : un carousel Bootstrap avec titre et description
export default function Slide() {
  return (
    <Carousel interval={3000} pause="hover" controls={true} indicators={true}>
      {/* Boucle sur chaque slide du tableau */}
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          {/* Image de la slide */}
          <img
            className="d-block w-100"
            src={slide.imageUrl}
            alt={slide.alt}
            style={{
              maxHeight: '500px', 
              objectFit: 'cover', 
              width: '100%', 
              height: 'auto'
            }} // Limite la hauteur, couvre tout
          />

          {/* Titre et description affichés en superposition */}
          <Carousel.Caption 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              padding: '10px', 
              borderRadius: '5px',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <h3 style={{ fontSize: '2rem', color: '#fff' }}>{slide.title}</h3>
            <p style={{ fontSize: '1.2rem', color: '#fff' }}>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
