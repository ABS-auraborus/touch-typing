interface SkeletonProps {
  className: string;
}

const Skeleton = ({className}: SkeletonProps) => {
  return <div className={`animate-pulse ${className}`}></div>;
};

export default Skeleton;
