import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const images = [
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/asphalt-striping.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/pressure-washing.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/repair-main.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/striping-surface.jpg',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-animation.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-cleaning.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-product-close.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute-product.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/trash-chute.png',
    'https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/window-cleaning.jpg'
  ];

  // Log the original images array with indices
  console.log('Original images array:');
  images.forEach((img, index) => {
    console.log(`Index ${index}: ${img}`);
  });

  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffled = shuffleArray(images);
    console.log('Shuffled images array:');
    shuffled.forEach((img, index) => {
      console.log(`Shuffled Index ${index}: ${img}`);
    });
    setShuffledImages(shuffled);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const totalScreens = Math.ceil(shuffledImages.length / 2);
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % totalScreens);
    }, 4000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  const goToPrevious = () => {
    const totalScreens = Math.ceil(shuffledImages.length / 2);
    setCurrentScreen((prev) => (prev - 1 + totalScreens) % totalScreens);
  };

  const goToNext = () => {
    const totalScreens = Math.ceil(shuffledImages.length / 2);
    setCurrentScreen((prev) => (prev + 1) % totalScreens);
  };

  const handleImageError = (imageUrl: string) => {
    console.error('Failed to load image:', imageUrl);
    setImageLoadErrors(prev => new Set([...prev, imageUrl]));
  };

  const handleImageLoad = (imageUrl: string) => {
    console.log('Successfully loaded image:', imageUrl);
  };

  if (shuffledImages.length === 0) {
    return <div className="h-80 bg-gray-100 animate-pulse rounded-xl mx-20"></div>;
  }

  // Calculate which images to show
  const leftImageIndex = currentScreen * 2;
  const rightImageIndex = currentScreen * 2 + 1;
  
  const leftImage = shuffledImages[leftImageIndex];
  const rightImage = rightImageIndex < shuffledImages.length ? shuffledImages[rightImageIndex] : shuffledImages[0];
  
  console.log(`=== SCREEN ${currentScreen + 1} ===`);
  console.log(`Left image index ${leftImageIndex}:`, leftImage);
  console.log(`Right image index ${rightImageIndex}:`, rightImage);

  const totalScreens = Math.ceil(shuffledImages.length / 2);

  return (
    <div className="relative mx-20 mb-16">
      <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
        {/* Side by Side Images */}
        <div className="flex h-full">
          {/* Left Image */}
          <div className="w-1/2 h-full border-r border-gray-200 bg-gray-50 flex items-center justify-center">
            {leftImage ? (
              <img
                key={`left-${currentScreen}-${leftImage}`}
                src={leftImage}
                alt="APS Service - Left"
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(leftImage)}
                onError={() => handleImageError(leftImage)}
              />
            ) : (
              <div className="text-gray-400">No Image</div>
            )}
          </div>
          
          {/* Right Image */}
          <div className="w-1/2 h-full bg-gray-50 flex items-center justify-center">
            {rightImage ? (
              <img
                key={`right-${currentScreen}-${rightImage}`}
                src={rightImage}
                alt="APS Service - Right"
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(rightImage)}
                onError={() => handleImageError(rightImage)}
              />
            ) : (
              <div className="text-gray-400">No Image</div>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentScreen + 1} / {totalScreens}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;