import React, { Component } from 'react';
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        activeButtonIdx: null,
        selectedButtonsIdx: JSON.parse(localStorage.getItem("selectedIdx")) || []
    };

    componentDidMount() {
        const saved = localStorage.getItem("selectedIdx");

        if (!saved) {
            localStorage.setItem("selectedIdx", JSON.stringify([]));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedButtonsIdx !== this.state.selectedButtonsIdx) {
            localStorage.setItem(
                "selectedIdx",
                JSON.stringify(this.state.selectedButtonsIdx)
            );
        }
    }

    setActiveIdx = index => {
        this.setState(prevState => {
            const exists = prevState.selectedButtonsIdx.includes(index);

            return {
                activeButtonIdx: index,
                selectedButtonsIdx: exists
                    ? prevState.selectedButtonsIdx.filter(item => item !== index)
                    : [...prevState.selectedButtonsIdx, index].sort((a, b) => a - b)
            };
        });
    };

    render() {
        const { activeButtonIdx, selectedButtonsIdx } = this.state;
        const { colorBoxes } = this.props;

        // вычисляем, а не храним в state
        const selectedColors = selectedButtonsIdx.map(idx => colorBoxes[idx]);

        return (
            <>
                {/* Блок выбора цветов */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>

                    <p className={css.colorBoxDescription}>
                        Останній доданий колір:&nbsp;&nbsp;
                        <span
                            className={css.colorBoxSelectedColor}
                            style={{
                                backgroundColor:
                                    activeButtonIdx !== null
                                        ? colorBoxes[activeButtonIdx].color
                                        : "transparent"
                            }}
                        >
                            {activeButtonIdx !== null
                                ? colorBoxes[activeButtonIdx].label
                                : ""}
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
                                {selectedButtonsIdx.includes(index) ? "On" : "Off"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Блок выбранных цветов */}
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
}