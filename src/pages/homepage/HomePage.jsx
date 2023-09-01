import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HomPage.module.css";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.homePage}>
      <div className={style.homePage__header}>
        <div className={style.homePage__title}>
          <h1>Welcome to the Homepage</h1>
        </div>

        <button className={style.burgerMenu} onClick={handleBurgerMenuClick}>
          ☰
        </button>

        <div
          className={`${style.homePage__container} ${
            isMenuOpen ? style.show : ""
          }`}
        >
          <button>
            <Link className={style.homePage__link} to="/Post">
              Пости
            </Link>
          </button>
          <button>
            <Link className={style.homePage__link} to="/Albums">
              Албоми
            </Link>
          </button>
          <button>
            <Link className={style.homePage__link} to="/Album">
              Албом
            </Link>
          </button>
          <button>
            <Link className={style.homePage__link} to="/Country">
              Города
            </Link>
          </button>
          <button>
            <Link className={style.homePage__link} to="/PhotoBox">
              Фото
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
