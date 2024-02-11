import React, { useEffect, useRef } from 'react';

const YourComponent: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const modalImgRef = useRef<HTMLImageElement>(null);
  const captionTextRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const img = imgRef.current;
    const modalImg = modalImgRef.current;
    const captionText = captionTextRef.current;
    const span = spanRef.current;

    if (img && modal && modalImg && captionText && span) {
      img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      };

      span.onclick = () => {
        modal.style.display = "none";
      };
    }
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      {/* Your image */}
      <img
        id="myImg"
        src="your-image-source.jpg"
        alt="Your Image"
        ref={imgRef}
      />

      {/* Your modal */}
      <div className="modal" ref={modalRef}>
        <span className="close" ref={spanRef}>&times;</span>
        <img
          id="img01"
          alt="Modal Image"
          ref={modalImgRef}
        />
        <div id="caption" ref={captionTextRef}></div>
      </div>
    </div>
  );
};

export default YourComponent;
