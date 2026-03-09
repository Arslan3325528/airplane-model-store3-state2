import React, { Component } from "react";
import css from "./Filter.module.css";


//? Підняття стану
//! Компонент-клас
// export class Filter extends Component {
//   render() {
//     return (
//         <div className={css.filterBox}>
//           <button
//             className={css.buttonAllFiltration}
//             type="button"
//             onClick={this.props.onAll}
//           >
//             ВСІ
//           </button>

//           <button
//             className={css.buttonPlaneFiltration}
//             type="button"
//             onClick={this.props.onPlanes}
//           >
//             Літаки
//           </button>

//           <button
//             className={css.buttonHelicopterFiltration}
//             type="button"
//           onClick={this.props.onHelicopters}
//           >
//             Вертольоти
//           </button>
//         </div>
//     )
//   }
// };

//! Звичайний компонент
export function Filter ({ onAll, onPlanes, onHelicopters }) {
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
        className={css.buttonHelicopterFiltration}
        type="button"
        onClick={onHelicopters}
      >
        Вертольоти
      </button>
    </div>
  )
};
