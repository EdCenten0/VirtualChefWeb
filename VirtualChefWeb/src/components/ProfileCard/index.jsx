import React from "react";
import "./index.css";

const ProfileCard = ({ nombre, descripcion, link, imgUrl, pattern }) => {
  return (
    <div className='hover:scale-110 transition-all'>
      <div className='card'>
        <div className='card__img'>
          <div className={`pattern${pattern}`}></div>
        </div>
        <div className='card__avatar'>
          <img
            className='rounded-full border border-black'
            src={imgUrl}
            alt={nombre}
          />
        </div>
        <div className='card__title text-center text-[1rem] p-2'>{nombre}</div>
        <div className='card__subtitle'>{descripcion}</div>
        <div className='card__wrapper'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={link}
            className='card__btn flex justify-center items-center gap-1 cursor-pointer'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
