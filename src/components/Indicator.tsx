import IndicatorDot from './IndicatorDot';

interface IndicatorProps {
  numberOfDots: number,
  currentIndex: number,
  onSelectedDot: (index: number) => void
};

const Indicator = ({ numberOfDots, currentIndex, onSelectedDot }: IndicatorProps) => {

  // NOTE: Notify which dot item is selected.
  const callback = (index: number) => (): void => onSelectedDot(index);

  // NOTE: If selected, highlight it.
  const isSelected = (index: number): boolean => index === currentIndex;

  // NOTE: Create dots by the numberOfDots
  const dotItems = [...Array(numberOfDots)].map((_: any, index: number) =>
    <IndicatorDot onClick={callback(index)} isSelected={isSelected(index)} key={index} />
  );

  return (
    <ul className="indicator">
      {dotItems}
    </ul>
  )
};

export default Indicator;