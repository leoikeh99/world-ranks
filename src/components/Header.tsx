import Logo from "@/assets/Logo.svg?react";

const Header = () => {
  return (
    <header>
      <div className="w-full h-80  top-0 left-0 bg-[url('/src/assets/hero-image-wr.jpg')] bg-cover bg-center grid place-items-center">
        <p className="-mt-6">
          <span className="sr-only">World ranks</span>
          <Logo />
        </p>
      </div>
    </header>
  );
};

export default Header;
