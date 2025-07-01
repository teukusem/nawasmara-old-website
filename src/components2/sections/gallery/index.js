import { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

const GallerySection = ({ data, previewMode, onOpenQRCode, showVideo = true }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2
  };

  const galleryImages = data?.gallery?.images?.length > 0 ? data.gallery.images : [];

  const openLightbox = (imageSrc) => {
    const index = galleryImages.findIndex(img => img === imageSrc);
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex, galleryImages.length]);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  const handleKeyPress = useCallback((event) => {
    if (selectedImageIndex === null) return;
    
    switch (event.key) {
      case 'ArrowRight':
        goToNext();
        break;
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'Escape':
        closeLightbox();
        break;
    }
  }, [selectedImageIndex, goToNext, goToPrevious, closeLightbox]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Get random height for masonry effect
  const getRandomHeight = (index) => {
    const heights = previewMode === 'mobile' 
      ? ['h-32', 'h-40', 'h-48', 'h-56'] 
      : ['h-48', 'h-56', 'h-64', 'h-72', 'h-80', 'h-96'];
    const seed = (index * 37) % heights.length;
    return heights[seed];
  };

  // Keyboard listeners and body scroll lock
  useEffect(() => {
    if (selectedImageIndex !== null) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyPress);
      
      return () => {
        // Restore body scrolling when modal closes
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [selectedImageIndex, handleKeyPress]);

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  return (
    <div className="px-4 text-center">
      <h2 
        className={previewMode === 'mobile' ? "mb-6 text-xl font-bold" : "mb-8 text-2xl font-bold sm:text-3xl lg:text-4xl sm:mb-12"} 
        style={{ color: '#507554' }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Our Gallery
      </h2>
      
      {/* Masonry Gallery using react-masonry-css */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer mb-4 ${getRandomHeight(index)}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openLightbox(image)}
              style={{ position: 'relative' }}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 500px) 50vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 rounded-lg shadow-lg group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x600/cccccc/666666?text=Image+Not+Found';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-20">
                <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal - Nature Embrace Style */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-80 sm:p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-sm max-h-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute z-10 flex items-center justify-center w-8 h-8 text-xl font-bold text-white bg-black bg-opacity-50 rounded-full top-2 right-2 sm:top-4 sm:right-4 sm:text-2xl hover:text-gray-300 sm:w-10 sm:h-10"
            >
              ×
            </button>

            {/* Previous button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute z-10 flex items-center justify-center w-8 h-8 text-xl font-bold text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-2 top-1/2 sm:text-2xl hover:text-gray-300 sm:w-10 sm:h-10"
              >
                ‹
              </button>
            )}

            {/* Next button */}
            {selectedImageIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute z-10 flex items-center justify-center w-8 h-8 text-xl font-bold text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-2 top-1/2 sm:text-2xl hover:text-gray-300 sm:w-10 sm:h-10"
              >
                ›
              </button>
            )}

            {/* Image counter */}
            <div className="absolute px-3 py-1 text-sm text-white transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full bottom-2 left-1/2">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>

            <img 
              src={galleryImages[selectedImageIndex]} 
              alt="Gallery image fullsize"
              className="object-contain w-full h-auto max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;