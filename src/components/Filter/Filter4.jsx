// import React, { Component } from "react";
import css from "./Filter4.module.css";


//? Підняття стану
//! Звичайний компонент
export function Filter4({ onAll, onPlanes, onBiplanes, onHelicopters }) {
  return (
    <div className={css.filterBox}>
      <button
        className={css.buttonAllFiltration}
        type="button"
        onClick={onAll}
      >
        ВСІ
      </button>
      <button
        className={css.buttonPlaneFiltration}
        type="button"
        onClick={onPlanes}
      >
        Літаки
      </button>
      <button
        className={css.buttonBiplaneFiltration}
        type="button"
        onClick={onBiplanes}
      >
        Біплани
      </button>
      <button
        className={css.buttonHelicopterFiltration}
        type="button"
        onClick={onHelicopters}
      >
        Вертольоти
      </button>
    </div>
  )
};
