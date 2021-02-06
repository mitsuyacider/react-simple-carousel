interface IndicatorDotProps {
  isSelected: boolean,
  onClick: () => void
};

const IndicatorDot = ({ isSelected, onClick }: IndicatorDotProps) => {
  return (
    <li className="indicator__dot" onClick={onClick} role="dot" aria-selected={isSelected}></li>
  )
};

export default IndicatorDot;