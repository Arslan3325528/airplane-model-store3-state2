import React, { Component } from "react";

import { Section } from '@/components/Section/Section.jsx';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx';

import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import aircrafts from '@/json/aircrafts.json';


//! Компонент-клас
export class AppFiltration2 extends Component {
  state = {
    isPlanes: false,
    isHelicopters: false,
    isAll: true,
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    this.setState({
      isPlanes: false,
      isHelicopters: false,
      isAll: true,
    });
  };
  planeFiltration = () => {
    console.log("Клік в кнопку Planes");
    this.setState({
      isPlanes: true,
      isHelicopters: false,
      isAll: false,
    });
  };
  helicopterFiltration = () => {
    console.log("Клік в кнопку Helicopters");
    this.setState({
      isPlanes: false,
      isHelicopters: true,
      isAll: false,
    });
  };

  render() {
    return (
      <>
        {/*//!  Filter */}
        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onHelicopters={this.helicopterFiltration}
        />

        {/*//! Літаки */}
        <Section
          isOn={this.state.isPlanes}
          title="Магазин моделей літаків"
        >
          <PlanesList items={planes} />
        </Section >

        {/*//! Вертольоти */}
        <Section
          isOn={this.state.isHelicopters}
          title="Магазин моделей вертольотів"
        >
          <PlanesList items={helicopters} />
        </Section >

        {/*//! ВСІ */}
        <Section
          isOn={this.state.isAll}
          title="Магазин моделей літальних апаратів"
        >
          <PlanesList items={aircrafts} />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅