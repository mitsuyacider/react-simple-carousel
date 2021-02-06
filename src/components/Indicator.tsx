import IndicatorDot from './IndicatorDot';

interface IndicatorProps {
  numberOfDots: number,
  currentIndex: number,
};

const Indicator = ({ numberOfDots, currentIndex }: IndicatorProps) => {

  // NOTE: If selected, highlight it.
  const isSelected = (index: number): boolean => index === currentIndex;

  // NOTE: Create dots by the numberOfDots
  const dotItems = [...Array(numberOfDots)].map((_: any, index: number) =>
    <IndicatorDot isSelected={isSelected(index)} key={index} />
  );

  return (
    <ul className="indicator">
      {dotItems}
    </ul>
  )
};

export default Indicator;