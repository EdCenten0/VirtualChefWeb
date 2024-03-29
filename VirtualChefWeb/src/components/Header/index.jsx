import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav className='w-full flex items-center justify-around'>
          <NavLink to='/home' className='hover:cursor-pointer hover:underline'>
            Home
          </NavLink>
          <NavLink
            to='/favoritos'
            className='hover:cursor-pointer hover:underline'
          >
            Favoritos
          </NavLink>
          <NavLink to='/home' className='hover:cursor-pointer hover:underline'>
            <img src={Logo} className='size-[100px]' />
          </NavLink>
          <NavLink
            to='/recetas'
            className='hover:cursor-pointer hover:underline'
          >
            Recetas
          </NavLink>
          <NavLink to='/about' className='hover:cursor-pointer hover:underline'>
            Acerca de
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
