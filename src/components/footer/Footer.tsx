import React from "react";
import { FooterLinks } from "./FooterLinks";

import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterRoundedIcon from "@mui/icons-material/Twitter";
import InstagramRoundedIcon from "@mui/icons-material/Instagram";
import LinkedinRoundedIcon from "@mui/icons-material/LinkedIn";
import YoutubeRoundedIcon from "@mui/icons-material/YouTube";

import ReactCountryFlag from "react-country-flag";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="footerUp">
        <div className="leftInfo">
          <div
            className="logoFooter"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "172px",
              height: "48px",
              backgroundColor: " #CED0D3",
            }}
          >
            LOGO
          </div>
          <div>
            <p>
              We sell custom products for all your needs. Packs and bulk
              products that you will enjoy.
            </p>
          </div>
          <div>
            <a
              href="tel:+1-202-555-0129"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <CallIcon /> +1-202-555-0129
            </a>
          </div>
          <div className="redesSocialesFooter mt-40">
            <div className="facebook ">
              <a href="https://www.facebook.com">
                {" "}
                <FacebookRoundedIcon />
              </a>
            </div>
            <div className="twitter ">
              <a href="https://www.twitter.com">
                <TwitterRoundedIcon />
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com">
                <InstagramRoundedIcon />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com">
                <LinkedinRoundedIcon />
              </a>
            </div>
            <div className="youtube">
              <a href="https://www.youtube.com">
                <YoutubeRoundedIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="companyInfo">
          <h3>Our company</h3>
          <FooterLinks content="About us" />
          <FooterLinks content="FAQ" />
          <FooterLinks content="Partnerships" />
          <FooterLinks content="Sustainabilities" />
          <FooterLinks content="Blog" />
        </div>
        <div className="helpInfo">
          <h3>How can we help</h3>
          <FooterLinks content="Place a ticket" />
          <FooterLinks content="Track your order" />
          <FooterLinks content="Help center" />
        </div>
        <div className="information">
          <h3>Information</h3>
          <FooterLinks content="Contact us" />
          <FooterLinks content="Live chat" />
          <FooterLinks content="Privacy" />
          <FooterLinks content="Terms of use" />
        </div>
      </div>
      <div className="footerDown">
        <div>
          <p>© 2022 Customer Products. All rights reserved.</p>
        </div>
        <div className="right">
          <p>
            Region <ReactCountryFlag countryCode="US" /> :{" "}
            <span>United States</span>
          </p>
          <p>
            Language <span> : English </span>
          </p>
        </div>
      </div>
    </>
  );
};
