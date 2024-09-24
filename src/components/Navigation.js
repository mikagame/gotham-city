import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const ordi = useMediaQuery({ query: "(min-width: 1200px)" });
  const tel = useMediaQuery({ query: "(max-width: 1200px)" });
  const [search, setSearch] = useState(false);

  const navOrdi = (
    <nav className="navOrdi">
      <img src="./images/logo.webp" alt="" />
      <HashLink smooth to="/#service">
        Service
      </HashLink>
      <HashLink smooth to="/#actu">
        Actualités
      </HashLink>
      <HashLink smooth to="/#histoire">
        Histoire
      </HashLink>
      <HashLink smooth to="/#administration">
        Administration
      </HashLink>
      <HashLink smooth to="/#quartiers">
        Les quartiers
      </HashLink>
      <HashLink smooth to="/#plan">
        Plan
      </HashLink>
      <div className="search">
        <i
          class="fa-solid fa-magnifying-glass"
          onClick={() => setSearch(!search)}
        ></i>
        <div className={search ? "searchOn" : "searchOff"}>
          <input id="search" type="text" />
          <label htmlFor="search"></label>
        </div>
      </div>
    </nav>
  );

  const [stateTel, setStateTel] = useState(false);

  return (
    <div>
      {ordi && navOrdi}
      {tel && !stateTel && (
        <nav>
          <img
            id="menuTel"
            src="./images/logo.webp"
            alt=""
            onClick={() => setStateTel(true)}
          />
        </nav>
      )}

      {tel && stateTel && (
        <nav className="navtel">
          <i
            id="close-menu"
            className="fa-solid fa-xmark"
            onClick={() => setStateTel(false)}
          ></i>
          <HashLink smooth to="/#service">
            Service
          </HashLink>
          <HashLink smooth to="/#actu">
            Actualités
          </HashLink>
          <HashLink smooth to="/#histoire">
            Histoire
          </HashLink>
          <HashLink smooth to="/#administration">
            Administration
          </HashLink>
          <HashLink smooth to="/#quartiers">
            Les quartiers
          </HashLink>

          <HashLink smooth to="/#plan">
            Plan
          </HashLink>
          <div className="search">
            <i
              class="fa-solid fa-magnifying-glass"
              onClick={() => setSearch(!search)}
            ></i>
            <div className={search ? "searchOn" : "searchOff"}>
              <input id="search" type="text" />
              <label htmlFor="search"></label>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
