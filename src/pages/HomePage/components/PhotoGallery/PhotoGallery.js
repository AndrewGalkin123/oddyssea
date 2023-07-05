import React from 'react';
import "./PhotoGallery.css"
import RedirectButton from "../../../../components/RedirectButton/RedirectButton"
import descentCoast from "../../../../assets/photoGalleryImages/descent-coast.jpg"


const PhotoGallery = () => {
  return (
    <div style={{ justifyContent: 'center' }} id="photoGallery">
      <div>
        <br />
        <div className="title">
          <hr />
          <span>Фотогалерея</span>
        </div>
        <br />
        <br />
        <br />
        <div className="photo-gallery">
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-1">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>

          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-1">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-1">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>

          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-1">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>

          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-1">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
         
        </div>

        <p style={{ textAlign: "center" }}>
          <RedirectButton to="/photogallery">Смотреть все фото (10)</RedirectButton>
        </p>

      </div>
    </div>
  )
}

export default PhotoGallery;