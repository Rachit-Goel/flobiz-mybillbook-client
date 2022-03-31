import React from "react";
import styled from "styled-components";
import madeByImage from "../assets/icn_Made with ❤️ in India.svg";
import iso from "../assets/icn_ISO.svg";
import Login from "./Login";

const Container = styled.div`
  display: flex;
  background-color: #fbf7f4;
  width: 100%;
  height: 400px;
  justify-content: space-around;
  padding: 50px 0px;
`;
const Wrapper = styled.div`
  flex-grow: 3;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 0px;
`;
const FormStyle = styled.div`
  flex-grow: 1;
  background-color: white;
  justify-self: flex-end;
  margin-right: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 25%;
`;

export default function About() {
  return (
    <>
      <Container>
        <Wrapper>
          <div >
            <h1>Simple GST Billing & Stock Management</h1>
            <h2 style={{marginTop: "10px"}}>software for your business</h2>
            <h3 style={{marginTop: "20px"}}>Atma Nirbhar Vyapaari bane</h3>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={madeByImage} alt="icon" />
            <img src={iso} alt="icon" />
          </div>
        </Wrapper>
        <FormStyle>
          <Login />
        </FormStyle>
      </Container>
      <div style={{
      height:"4px",
      width: "200px",
      backgroundColor: "#e17b5f"
    }}></div>
    </>
  );
}
