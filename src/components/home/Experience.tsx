import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from "./migration";
import {
  Container,
  Row,
} from "react-bootstrap";
import type { ExperiencesConfig } from "../../editable-stuff/config";

type ExperienceProps = {
  experiences: ExperiencesConfig;
};

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;
