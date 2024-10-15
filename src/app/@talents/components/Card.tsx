// components/Card.jsx
import React from 'react';
import Image from 'next/image';
import Chip from './Chip'; // Ensure you have a Chip component
import '../styles/Card.css'; // Custom styles for the Card
const Card = ({
  imgSrc = '/profilePic.png',
  fullName = 'Abhishek Gupta',
  experience = 'Marketing · 2y+',
  skills = ['Content Creation', 'Instagram Management', 'Strategy', 'Analytics'],
}) => {
  return (
    <div className="custom-slide">
      <div className="card-header">
        <Image src={'/profilePic.png'} width={120} height={120} alt="Profile Picture" className="profile-pic" />
        <h2 className="full-name">{fullName}</h2>
        <p className="experience">{experience}</p>
      </div>
      <div className="card-skills">
        {skills.map((skill, index) => (
          <Chip key={index} content={skill} />
        ))}
      </div>
    </div>
  );
};

export default Card;
