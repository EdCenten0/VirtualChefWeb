import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav className="w-full flex items-center justify-around">
          <a href="#" className="hover:cursor-pointer hover:underline">Home</a>
          <a href="#" className="hover:cursor-pointer hover:underline">Favoritos</a>
          <img src={Logo} className="size-[100px]" />
          <a href="#" className="hover:cursor-pointer hover:underline">Recetas</a>
          <a href="#" className="hover:cursor-pointer hover:underline">Acerca de</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
