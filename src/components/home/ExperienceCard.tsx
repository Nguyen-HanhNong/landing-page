import React from "react";

import {
  Col,
} from "react-bootstrap";
import type { Experience } from "../../editable-stuff/config";

type ExperienceCardProps = {
  data: Experience;
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="Nguyen-Hanh Nong" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;
