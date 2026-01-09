import { useState } from 'react';
import DotsImg from '../assets/Group-2 (1).png';
import DotsImg2 from '../assets/Group-2-Copy-2.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogCard {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  color: string;
  bgColor: string;
}

const Blogs = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const blogCards: BlogCard[] = [
    {
      id: 1,
      title: "How AI is Revolutionizing Document Management for Enterprises",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Technology",
      date: "24 July, 2023",
      color: "bg-blue-100",
      bgColor: "from-purple-200 via-pink-200 to-blue-200"
    },
    {
      id: 2,
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Development",
      date: "24 July, 2023",
      color: "bg-purple-100",
      bgColor: "from-purple-200 via-pink-200 to-blue-200"
    },
    {
      id: 3,
      title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Design",
      date: "24 July, 2023",
      color: "bg-cyan-100",
      bgColor: "from-purple-200 via-pink-200 to-blue-200"
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Architecture",
      date: "24 July, 2023",
      color: "bg-green-100",
      bgColor: "from-purple-200 via-pink-200 to-blue-200"
    },
    {
      id: 5,
      title: "Modern CSS Techniques",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Frontend",
      date: "24 July, 2023",
      color: "bg-orange-100",
      bgColor: "from-purple-200 via-pink-200 to-blue-200"
    }
  ];

  const nextSlide = async (): Promise<void> => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % blogCards.length);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsAnimating(false);
  };

  const prevSlide = async (): Promise<void> => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => prev === 0 ? blogCards.length - 1 : prev - 1);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsAnimating(false);
  };

  // Get the current three cards to display
  const getVisibleCards = (): BlogCard[] => {
    const cards: BlogCard[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % blogCards.length;
      cards.push(blogCards[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full mx-auto py-20 px-4 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-20 hidden lg:block opacity-40">
        <img 
          src={DotsImg} 
          alt="Decorative dots" 
          className="w-32 h-auto"
        />
      </div>
      
      <div className="absolute right-0 top-40 hidden lg:block opacity-40">
        <img 
          src={DotsImg2} 
          alt="Decorative dots" 
          className="w-32 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Blogs
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent inline-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent inline-block">Lorem Ipsum has been the industry's standard.</span>
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-stretch gap-6 mb-16 px-4">
          {visibleCards.map((card) => (
            <div 
              key={card.id} 
              className="relative flex-1 max-w-sm transition-all duration-300"
            >
              {/* Card Content */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 h-full">
                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-base font-bold mb-2 text-gray-900 leading-snug">
                    {card.title}
                  </h3>
                  
                  {/* Date */}
                  <p className="text-blue-400 text-sm mb-4">
                    {card.date}
                  </p>
                  
                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.excerpt}
                  </p>
                </div>
                
                {/* Gradient Bottom Section - Inside the card */}
                <div className="h-14 bg-gradient-to-r from-violet-100/60 via-pink-100/60 to-cyan-100/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6">
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="bg-[#3a70b6] p-3 rounded-xl hover:bg-[#2c5490] 
                     transition-all duration-300 disabled:opacity-50 
                     disabled:cursor-not-allowed shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="bg-[#3a70b6] p-3 rounded-xl hover:bg-[#2c5490] 
                     transition-all duration-300 disabled:opacity-50 
                     disabled:cursor-not-allowed shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;