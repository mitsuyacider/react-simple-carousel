interface IndicatorProps {
  numberOfDots: number,
  currentIndex: number,
};

const Indicator = ({ numberOfDots, currentIndex }: IndicatorProps) => {
  return (
    <ul className="indicator">
      <li className="indicator__dot" role="dot" aria-selected="true"></li>
      <li className="indicator__dot" role="dot" aria-selected="false"></li>
      <li className="indicator__dot" role="dot" aria-selected="false"></li>
      <li className="indicator__dot" role="dot" aria-selected="false"></li>
    </ul>
  )
};

export default Indicator;