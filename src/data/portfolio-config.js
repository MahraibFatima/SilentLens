// src/data/portfolio-images.js
export const portfolioConfig = {
  totalImages: 76,
  basePath: '../assets/img/',
  imageExtension: '.jpg',
  animations: {
    duration: 6, // seconds
    maxXOffset: 4, // vw
    maxYOffset: 4, // vh
    delayIncrement: 0.1 // seconds
  }
};

// Generate image data programmatically
export const generateImageData = () => {
  return Array.from({ length: portfolioConfig.totalImages }, (_, i) => {
    const imageNumber = i + 1;
    return {
      id: imageNumber,
      src: `${portfolioConfig.basePath}${imageNumber}${portfolioConfig.imageExtension}`,
      alt: `Portfolio image ${imageNumber}`,
      animation: {
        delay: (i * portfolioConfig.animations.delayIncrement) + Math.random(),
        xOffset: (Math.random() - 0.5) * portfolioConfig.animations.maxXOffset * 2,
        yOffset: (Math.random() - 0.5) * portfolioConfig.animations.maxYOffset * 2
      }
    };
  });
};