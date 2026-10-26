import {Link} from "react-router-dom";

interface ButtonProps {
  children: string;
  to: string;
  width?: number;
  height?: number;
  className?: string;
}

const Button = ({
  children,
  to,
  width = 196,
  height = 64,
  className,
}: ButtonProps) => {
  return (
    <Link
      to={to}
      className={`text-xl text-white flex justify-center items-center bg-blue-accent ${className}`}
      style={{width, height}}
    >
      {children}
    </Link>
  );
};

export default Button;
