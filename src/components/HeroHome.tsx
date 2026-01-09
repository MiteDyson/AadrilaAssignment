import { useEffect, useRef, useState } from 'react';
import bg1 from '../assets/abstract-blue-background-with-dynamic-shape 1.png';
import docImage from '../assets/Doc.png';
import objectImage from '../assets/OBJECTS.png';
import invoiceImage from '../assets/Invocie.png';

interface CarouselImageProps {
  src: string;
  alt: string;
  position: 'left' | 'center' | 'right';
  isVisible: boolean;
  showScanAnimation: boolean;
}

const CarouselImage = ({ src, alt, position, isVisible, showScanAnimation }: CarouselImageProps) => {
  const getPositionStyles = () => {
    switch (position) {
      case 'left':
        return {
          transform: 'translateX(-120%) scale(0.75)',
          filter: 'blur(4px)',
          zIndex: 1,
        };
      case 'center':
        return {
          transform: 'translateX(0) scale(1)',
          filter: 'blur(0px)',
          zIndex: 3,
        };
      case 'right':
        return {
          transform: 'translateX(120%) scale(0.75)',
          filter: 'blur(4px)',
          zIndex: 1,
        };
    }
  };

  const positionStyles = getPositionStyles();

  return (
    <div
      className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        transition-all duration-700 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        ...positionStyles,
        width: position === 'center' ? '280px' : '180px',
      }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto shadow-2xl transition-all duration-500"
        />
        {/* Scan animation overlay - only on center image */}
        {position === 'center' && showScanAnimation && (
          <div
            className="absolute inset-0 pointer-events-none animate-scan-lines"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 4px,
                rgba(62, 111, 180, 0.3) 4px,
                rgba(62, 111, 180, 0.3) 5px
              )`,
              backgroundSize: '100% 100%',
            }}
          />
        )}
      </div>
    </div>
  );
};

const HeroHome = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScanAnimation, setShowScanAnimation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: docImage, alt: 'Document Processing' },
    { src: objectImage, alt: 'AI Objects' },
    { src: invoiceImage, alt: 'Invoice Processing' },
  ];

  // Get position for each image based on current index
  const getPosition = (imageIndex: number): 'left' | 'center' | 'right' => {
    const diff = (imageIndex - currentIndex + 3) % 3;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel with scan animation
  useEffect(() => {
    // Start first scan animation after a short delay
    const initialTimeout = setTimeout(() => {
      setShowScanAnimation(true);
      setTimeout(() => {
        setShowScanAnimation(false);
        setCurrentIndex((prev) => (prev + 1) % 3);
      }, 2000);
    }, 1000);

    const interval = setInterval(() => {
      // Start scan animation
      setShowScanAnimation(true);
      
      // After scan animation completes (2 seconds for down + up), switch images
      setTimeout(() => {
        setShowScanAnimation(false);
        setCurrentIndex((prev) => (prev + 1) % 3);
      }, 2000);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-50/30
          transition-opacity duration-1500 ease-out
          ${isContentVisible ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-0">
            
            {/* Text Section */}
            <div
              className={`
                w-full lg:w-1/2 text-center lg:text-left
                transition-all duration-1000 ease-out
                ${isContentVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span
                  className={`
                    bg-gradient-to-r from-orange-600 to-[rgba(149,104,107)] bg-clip-text text-transparent inline-block
                    transition-all duration-700 ease-out
                    ${isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                  `}
                  style={{ transitionDelay: '300ms' }}
                >
                  AI-Powered
                </span>
                <br />
                <span
                  className={`
                    text-gray-900
                    transition-all duration-700 ease-out
                    ${isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                  `}
                  style={{ transitionDelay: '500ms' }}
                >
                  Document Automation
                </span>
                <br />
                <span
                  className={`
                    text-gray-900
                    transition-all duration-700 ease-out
                    ${isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                  `}
                  style={{ transitionDelay: '600ms' }}
                >
                  & Fraud Detection
                </span>
              </h1>

              {/* Description */}
              <p
                className={`
                  text-gray-600 mt-8 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed
                  transition-all duration-700 ease-out
                  ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: '700ms' }}
              >
                Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
              </p>

              {/* CTA Buttons */}
              <div
                className={`
                  flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10
                  transition-all duration-700 ease-out
                  ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: '900ms' }}
              >
                <button
                  className="
                    px-10 py-4 bg-[#3e6fb4] text-white rounded-full 
                    font-semibold text-base
                    hover:bg-blue-700 transition-all duration-300 
                    hover:scale-105 hover:shadow-xl hover:-translate-y-1
                    active:scale-95 active:translate-y-0
                    shadow-lg shadow-blue-600/30
                  "
                >
                  Get a Demo
                </button>
                <button
                  className="
                    px-10 py-4 bg-[#3e6fb4] text-white rounded-full 
                    font-semibold text-base
                    hover:bg-blue-700 transition-all duration-300 
                    hover:scale-105 hover:shadow-xl hover:-translate-y-1
                    active:scale-95 active:translate-y-0
                    shadow-lg shadow-blue-600/30
                  "
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* Image Section - Desktop */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
              <div className="relative w-full h-96 flex items-center justify-center">
                {images.map((image, index) => (
                  <CarouselImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    position={getPosition(index)}
                    isVisible={isContentVisible}
                    showScanAnimation={showScanAnimation}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image Section */}
      <div
        className={`
          lg:hidden flex justify-center items-center pb-16 px-4
          transition-all duration-1000 ease-out
          ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="relative w-full h-64 max-w-sm mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${getPosition(index) === 'center' ? '-50%' : getPosition(index) === 'left' ? '-150%' : '50%'}) translateY(-50%) scale(${getPosition(index) === 'center' ? 1 : 0.7})`,
                filter: getPosition(index) === 'center' ? 'blur(0px)' : 'blur(3px)',
                opacity: getPosition(index) === 'center' ? 1 : 0.5,
                zIndex: getPosition(index) === 'center' ? 3 : 1,
                width: getPosition(index) === 'center' ? '140px' : '100px',
              }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto shadow-xl"
                />
                {/* Scan animation overlay - only on center image */}
                {getPosition(index) === 'center' && showScanAnimation && (
                  <div
                    className="absolute inset-0 pointer-events-none animate-scan-lines"
                    style={{
                      background: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 4px,
                        rgba(62, 111, 180, 0.3) 4px,
                        rgba(62, 111, 180, 0.3) 5px
                      )`,
                      backgroundSize: '100% 100%',
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default HeroHome;