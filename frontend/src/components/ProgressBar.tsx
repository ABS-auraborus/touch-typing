interface ProgressBarProps {
  className?: string;
  completion: number;
}

const ProgressBar = ({className = "", completion}: ProgressBarProps) => {
  const widthStyle = `${completion * 100}%`;
  return (
    <div
      className={`relative w-full h-5 [&_span]:h-full [&_span]:absolute [&_span]:border-2 [&_span]:border-black`}
    >
      <span
        className={`z-1 block bg-cyan-accent ${className}`}
        style={{width: widthStyle}}
      ></span>
      <span className="block w-full bg-gray-3"></span>
    </div>
  );
};

export default ProgressBar;
