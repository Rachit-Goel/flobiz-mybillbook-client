import React from "react";
import styled from "styled-components";

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #e17b5f;
  margin-bottom: 50px;
`;
const StatData = styled.div`
  align-content: center;
`;

export default function StatsCompany() {
  return (
    <>
        <Stats>
          <StatData>
            <h1>1,00,000+</h1>
            <p>Businesses trust us</p>
          </StatData>
          <StatData>
            <h1>30,00,000+</h1>
            <p>Invoices created</p>
          </StatData>
          <StatData>
            <h1>5,000+</h1>
            <p>Cities & Towns in India</p>
          </StatData>
          <StatData>
            <h1>4.5 ★</h1>
            <p>Rating on Google Play</p>
          </StatData>
        </Stats>
    </>
  );
}
