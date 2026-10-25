import {Link} from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({className}: LogoProps) => {
  return (
    <Link to="/" className={`size-18 ${className}`}>
      <img src="/img/logo.png" alt="BlindTypeABS Logo" className="w-full" />
    </Link>
  );
};

export default Logo;
