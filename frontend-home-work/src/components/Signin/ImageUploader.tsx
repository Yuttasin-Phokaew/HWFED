import './SigninStyle.css'
import React, { useState  } from 'react';

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Function to handle viewing the image in modal
  const handleViewImage = () => {
    setIsModalOpen(true);
  };

  // Function to close the image modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='-select-img'>
      <input type="file" accept="image/*" id="file-input" style={{ display: 'none' }} onChange={handleImageUpload} />
      <div className='-img-file'>
        {image ? (
          <div className={`image-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img id='-beforhover' src={image} alt="Uploaded" onClick={handleViewImage} role="button" />
            {isHovered && (
              <div className="overlay">
                <div className="icon" onClick={handleViewImage} >🖼️</div>
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

          {isModalOpen && (
        <div className="-modal" id='modal'>
          <div className='-modal-box'>




            <span className="-close" onClick={handleCloseModal}>&times;</span>
            <img src={image} id='modalimage' alt="Viewed" className="-modal-image"/>

          </div>

        </div>
      )}

    </div>

    
    
  );
};

export default ImageUploader;
