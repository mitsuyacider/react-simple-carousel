import './Reset.css';
import './App.css';

import Indicator from './components/Indicator';


function App() {
  return (
    <>
      <div className="carousel-container">

        {/* NOTE: Carousel body */}
        <div className="carousel">
          <div className="carousel__inner">

            {/* NOTE: Carousel content */}
            <div className="content-wrap">
              <div className="carousel__content">
                <div className="carousel__content__info info">
                  <h1 className="info__title">Title</h1>
                  <p className="info__description">This is a simple carousel. This is a simple carousel. This is a simple carousel. This is a simple carousel.</p>
                </div>
                <img src="https://via.placeholder.com/400/000000/ffffff" alt="slide content" />
              </div>
            </div>

          </div>
        </div>

        {/* NOTE: Indicator */}
        <Indicator numberOfDots={4} currentIndex={0} />

        {/* NOTE: Controller */}
        <div className="arrow arrow--left">
          <button><i className="arrow__icon arrow__icon--left"></i></button>
        </div>
        <div className="arrow arrow--right">
          <button><i className="arrow__icon arrow__icon--right"></i></button>
        </div>
      </div>
    </>
  );
}

export default App;
