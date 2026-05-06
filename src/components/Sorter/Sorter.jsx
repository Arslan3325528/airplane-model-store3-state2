// import React, { Component } from "react";
import css from "./Sorter.module.css";


//? Підняття стану
//! Звичайний компонент
export function Sorter({
  // onAll,
  // onPlanes,
  // onBiplanes,
  // onHelicopters,
  // onCart,
  // filterButton, //! візуалізація активної кнопки
  // numberOfSelectedModels //! кількість обраних моделей
})
{
  return (
    <div className={css.searchBox}>
      <input
        className={css.inputSearch}
        type="text"
      />
      <button
        className={css.buttonSearch}
        type="button"
        // onClick={onAll}
      >
        Пошук
      </button>
    </div>
  )
};
