import React from 'react';
import pic from "../images/pic.jpg";
import "./gallery.css";
import logo from "../images/logo.png";
function Gallery() {
  return (
    <div>
      <div>
        <h1>Gallery</h1>
        <div className="section">
          <h3>College Name</h3>
          <div className="slider">
            <div className="slidetrack">
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Duplicate Set */}
      <div>
        <h1>Gallery</h1>
        <div className="section">
          <h3>College Name</h3>
          <div className="slider">
            <div className="slidetrack">
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
              <div className="slide">
                <img src={pic} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='colab'>
        <h1>Collaborations with colleges</h1>
        <div className="clgs">
          <img src={logo} alt="image" />
          <img src={logo} alt="image" />
          <img src={logo} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
