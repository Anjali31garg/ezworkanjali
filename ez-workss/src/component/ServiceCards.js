import React from 'react';
import './ServiceCards.css';

const ServiceCards = () => {
  const services = [
    { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-presentation' },
    { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-audio' },
    { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-translation' },
    { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-graphic' },
    { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-research' },
    { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: 'icon-data' },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className={`service-icon ${service.icon}`}></div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;