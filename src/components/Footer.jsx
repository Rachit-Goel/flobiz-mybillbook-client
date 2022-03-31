import React from "react";
import styled from "styled-components";
import whtsapp from "../assets/icn_whatsapp.svg";
import chat from "../assets/icn_chat with us.svg";
import yt from "../assets/icn_youtube.svg";
import fa from "../assets/icn_Facebook.svg";
import lin from "../assets/icn_linkedin.svg";
import ins from "../assets/icn_instagram.svg";
import tw from "../assets/icn_Twitter.svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 4em;
  padding-top: 4em;
`;
const Fsection = styled.div`
  display: flex;
  flex-direction: column;
  h3{
    color:#e17b5f
  }
`;
const SocialContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const IconWtext = styled.div`
  p {
      margin: 0;
    margin-left: 5px;
  }
`;
const IconWtext1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  height: 40px !important;
  /* align-items: center; */
  box-sizing: border-box;
  /* border: 1px solid gray; */
  background-color: rgb(237, 250, 237);
  height: max-content;
  padding: 5px 5px;
  height: min-content;
`;
const IconWtext2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  height: 40px !important;
  align-items: center;
  box-sizing: border-box;
  /* border: 1px solid gray; */
  background-color: rgb(231, 231, 255);
  height: max-content;
  padding: 5px 10px;
  height: min-content;
`;
const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div{
    margin-right: 10px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Fsection>
          <h3>Get in touch</h3>
          <p>help@flobiz.in</p>
          <h3>+91 74004 17400</h3>
          <SocialContainer1>
            <IconWtext>
              <IconWtext1>
                <img src={whtsapp} alt="icon"/>
                <p>WhatsApp us</p>
              </IconWtext1>
            </IconWtext>
            <IconWtext>
              <IconWtext2>
                <img src={chat} alt="icon"/>
                <p>Chat with us</p>
              </IconWtext2>
            </IconWtext>
          </SocialContainer1>
        </Fsection>

        <Fsection>
          <h3>Information</h3>

          <FooterMenu>
            <div>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Terms and Condiitons</p>
            </div>

            <div>
              <p>FAQs</p>
              <p>Pricing</p>
              <p>FloBiz Business Group</p>
              <p>Blogs</p>
            </div>
          </FooterMenu>
        </Fsection>

        <Fsection>
          <h3>Follow us</h3>
          <div>
            <img src={yt} alt="icon"/>
            <img src={tw} alt="icon"/>
            <img src={fa} alt="icon"/>
            <img src={ins} alt="icon"/>
            <img src={lin} alt="icon"/>
          </div>
          <h5>
            FloBooks is product by <a href="https://flobiz.in/">FloBiz</a>
          </h5>
        </Fsection>
      </FooterContainer>
    </>
  );
}
