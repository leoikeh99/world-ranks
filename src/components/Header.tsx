import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="w-full h-40 xxs:h-52 xs:h-56 sm:h-80  top-0 left-0 bg-[url('/src/assets/hero-image-wr.jpg')] bg-cover bg-center grid place-items-center">
        <Link to="/" className="sm:-mt-6">
          <span className="sr-only">World ranks | Home page link</span>
          <img src={Logo} alt="World ranks logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
