import React, { Component } from 'react';
// import classNames from 'classnames';
import css from "./ColorBox.module.css";


export class ColorBox extends Component {
    state = {
        activeButtonIdx: null,
        selectedButtonsIdx: []
    };

    setActiveIdx = index => {
        this.setState({
            activeButtonIdx: index,
            selectedButtonsIdx: [...this.state.selectedButtonsIdx, index], //todo-1
            // selectedButtonsIdx: this.state.selectedButtonsIdx.push(index), //todo-2
        });
        console.log("Індекс активної кнопки:", index);
        
    };

    // makeOptionClassName = index => {
    //     return classNames('ColorPicker__option', {
    //         'ColorPicker__option--active': index === this.state.activeButtonIdx,
    //     });
    // };

    render() {
        const { activeButtonIdx, selectedButtonsIdx } = this.state;
        const { colorBoxes } = this.props;
        // const { label } = options[activeOptionIdx];
        console.log("Активна кнопка:", activeButtonIdx);
        console.log("Індекси обраних кнопок:", selectedButtonsIdx);

        return (
            <div className={css.colorBoxContainer}>
                <h2 className={css.colorBoxTitle}>Color Picker</h2>
                <p className={css.colorBoxDescription}>Вибраний колір: {"вибраний колір"}</p>
                <div className={css.colorBox}>
                    {colorBoxes.map(({ label, color }, index) => (
                        <button
                            key={label}
                            // className={this.makeOptionClassName(index)}
                            className={css.colorBoxButton}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIdx(index)}
                        >
                            {(index === activeButtonIdx) ? "On" : "Off"}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
};

