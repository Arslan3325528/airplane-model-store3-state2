import React, { Component } from "react";

import { ColorBox } from '@/components/ColorBox/ColorBox.jsx';


const colorBoxOptions = [
  { label: 'red', color: '#ff0000' },
  { label: 'orange', color: '#ffa500' },
  { label: 'yellow', color: '#ffff00' },
  { label: 'green', color: '#008000' },
  { label: 'lightblue', color: '#add8e6' },
  { label: 'blue', color: '#0000ff' },
  { label: 'violet', color: '#ee82ee' },
];

//! Компонент-клас
export class AppColorBox extends Component {
  render() {
    return (
      <ColorBox colorBoxes={colorBoxOptions}/>
    )
  }
};

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅