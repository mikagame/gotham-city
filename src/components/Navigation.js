import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const ordi = useMediaQuery({ query: "(min-width: 1200px)" });
  const tel = useMediaQuery({ query: "(max-width: 1200px)" });
  const [search, setSearch] = useState(false);

  const [classFood, setClassFood] = useState("offFood");
  const [classSleep, setClassSleep] = useState("offSleep");

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
      <div className="menu-food-sleep">
        <i
          class="fa-solid fa-utensils"
          title="Où manger ?"
          onClick={() => setClassFood("onFood")}
        ></i>

        <i
          class="fa-solid fa-bed"
          title="Où se loger ?"
          onClick={() => setClassSleep("onSleep")}
        ></i>
      </div>
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
    <div id="menu-nav">
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
          <div className="menu-food-sleep">
            <i
              class="fa-solid fa-utensils"
              title="Où manger ?"
              onClick={() => setClassFood("onFood")}
            ></i>

            <i
              class="fa-solid fa-bed"
              title="Où se loger ?"
              onClick={() => setClassSleep("onSleep")}
            ></i>
          </div>
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

      <div id="food" className={classFood}>
        <i
          class="fa-solid fa-xmark"
          onClick={() => setClassFood("offFood")}
        ></i>
        <h2>RESTAURANTS</h2>
        <div className="resto">
          <div className="card-hotel">
            <img src="./images/resto1.webp" alt="" />

            <div className="infos-hotel">
              <h3>Chez Mario</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/resto2.jpg" alt="" />

            <div className="infos-hotel">
              <h3>Burger Gotham</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/resto3.jpg" alt="" />

            <div className="infos-hotel">
              <h3>Joker King</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/resto4.jpg" alt="" />

            <div className="infos-hotel">
              <h3>Sky</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sleep" className={classSleep}>
        <i
          class="fa-solid fa-xmark"
          onClick={() => setClassSleep("offSleep")}
        ></i>
        <h2>HÔTELS</h2>
        <div className="hotel">
          <div className="card-hotel">
            <img src="./images/majestic.jpg" alt="" />

            <div className="infos-hotel">
              <h3>Majestic Hotel</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p>Nuit : 450 $ </p>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/hotel2.jpg" alt="" />
            <div className="infos-hotel">
              <h3>Voilier Hotel</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <p>Nuit : 950 $ </p>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/hotel3.jpg" alt="" />
            <div className="infos-hotel">
              <h3>Balneo Hotel</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p>Nuit : 350 $ </p>
            </div>
          </div>
          <div className="card-hotel">
            <img src="./images/hotel4.avif" alt="" />
            <div className="infos-hotel">
              <h3>Luxury Hotel</h3>
              <div className="note">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p>Nuit : 350 $ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
