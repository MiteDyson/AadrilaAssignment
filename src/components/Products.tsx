import { useEffect, useRef, useState } from 'react';
import CircleImage from '../assets/Combined-Shape-Copy.png';
import CircleImage2 from '../assets/Combined-Shape-Copy (1).png';
import DotsImg from '../assets/Group-2 (1).png';
import DotsImg2 from '../assets/Group-2-Copy-2.png';
import p1Image from '../assets/Image [big-images-on-homepage].png';
import p2Image from '../assets/Image [big-images-on-homepage] (1).png';
import p3Image from '../assets/Image [big-images-on-homepage] (2).png';

interface ProductCardProps {
  title: string;
  subtitle: string;
  features: string[];
  benefits: string[];
  imageSrc: string;
  imagePosition: 'left' | 'right';
  delay?: number;
  index: number;
}

const ProductCard = ({ 
  title, 
  subtitle, 
  features, 
  benefits, 
  imageSrc, 
  imagePosition, 
  delay = 0,
  index 
}: ProductCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getImageAnimation = () => {
    if (!isVisible) {
      return imagePosition === 'left'
        ? 'translate-x-[-30px] opacity-0'
        : 'translate-x-[30px] opacity-0';
    }
    return 'translate-x-0 opacity-100';
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-7xl mx-auto relative ${index === 1 ? 'mt-0' : 'mt-30'}`}
    >
      {/* Main Content */}
      <div className='flex flex-col lg:flex-row items-center justify-between md:gap-12 relative z-10 mt-30'>
        
        {/* Image on Left */}
        {imagePosition === 'left' && (
          <div className="w-full lg:w-1/2 hidden lg:flex">
            <div className={`relative transition-all duration-1000 ease-out ${getImageAnimation()}`}>
              <img 
                src={imageSrc} 
                alt="product" 
                className='w-full max-w-md mx-auto lg:max-w-none rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`w-full lg:w-1/2 text-start ${imagePosition === 'left' ? '' : 'lg:ms-20'}`}>
          <div 
            className={`
              badge px-6 py-2 bg-gradient-to-r from-orange-600 to-blue-900 text-white rounded-full text-sm font-medium inline-block mb-6 tracking-widest
              transition-all duration-700 ease-out delay-${300 + delay}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            {title}
          </div>
          
          <h2 
            className={`
              text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight
              transition-all duration-700 ease-out delay-${500 + delay}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            {subtitle}
          </h2>
          
          <div className="space-y-4">
            {/* Features Section */}
            <div>
              <p 
                className={`
                  text-base font-bold text-gray-900 mb-2
                  transition-all duration-700 ease-out delay-${600 + delay}
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}
                `}
              >
                Features:
              </p>
              <ul className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-start"
                  >
                    <span 
                      className={`
                        text-gray-500 mr-2 flex-shrink-0
                        transition-all duration-500 ease-out
                        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                      `}
                      style={{ transitionDelay: `${700 + delay + (featureIndex * 150)}ms` }}
                    >
                      •
                    </span>
                    <p 
                      className={`
                        text-gray-500 text-sm
                        transition-all duration-700 ease-out
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-10px] opacity-0'}
                      `}
                      style={{ transitionDelay: `${700 + delay + (featureIndex * 150)}ms` }}
                    >
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Benefits Section */}
            <div>
              <p 
                className={`
                  text-base font-bold text-gray-900 mb-2
                  transition-all duration-700 ease-out delay-${800 + delay}
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}
                `}
              >
                Benefits:
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    className="flex items-start"
                  >
                    <span 
                      className={`
                        text-gray-500 mr-2 flex-shrink-0
                        transition-all duration-500 ease-out
                        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                      `}
                      style={{ transitionDelay: `${900 + delay + (benefitIndex * 150)}ms` }}
                    >
                      •
                    </span>
                    <p 
                      className={`
                        text-gray-500 text-sm
                        transition-all duration-700 ease-out
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-10px] opacity-0'}
                      `}
                      style={{ transitionDelay: `${900 + delay + (benefitIndex * 150)}ms` }}
                    >
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div 
            className={`
              flex flex-col sm:flex-row gap-4 mt-8
              transition-all duration-700 ease-out delay-${1100 + delay}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            <button className="px-8 py-3 bg-[#2563EB] text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95">
              Learn More
            </button>
            <button className="px-8 py-3 bg-[#2563EB] text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Image on Right */}
        {imagePosition === 'right' && (
          <div className='w-full lg:w-1/2 hidden lg:flex'>
            <div className={`relative transition-all duration-1000 ease-out ${getImageAnimation()}`}>
              <img 
                src={imageSrc} 
                alt="product" 
                className='w-full max-w-md mx-auto lg:max-w-none rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedBackgroundElement = ({ 
  src, 
  alt, 
  className = '',
  delay = 0,
  rotation = 0,
  position = 'absolute'
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotation?: number;
  position?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        ${position} transition-all duration-1500 ease-out
        ${className}
        ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90'}
      `}
      style={{ 
        transform: isVisible ? `rotate(${rotation}deg)` : `rotate(${rotation - 15}deg)`,
        transitionDelay: `${delay}ms`
      }}
    >
      <img src={src} alt={alt} className="object-contain w-full" />
    </div>
  );
};

const Products = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHeaderVisible(true);
    
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const productsData = [
    {
      title: 'DocSim',
      subtitle: 'AI-Powered Document Similarity Engine',
      features: [
        'Detects near-duplicates and tampered documents.',
        'Identifies fraudulent patterns across large repositories.',
        'Multi-language support for global adaptability.'
      ],
      benefits: [
        'Save 30% time on manual checks.',
        'Reduce document fraud by up to 40%.'
      ],
      imageSrc: p1Image,
      imagePosition: 'right' as const,
      circleImage: CircleImage,
      dotsImage: DotsImg2,
      circlePosition: 'right' as const,
      dotsPosition: 'left' as const
    },
    {
      title: 'DocPilot',
      subtitle: 'Streamline Document Workflows with Automation',
      features: [
        'Automates document collection, routing, and task assignments.',
        'Real-time tracking with advanced dashboards.',
        'Seamless integration with enterprise systems via APIs.'
      ],
      benefits: [
        'Reduce turnaround times by 50%.',
        'Improve operational efficiency with minimal manual effort.'
      ],
      imageSrc: p2Image,
      imagePosition: 'left' as const,
      circleImage: CircleImage2,
      dotsImage: DotsImg,
      circlePosition: 'left' as const,
      dotsPosition: 'right' as const
    },
    {
      title: 'Doxtract',
      subtitle: 'Extract, Validate, and Process Documents with Ease',
      features: [
        'OCR and NLP-based data extraction.',
        'Handles unstructured documents across industries.',
        'Validates fields using external data sources.'
      ],
      benefits: [
        'Process 10,000+ documents in minutes.',
        'Achieve 99% data accuracy with AI-driven validation.'
      ],
      imageSrc: p3Image,
      imagePosition: 'right' as const,
      circleImage: CircleImage,
      dotsImage: DotsImg2,
      circlePosition: 'right' as const,
      dotsPosition: 'left' as const
    }
  ];

  return (
    <div 
      ref={containerRef}
      className='p-4 md:p-10 relative min-h-screen lg:my-20 overflow-hidden'
    >
      <div className='w-full mx-auto relative'>
        {/* Header */}
        <div 
          className={`
            text-center mb-12 md:mb-16 relative z-10
            transition-all duration-1000 ease-out
            ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <span className='text-xl md:text-2xl bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent'>
            features and benefits.
          </span>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mt-2'>
            Our Products
          </h2>
        </div>

        {/* Product Cards */}
        {productsData.map((product, index) => (
          <div key={index} className="relative">
            {/* Background decorative elements */}
            <AnimatedBackgroundElement
              src={product.circleImage}
              alt="circle"
              delay={200 + (index * 300)}
              className={`lg:flex hidden ${product.circlePosition === 'right' ? 'right-0 top-0' : 'left-0 top-0'} lg:w-auto w-32 md:w-48`}
            />

            <AnimatedBackgroundElement
              src={product.dotsImage}
              alt="dots"
              delay={400 + (index * 300)}
              className={`top-0 ${product.dotsPosition === 'right' ? 'right-0' : 'left-0'} w-24 h-24 md:w-32 md:h-32`}
            />

            <ProductCard
              title={product.title}
              subtitle={product.subtitle}
              features={product.features}
              benefits={product.benefits}
              imageSrc={product.imageSrc}
              imagePosition={product.imagePosition}
              delay={index * 400}
              index={index}
            />

            {/* Mobile Image - Visible only on mobile */}
            <div className="lg:hidden mt-8">
              <div 
                className={`
                  relative transition-all duration-1000 ease-out
                  ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${300 + (index * 400)}ms` }}
              >
                <img 
                  src={product.imageSrc} 
                  alt="product" 
                  className='w-full max-w-md mx-auto rounded-xl shadow-lg'
                />
              </div>
            </div>
          </div>
        ))}

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className={`
              absolute -left-20 top-1/3 w-40 h-40 bg-blue-50 rounded-full blur-3xl
              transition-all duration-2000 ease-in-out
              ${isHeaderVisible ? 'opacity-20' : 'opacity-0'}
              animate-pulse
            `}
            style={{ animationDelay: '0.5s' }}
          />
          <div 
            className={`
              absolute -right-20 bottom-1/3 w-48 h-48 bg-blue-100 rounded-full blur-3xl
              transition-all duration-2000 ease-in-out
              ${isHeaderVisible ? 'opacity-20' : 'opacity-0'}
              animate-pulse
            `}
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;