import React, { Component } from "react";

import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter4 } from '@/components/Filter/Filter4.jsx';

import aircrafts from '@/json/aircrafts.json';


//! Компонент-клас
export class AppFiltration4 extends Component {
  state = {
    aircraftsArr: aircrafts,
    aircraftsTitle: "Магазин моделей літальних апаратів"
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    console.log("allAircrafts:", aircrafts);
    this.setState({
      aircraftsArr: aircrafts,
      aircraftsTitle: "Магазин моделей літальних апаратів"
    });
  };
  planeFiltration = () => {
    console.log("Клік в кнопку Planes");
    const onlyPlanes = aircrafts.filter(aircraft => aircraft.aircraftType === "plane");
    console.log("onlyPlanes:", onlyPlanes);
    this.setState({
      aircraftsArr: onlyPlanes,
      aircraftsTitle: "Магазин моделей літаків"
    });
  };
  biplaneFiltration = () => {
    console.log("Клік в кнопку Biplane");
    const onlyBiplane = aircrafts.filter(aircraft => aircraft.aircraftType === "biplane");
    console.log("onlyBiplane:", onlyBiplane);
    this.setState({
      aircraftsArr: onlyBiplane,
      aircraftsTitle: "Магазин моделей біпланів"
    });
  };
  helicopterFiltration = () => {
    console.log("Клік в кнопку Helicopters");
    const onlyHelicopters = aircrafts.filter(aircraft => aircraft.aircraftType === "helicopter");
    console.log("onlyHelicopters:", onlyHelicopters);
    this.setState({
      aircraftsArr: onlyHelicopters,
      aircraftsTitle: "Магазин моделей вертольотів"
    });
  };

  render() {
    return (
      <>
        {/*//!  Filter */}
        <Filter4
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onBiplanes={this.biplaneFiltration}
          onHelicopters={this.helicopterFiltration}
        />

        {/*//! ВСІ */}
        <Section
          // isOn={true} 
          title={this.state.aircraftsTitle}
        >
          <PlanesList items={this.state.aircraftsArr} />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅