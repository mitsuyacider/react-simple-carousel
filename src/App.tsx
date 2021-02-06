import './Reset.css';
import './App.css';

import * as React from "react";
import Indicator from './components/Indicator';
import ArrowButton from './components/ArrowButton';
import CarouselContent from './components/CarouselContent';


function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const activeSlide = [...Array(5)].map((_: any, index: number) => (
    // NOTE: Carousel content
    < div className="content-wrap" key={index}>
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
      <div className="carousel-container">

        {/* NOTE: Carousel body */}
        <div className="carousel">
          <div className="carousel__inner" style={{ ...translateX }}>
            {activeSlide}
          </div>
        </div>

        {/* NOTE: Indicator */}
        <Indicator numberOfDots={totalSlide} currentIndex={currentSlideIndex} />

        {/* NOTE: Controller */}
        <ArrowButton direction="left" onClick={nextSlide} />
        <ArrowButton direction="right" onClick={prevSlide} />

      </div>
    </>
  );
}

export default App;
