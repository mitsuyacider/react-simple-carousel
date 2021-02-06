interface IndicatorDotProps {
  isSelected: boolean,
};

const IndicatorDot = ({ isSelected }: IndicatorDotProps) => {
  return (
    <li className="indicator__dot" role="dot" aria-selected={isSelected}></li>
  )
};

export default IndicatorDot;