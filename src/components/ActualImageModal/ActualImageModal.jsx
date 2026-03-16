import React, { Component } from "react";

//? Бібліотека для модальних вікон - React Image Lightbox
//❌ npm install yet-another-react-lightbox - ❌так може не працювати
//✅ npm install yet-another-react-lightbox --legacy-peer-deps
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import css from "./ActualImageModal.module.css"; 


export class ActualImageModal extends Component {
  state = {
    open: false,
    index: 0
  };

  openLightbox = (i) => {
    this.setState({
      open: true,
      index: i
    });
  };

  closeLightbox = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { images, nameBrief } = this.props;
    const { open, index } = this.state;

    const slides = images.map((src) => ({ src }));

    return (
      <div className={css.actualImageBox}>
        {/*//! Галерея */}
        {images.map((img, i) => (
          <img
            key={i} //* також унікальний 
            src={img}
            alt={nameBrief}
            className={css.actualImage}
            // style={{ cursor: "pointer" }}
            onClick={() => this.openLightbox(i)}
          />
        ))}

        {/*//!  Lightbox */}
        <Lightbox
          open={open}
          close={this.closeLightbox}
          slides={slides}
          index={index}
        />
      </div>
    );
  }
};
