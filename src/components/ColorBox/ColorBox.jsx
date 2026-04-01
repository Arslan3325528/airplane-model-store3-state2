import React, { Component } from 'react';
// import classNames from 'classnames';
import css from "./ColorBox.module.css";


export class ColorBox extends Component {
    state = {
        itemIdx: 0,
    };

    // setActiveIdx = index => {
    //     this.setState({ activeOptionIdx: index });
    // };

    // makeOptionClassName = index => {
    //     return classNames('ColorPicker__option', {
    //         'ColorPicker__option--active': index === this.state.activeOptionIdx,
    //     });
    // };

    render() {
        // const { activeOptionIdx } = this.state;
        const { colorBoxes } = this.props;
        // const { label } = options[activeOptionIdx];

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
                        ></button>
                    ))}
                </div>
            </div>
        );
    }
};

