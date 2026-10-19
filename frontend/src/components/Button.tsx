import {Link} from "react-router-dom";

interface ButtonProps {
  children: string;
  to: string;
  width?: number;
  height?: number;
}

const Button = ({children, to, width = 196, height = 64}: ButtonProps) => {
  return (
    <Link
      to={to}
      className={`text-xl text-black flex justify-center items-center bg-gray-main`}
      style={{width, height}}
    >
      {children}
    </Link>
  );
};

export default Button;
