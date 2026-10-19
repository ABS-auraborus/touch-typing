import {Link} from "react-router-dom";
import logo from "../img/logo.png";

interface LogoProps {
  className?: string;
}

const Logo = ({className}: LogoProps) => {
  return (
    <Link to="/" className={`size-18 ${className}`}>
      <img src={logo} alt="BlindTypeABS Logo" className="w-full" />
    </Link>
  );
};

export default Logo;
