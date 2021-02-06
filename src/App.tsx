import './Reset.css';
import './App.css';

import * as React from "react";
import Indicator from './components/Indicator';
import ArrowButton from './components/ArrowButton';
import CarouselContent from './components/CarouselContent';


function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const activeSlide = [...Array(5)].map((_: any, index: number) => (
    //NOTE: Carousel content
    < div className="content-wrap" key={index}>
      <CarouselContent />
    </div >
  ));

  return (
    <>
      <div className="carousel-container">

        {/* NOTE: Carousel body */}
        <div className="carousel">
          <div className="carousel__inner">
            {activeSlide}
          </div>
        </div>

        {/* NOTE: Indicator */}
        <Indicator numberOfDots={activeSlide.length} currentIndex={currentSlideIndex} />

        {/* NOTE: Controller */}
        <ArrowButton direction="left" onClick={() => console.log('on click left')} />
        <ArrowButton direction="right" onClick={() => console.log('on click right')} />

      </div>
    </>
  );
}

export default App;
