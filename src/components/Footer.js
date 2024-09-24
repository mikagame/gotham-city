import React from "react";

const Footer = () => {
  return (
    <footer>
      <h1>
        Gotham <br /> City
      </h1>
      <div className="reseau">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
      </div>
      <div className="copyright">
        <i class="fa-regular fa-copyright"></i>{" "}
        <p>2024 Gotham City. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
