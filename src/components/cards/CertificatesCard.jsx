import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const School = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Creds = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  margin-top: 6px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

const CertificateCard = ({ certificate }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={certificate.title}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={certificate.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={certificate.date}
    >
      <Top>
        <Image src={certificate.img} />
        <Body>
          <Title>{certificate.title}</Title>
          {certificate.school && <School>{certificate.school}</School>}
          {certificate.date && <School>{certificate.date}</School>}
        </Body>
      </Top>
      {certificate.creds && (
        <Creds href={certificate.creds} target="_blank" rel="noopener noreferrer">
          View Certificate
        </Creds>
      )}
      {certificate.desc && (
        <Description>
          <Span>{certificate.desc}</Span>
        </Description>
      )}
    </VerticalTimelineElement>
  );
};

export default CertificateCard;