import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { /* Skill, Counter, */ Section } from "../components";
/* import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core' */
import about from "../data/about.json";

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
export class About extends React.Component {
  render() {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                {/* <img src={about.avatar} alt="kiendang" style={{ width: '150px' }} /> https://www.npmjs.com/package/copy-webpack-plugin */}
                <img
                  src={"/MYbgpicCartoon.png"}
                  alt="kiendang"
                  style={{ width: "150px" }}
                />
              </Col>
              <Col md={12}>
                <Name className="text-center mb-3">{about.username}</Name>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col>
                  <div dangerouslySetInnerHTML={{ __html: about.objective }} />
                </Col>
                {/* <Col md={4}>
                  {about.skills.map(skill => (
                    <Skill key={skill.name} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />
                  ))}
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          {about.statistics.map(statistic => (
            <Counter
              key={statistic.title}
              className="col-md-3 col-sm-6"
              description={statistic.title}
              count={statistic.number}
              icon={[statistic.iconPrefix as IconPrefix, statistic.iconName as IconName]} />
          ))}
        </Row> */}
      </Section>
    );
  }
}

export default About;
