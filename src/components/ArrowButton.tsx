interface IArrowProps {
  onClick: () => void,
  direction?: string
};

const ArrowButton = ({ onClick, direction = "left" }: IArrowProps) => {
  // NOTE: Additional class
  const iconClass = `arrow__icon--${direction}`;
  const arrowClass = `arrow--${direction}`;

  return (
    <div className={`arrow ${arrowClass}`}>
      <button onClick={onClick}>
        <i className={`arrow__icon ${iconClass}`}></i>
      </button>
    </div>
  );
};

export default ArrowButton;