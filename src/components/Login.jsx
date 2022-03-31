import React from "react";
import styled from "styled-components";
import { useState } from "react";
import UserStorage from "../utils/userStorage";
import { otpRequest, loginAuthRequest } from "../services/requestMethods";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  /* margin: 0 auto; */
  max-width: 500px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin: 0 auto; */
  max-width: 500px;
  padding: 30px 30px;
  width: 80%;
  h1 {
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  /* padding: 10px; */
  /* text-align: center; */
}
`;
const Label = styled.label`
    color: gray;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
`;
const Input = styled.input`
    border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const SubmitInput = styled.input`
  background-color: #6976d9;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px 0px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

function Login() {
  const { storeData } = UserStorage();
  const [otpcode, setOtpcode] = useState(false);
  const [mobileNumber, setMobileNumber] = useState();
  const [otp, setOtp] = useState(false);

  const loginRequest = async (event) => {
    event.preventDefault();
    if (otpcode && otp) {
        const res = await loginAuthRequest(mobileNumber, otp);
        if (!res.data.error) {
          storeData(res.data);
        }
    } 
    else {
      const res = await otpRequest(mobileNumber);
      if (!res.data.error) {
        setOtpcode(true);
        document.getElementById("otp").style.display = "block";
      }
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={loginRequest}>
        <h1>Login to myBillBook</h1>

        <Label>
          <p>Enter Mobile Number</p>
          <Input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={(mobNo) => setMobileNumber(mobNo.target.value)}
          />
        </Label>

        <div id="otp" style={{ display: "none" }}>
          <Label>
            <p>Enter OTP</p>
            <Input
              type="text"
              name="otp"
              placeholder="One Time Password"
              onChange={(OTP) => setOtp(OTP.target.value)}
            />
          </Label>
          <small>Resend OTP in {} Seconds</small>
        </div>

        <div>
          <SubmitInput
            type="submit"
            value={otpcode ? "Verify" : "Login"}
          />
        </div>
      </Form>
    </Wrapper>
  );
}

export default Login;
