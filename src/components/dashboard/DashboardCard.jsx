import React from "react";

import Card from "../card/Card";

const DashboardCard = ({ cardHeader, cardImage, ...props }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-0" {...props}>
      <Card>
        <div className="d-flex flex-column justify-content-evenly align-items-center create-quiz-card cursor-pointer">
          <h3 className="text-center text-muted">{cardHeader}</h3>
          <img
            src={cardImage}
            className="img-fluid create-quiz"
            alt={cardHeader}
          />
        </div>
      </Card>
    </div>
  );
};

export default DashboardCard;
