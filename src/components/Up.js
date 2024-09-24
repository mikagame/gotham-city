import React, { useEffect, useState } from "react";

const Up = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {show && (
        <div id="scrollUp" onClick={() => backToTop()}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default Up;
