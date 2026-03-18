import React, { Component } from "react";
import css from "./App.module.css";

import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx';

import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
// import { planes, helicopters } from '@/json'; //! ❌ так не працює


//! Звичайний компонент
// export function AppFiltration1() {
//   return (
//     <>
//       {/*//! Літаки */}
//       <Section isOn={true} title="Магазин моделей літаків">
//         <PlanesList items={planes} />
//       </Section >

//       {/*//! Вертольоти */}
//       <Section isOn={true} title="Магазин моделей вертольотів">
//         <PlanesList items={helicopters} />
//       </Section >
//     </>
//   );
// };


//! Компонент-клас
export class AppFiltration1 extends Component {
  state = {
    isPlanes: false,
    isHelicopters: false,
    bgColorSection: "white"
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    this.setState({
      isPlanes: true,
      isHelicopters: true,
      bgColorSection: "green"
    });
  };
  planeFiltration = () => {
    console.log("Клік в кнопку Planes");
    this.setState({
      isPlanes: true,
      isHelicopters: false,
      bgColorSection: "yellow"
    });
  };
  helicopterFiltration = () => {
    console.log("Клік в кнопку Helicopters");
    this.setState({
      isPlanes: false,
      isHelicopters: true,
      bgColorSection: "#9accf5"
    });
  };

  render() {
    return (
      <>
        {/*//!  Filter */}
        {/* <div className={css.filterBox}>
          <button
            className={css.buttonAllFiltration}
            type="button"
            onClick={this.allFiltration}
          >
            ВСІ
          </button>

          <button
            className={css.buttonPlaneFiltration}
            type="button"
            onClick={this.planeFiltration}
          >
            Літаки
          </button>

          <button
            className={css.buttonHelicopterFiltration}
            type="button"
            onClick={this.helicopterFiltration}
          >
            Вертольоти
          </button>
        </div> */}

        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onHelicopters={this.helicopterFiltration}
        />

        {/*//! Літаки */}
        <Section
          isOn={this.state.isPlanes}
          title="Магазин моделей літаків"
          bgColor={this.state.bgColorSection}
        >
          <PlanesList items={planes} />
        </Section >

        {/*//! Вертольоти */}
        <Section
          isOn={this.state.isHelicopters}
          title="Магазин моделей вертольотів"
          bgColor={this.state.bgColorSection}
        >
          <PlanesList items={helicopters} />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅