import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

import logo from "../assets/mbb_logo.svg";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  height: 60px;
  padding: 0px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//left part
const Left = styled.div`
  flex: 1;
  display: flex;
`;

//rightpart
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MenuItem = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
`;

const Navbar = () => {
  //   const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={logo} alt="logo" />
        </Left>

        <Right>
          <MenuItem>Why Use My BillBook?</MenuItem>
          <MenuItem>Who is it for?</MenuItem>
          <MenuItem>Online Store</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>FAQs</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
