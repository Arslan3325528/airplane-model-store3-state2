import React, { Component } from "react";

import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx';

import aircrafts from '@/json/aircrafts.json';


//! Компонент-клас
export class App extends Component {
  state = {
    aircraftsArr: aircrafts,
    aircraftsTitle: "Магазин моделей літальних апаратів",
    //! Візуалізація активної кнопки
    activeButton: "allButton"
  };

  allFiltration = () => {
    console.log("Клік в кнопку ВСІ");
    console.log("allAircrafts:", aircrafts);
    this.setState({
      aircraftsArr: aircrafts,
      aircraftsTitle: "Магазин моделей літальних апаратів",
      //! Візуалізація активної кнопки
      activeButton: "allButton"
    });
  };

  planeFiltration = () => {
    console.log("Клік в кнопку Літаки");
    const onlyPlanes = aircrafts.filter(aircraft => aircraft.aircraftType === "plane");
    console.log("onlyPlanes:", onlyPlanes);
    this.setState({
      aircraftsArr: onlyPlanes,
      aircraftsTitle: "Магазин моделей літаків",
      //! Візуалізація активної кнопки
      activeButton: "planeButton"
    });
  };

  biplaneFiltration = () => {
    console.log("Клік в кнопку Біплани");
    const onlyBiplane = aircrafts.filter(aircraft => aircraft.aircraftType === "biplane");
    console.log("onlyBiplane:", onlyBiplane);
    this.setState({
      aircraftsArr: onlyBiplane,
      aircraftsTitle: "Магазин моделей біпланів",
      //! Візуалізація активної кнопки
      activeButton: "biplaneButton"
    });
  };

  helicopterFiltration = () => {
    console.log("Клік в кнопку Вертольоти");
    const onlyHelicopters = aircrafts.filter(aircraft => aircraft.aircraftType === "helicopter");
    console.log("onlyHelicopters:", onlyHelicopters);
    this.setState({
      aircraftsArr: onlyHelicopters,
      aircraftsTitle: "Магазин моделей вертольотів",
      //! Візуалізація активної кнопки
      activeButton: "helicopterButton"
    });
  };

  cartFiltration = () => {
    console.log("Клік в кнопку Кошик");
    // const onlyCart = aircrafts.filter(aircraft => aircraft.aircraftType === "helicopter");
    // console.log("onlyCart:", onlyCart);
    this.setState({
      // aircraftsArr: onlyCart,
      aircraftsTitle: "Мої обрані моделі",
      //! Візуалізація активної кнопки
      activeButton: "cartButton"
    });
  };

  getActiveId = (id) => {
    console.log("ID:", id);
  }

  render() {
    return (
      <>
        {/*//!  Filter */}
        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onBiplanes={this.biplaneFiltration}
          onHelicopters={this.helicopterFiltration}
          onCart={this.cartFiltration}
          filterButton={this.state.activeButton} //! Візуалізація активної кнопки
        />

        {/*//! ВСІ */}
        <Section
          title={this.state.aircraftsTitle}
        >
          <PlanesList
            items={this.state.aircraftsArr}
            onActiveId={this.getActiveId}
          />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅