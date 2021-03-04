import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, NavItem } from "react-bootstrap";
import "./JobCard.css";

const JobCard = ({id,name , title , imageUrl}) => {
  return (
    <div className="card-container">
      <Card>
        <Card.Header>{name}</Card.Header>
        <div>
          <div className="column-card left-card">
            <Card.Img
              variant="top"
              className="image-style"
              src={imageUrl}
            />
          </div>
          <div className="column-card right-card">
            <Card.Body>
              <Card.Title>Company - {name}</Card.Title>
              <Card.Text>Role - {title}</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
