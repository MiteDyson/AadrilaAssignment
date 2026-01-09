import { useEffect, useRef, useState } from 'react';
import CircleImage from '../assets/Combined-Shape-Copy (1).png';
import DotsImg from '../assets/Group-2 (1).png';
import DotsImg2 from '../assets/Group-2-Copy-2.png';

// Import your card images (replace with actual image imports)
import HealthcareImg from '../assets/Healthcare_Icon.png';
import LendingImg from '../assets/Lending_Icon.png';
import InsuranceImg from '../assets/Insurance_Icon.png';

interface CardProps {
  title: string;
  points: string[];
  delay?: number;
  position: 'healthcare' | 'lending' | 'insurance';
  imageSrc: string;
}

const IndustryCard = ({ title, points, delay = 0, position, imageSrc }: CardProps) => {
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

  // Different entrance animations based on position
  const getAnimationClass = () => {
    if (!isVisible) {
      switch (position) {
        case 'healthcare':
          return 'translate-x-[-20px] translate-y-[20px] opacity-0 scale-95';
        case 'lending':
          return 'translate-y-[30px] opacity-0 scale-95';
        case 'insurance':
          return 'translate-x-[20px] translate-y-[-20px] opacity-0 scale-95';
        default:
          return 'translate-y-10 opacity-0';
      }
    }
    
    switch (position) {
      case 'healthcare':
        return 'translate-x-0 translate-y-0 opacity-100 scale-100';
      case 'lending':
        return 'translate-y-0 opacity-100 scale-100';
      case 'insurance':
        return 'translate-x-0 translate-y-0 opacity-100 scale-100';
      default:
        return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl 
        transition-all duration-700 ease-out
        hover:-translate-y-1
        ${getAnimationClass()}
      `}
    >
      {/* Image Container - Centered */}
      <div className="flex justify-center mb-6">
        <div 
          className={`
            w-20 h-20 flex items-center justify-center
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <img 
            src={imageSrc} 
            alt={title}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
      
      {/* Title - Centered */}
      <h3 className="text-gray-900 text-2xl font-bold mb-4 text-center">{title}</h3>
      
      {/* Points - Centered */}
      <div>
        {points.map((point, index) => (
          <div key={index} className="flex items-start justify-center">
            <p 
              className={`
                text-gray-500 text-base text-center leading-relaxed
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
              `}
              style={{ transitionDelay: `${delay + (index + 1) * 150}ms` }}
            >
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedBackgroundElement = ({ 
  src, 
  alt, 
  className = '',
  delay = 0,
  rotation = 0 
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotation?: number;
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
        transition-all duration-1000 ease-out
        ${className}
        ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90'}
      `}
      style={{ 
        transform: isVisible ? `rotate(${rotation}deg)` : `rotate(${rotation - 10}deg)`,
        transitionDelay: `${delay}ms`
      }}
    >
      <img src={src} alt={alt} className="object-contain w-full" />
    </div>
  );
};

const SecondSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsContentVisible(true);
    
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const cardsData = {
    healthcare: {
      title: 'Healthcare',
      points: [
        'Streamline patient record management and ensure compliance with HIPAA standards.'
      ],
      image: HealthcareImg
    },
    lending: {
      title: 'Lending',
      points: [
        'Ensure faster loan approvals with fraud detection and instant verification.'
      ],
      image: LendingImg
    },
    insurance: {
      title: 'Insurance',
      points: [
        'Automate claims processing with accurate document validation.'
      ],
      image: InsuranceImg
    }
  };

  return (
    <section 
      id="about"
      ref={containerRef}
      className='py-16 md:py-20 lg:py-24 px-4 md:px-10 relative flex items-center min-h-screen overflow-hidden bg-gray-50'
    >
      <div className='w-full max-w-7xl mx-auto'>
        {/* Animated Background Elements */}
        <AnimatedBackgroundElement
          src={CircleImage}
          alt="circle"
          delay={200}
          rotation={5}
          className="absolute left-40 top-0 z-0 lg:w-auto w-48 md:w-64"
        />
        
        <AnimatedBackgroundElement
          src={DotsImg}
          alt="dots1"
          delay={400}
          className="absolute top-16 right-28 w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 z-0 hidden md:block"
        />
        
        <AnimatedBackgroundElement
          src={DotsImg2}
          alt="dots2"
          delay={600}
          className="absolute bottom-20 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-0 hidden md:block"
        />

        {/* Header section with animation */}
        <div 
          className={`
            relative z-10 mb-16 lg:mb-20 text-center lg:text-left max-w-2xl lg:max-w-none
            transition-all duration-1000 ease-out
            ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <h2 
            className={`
              text-lg md:text-xl bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent inline-block mb-2
              transition-all duration-700 ease-out delay-300
              ${isContentVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}
            `}
          >
            AI-driven innovation for growth.
          </h2>
          <h1 
            className={`
              text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight font-bold
              transition-all duration-700 ease-out delay-500
              ${isContentVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}
            `}
          >
            Industries We Empower
          </h1>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-[500px] w-full max-w-6xl mx-auto relative">
          {/* Insurance Card - Bottom Left */}
          <div className="absolute left-0 bottom-0 w-[300px]">
            <IndustryCard
              position="insurance"
              title={cardsData.insurance.title}
              points={cardsData.insurance.points}
              imageSrc={cardsData.insurance.image}
              delay={300}
            />
          </div>
          
          {/* Lending Card - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-[300px]">
            <IndustryCard
              position="lending"
              title={cardsData.lending.title}
              points={cardsData.lending.points}
              imageSrc={cardsData.lending.image}
              delay={500}
            />
          </div>

          {/* Healthcare Card - Top Right */}
          <div className="absolute right-0 top-0 w-[300px]">
            <IndustryCard
              position="healthcare"
              title={cardsData.healthcare.title}
              points={cardsData.healthcare.points}
              imageSrc={cardsData.healthcare.image}
              delay={700}
            />
          </div>
        </div>
        
        {/* Medium Screens (md: to lg) */}
        <div className="hidden md:flex lg:hidden h-[400px] w-full max-w-4xl mx-auto relative">
          {/* Insurance Card - Bottom Left */}
          <div className="absolute left-4 bottom-10 w-[260px]">
            <IndustryCard
              position="insurance"
              title={cardsData.insurance.title}
              points={cardsData.insurance.points}
              imageSrc={cardsData.insurance.image}
              delay={300}
            />
          </div>
          
          {/* Lending Card - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-[260px]">
            <IndustryCard
              position="lending"
              title={cardsData.lending.title}
              points={cardsData.lending.points}
              imageSrc={cardsData.lending.image}
              delay={400}
            />
          </div>
          
          {/* Healthcare Card - Top Right */}
          <div className="absolute right-4 top-0 w-[260px]">
            <IndustryCard
              position="healthcare"
              title={cardsData.healthcare.title}
              points={cardsData.healthcare.points}
              imageSrc={cardsData.healthcare.image}
              delay={500}
            />
          </div>
        </div>
        
        {/* Mobile Layout (Stacked) with staggered animation */}
        <div className="md:hidden space-y-6 mt-8 relative z-10 max-w-2xl mx-auto">
          {[cardsData.healthcare, cardsData.lending, cardsData.insurance].map((data, index) => (
            <div
              key={data.title}
              className={`
                transition-all duration-700 ease-out
                ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${300 + (index * 200)}ms` }}
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Container - Centered */}
                <div className="flex justify-center mb-4">
                  <div 
                    className={`
                      w-16 h-16 flex items-center justify-center
                      transition-all duration-500 ease-out
                      ${isContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                    `}
                    style={{ transitionDelay: `${300 + (index * 200)}ms` }}
                  >
                    <img 
                      src={data.image} 
                      alt={data.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                
                {/* Title - Centered */}
                <h3 className="text-gray-900 text-xl font-bold mb-3 text-center">{data.title}</h3>
                
                {/* Points - Centered */}
                <div>
                  {data.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start justify-center">
                      <p 
                        className={`
                          text-gray-500 text-sm text-center leading-relaxed
                          transition-all duration-500 ease-out
                          ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                        `}
                        style={{ transitionDelay: `${300 + (index * 200) + (pointIndex + 1) * 150}ms` }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional floating animation for decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className={`
              absolute -left-10 top-1/4 w-32 h-32 bg-blue-100 rounded-full blur-3xl
              transition-all duration-2000 ease-in-out
              ${isContentVisible ? 'opacity-30' : 'opacity-0'}
              animate-pulse
            `}
            style={{ animationDelay: '1s' }}
          />
          <div 
            className={`
              absolute -right-10 bottom-1/4 w-40 h-40 bg-blue-50 rounded-full blur-3xl
              transition-all duration-2000 ease-in-out
              ${isContentVisible ? 'opacity-30' : 'opacity-0'}
              animate-pulse
            `}
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;