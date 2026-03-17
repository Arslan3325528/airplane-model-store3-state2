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
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Share from "yet-another-react-lightbox/plugins/share";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


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
    const { images, nameBrief, nameFull, description } = this.props;
    const { open, index } = this.state;

    //! Масив об'єктів зображень для Lightbox
    // const slides = images.map((src) => ({ src }));
    //? Для плагіна Captions і Share
    const slides = images.map((src) => ({
      src,
      title: nameFull,
      description: description,
      // share: { url: src, title: nameBrief }, //? для плагіна  Share
    }));

    return (
      <div className={css.actualImageBox}>
        {/*//! Галерея (блок зображень)*/}
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
          // plugins={[Zoom]}
          // plugins={[Download]}
          // plugins={[Slideshow]}
          // plugins={[Counter]}
          counter={{ container: { style: { top: "4vh", bottom: "unset", left: "50vw", color: "red", fontWight: 700} } }}
          // plugins={[Captions]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "center",
              descriptionMaxLines: 3
          }}
          // plugins={[Share]}
          // plugins={[Thumbnails]}
            thumbnails={{
              position: "bottom",
              width: 120,
              height: 80,
              border: 1,
              borderRadius: 4,
              padding: 4,
              gap: 16,
              imageFit: "contain",
              vignette: true,
              hidden: false,
              showToggle: true
          }}
        

        // plugins={[Zoom, Fullscreen]}
        // plugins={[Fullscreen, Zoom, Download]}
        // plugins={[Fullscreen, Zoom, Download, Slideshow]}
        // plugins={[Fullscreen, Zoom, Download, Slideshow, Counter]}
        // plugins={[Fullscreen, Zoom, Download, Slideshow, Counter, Captions]}
        // plugins={[Fullscreen, Zoom, Download, Slideshow, Counter, Captions, Share]}
        plugins={[Fullscreen, Zoom, Download, Slideshow, Counter, Captions, Thumbnails]}
        />
      </div>
    );
  }
};
