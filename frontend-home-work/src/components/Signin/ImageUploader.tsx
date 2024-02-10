import './ImageUpLoader.css'
import './SigninStyle.css'
import React, { useState } from 'react';

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);


  // Function to handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  // Function to trigger file input click
  const handleIconClick = () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  // Function to handle image removal
  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className='-select-img'>
      <input type="file" accept="image/*" id="file-input" style={{ display: 'none' }} onChange={handleImageUpload} />
      <div className='-img-file'>
        {image ? (
          <div className={`image-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img id='-beforhover' src={image} alt="Uploaded" onClick={() => alert('View Image')} role="button" />
            {isHovered && (
              <div className="overlay">
                <div className="icon" onClick={() => alert('View Image')}>🖼️</div>
                <div className="icon" onClick={handleRemoveImage}>🗑️</div>
              </div>
            )}
          </div>
        ) : (
          <div className="placeholder-container" onClick={() => document.getElementById('file-input')?.click()}>
            <img src="placeholder-image-url" alt="Placeholder" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;