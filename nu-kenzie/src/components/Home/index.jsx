import React from "react";
import style from "./style.module.css";
import logo from "../assests/nklogo.svg";
import ilustration from "../assests/illustration-home.svg";

function Home() {
  return (
    <section className={style.mainContent}>
      <div className={style.content}>
        <img src={logo} alt="Logo Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <div className={style.bot}>
          <h6>de forma rápida e segura</h6>
        </div>
      </div>
      <div>
        <img src={ilustration} />
      </div>
    </section>
  );
}

export default Home;
