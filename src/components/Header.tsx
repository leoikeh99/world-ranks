import Logo from "@/assets/Logo.svg?react";

const Header = () => {
  return (
    <header>
      <div className="w-full h-56 sm:h-80  top-0 left-0 bg-[url('/src/assets/hero-image-wr.jpg')] bg-cover bg-center grid place-items-center">
        <h1 className="sm:-mt-6">
          <span className="sr-only">World ranks</span>
          <Logo />
        </h1>
      </div>
    </header>
  );
};

export default Header;
