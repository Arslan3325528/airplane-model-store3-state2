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
    activeButton: "allButton", //! візуалізація активної кнопки
    indicesSelectedModels: [], //! масив індексів обраних моделей
    // selectedModels: [], //! масив обраних моделей
    isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
    totalTypes: aircrafts.length, //! кількість типів ЛА (всіх літальних апаратів)
  };

  allFiltration = () => {
    console.log("Клік в кнопку ВСІ");
    console.log("allAircrafts:", aircrafts);
    this.setState({
      aircraftsArr: aircrafts,
      aircraftsTitle: "Магазин моделей літальних апаратів",
      activeButton: "allButton", //! візуалізація активної кнопки
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»" 
      totalTypes: aircrafts.length, //! кількість типів ЛА (всіх літальних апаратів)
    });
  };

  planeFiltration = () => {
    console.log("Клік в кнопку Літаки");
    const onlyPlanes = aircrafts.filter(aircraft => aircraft.aircraftType === "plane");
    console.log("onlyPlanes:", onlyPlanes);
    this.setState({
      aircraftsArr: onlyPlanes,
      aircraftsTitle: "Магазин моделей літаків",
      activeButton: "planeButton", //! візуалізація активної кнопки
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
      totalTypes: onlyPlanes.length, //! кількість типів ЛА (літаків)
    });
  };

  biplaneFiltration = () => {
    console.log("Клік в кнопку Біплани");
    const onlyBiplane = aircrafts.filter(aircraft => aircraft.aircraftType === "biplane");
    console.log("onlyBiplane:", onlyBiplane);
    this.setState({
      aircraftsArr: onlyBiplane,
      aircraftsTitle: "Магазин моделей біпланів",
      activeButton: "biplaneButton", //! візуалізація активної кнопки
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
      totalTypes: onlyBiplane.length, //! кількість типів ЛА (біпланів)
    });
  };

  helicopterFiltration = () => {
    console.log("Клік в кнопку Вертольоти");
    const onlyHelicopters = aircrafts.filter(aircraft => aircraft.aircraftType === "helicopter");
    console.log("onlyHelicopters:", onlyHelicopters);
    this.setState({
      aircraftsArr: onlyHelicopters,
      aircraftsTitle: "Магазин моделей вертольотів",
      activeButton: "helicopterButton", //! візуалізація активної кнопки
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
      totalTypes: onlyHelicopters.length, //! кількість типів ЛА (вертольотів)
    });
  };

  //! Формуємо(оновлюємо) масив обраних моделей [selectedModels] не зберігаючи його в state:
  updateSelectedModels = () => this.state.indicesSelectedModels.flatMap(id => aircrafts.filter((el) => id === el.id));

  cartFiltration = () => {
    console.log("Клік в кнопку Кошик");
    //! Формуємо(оновлюємо) масив обраних моделей [selectedModels] не зберігаючи його в state:
    // const selectedModels = this.state.indicesSelectedModels.flatMap(id => aircrafts.filter((el) => id === el.id));
    // console.log("selectedModels:", selectedModels);
    this.setState({
      // aircraftsArr: selectedModels,
      // aircraftsArr: this.updateSelectedModels(), //! вже не треба, якщо є isCartButton
      aircraftsTitle: "Мої обрані моделі",
      activeButton: "cartButton", //! візуалізація активної кнопки
      isCartButton: true, //! тригер: "якщо активна кнопка «Кошик»" 
    });
  };

  getActiveId = id => {
    console.log('🆔Індекс обраної моделі ("id"):', id); //!
    this.setState(prevState => {
      //! Перевіряємо наявність елемента зі значенням <id> у масиві індексів обраних моделей [indicesSelectedModels]
      const exists = prevState.indicesSelectedModels.includes(id);
      if (exists) {
        console.log("Такий індекс моделі вже є,тоді ВИДАЛЯЄМО його!❌");
      } else {
        console.log("Такого індекса моделі ще немає,тоді ДОДАЄМО його!✅");
      };
      return {
        indicesSelectedModels: exists
          ? prevState.indicesSelectedModels.filter(item => item !== id)
          // : [...prevState.indicesSelectedModels, id] //! без сортування
          : [...prevState.indicesSelectedModels, id].sort((a, b) => a - b) //! з сортуванням
      };
    });
  };


  render() {
    const {
      aircraftsArr,
      aircraftsTitle,
      activeButton, //! візуалізація активної кнопки
      indicesSelectedModels, //! масив індексів обраних моделей
      // selectedModels //! масив обраних моделей 
      isCartButton, //! тригер: "якщо активна кнопка «Кошик»"
      totalTypes //! кількість типів ЛА 

    } = this.state; 

    //! Формуємо(оновлюємо) масив обраних моделей [selectedModels] не зберігаючи його в state:
    // const selectedModels = indicesSelectedModels.flatMap(id => aircrafts.filter((el) => id === el.id));
    const selectedModels = this.updateSelectedModels();
    //! Рахуємо кількість обраних моделей
    const numberOfModels = indicesSelectedModels.length; 

    console.log("----------------------------------------------");
    console.log("ℹ️Mасив індексів обраних моделей :", indicesSelectedModels);
    console.log("Ⓜ️Масив обраних моделей:", selectedModels);
    console.log("🔢Кількість обраних моделей:", numberOfModels);
    console.log("______________________________________________");

    return (
      <>
        {/*//!  Filter */}
        <Filter
          onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onBiplanes={this.biplaneFiltration}
          onHelicopters={this.helicopterFiltration}
          onCart={this.cartFiltration}
          filterButton={activeButton} //! візуалізація активної кнопки
          numberOfSelectedModels={numberOfModels} //! кількість обраних моделей
        />

        {/*//! ВСІ */}
        <Section
          // title={aircraftsTitle}
          //! використання логіки тригеру: "якщо активна кнопка «Кошик»" та порожній масив [indicesSelectedModels]
          // title={(isCartButton === true && indicesSelectedModels.length === 0) ? "" : aircraftsTitle}
          title={(isCartButton && !indicesSelectedModels.length) ? "" : aircraftsTitle}
          allTypes={totalTypes} //! кількість типів ЛА
          numberOfSelectedModels={numberOfModels} //! кількість обраних моделей
          isCartOn={isCartButton} //! тригер: "якщо активна кнопка «Кошик»"
        >
          <PlanesList
            // items={aircraftsArr}
            //! використання логіки тригеру: "якщо активна кнопка «Кошик»" 
            items={isCartButton ? selectedModels : aircraftsArr} 
            indicesArray={indicesSelectedModels}
            onActiveId={this.getActiveId}
          />
        </Section >
      </>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state 