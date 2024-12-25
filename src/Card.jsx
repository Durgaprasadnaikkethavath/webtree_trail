import React from "react";
// import "./Card.css"; // CSS for styling the card

const Card = ({ user }) => {
  const { name, picture, email, location } = user;

  return (
    <div className="card">
      <img
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        className="card-image"
      />
      <div className="card-details">
        <h2>{`${name.first} ${name.last}`}</h2>
        <p>Email: {email}</p>
        <p>
          Location: {location.city}, {location.country}
        </p>
      </div>
    </div>
  );
};

export default Card;
