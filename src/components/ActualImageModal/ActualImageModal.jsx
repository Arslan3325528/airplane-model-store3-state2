import React, { Component } from "react";
import css from "./ActualImageModal.module.css"; 

//? Бібліотека для модальних вікон: Yet Another React Lightbox
//❌ npm install yet-another-react-lightbox - ❌так може не працювати
//✅ npm install yet-another-react-lightbox --legacy-peer-deps
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//? Додавання популярних плагінів: Fullscreen + Zoom  
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/zoom.css";  //❌
// import "yet-another-react-lightbox/plugins/zoom/zoom.css";  //❌
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";


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
        {/*//! Галерея (блока зображень)*/}
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

        {/*//! Lightbox */}
        <Lightbox
          open={open}
          close={this.closeLightbox}
          slides={slides}
          index={index}
          //? Додавання популярних плагінів: Fullscreen + Zoom
          // plugins={[Fullscreen]}
          // plugins={[Zoom, Fullscreen]}
          // plugins={[Zoom, Fullscreen, Download]}
          plugins={[Zoom, Fullscreen, Download, Slideshow]}
        />
      </div>
    );
  }
};
