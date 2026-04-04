import React, { Component } from 'react';
import css from "./ColorBox.module.css";


export class ColorBox extends Component {
    state = {
        activeButtonIdx: null, 
        selectedButtonsIdx: [], 
        selectedColors: [] 
    };

    setActiveIdx = index => {
        if ((this.state.selectedButtonsIdx.find(item => item === index)) === undefined) {
            this.setState({
                activeButtonIdx: index,
                selectedButtonsIdx: [...this.state.selectedButtonsIdx, index].sort((a, b) => a - b),
            });
            console.log("Індекс активної кнопки:", index);
            
        } else {
            const indexElementRemoved = this.state.selectedButtonsIdx.find(item => item === index);
            console.log("Індекс видаляемого елемента:", indexElementRemoved);
            this.setState({
                selectedButtonsIdx: this.state.selectedButtonsIdx.filter(item => item !== index),
            });
        };
        this.setState(prevState => {
            return {
                selectedColors: prevState.selectedButtonsIdx.flatMap(item => this.props.colorBoxes.filter((el, idx) => idx === item))
            };
        });
    };

    render() {
        const { activeButtonIdx, selectedButtonsIdx, selectedColors } = this.state;
        const { colorBoxes } = this.props;

        return (
            <>
                {/*//! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>
                        Останній доданий колір:&nbsp;&nbsp;
                            <span
                                className={css.colorBoxSelectedColor}
                                style={{ backgroundColor: activeButtonIdx !== null ? colorBoxes[activeButtonIdx].color : "transparent" }}
                            >
                                {activeButtonIdx !== null ? colorBoxes[activeButtonIdx].label : ""}
                            </span>
                        
                    </p>
                    <div className={css.colorBox}>
                        {colorBoxes.map(({ label, color }, index) => (
                            <button
                                key={label}
                                className={css.colorBoxButton}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIdx(index)}
                            >
                                {(selectedButtonsIdx.some(value => value === index)) ? "On" : "Off"}
                            </button>
                        ))}
                    </div>
                </div>
                {/*//! Блок обраних кольорів */}
                <div className={css.selectedColorsContainer}>
                    <h2 className={css.colorBoxTitle}>Обрані кольори:</h2>
                    <div className={css.selectedColorsBox}>
                        {selectedColors.map(({ label, color }) => (
                            <div
                                key={label}
                                className={css.selectedColor}
                                style={{ backgroundColor: color }}
                            >
                                {color}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};
