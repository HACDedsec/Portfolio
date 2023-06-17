import React from "react";
import "./footer.css";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Logo from "../../public/logo.png";
const Footer = () => {
  return (
    <footer>
      <a
        href=""
        className="footer-logo"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={Logo} alt="Dedsec_HAC" />
        <p className="mt-4 mr-6">#Dedsec_HAC</p>
      </a>
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/harsh.chauhan.77582/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/dedsec_hac/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCSYP7v1Gyd0ybZy90Q1xfvw"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://wa.me/8200023737?text="
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-copyright">
        <large>&copy;{new Date().getFullYear()}: Live it or Leave it. ❤️</large>
      </div>
    </footer>
  );
};

export default Footer;
