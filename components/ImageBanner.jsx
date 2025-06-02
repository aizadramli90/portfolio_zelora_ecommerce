"use client";

import { useState, useRef, useEffect } from "react";

// useRef to keep track of particular elements and then we can look at its status :is the image is completely loaded?
// declare a variable imgRef and set it to useRef()
// inside the image tag, we will set the ref attribute to imgRef.
// the probem is the browser will cache the image and it will not trigger the onload event
// set the opacity dynamically if the image is loaded or not.

function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="banner-images">
      {/* 
      load the lower quality image first
      then load the higher quality image after finish loading replacing the lower quality image
       */}
      <img
        className="low-res-img"
        src="low_res/banner.jpeg"
        alt="banner-low-res"
      />

      <img
        ref={imgRef}
        className="high-res-img"
        src="med_res/banner.png"
        alt="banner-high-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          // when the high-res image is completely loaded, this function will be executed and the intention is to take this initally invisible image and make it visible
          setIsLoaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h2>Zelora Store</h2>
          </div>
          <div>
            <button>Buy Sticker</button>
            <button>Buy Planner</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
