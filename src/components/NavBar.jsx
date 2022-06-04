import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import iconSearch from "../assets/img/iconSearch.svg";
import iconClose from "../assets/img/iconClose.svg";
import style from "./NavBar.module.css";

const NavBar = ({ getLocation }) => {
  const [buttonHidden, setButtonHidden] = useState(true);
  const [country, setCountry] = useState("");

  const buttonHiddenSearch = () => setButtonHidden(!buttonHidden);

  const onSubmiForm = (e) => {
    e.preventDefault();
    if (country === "" || !country) return;
    getLocation(country);
    setCountry("");
  };

  return (
    <>
      <nav className={style.navbar}>
        <span className={style.logo}>
          <img src={logo} alt="logo" />
        </span>
        <form onSubmit={onSubmiForm} className={style.form}>
          <div className={style.containerInput}>
            <input
              className={style.input}
              type="search"
              placeholder="Search Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <button className={style.button} type="submi">
              <img src={iconSearch} alt="iconSearch" />
            </button>
          </div>
        </form>
        <button className={style.buttonHidden} onClick={buttonHiddenSearch}>
          {buttonHidden ? (
            <img src={iconSearch} alt="iconSearch" />
          ) : (
            <img src={iconClose} alt="iconClose" />
          )}
        </button>
      </nav>
      <form
        onSubmit={onSubmiForm}
        className={`${style.containerInputInMobile} ${
          buttonHidden && style.containerInputMobileHidden
        }`}
      >
        <input
          className={style.input}
          type="search"
          placeholder="Search Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <button className={style.button}>
          <img src={iconSearch} alt="iconSearch" />
        </button>
      </form>
    </>
  );
};

export default NavBar;
