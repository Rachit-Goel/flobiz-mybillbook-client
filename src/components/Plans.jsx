import React from "react";
import styled from "styled-components";
import moneyBackLogo from "../assets/icn_moneyback.svg";
import crownIcon from "../assets/icn_pricing_crown.svg";
import compIcon from "../assets/icn_devices.svg";

// .pricingBox img,h2,h5,h4,ul{
//   margin-left: 10px;
// }
// .devicesCont h5 {
//   margin-left: 1em;
// }

const BodyContainer = styled.div`
  padding: 3em;
`;
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
const TrialPromo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6em;
`;
const FreePromo = styled.h1`
  color: #e17b5f;
`;
const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const PricingBox = styled.div`
  width: 25%;
  padding-top: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 10px;
  img,h2,h5,h4,ul {
    margin-left: 10px;
  }
`;
const DevicesCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  h5 {
    margin-left: 1em;
  }
`;

export default function Body() {
  return (
    <>
      <BodyContainer>
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

        <TrialPromo>
          <div>
            <h1>Now try all benefits of MyBillBook app</h1>
            <FreePromo>Free for 14 Days</FreePromo>
          </div>
          <div style={{ paddingRight: "40px" }}>
            <img src={moneyBackLogo} alt="icon" />
          </div>
        </TrialPromo>

        <PricingContainer>
          <PricingBox style={{ color: "#6976d9" }}>
            <img src={crownIcon} alt="icon" />
            <h5 style={{ color: "gray" }}>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through", color: "gray" }}>
                ₹ 1299
              </small>{" "}
              ₹ 799 / <small>Year</small>
            </h2>

            <DevicesCont style={{ backgroundColor: "#b7bdf1" }}>
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </DevicesCont>

            <ul style={{ color: "gray" }}>
              <li>Unlimited Stock Adjustments</li>
              <li>GST Reports, Profit & Loss Report</li>
              <li>Remove MyBillBook logo from Invoice</li>
              <li>Only Mobile device supported</li>
              <li>+ 5 more features</li>
            </ul>
          </PricingBox>

          <PricingBox style={{ color: "gold", backgroundColor: "rgb(253, 247, 210)" }}>
            <img src={crownIcon} alt="icon" />
            <h5 style={{ color: "gray" }}>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through", color: "gray" }}>
                ₹ 2599
              </small>{" "}
              ₹ 1799 / <small>Year</small>
            </h2>

            <DevicesCont
              style={{
                backgroundColor: "rgb(226, 206, 90)",
                borderColor: "rgb(236, 217, 106)",
              }}
            >
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </DevicesCont>

            <ul style={{ color: "gray" }}>
              <li>All Silver Features</li>
              <li>Add upto 5 Staff to My BillBook</li>
              <li>Unlimited Mobile + Desktop Logins</li>
            </ul>
          </PricingBox>

          <PricingBox style={{ color: "orange" }}>
            <img src={crownIcon} alt="icon" />
            <h5 style={{ color: "gray" }}>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through", color: "gray" }}>
                ₹ 4599
              </small>{" "}
              ₹ 3500 / <small>Year</small>
            </h2>

            <DevicesCont style={{ backgroundColor: "rgb(255, 217, 147)" }}>
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </DevicesCont>

            <ul style={{ color: "gray" }}>
              <li>All Gold & Silver Features</li>
              <li>Add unlimited staff to My Billbook</li>
            </ul>
          </PricingBox>
        </PricingContainer>
      </BodyContainer>
    </>
  );
}
