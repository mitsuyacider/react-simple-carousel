import './Reset.css';
import './App.css';

import * as React from "react";
import Indicator from './components/Indicator';
import ArrowButton from './components/ArrowButton';
import CarouselContent from './components/CarouselContent';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  return (
    <>
      <div className="carousel-container">

        {/* NOTE: Carousel body */}
        <div className="carousel">
          <div className="carousel__inner">

            {/* NOTE: Carousel content */}
            <div className="content-wrap">
              <CarouselContent />
            </div>

          </div>
        </div>

        {/* NOTE: Indicator */}
        <Indicator numberOfDots={4} currentIndex={0} />

        {/* NOTE: Controller */}
        <ArrowButton direction="left" onClick={() => console.log('on click left')} />
        <ArrowButton direction="right" onClick={() => console.log('on click right')} />

      </div>
    </>
  );
}

export default App;
