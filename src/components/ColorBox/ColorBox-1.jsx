import React, { Component } from 'react';
import css from "./ColorBox.module.css";


export class ColorBox extends Component {
    state = {
        activeButtonIdx: null, //! індекс обраного елемента
        selectedButtonsIdx: [], //! масив індексів обраних елементів
        selectedColors: [] //! масив обраних елементів згідно масиву індексів
    };

    //! Формуємо масив обраних елементів(кольорів)
    updateSelectedColorElements = (arr) => {
        this.setState(prevState => ({
            selectedColors: prevState.selectedButtonsIdx.flatMap(item =>
                arr.filter((el, idx) => idx === item)
            )
        }));
    };

    setActiveIdx = index => {
        //! Перевірка на наявність вже існуючого індексу
        if ((this.state.selectedButtonsIdx.find(item => item === index)) === undefined) {
            console.log("Такого індекса ще немає,тоді ДОДАЄМО його!✅");
            this.setState({
                activeButtonIdx: index,
                selectedButtonsIdx: [...this.state.selectedButtonsIdx, index].sort((a, b) => a - b), //todo-1 ✅
            });
            console.log("Індекс активної кнопки:", index);

        } else {
            console.log("Такий індекс вже є,тоді ВИДАЛЯЄМО його!❌");
            const indexElementRemoved = this.state.selectedButtonsIdx.find(item => item === index);
            console.log("Індекс видаляемого елемента:", indexElementRemoved);
            // this.state.selectedButtonsIdx.splice(indexElementRemoved, 1).sort((a, b) => a - b); //! ❌ !так працює нестабільно!
            this.setState({
                selectedButtonsIdx: this.state.selectedButtonsIdx.filter(item => item !== index),
            });
        };
        //! Формуємо масив обраних елементів(кольорів)
        // this.setState(prevState => {
        //     return {
        //         selectedColors: prevState.selectedButtonsIdx.flatMap(item => this.props.colorBoxes.filter((el, idx) => idx === item))
        //     };
        // });
        this.updateSelectedColorElements(this.props.colorBoxes);


        //? -------------------------------------------------------------------------------------------------------
        // this.setState({
        //     activeButtonIdx: index,
        //     selectedButtonsIdx: [...this.state.selectedButtonsIdx, index].sort((a, b) => a - b), //todo-1 ✅
        //     // selectedButtonsIdx: this.state.selectedButtonsIdx.push(index), //todo-2 ❌
        // });
        // // this.state.selectedButtonsIdx.push(index); //todo-2-1 ✅
        // // this.state.selectedButtonsIdx.sort((a, b) => a - b), //todo-2-2 ✅
        // console.log("Індекс активної кнопки:", index);
        //? -------------------------------------------------------------------------------------------------------
    };

    render() {
        const { colorBoxes } = this.props; //! масив об'єктів всіх елементів(кольорів)
        const { activeButtonIdx, selectedButtonsIdx, selectedColors } = this.state;

        //! Рахуємо кількість обраних кольорів:
        const numberOfColors = selectedButtonsIdx.length;

        console.log("🔘🆔Активна кнопка:", activeButtonIdx);
        console.log("ℹ️Індекси обраних кнопок:", selectedButtonsIdx);
        console.log("Ⓜ️Масив обраних елементів(кольорів):", selectedColors);
        console.log("🔢Кількість обраних кольорів:", numberOfColors);
        console.log("----------------------------------------------");

        return (
            <>
                {/*//! Блок вибору кольорів */}
                <div className={css.colorBoxContainer}>
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}>
                        Останній <u>доданий</u> колір:&nbsp;&nbsp;
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
                                {/* {(index === activeButtonIdx) ? "On" : "Off"} */}
                                {(selectedButtonsIdx.some(value => value === index)) ? "✅On" : "🆓Off"}
                            </button>
                        ))}
                    </div>
                </div>

                {/*//! Блок обраних кольорів */}
                <div className={css.selectedColorsContainer}>
                    <h2 className={css.colorBoxTitle}>Обрані кольори:</h2>
                    <p className={css.colorBoxDescription}>
                        Кількість обраних кольорів:
                        <span className={css.colorBoxSelectedColor}>
                            {NumberOfColors}
                        </span>
                    </p>
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
