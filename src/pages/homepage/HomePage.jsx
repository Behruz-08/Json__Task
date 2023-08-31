import React from "react";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import Albums from "../../components/albums/Albums";
import Album from "../../components/album/Album";
import style from "./HomPage.module.css";

function HomePage() {
  return (
    <div className={style.homePage}>
      <div className={style.homePage__header}>
        <div className={style.homePage__title}>
          <h1>Welcome to the Homepage</h1>
        </div>

        <div className={style.homePage__container}>
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
