import React, { Component } from "react";
import css from "./ActualImageModal.module.css";

//? Бібліотека для модальних вікон: Yet Another React Lightbox
//❌ npm install yet-another-react-lightbox - ❌так може не працювати
//✅ npm install yet-another-react-lightbox --legacy-peer-deps
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//? Додавання плагінів Yet Another React Lightbox
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
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
    const { images, imagesFull, nameBrief, nameFull, description, templateImage } = this.props;
    const { open, index } = this.state;

    //! Масив об'єктів зображень для Lightbox
    if (imagesFull.length === 0) imagesFull.push(...images); //! якщо немає imagesFull
    if (imagesFull[0] === templateImage) imagesFull.length = 0; //! якщо немає в наявності
    // const slides = images.map((src) => ({ src }));
    // const slides = imagesFull.map((src) => ({ src }));
    //? Для плагіна Captions і Share
    const slides = imagesFull.map((src) => ({
      src,
      title: nameFull,
      description: description,
      // share: { url: src, title: nameBrief }, //? для плагіна  Share
      //! Приклад ретинізації зображень з можливістю автоматичного перемикання роздільної здатності
      // srcSet: [
      //   { src: "/image1x320.jpg", width: 320, height: 213 },
      //   { src: "/image1x640.jpg", width: 640, height: 427 },
      //   { src: "/image1x1200.jpg", width: 1200, height: 800 },
      //   { src: "/image1x2048.jpg", width: 2048, height: 1365 },
      //   { src: "/image1x3840.jpg", width: 3840, height: 2560 },
      // ],
    }));

    // console.log("images[0]:", images[0]);
    return (
      <div className={css.actualImageBox}>
        {/*//! Галерея (блок зображень)*/}
        {images.map((img, i) => (
          <img
            key={i} //* також унікальний 
            src={img}
            alt={nameBrief}
            // className={css.actualImage}
            //! Якщо немає в наявності
            className={
              (images[0] === templateImage)
                ? `${css.actualImage} ${css.outOfStock}`
                : css.actualImage
            }
            // onClick={() => this.openLightbox(i)}
            onClick={
              (images[0] === templateImage)
                ? null
                : () => this.openLightbox(i)
            }
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
            counter={{
              container: {
                style: {
                  top: "6vh",
                  bottom: "unset",
                  left: "4vw",
                  fontSize: "1.25em",
                  fontWeight: 900,
                  color: "red",
                }
              }
            }}
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
  };
};
