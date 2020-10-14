import React , { useState } from "react";
import './gallery.css';
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [darkmode,setDarkmode] = useState(false);
  return (

    <div className={darkmode ? "galleryHome darkmode" : "galleryHome" }>
  
    <Title darkmode={darkmode} setDarkmode={setDarkmode}/>
    <UploadForm />
    <ImageGrid setSelectedImg={setSelectedImg} />
    { selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    )}
  </div>
  );
}

export default Gallery;
