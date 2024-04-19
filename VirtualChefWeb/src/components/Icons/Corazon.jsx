import React, { useState, useEffect } from "react";
import "./Corazon.css";
import { eliminarFavorito, findFavoritos, guardarFavorito } from "../../hooks/pocketBase/Favoritos";
import toast from "react-hot-toast";

function Corazon({ id_receta }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchFavoritos = async () => {
      const favoritoActive = await findFavoritos(user.id, id_receta);
      setActive(favoritoActive);
    };

    fetchFavoritos();
  }, [id_receta, user.id]);

  const handleClick = async () => {
    if (active) {
      await eliminarFavorito(user.id, id_receta);
      toast.error("Receta eliminada de Favoritos", {
        duration: 3000,
        position: "bottom-right",
        className: "bg-red-500 p-5 text-white font-bold",
      });
    } else {
      await guardarFavorito(user.id, id_receta);
      toast.success("Receta agregada a Favoritos", {
        duration: 3000,
        position: "bottom-right",
        className: "bg-[#246C2C] p-5 text-white font-bold",
      });
    }
    setActive(!active);
  };


  return (
    <label className="contenedor">
      <input
        type="checkbox"
        checked={active}
        onChange={handleClick} // Cambiamos onClick por onChange
      />
      <div className="checkmark">
        <svg viewBox="0 0 256 256">
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            stroke="#000"
            fill="#FFF"
            strokeWidth="3" /* Aumenta este valor para un borde más grueso */
          ></path>
        </svg>
      </div>
    </label>
  );
}

export default Corazon;
