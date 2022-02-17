import React, { Component } from 'react'
import ReactModal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import './ImageCarousalComponent.scss';
import Idem1 from "./../../images/Idem1.png"
import Idem2 from "./../../images/Idem2.png"
import Idem3 from "./../../images/Idem3.png"
import IdemMobile1 from "./../../images/idemMobile1.png"
import IdemMobile2 from "./../../images/idemMobile2.png"
import IdemMobile3 from "./../../images/idemMobile3.png"
import IdemMobile4 from "./../../images/idemMobile4.png"
import close from "./../../images/crossNav.svg"

const imagesWeb = [
    {
      original: Idem1,
    },
    {
      original: Idem2,
    },
    {
      original: Idem3
    },
  ];

  const imagesMobile = [
    {
      original: IdemMobile1,
    },
    {
      original: IdemMobile2,
    },
    {
      original: IdemMobile3
    },
    {
      original: IdemMobile4
    },
  ];

  const customStyles = {
    content: {
        background:"transparent",
        border:"none"
    },
    overlay: {
        backgroundColor: '#000000bf'
      }
  };

class ImageCarousalComponent extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
      
      render () {
         if(this.props.web){
            return(
             <div>
            <ReactModal 
            ariaHideApp={false}
            style={customStyles}
               isOpen={this.state.showModal}
               contentLabel="Minimal Modal Example"
            >
              <button className='closeButtonModal' onClick={this.handleCloseModal}><img src={close} alt="close" /></button>
              <ImageGallery items={imagesWeb} 
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showBullets={true}
              />
            </ReactModal>
          </div>
        )}
        else{
            return(
                <div>
               <ReactModal 
               ariaHideApp={false}
               style={customStyles}
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
               >
                 <button className='closeButtonModal' onClick={this.handleCloseModal}><img src={close} alt="close" /></button>
                 <ImageGallery items={imagesMobile} 
                 showThumbnails={false}
                 showPlayButton={false}
                 showFullscreenButton={false}
                 showBullets={true}
                 />
               </ReactModal>
             </div>
           )
        };
      }

}

export default ImageCarousalComponent