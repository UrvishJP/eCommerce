import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Make the things yours.</h3>
            </div>

            <div>
              <Button
                className="btn hireme-btn"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0});
                }}
              >
                <NavLink to="/products"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}
        <hr />

        <footer>
          <div
            className="container grid grid-four-column"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="footer-social">
              <h3
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Urvish Prajapati
              </h3>
              <div className="footer-social--icons">
                <div>
                  <a
                    href="https://www.linkedin.com/in/urvish-j-p/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/UrvishJP" target="_blank" rel="noreferrer">
                    <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/urvish_j_p/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/UrvishJP" target="_blank" rel="noreferrer">
                    <FaTwitter className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/urvish.prajapati.167"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="footer-bottom--section"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="container ">
              <p>
                Copyright ©️ {new Date().getFullYear()}{" "}
                urvishmeghani111@gmail.com
              </p>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 5rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
