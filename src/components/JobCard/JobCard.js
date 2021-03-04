import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, NavItem } from "react-bootstrap";
import "./JobCard.css";

const JobCard = ({ id, name, title, imageUrl, industry, job_type }) => {
  return (
    <div className="card-container">
      <Card>
        <div>
          <div className="column-card left-card">
            <Card.Img variant="top" className="image-style" src={imageUrl} />
          </div>
          <div className="column-card right-card">
            <Card.Body>
              <Card.Title>
                <p className="titleStyle">{title}</p>
              </Card.Title>
              <Card.Title>
                <p className="titleStyle">{industry}</p>
              </Card.Title>
              <Card.Text> {name}</Card.Text>
              <Card.Text>{job_type}</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
