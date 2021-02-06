import './Reset.css';
import './App.css';

import * as React from "react";
import Indicator from './components/Indicator';
import ArrowButton from './components/ArrowButton';
import CarouselContent from './components/CarouselContent';

// NOTE: Set how many slides a carousel contains.
const SLIDE_NUM: number = 5;

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  // NOTE: Use this value for fade in/out animation.
  const slideOpacity = (index: number): number => currentSlideIndex === index ? 1 : 0

  // NOTE: Create carousel content list
  const activeSlide = [...Array(SLIDE_NUM)].map((_: any, index: number) => (
    < div className="content-wrap" key={index} style={{ opacity: slideOpacity(index) }}>
      <CarouselContent />
    </div >
  ));

  const totalSlide: number = activeSlide.length;

  const nextSlide = () => {
    const next: number = (currentSlideIndex - 1 + totalSlide) % totalSlide;
    moveSlide(next);
  }

  const prevSlide = () => {
    const prev: number = (currentSlideIndex + 1) % totalSlide;
    moveSlide(prev);
  }

  // NOTE: Move slides to a selected slide.
  const moveSlide = (index: number) => setCurrentSlideIndex(index);

  // NOTE: Apply a value for translation towards a selected slide.
  const translateX = { transform: `translateX(-${currentSlideIndex * 100}vw)` };

  return (
    <>
      <div className="carousel-container" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")` }}>

        {/* NOTE: Carousel body */}
        <div className="carousel">
          <div className="carousel__inner" style={{ ...translateX }}>
            {activeSlide}
          </div>
        </div>

        {/* NOTE: Indicator */}
        <Indicator onSelectedDot={moveSlide} numberOfDots={totalSlide} currentIndex={currentSlideIndex} />

        {/* NOTE: Controller */}
        <ArrowButton direction="left" onClick={nextSlide} />
        <ArrowButton direction="right" onClick={prevSlide} />

      </div>
    </>
  );
}

export default App;
